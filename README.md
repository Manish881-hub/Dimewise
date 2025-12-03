🚀 Dimewise — AI-Powered Finance Management Platform

Dimewise is an intelligent, full-stack finance management application built with Next.js 15, designed to help users track, analyze, and optimize their finances using AI-driven insights.
It focuses on usability, performance, clean UI, and real-time financial awareness — making budgeting smarter and more intuitive.

✨ Key Features

AI-powered financial insights (Google Generative AI)

Secure authentication using Clerk (MFA, sessions, user management)

Modern, responsive UI built with Tailwind CSS + Shadcn UI

Real-time tracking of income, expenses, and categories

Interactive dashboards with Recharts

Email notifications powered by Resend

Dark/Light mode built-in

Schema-safe forms using Zod + React Hook Form

🧰 Tech Stack
Supabase + Prisma ORM for scalable database operations
| Category             | Technologies                 |
| -------------------- | ---------------------------- |
| **Framework**        | Next.js 15                   |
| **Authentication**   | Clerk                        |
| **Database & ORM**   | Supabase PostgreSQL + Prisma |
| **AI Integration**   | Google Generative AI         |
| **Styling**          | Tailwind CSS, Shadcn UI      |
| **Forms**            | React Hook Form + Zod        |
| **Charts**           | Recharts                     |
| **Email**            | Resend                       |
| **State Management** | React Hooks                  |
| **Hosting**          | Vercel                       |

📚 Project Process (How It Was Built)

1. Planning & Architecture

Designed the entire workflow: dashboard → transactions → analytics → AI insights.

Planned the database using Prisma schema-first approach.

Structured the project using Next.js app router best practices.

2. Authentication Setup

Implemented Clerk for login, sign-up, session handling, and protecting routes.

Added middleware for redirecting unauthorized users.

3. Core Features Development

Built transaction CRUD operations.

Created analytics pages with charts and filters.

Integrated Google AI for smart financial summaries.

4. Email + Notification System

Added Resend for transactional emails (budget alerts, summaries).

5. UI/UX Design

Built a clean design using Tailwind + Shadcn.

Ensured responsive layouts for mobile, tablet & desktop.

6. Deployment & Versioning

Deployed to Vercel with proper environment configuration.

Added linting, type checking, and production optimization.

📘 What I Learned

Working on Dimewise helped me grow in multiple areas:

Full-stack development with Next.js App Router

Building scalable database models using Prisma

Using Clerk for real-world secure authentication

Integrating AI in real applications

Writing clean, modular TypeScript code

Using React Hook Form + Zod for fully type-safe forms

Building modern UI with Shadcn components

Creating production-grade deployments on Vercel

Error handling, middleware, and route protection

Managing email workflows using Resend

📈 Overall Growth Through This Project

This project significantly improved my skills:

Stronger understanding of clean architecture

Better state management & component composition

Stronger command of TypeScript in real applications

Learned how to build dashboard-based apps

More confidence in AI-based feature implementation

Improved debugging & testing skills

Learned practical deployment and environment handling

🚀 Future Improvements (Upcoming Enhancements)

🧾 Recurring transaction automation (Inngest)

📱 PWA support for mobile usage

💳 Payment reminders

🔐 Role-based access

📊 More AI models for deeper trend predictions

🌍 Multi-language support

👥 Multi-user team/household budget sharing

🏦 Bank integration (Plaid-like)

🛠️ Getting Started (Run the Project Locally)
1️⃣ Clone the Repository
git clone https://github.com/Manish881-hub/dimewise.git
cd dimewise

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Environment Variables

Create a .env file in the root folder and include:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
GOOGLE_GENAI_KEY=
RESEND_API_KEY=

4️⃣ Run Development Server
npm run dev
# or
yarn dev
Open → http://localhost:3000

📦 Available Scripts
| Script          | Purpose                  |
| --------------- | ------------------------ |
| `npm run dev`   | Run development server   |
| `npm run build` | Build production version |
| `npm run start` | Run production server    |
| `npm run email` | Run email preview server |
| `npm run lint`  | Lint and fix issues      |

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a Pull Request.

🙏 Acknowledgements

Next.js for the foundation

Clerk for seamless authentication

Supabase + Prisma for a powerful backend

Google AI for financial insights

Open-source community for tools & inspiration
