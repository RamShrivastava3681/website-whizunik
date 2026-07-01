# Whiz-Unik Email Server

SMTP-based email server for handling contact form submissions. Sends admin notifications to `sankalp@whizunik.com` and auto-replies to users.

## Setup

```bash
# Install dependencies
npm install

# Copy env file and fill in your SMTP credentials
cp .env.example .env
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host (e.g., smtp.gmail.com) |
| `SMTP_PORT` | SMTP port (587 for TLS, 465 for SSL) |
| `SMTP_USER` | SMTP username/email |
| `SMTP_PASS` | SMTP app password |
| `CONTACT_RECEIVER_EMAIL` | Email to receive contact form submissions |
| `CONTACT_SERVER_PORT` | Port to run the server on (default: 8787) |

## Run

```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## API

- `GET /api/health` — Health check
- `POST /api/contact` — Submit contact form (body: `{ name, email, company, message }`)

## Deployment

For production, set your environment variables on your hosting platform and deploy this directory. The server listens on port 8787 by default (configurable via `CONTACT_SERVER_PORT`).
