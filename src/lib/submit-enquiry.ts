import type { SubmitEnquiryInput } from "@/lib/enquiry-types";

export async function submitEnquiry(payload: SubmitEnquiryInput) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as { success?: boolean; error?: string };

  if (!response.ok) {
    throw new Error(result.error || "Something went wrong. Please try again or call us.");
  }

  return result;
}
