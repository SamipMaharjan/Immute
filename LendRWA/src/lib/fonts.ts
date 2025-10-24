import { Poppins, Syne, Chivo, Jost, Mitr, Caveat } from "next/font/google";
const normal_poppins = Poppins({ subsets: ["latin"], weight: "500" });
const thin_poppins = Poppins({ subsets: ["latin"], weight: "400" });

const semi_poppins = Poppins({ subsets: ["latin"], weight: "600" });
const bold_poppins = Poppins({ subsets: ["latin"], weight: "700" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const syne = Syne({ subsets: ["latin"], weight: ["400", "700"] });
const jost = Jost({ subsets: ["latin"], weight: "500" });
const mitr = Mitr({ subsets: ["latin"], weight: "400" });
const chivo = Chivo({ subsets: ["latin"], weight: "400" });
const caveat = Caveat({ subsets: ["latin"], weight: "400" });

export {
  normal_poppins,
  poppins,
  semi_poppins,
  bold_poppins,
  thin_poppins,
  syne,
  jost,
  chivo,
  caveat,
  mitr,
};
