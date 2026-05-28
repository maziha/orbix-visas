import { SmartEnquiryForm } from "./enquiry/SmartEnquiryForm";

export function QuickEnquiryForm() {
  return (
    <SmartEnquiryForm
      source="quick-enquiry"
      requireEmail={false}
      submitLabel="Get Free Assessment"
    />
  );
}
