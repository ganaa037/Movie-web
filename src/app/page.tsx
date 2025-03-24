import Image from "next/image";

import { Navbar } from "@/components/Navbar";

import { Footer } from "@/components/Footer";

import { TopRatedMovie } from "@/components/TopRatedMovie";
import { Movie, UpcomingMovie } from "@/components";
import { PopularMovie } from "@/components/PopularMovie";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Navbar />
      <Movie></Movie>
      <div className="flex flex-col gap-[52px]">
        <UpcomingMovie />
        <PopularMovie />
        <TopRatedMovie />
      </div>
      <Footer />
    </div>
  );
}
