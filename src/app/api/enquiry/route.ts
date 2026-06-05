import { NextResponse } from "next/server";
import { submitEnquirySchema } from "@/lib/enquiry-types";
import { sendEnquiryEmail } from "@/server/send-enquiry-email";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const data = submitEnquirySchema.parse(body);
    await sendEnquiryEmail(data);
    return NextResponse.json({ success: true as const });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong. Please try again or call us.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
