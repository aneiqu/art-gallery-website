import "./App.css";
import Footer from "./components/Footer/Footer";
import GalleryShowcase from "./components/GalleryShowcase/GalleryShowcase";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <div className='flex flex-col space-y-[7.5rem]'>
      <Hero />
      <GalleryShowcase />
      <Footer color='almostBlack' />
    </div>
  );
}
