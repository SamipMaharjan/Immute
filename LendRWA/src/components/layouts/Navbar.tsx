"use client";
import React, { useEffect, useRef, useState } from "react";
import ThreatNixLogo from "/public/threatn_logo.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../utils/Button";
import ContactUsDialog from "../utils/ContacUsDialog/ContactUsDialog";
import { useRouter } from "next/navigation";
import { useNavbar } from "@/providers/NavbarContextProvider";
const navItems = [
  {
    text: "Home",
    ID: "hero",
  },
  {
    text: "Our Clients",
    ID: "our-clients",
  },
  {
    text: "Services",
    ID: "our-services",
  },
  // {
  //   text: "Products",
  //   ID: "our-products",
  // },
  {
    text: "Certifications",
    ID: "certifications",
  },
  {
    text: "Testimonial",
    ID: "testimonials",
  },
  // {
  //   text: "Contacts",
  //   ID: "contacts",
  // },
];

/**
 * DOC::
 * Navbar component for the application.
 *
 * ***IMP***:: The disableIsScroll state is used to disable isScrolled state, and    render the default navbar with glassy bg and black text.
 *
 * It renders a navigation bar with the brand logo and navigation items.
 * The navbar is responsive and can be toggled on small screens.
 * It also has a contact us button that opens a contact us form.
 * The navbar is sticky to the top of the screen.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<
    "default" | "inside_hero" | "outside_hero"
  >("default");
  const [isOpen, setIsOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const { disableIsScroll } = useNavbar();

  const navRef = useRef<HTMLDivElement>(null);

  useDynamicNavbarStyles({ navRef, setIsScrolled, disableIsScroll });

  const router = useRouter();

  function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("data-id");
    if (id) {
      const element = document.getElementById(id);
      console.log("element found", element);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        console.log("element not found", id);
        router.push(`/#${id}`);
      }
    }
    setIsOpen(false);
  }

  // if (disableIsScroll) {
  //   setIsScrolled("outside_hero");
  // }
  return (
    <>
      {/* default navbar */}
      <nav
        ref={navRef}
        className={`${
          isScrolled === "default"
            ? "bg-[#00000000] "
            : isScrolled === "inside_hero"
            ? "bg-[#09142522] backdrop-blur-md shadow-md"
            : "bg-[#ffffffaa] backdrop-blur-md shadow-md"
        }  w-full xl:px-40 px-5 transition-all duration-500 justify-between h-20 hidden lg:!flex items-center left-1/2 -translate-x-1/2 fixed py-5 top-0 z-[51]`}
        // style={{ boxShadow: "3px 8px 30px rgba(0, 0, 0, 0.35)" }}
      >
        <Image
          src={ThreatNixLogo}
          alt="Threat Nix Logo"
          width={220}
          height={50}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <ul
          className={`${
            isScrolled === "default"
              ? "text-white"
              : isScrolled === "inside_hero"
              ? "text-white"
              : "text-[#212121]"
          }  hidden lg:!flex text-lg  items-center font-medium justify-center w-full gap-0  h-10`}
        >
          {navItems.map((item, i) => {
            return (
              <li className="flex items-center justify-center" key={i}>
                <Button
                  text={item?.text}
                  className="min-w-32 h-10"
                  ID={item?.ID}
                  on_click={handleSmoothScroll}
                ></Button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsContactUsOpen(true)}
          className="bg-blue-500 hidden rounded-lg px-6 min-w-36 h-10 items-center justify-center text-white lg:!flex"
        >
          Contact Us
        </button>
      </nav>

      {/* responsive navbar */}
      <nav
        ref={navRef}
        className={` lg:hidden bg-white w-full px-10 transition-all duration-500 justify-between flex items-center left-1/2  -translate-x-1/2 fixed py-5 !top-0 z-40 shadow-lg`}
      >
        <Image
          src={ThreatNixLogo}
          alt="Threat Nix Logo"
          width={150}
          height={50}
          className="cursor-pointer"
        />
        <button onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu size={24} />
        </button>
        <div
          className={`${
            isOpen ? "h-[12.5rem]" : "h-0"
          } absolute shadow-xl px-10 overflow-hidden transition-all duration-700 top-full right-0 z-30 w-full items-end flex flex-col bg-white`}
        >
          {navItems.map((item, i) => {
            return (
              <button
                className="w-32 min-h-10 hover:text-primary-700 justify-end text-end"
                data-id={item?.ID}
                onClick={handleSmoothScroll}
                key={i}
              >
                {item?.text}
              </button>
            );
          })}
        </div>
      </nav>
      <div className="bg-black opacity-50"></div>
      <ContactUsDialog
        isOpen={isContactUsOpen}
        setIsOpen={setIsContactUsOpen}
      />
    </>
  );
}

const useDynamicNavbarStyles = ({
  navRef,
  setIsScrolled,
  disableIsScroll,
}: {
  navRef: React.RefObject<HTMLDivElement | null>;
  setIsScrolled: React.Dispatch<
    React.SetStateAction<"default" | "inside_hero" | "outside_hero">
  >;
  disableIsScroll: boolean;
}) => {
  return useEffect(() => {
    if (disableIsScroll) {
      console.log("disableIsScroll", disableIsScroll);

      setIsScrolled("outside_hero");
      return;
    }
    const handleScroll = () => {
      if (!navRef.current) return;

      const scrollTop = window.scrollY;
      // console.log("scroll", scrollTop);

      const viewPortHeight = window.innerHeight;
      if (scrollTop > viewPortHeight - 200) {
        // navRef.current.style.backgroundColor = "#ffffff";
        setIsScrolled("outside_hero");
      } else if (scrollTop > 10) {
        setIsScrolled("inside_hero");
      } else {
        // navRef.current.style.backgroundColor = "#00000000";
        setIsScrolled("default");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableIsScroll]);
};
