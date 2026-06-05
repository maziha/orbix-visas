import type { Metadata } from "next";
import { metadataForPage } from "@/lib/metadata";
import ContactPage from "./ContactPage";

export const metadata: Metadata = metadataForPage("contact");

export default ContactPage;
