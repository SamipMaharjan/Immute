// import { FaHome } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { DEV_URI, PROD_URI } from "./baseUrl";
// import { SiYoutube } from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    href: "#",
    text: "linkedin",
    image: <FaLinkedin size={30} />,
  },
  {
    id: "facebook",
    href: "#",
    text: "facebook",
    image: <FaFacebookSquare size={30} />,
  },
  {
    id: "twitter",
    href: "https://x.com/Immute0",
    text: "twitter",
    image: <BsTwitterX size={30} />,
  },
];
export const office_content = [
  {
    content: "Kandevta Sthaan 10, Kupondole Lalitpur, Nepal",
  },
  {
    content: "+977 01 5448195",
  },
  {
    content: "info@immute.io",
  },
];

const API_URI = process.env.NODE_ENV === "development" ? DEV_URI : PROD_URI;

export const learn_more = [
  { title: "Immute Discussions", link: `/discussions` },
  {
    title: "Learn About Asset Collateral",
    link: `${API_URI}//`,
  },
  {
    title: "Blogs",
    link: `${API_URI}//`,
  },

  {
    title: "Company Profile",
    link: `${API_URI}/`,
  },
];
