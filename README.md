# Whiz-Unik Website

Structured Capital Advisory for Growth-Stage Businesses.

## Project Structure

```
├── frontend/          # React + Vite + TypeScript frontend
├── backend/           # Email server (Express + Nodemailer)
├── motion-scribe-path/  # Separate sub-project
└── README.md
```

---

## Frontend (`frontend/`)

React application built with Vite, TypeScript, Tailwind CSS, and shadcn/ui.

### Setup & Run

```bash
cd frontend
npm install
npm run dev        # Development server on http://localhost:8080
```

### Build

```bash
cd frontend
npm run build      # Outputs to frontend/dist/
```

### Environment Variables

The frontend reads `VITE_CONTACT_API_URL` for the contact form API endpoint. In development it defaults to `http://localhost:8787/api/contact`.

For production deployment, set:
```
VITE_CONTACT_API_URL=https://your-backend-domain.com/api/contact
```

---

## Backend (`backend/`)

SMTP email server for forwarding contact form submissions to `sankalp@whizunik.com`.

### Setup & Run

```bash
cd backend
cp .env.example .env   # Fill in your real SMTP credentials
npm install
npm start              # Starts on http://localhost:8787
```

See [backend/README.md](backend/README.md) for full details.

---

## Running Both Locally

**Terminal 1 — Backend:**
```bash
cd backend
npm start
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
```

Then open http://localhost:8080 in your browser.

---

## Deployment

### Frontend (Vercel / Netlify / any static host)

1. Set the build command to `npm run build` and output directory to `frontend/dist`
2. Add `VITE_CONTACT_API_URL` as an environment variable pointing to your deployed backend
3. Deploy

### Backend (Render / Railway / Fly.io / VPS)

1. Set the start command to `npm start` and working directory to `backend/`
2. Add all environment variables from `.env.example` with real values
3. Ensure your hosting platform allows Node.js and the port is accessible
