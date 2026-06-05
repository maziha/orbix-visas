"use client";

import { useState } from "react";
import type { SubmitEnquiryInput } from "@/lib/enquiry-types";
import { submitEnquiry } from "@/lib/submit-enquiry";

export function useSubmitEnquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = async (payload: SubmitEnquiryInput) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await submitEnquiry(payload);
      return true;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again or call us.";
      setError(message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { send, isSubmitting, error, clearError: () => setError(null) };
}
