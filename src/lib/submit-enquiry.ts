import { createServerFn } from "@tanstack/react-start";
import { submitEnquirySchema } from "@/lib/enquiry-types";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submitEnquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { sendEnquiryEmail } = await import("@/server/send-enquiry-email");
    await sendEnquiryEmail(data);
    return { success: true as const };
  });
