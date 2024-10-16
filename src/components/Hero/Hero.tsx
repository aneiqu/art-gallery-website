import heroIMGDesktop from "../../assets/desktop/image-hero.jpg";
import arrowRight from "../../assets/icon-arrow-right.svg";
import heroIMGMobile from "../../assets/mobile/image-hero.jpg";
import heroIMGTablet from "../../assets/tablet/image-hero.jpg";
export default function Hero() {
  return (
    <div className='space-y-8'>
      <picture>
        <source media='(min-width: 376px)' srcSet={heroIMGTablet} />
        <source media='(min-width: 769px)' srcSet={heroIMGDesktop} />
        <img src={heroIMGMobile} />
      </picture>

      <h1 className='headingM uppercase px-4'>
        MODERN <br /> ART GALLERY
      </h1>
      <p className='bodyS px-4'>
        The arts in the collection of the Modern Art Gallery all started from a spark of
        inspiration. Will these pieces inspire you? Visit us and find out.
      </p>
      <div className='flex px-4'>
        <div className='bg-almostBlack py-6 px-8 w-fit'>
          <p className='fontShoulderExtraBold text-xl text-white '>OUR LOCATION</p>
        </div>
        <div className='bg-gold p-6 w-fit'>
          <img src={arrowRight} className='w-2 h-6'></img>
        </div>
      </div>
    </div>
  );
}
