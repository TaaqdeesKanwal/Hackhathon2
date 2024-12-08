
import Hero from "./components/hero";
import HeroOne from "./components/hero-one";
import TopPicks from "./components/toppic";
import NewArrival from "./components/newarrival";
import BlogSection from "./components/blogs";
import InstagramSection from "./components/insta";

export default function Home() {
  return (
    <div className="bg-[#FBEBB5] text-[#FBEBB5]" >
      <Hero/>
      <HeroOne/>
      <TopPicks/>
      <NewArrival/>
      <BlogSection/>
      <InstagramSection/>
    </div>
  );
}
