import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseLibraRoom from "@/components/WhyChooseLibraRoom";
import Image from "next/image";

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
