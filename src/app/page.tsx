import Navbar from "@/components/Navbar";
import BannerArea from "@/components/sections/BannerArea";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";

export default function Home() {
  return (
  <div className="content">
    <TopHeader/>
    <Navbar/>
    <BannerArea/>
  </div>
  );
}
