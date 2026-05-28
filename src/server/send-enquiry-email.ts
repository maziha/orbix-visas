import { Resend } from "resend";
import { CONTACT_EMAIL, COMPANY_NAME } from "@/lib/contact-info";
import type { SubmitEnquiryInput } from "@/lib/enquiry-types";
import { getServerEnv } from "@/server/env";

const SOURCE_LABELS: Record<SubmitEnquiryInput["source"], string> = {
  contact: "Contact page",
  consultation: "Book a consultation",
  "quick-enquiry": "Homepage quick enquiry",
};

function formatField(label: string, value: string | undefined) {
  if (!value?.trim()) return "";
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#040175;vertical-align:top">${label}</td><td style="padding:6px 0;color:#1a1a2e">${escapeHtml(value)}</td></tr>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildHtmlBody(data: SubmitEnquiryInput) {
  const rows = [
    formatField("Source", SOURCE_LABELS[data.source]),
    formatField("Name", data.name),
    formatField("Phone / WhatsApp", data.phone),
    formatField("Email", data.email || undefined),
    formatField("Service", data.service),
    formatField("Qualification", data.qualification),
    formatField("Country", data.country),
    formatField("Goal", data.goal),
    formatField("Migration country", data.migrateCountry),
    formatField("Study country", data.studyCountry),
    formatField("Visa type", data.visaType),
    formatField("Message", data.message),
  ].filter(Boolean);

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="color:#040175;margin:0 0 16px">New enquiry — ${escapeHtml(SOURCE_LABELS[data.source])}</h2>
      <table style="border-collapse:collapse;width:100%">${rows.join("")}</table>
      <p style="margin:24px 0 0;font-size:12px;color:#666">Sent from ${escapeHtml(COMPANY_NAME)} website.</p>
    </div>
  `;
}

function buildTextBody(data: SubmitEnquiryInput) {
  const lines = [
    `New enquiry — ${SOURCE_LABELS[data.source]}`,
    "",
    `Name: ${data.name}`,
    `Phone / WhatsApp: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    data.service ? `Service: ${data.service}` : null,
    data.qualification ? `Qualification: ${data.qualification}` : null,
    data.country ? `Country: ${data.country}` : null,
    data.goal ? `Goal: ${data.goal}` : null,
    data.migrateCountry ? `Migration country: ${data.migrateCountry}` : null,
    data.studyCountry ? `Study country: ${data.studyCountry}` : null,
    data.visaType ? `Visa type: ${data.visaType}` : null,
    data.message ? `Message: ${data.message}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

export async function sendEnquiryEmail(data: SubmitEnquiryInput) {
  const apiKey = getServerEnv("RESEND_API_KEY");
  if (!apiKey) {
    throw new Error(
      "Email is not configured on the server. Set RESEND_API_KEY in Netlify environment variables and redeploy.",
    );
  }

  const to = getServerEnv("ENQUIRY_TO_EMAIL") ?? CONTACT_EMAIL;
  const from =
    getServerEnv("RESEND_FROM_EMAIL") ??
    `${COMPANY_NAME} <orbixvisas@resend.dev>`;
  const replyTo = data.email?.trim() || undefined;

  const resend = new Resend(apiKey);
  const subject = `[${COMPANY_NAME}] ${SOURCE_LABELS[data.source]} — ${data.name}`;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: replyTo ? [replyTo] : undefined,
    subject,
    html: buildHtmlBody(data),
    text: buildTextBody(data),
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(error.message || "Failed to send email.");
  }
}
