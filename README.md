# 🚀 Onflow — Adaptive Onboarding for SaaS Growth

**Onflow** is a plug-and-play SDK that helps SaaS teams understand and optimize their user onboarding experience in real time.  
It analyzes user behaviour, predicts intent, and dynamically adjusts onboarding flows to guide users toward activation — faster.

---

##🧍 Team Members

| Name | Role | Responsibilities |
|------|------|-----------------|
| [@shashankdurgad](https://github.com/shashankdurgad) | Frontend | Lovable, Vite |
| [@lucasucal]([https://github.com/lucasucal)  | Frontend | Lovable, Vite |
| [@w3joe]([https://github.com/w3joe) | Backend | Supabase |

---

## 🧩 Problem

SaaS product owners struggle to keep new users engaged after signup.  
Static, one-size-fits-all onboarding flows cause drop-offs before users reach value.  
Teams lack visibility into **where** users get stuck and **why** they leave.

---

## 💡 Solution

Onflow observes real-time user behaviour (clicks, hovers, and navigation) through a lightweight SDK.  
Using an AI journey map, it:
- Predicts the user’s intent and current goal  
- Adapts tooltips, guides, and emails dynamically  
- Recommends improvements to increase activation and reduce churn  

---

## 📊 Core Metrics

Onflow tracks key behavioural signals for every onboarding flow:

| Metric | Description |
|--------|--------------|
| **Clicks per Minute** | Measures engagement speed |
| **Completion Ratio** | % of users who finish the flow |
| **Hover-to-Click Ratio** | Detects hesitation or friction |
| **Early Exit Step** | Identifies where most users drop off |
| **Step Duration** | Average time spent per step |

---

## 📈 Dashboard

The dashboard visualizes actionable insights using Supabase and Recharts:

- 🕒 Clicks per Minute — Line Chart  
- 🎯 Completion Ratio — Donut Chart  
- 🧭 Hover-Click Ratio — Bar Chart  
- 🚧 Early Exit Step — Drop-off Chart  
- ⏱️ Step Duration — Heatmap  

These metrics help SaaS teams pinpoint bottlenecks and instantly test new onboarding experiments.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Vite + TypeScript + Recharts + Lovable |
| **Backend** | Supabase (PostgreSQL + Realtime) |
| **SDK** | JavaScript (plug-and-play snippet) |
| **AI Layer** | Lightweight intent predictor (FastAPI / TensorFlow Lite) |
| **Deployment** | Netlify + Supabase Edge Functions |

