import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseLibraRoom from "@/components/WhyChooseLibraRoom";
import Image from "next/image";

export const metadata = {
  title: "LibraRoom | Study Room Booking Platform",
  description:
    "LibraRoom helps students find, book, and manage quiet library study rooms easily. Explore featured rooms and start booking instantly.",
};

export default function Home() {
  
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Featured></Featured>
      <WhyChooseLibraRoom></WhyChooseLibraRoom>
    </div>
  );
}
