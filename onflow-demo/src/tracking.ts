import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project details
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("Tracking script loaded");

// Constants
const SESSION_FLAG = "onflow_session_created";
const SESSION_ID_KEY = "onflow_session_id";

// Create or reuse a session
async function createSession() {
  if (!localStorage.getItem(SESSION_FLAG)) {
    const sessionId = crypto.randomUUID();
    const { error } = await supabase.from("sessions").insert([
      {
        session_id: sessionId,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Session creation error:", error);
      return;
    }

    localStorage.setItem(SESSION_FLAG, "true");
    localStorage.setItem(SESSION_ID_KEY, sessionId);
  }
}

// Track clicks per step (URL)
let clickCount = 0;
let currentStep = window.location.pathname;

// Count clicks on the current page
document.addEventListener("click", () => {
  clickCount++;
});

// Function to send click data via Supabase (normal async)
async function sendClickData(step, count) {
  if (count === 0) return;
  const { error } = await supabase.from("clicks").insert([
    {
      session_id: localStorage.getItem(SESSION_ID_KEY),
      step,
      count,
      timestamp: new Date().toISOString(),
    },
  ]);
  if (error) console.error("Error saving click data:", error);
  else console.log(`✅ Sent ${count} clicks for step: ${step}`);
}

// Fallback send using navigator.sendBeacon (for page close)
function sendClickDataBeacon(step, count) {
  if (count === 0) return;
  const url = `${supabaseUrl}/rest/v1/clicks`;
  const payload = JSON.stringify([
    {
      session_id: localStorage.getItem(SESSION_ID_KEY),
      step,
      count,
      timestamp: new Date().toISOString(),
    },
  ]);
  const headers = {
    "Content-Type": "application/json",
    apikey: supabaseAnonKey,
    Prefer: "return=minimal",
  };
  const blob = new Blob([payload], { type: "application/json" });
  navigator.sendBeacon(
    url + "?" + new URLSearchParams(headers).toString(),
    blob
  );
}

// Detect URL changes (SPA-safe)
let lastUrl = window.location.href;
const observer = new MutationObserver(() => {
  const url = window.location.href;
  if (url !== lastUrl) {
    // URL changed → push data for the previous step
    sendClickData(currentStep, clickCount);
    clickCount = 0;
    currentStep = window.location.pathname;
    lastUrl = url;
  }
});
observer.observe(document, { subtree: true, childList: true });

// Flush periodically (safety)
setInterval(() => {
  if (clickCount > 0) {
    sendClickData(currentStep, clickCount);
    clickCount = 0;
  }
}, 5000);

// Final flush when user leaves (reliable)
window.addEventListener("pagehide", () => {
  sendClickDataBeacon(currentStep, clickCount);
});

createSession();
