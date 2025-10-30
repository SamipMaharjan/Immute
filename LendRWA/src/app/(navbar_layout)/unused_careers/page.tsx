import Positions from "@/components/landing/Career/Positions";
import ReachOut from "@/components/landing/Career/ReachOut";
import DisableNavScroll from "@/components/utils/DisableNavScroll";

export default function Careers() {
  return (
    <div className=" bg-white">
      <DisableNavScroll />
      <ReachOut />
      <Positions />
    </div>
  );
}
