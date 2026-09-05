import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiBriefcaseDuotone,
  PiReadCvLogoDuotone,
  PiCertificateDuotone,
  PiNotepadDuotone,
} from "react-icons/pi";
import { BLOG_URL } from "../constants";

export const SECTION_IDS = ["home", "about", "projects", "certifications", "resume"];

export const SECTION_NAV = [
  { id: "home", key: "home", Icon: PiHouseDuotone },
  { id: "about", key: "about", Icon: PiUserCircleDuotone },
  { id: "projects", key: "projects", Icon: PiBriefcaseDuotone },
  { id: "certifications", key: "certifications", Icon: PiCertificateDuotone },
  { id: "resume", key: "resume", Icon: PiReadCvLogoDuotone },
  { id: "knowledge", key: "knowledge", Icon: PiNotepadDuotone, external: true, href: BLOG_URL },
];
