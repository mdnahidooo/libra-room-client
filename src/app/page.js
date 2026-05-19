import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseLibraRoom from "@/components/WhyChooseLibraRoom";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseLibraRoom></WhyChooseLibraRoom>
      <Featured></Featured>
      <HowItWorks></HowItWorks>
    </div>
  );
}
