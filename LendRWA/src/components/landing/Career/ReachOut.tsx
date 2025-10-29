"use client";
import Image from "next/image";
import open_to_work from "/public/careers/work.png";
import { reach_out } from "@/constants/career_cons";
import { caveat } from "@/lib/fonts";
import UpDownFade from "@/components/utils/UpDownFade";
export default function ReachOut() {
  return (
    <>
      <section className=" h-screen px-10  pt-[4.8rem] bg-[#DCE8EB] ">
        <div className="h-full bg-[#DCE8EB] flex justify-center items-center w-full">
          <div className="flex gap-8 max-w-[1350px] justify-center items-center w-full">
            <div className=" h-full flex flex-col  mx-auto justify-center">
              <UpDownFade delay={0.4}>
                <span
                  data-scroll
                  data-scroll-speed="0.15"
                  className={`${caveat.className}  text-2xl flex items-center pb-[34px] gap-3 `}
                >
                  <span className="border border-b h-0 w-20 border-black"></span>{" "}
                  Wanna get in Touch?
                </span>
              </UpDownFade>
              <UpDownFade delay={0.55}>
                <div
                  data-scroll
                  data-scroll-speed="0.1"
                  className="text-[40px] sm:text-[60px] leading-[120%]  pb-[38px] flex items-start border-b border-[#00000044] hover:border-[#000000ff] transition-colors duration-700"
                >
                  Feel Free To Reach Out.
                </div>{" "}
              </UpDownFade>

              <div>
                {/* <span>emico</span> */}
                {reach_out?.map((item, i) => {
                  return (
                    <>
                      <UpDownFade delay={0.7 + 0.15 * i}>
                        <div
                          data-scroll
                          data-scroll-speed={i == 0 ? `0.03` : "0.01"}
                          key={item?.name || i}
                          className="flex gap-[20px] border-b border-[#00000044] hover:border-[#000000ff] transition-colors duration-700 py-[30px]"
                        >
                          <span className="min-w-[60px] max-w-[60px] max-h-[60px] bg-black flex items-center justify-center min-h-[60px] rounded-full">
                            {/* <HiOutlineMail color="white" size={26} /> */}
                            {item?.icon}
                          </span>
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-lg text-[#00000099] font-normal">
                              {item?.name}
                            </span>

                            <span className="text-sm sm:text-[20px]">
                              {item?.description}
                            </span>
                          </div>
                        </div>
                      </UpDownFade>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="hidden h-full  relative lg:!flex justify-center items-center ">
              <Image
                src={open_to_work}
                alt="open_to_work"
                width={500}
                height={300}
              // fill
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
