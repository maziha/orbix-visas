/** Server-only env (set in .env.local locally, Netlify env vars in production). */
const SERVER_ENV_KEYS = [
  "RESEND_API_KEY",
  "ENQUIRY_TO_EMAIL",
  "RESEND_FROM_EMAIL",
] as const;

export type ServerEnvKey = (typeof SERVER_ENV_KEYS)[number];

function trim(value: string | undefined) {
  return value?.trim() || undefined;
}

export function getServerEnv(key: ServerEnvKey): string | undefined {
  switch (key) {
    case "RESEND_API_KEY":
      return trim(process.env.RESEND_API_KEY);
    case "ENQUIRY_TO_EMAIL":
      return trim(process.env.ENQUIRY_TO_EMAIL);
    case "RESEND_FROM_EMAIL":
      return trim(process.env.RESEND_FROM_EMAIL);
  }
}
