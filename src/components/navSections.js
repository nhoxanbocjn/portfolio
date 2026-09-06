import {
  PiUserCircleDuotone,
  PiLightningDuotone,
  PiBriefcaseDuotone,
  PiReadCvLogoDuotone,
  PiCertificateDuotone,
  PiNotepadDuotone,
} from "react-icons/pi";
import { BLOG_URL } from "../constants";

export const SECTION_IDS = ["about", "skills", "experience", "projects", "certifications", "resume", "knowledge"];

export const SECTION_NAV = [
  { id: "about", key: "about", Icon: PiUserCircleDuotone },
  { id: "skills", key: "skills", Icon: PiLightningDuotone },
  { id: "experience", key: "experience", Icon: PiBriefcaseDuotone },
  { id: "projects", key: "projects", Icon: PiBriefcaseDuotone },
  { id: "certifications", key: "certifications", Icon: PiCertificateDuotone },
  { id: "resume", key: "resume", Icon: PiReadCvLogoDuotone },
  { id: "knowledge", key: "knowledge", Icon: PiNotepadDuotone, external: true, href: BLOG_URL },
];
