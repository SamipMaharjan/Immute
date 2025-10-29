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
    href: "https://www.linkedin.com/company/threatnix",
    text: "linkedin",
    image: <FaLinkedin size={30} />,
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/threatnix",
    text: "facebook",
    image: <FaFacebookSquare size={30} />,
  },
  {
    id: "twitter",
    href: "https://x.com/threatnix",
    text: "twitter",
    image: <BsTwitterX size={30} />,
  },
  // {
  //   id: "instagram",
  //   href: "https://www.instagram.com/threatcon/",
  //   text: "instagram",
  //   image: <FaInstagram size={30} />,
  // },
  // {
  //   id: "youtube",
  //   href: "",
  //   text: "youtube",
  //   image: <SiYoutube size={32} />,
  // },
];
export const office_content = [
  {
    content: "Kandevta Sthaan 10, Kupondole Lalitpur, Nepal",
  },
  {
    content: "+977 01 5448195",
  },
  {
    content: "info@threatnix.io",
  },
];

const API_URI = process.env.NODE_ENV === "development" ? DEV_URI : PROD_URI;

export const learn_more = [
  { title: "THREAT CON", link: `//threatcon.io/` },
  {
    title: "Reports",
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
  {
    title: "Career",
    link: `${API_URI}/`,
  },
];
