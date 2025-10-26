/* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";

// import { FormEvent } from "react";
import { baseUrl } from "@/constants/baseUrl";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export default async function submitForm(
  formData: FormData,
  setResMessage: any
) {
  //   const formData = new FormData(event);

  const captcha = formData.get("g-recaptcha-response");
  formData.delete("g-recaptcha-response");
  console.log("captcha", captcha);

  const modifiedFormData = {
    ...Object.fromEntries(formData.entries()),
    captcha: captcha,
  };

  console.log("modifiedFormData", modifiedFormData);

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(`${baseUrl}/contact_us`, {
    method: "POST",
    body: JSON.stringify({
      ...modifiedFormData,
    }),
    // mode: "no-cors",
    credentials: "omit",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });
  console.log("res", res);
  if (res?.ok) {
    setResMessage({
      success: true,
      message:
        "Thank you for contacting us! We have received your email and have already sent an acknowledgement. In case you didn't receive any, please email us directly at info@threatnix.io.",
    });
  } else {
    setResMessage({
      success: false,
      message:
        "Something went wrong. Please try again later. Or contact us directly at info@threatnix.io",
    });
  }
  // const data = await res.json();
  // console.log("respose message", data);
  // if (res.ok) {
  //   return onSuccess();
  // } else {
  //   return onError();
  // }
}
