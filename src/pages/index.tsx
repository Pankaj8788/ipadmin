import { LastPage } from "@mui/icons-material";
import Breadcrumb from "../Components/website/home/Breadcrumb";
import CardSection from "../Components/website/home/CardSection";
import HeroSection from "../Components/website/home/HeroSection";
import WebLayOut from "../layouts/WebLayOut";
import BlogSection from "../Components/website/home/BlogSection";
import NewsLetter from "../Components/website/home/NewsLetter";
import OurClients from "../Components/website/home/OurClients";
import QuickWaysSection from "../Components/website/home/QuickWaysSection";

export default function Home() {
  return (
    <>
      <WebLayOut>
        <Breadcrumb />
        <OurClients />
        <HeroSection />
        {/* <CardSection /> */}
        <QuickWaysSection />
        <BlogSection />
        <NewsLetter />
      </WebLayOut>
    </>
  );
}
