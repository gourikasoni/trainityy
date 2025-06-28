# 🏋️‍♀️ Trainityy — Your AI Fitness & Diet Coach 💬🧠

Trainityy is a full-stack AI fitness assistant that generates personalized workout and diet plans through an interactive voice-based interface.
## 📸 Preview

![App Preview](https://raw.githubusercontent.com/gourikasoni/trainityy/main/public/preview.png)



---

## 🌟 Features

- 🎙️ Voice-based interaction using Vapi (GPT-4o + Deepgram)
- 🧠 Smart AI coaching powered by Gemini AI
- 🏋️ Tailored workout and diet plans
- 🔐 Secure authentication via Clerk
- 📦 Real-time data with Convex backend
- 📄 Plan history saved to database
- 👤 User profile with saved programs
- ✨ Responsive, modern UI

---

## 🛠️ Tech Stack

**Frontend:** Next.js 15, React, TypeScript, TailwindCSS, Shadcn UI  
**Backend:** Convex (database + functions)  
**AI:** Vapi (Voice AI), Gemini (LLM)  
**Auth:** Clerk  
**Deployment:** Vercel  

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/gourikasoni/trainityy
cd trainityy
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up Environment Variables
Create a .env.local file in the root directory and add the following:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

CONVEX_DEPLOYMENT_NAME=your_convex_deployment_name

```
### 4. Start Dev Server
In one terminal, run:


```bash
npx convex dev
```
In another terminal:

```bash
npm run dev
```
---
### 🧪 How It Works
User signs in using Clerk

Starts a voice-based conversation with the AI

AI gathers goals and preferences

Personalized fitness + diet plans are generated

Plan is saved and user is redirected to their profile
---

### 🧩 Future Plans
📊 AI-based progress tracking and analysis

📅 Weekly reminders and plan updates

🔍 Advanced goal customization

🧍‍♀️ Animated AI avatars

📝 Admin dashboard with analytics

🌐 Multi-language support

🤝 Social/community plan sharing

---
### 🧑‍💻 Author
Made with 💜 by @gourikasoni
If you like this project, give it a ⭐ on GitHub!


