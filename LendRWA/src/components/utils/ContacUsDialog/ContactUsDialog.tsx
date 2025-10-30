/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  // Dialog,
  // DialogContent,
  DialogFooter,
  // DialogHeader,
  // DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import submitForm from "./actions";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUsDialog({
  isOpen,
  setIsOpen,
  quote = false,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  quote?: boolean;
}) {
  const [resMessage, setResMessage] = useState<{
    success: boolean | null;
    message: string;
  }>({ success: null, message: "" });
  const captchaRef = useRef<ReCAPTCHA>(null);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  useEffect(() => {
    if (formRef?.current) formRef.current.reset();
    setResMessage({ success: null, message: "" });
  }, [isOpen]);

  return (
    <>
      <form
        ref={formRef}
        //@ts-ignore
        // action={(formData) => {
        //   captchaRef.current?.reset();
        //   return submitForm(formData, setResMessage);
        // }}
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          await submitForm(formData, setResMessage);
          captchaRef.current?.reset();
          setTimeout(() => {
            // setIsOpen(false);
            setResMessage({ success: null, message: "" });
          }, 6500);
        }}
        className={`${isOpen ? "z-50 opacity-100" : "-z-50 opacity-0 "
          } w-full transition-opacity duration-500 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed  max-w-[800px] space-y-4 p-10 rounded-xl`}
      >
        <span className="text-center text-2xl text-black  font-bold">
          {quote ? "Get a Quote" : "Leave us an email."}
        </span>
        <br />
        {/* {  === true && (
         <span className="text-sm  text-[#00000099] text-justify">
           To receive a quotation immediately, provide details for service
           required, asset/environment description.
         </span>
        )} */}
        <div className="flex gap-4">
          {/* <input type="text" /> */}
          <Input type="text" name="name" placeholder="Your Name" />
          <Input type="email" name="email" placeholder="Your Email" />
        </div>
        <Input
          type="text"
          name="subject"
          placeholder={quote ? "Company name" : "Subject"}
          required
        />
        <Textarea
          className="h-40"
          name="message"
          placeholder={
            quote
              ? "To receive a quotation immediately, provide details for services required, asset/environment description"
              : "Leave your message here"
          }
          required
        />
        {/* ReCAPTCHA */}
        <div className="relative z-[99999]">
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={"6Lc0mpkUAAAAAMPWDiXhtcoJw3zRiUzRE36k8dSZ"}
          />
        </div>
        <div
          className={`${resMessage.success ? "text-green-600" : "text-red-700"
            }  w-full text-sm`}
        >
          {resMessage.message}
        </div>
        <DialogFooter className="flex text-sm text-[#00000099] !justify-between">
          <div className="w-fit">
            Email: info@immute.io <br></br>
            <div className="flex gap-1">
              Phone Number:
              <div className=" ">
                <span>+977-9865058848</span>
              </div>
            </div>
          </div>
          <Button
            className="bg-[#3b82f6] text-white hover:bg-[#2f7af5]"
            type="submit"
          >
            Submit
          </Button>
        </DialogFooter>
      </form>
      <div
        className={`${isOpen ? "" : "hidden"
          } w-full h-full z-40 fixed top-0 left-0 bg-black opacity-80`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
