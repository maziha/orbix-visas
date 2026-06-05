import "server-only";

/** Server-only env (`.env.local` locally, Netlify environment variables in production). */
const SERVER_ENV_KEYS = ["RESEND_API_KEY", "RESEND_FROM_EMAIL"] as const;

export type ServerEnvKey = (typeof SERVER_ENV_KEYS)[number];

function trim(value: string | undefined) {
  return value?.trim() || undefined;
}

/** Bracket access — avoids inlining secret values into the production build output. */
export function getServerEnv(key: ServerEnvKey): string | undefined {
  return trim(process.env[key]);
}
