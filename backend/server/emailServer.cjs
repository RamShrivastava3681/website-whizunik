require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactReceiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "sankalp@whizunik.com";
const port = Number(process.env.CONTACT_SERVER_PORT || 8787);
const logoPath = path.join(__dirname, "..", "public", "logo-vertical-light (2).png");

if (!smtpHost || !smtpUser || !smtpPass) {
  console.error("Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const createEmailShell = ({ preheader, title, subtitle, bodyHtml, footerHtml = "" }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;background:#0f1118;font-family:Segoe UI,Arial,sans-serif;color:#e9ecff;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0f1118;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background:linear-gradient(165deg,#161b29 0%,#10131d 60%,#1b2140 100%);border:1px solid rgba(255,255,255,0.08);border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(6,10,26,0.55);">
            <tr>
              <td style="padding:28px 28px 8px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" valign="middle">
                      <img src="cid:whizunik-logo" alt="Whiz-Unik" style="height:50px;width:auto;display:block;" />
                    </td>
                    <td align="right" valign="middle" style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#97a1d1;font-weight:700;">
                      Whiz-Unik Intelligence
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 8px 28px;">
                <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:1.2;font-weight:800;letter-spacing:-0.3px;">${title}</h1>
                <p style="margin:10px 0 0 0;color:#bfc7f0;font-size:15px;line-height:1.6;">${subtitle}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 10px 28px;">${bodyHtml}</td>
            </tr>
            <tr>
              <td style="padding:20px 28px 26px 28px;border-top:1px solid rgba(255,255,255,0.08);">
                <p style="margin:0;color:#9aa4d9;font-size:12px;line-height:1.6;">
                  Whiz-Unik • Structured Capital Advisory • India
                </p>
                ${footerHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, company, message } = req.body || {};

  if (!name || !email || !company || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
    const submittedAt = new Date().toLocaleString();

    const attachments = fs.existsSync(logoPath)
      ? [
          {
            filename: "whiz-unik-logo.png",
            path: logoPath,
            cid: "whizunik-logo",
          },
        ]
      : [];

    const adminBody = `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
        <tr>
          <td style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:14px 16px;color:#edf0ff;">
            <p style="margin:0 0 6px 0;font-size:11px;color:#9aa4d9;text-transform:uppercase;letter-spacing:1.8px;font-weight:700;">Client Name</p>
            <p style="margin:0;font-size:16px;font-weight:700;">${safeName}</p>
          </td>
        </tr>
        <tr>
          <td style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:14px 16px;color:#edf0ff;">
            <p style="margin:0 0 6px 0;font-size:11px;color:#9aa4d9;text-transform:uppercase;letter-spacing:1.8px;font-weight:700;">Email</p>
            <p style="margin:0;font-size:15px;"><a href="mailto:${safeEmail}" style="color:#8ea4ff;text-decoration:none;">${safeEmail}</a></p>
          </td>
        </tr>
        <tr>
          <td style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:14px 16px;color:#edf0ff;">
            <p style="margin:0 0 6px 0;font-size:11px;color:#9aa4d9;text-transform:uppercase;letter-spacing:1.8px;font-weight:700;">Company</p>
            <p style="margin:0;font-size:15px;">${safeCompany}</p>
          </td>
        </tr>
        <tr>
          <td style="background:rgba(59,62,234,0.18);border:1px solid rgba(132,145,255,0.45);border-radius:14px;padding:14px 16px;color:#edf0ff;">
            <p style="margin:0 0 8px 0;font-size:11px;color:#bac4ff;text-transform:uppercase;letter-spacing:1.8px;font-weight:700;">Strategic Inquiry</p>
            <p style="margin:0;font-size:15px;line-height:1.7;">${safeMessage}</p>
          </td>
        </tr>
      </table>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:12px;">
        <tr>
          <td style="font-size:12px;color:#9aa4d9;">Submitted: ${escapeHtml(submittedAt)}</td>
          <td align="right">
            <a href="mailto:${safeEmail}" style="display:inline-block;background:#3b3eea;color:#ffffff;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:10px 14px;border-radius:999px;">Reply to Lead</a>
          </td>
        </tr>
      </table>
    `;

    const autoReplyBody = `
      <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px 18px;margin-bottom:14px;">
        <p style="margin:0 0 8px 0;font-size:14px;color:#e8ecff;line-height:1.7;">Hi ${safeName},</p>
        <p style="margin:0 0 10px 0;font-size:14px;color:#c8cff3;line-height:1.8;">
          Thank you for reaching out to <strong style="color:#ffffff;">Whiz-Unik</strong>. Your consultation request has been successfully received.
        </p>
        <p style="margin:0;font-size:14px;color:#c8cff3;line-height:1.8;">
          Our advisory team will connect with you shortly with the next steps.
        </p>
      </div>
      <div style="background:rgba(59,62,234,0.16);border:1px solid rgba(132,145,255,0.4);border-radius:14px;padding:14px 16px;">
        <p style="margin:0 0 6px 0;font-size:11px;color:#bac4ff;text-transform:uppercase;letter-spacing:1.8px;font-weight:700;">Your Request Snapshot</p>
        <p style="margin:0 0 4px 0;color:#edf0ff;font-size:14px;"><strong>Company:</strong> ${safeCompany}</p>
        <p style="margin:0;color:#edf0ff;font-size:14px;"><strong>Inquiry:</strong> ${safeMessage}</p>
      </div>
      <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:16px;">
        <tr>
          <td>
            <a href="mailto:${escapeHtml(contactReceiverEmail)}" style="display:inline-block;background:#3b3eea;color:#fff;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:10px 16px;border-radius:999px;">Contact Advisory Desk</a>
          </td>
        </tr>
      </table>
    `;

    await transporter.sendMail({
      from: `Whiz-Unik Website <${smtpUser}>`,
      to: contactReceiverEmail,
      replyTo: email,
      subject: `New Consultation Request: ${name}`,
      text: [
        "A new consultation request has been submitted:",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: createEmailShell({
        preheader: `New consultation request from ${safeName}`,
        title: "New Consultation Request",
        subtitle: "A new strategic inquiry has been submitted through the website.",
        bodyHtml: adminBody,
      }),
      attachments,
    });

    await transporter.sendMail({
      from: `Whiz-Unik Team <${smtpUser}>`,
      to: email,
      subject: "Thank you for reaching out to Whiz-Unik",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for reaching out to Whiz-Unik.",
        "We have received your consultation request and our team will contact you shortly.",
        "",
        "Regards,",
        "Whiz-Unik Team",
      ].join("\n"),
      html: createEmailShell({
        preheader: "Thank you for contacting Whiz-Unik. Our team will contact you shortly.",
        title: "Consultation Request Received",
        subtitle: "Thank you for your interest. We appreciate the opportunity to support your growth journey.",
        bodyHtml: autoReplyBody,
      }),
      attachments,
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return res.status(500).json({ error: "Failed to send emails." });
  }
});

app.listen(port, () => {
  console.log(`Contact email server running on http://localhost:${port}`);
});
