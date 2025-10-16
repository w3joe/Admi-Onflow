import { createClient, PostgrestResponse } from "@supabase/supabase-js";

// Define the shape of your "events" table
export interface Event {
  id: number;
  created_at: Date;
  // Add other fields as needed
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchEvents(): Promise<Event[]> {
  const response: PostgrestResponse<Event> = await supabase
    .from("events")
    .select("*");
  if (response.error) {
    console.error("Error fetching events:", response.error);
    return [];
  }
  return response.data ?? [];
}