import heroIMGDesktop from "../../assets/desktop/image-hero.jpg";
import arrowRight from "../../assets/icon-arrow-right.svg";
import heroIMGMobile from "../../assets/mobile/image-hero.jpg";
import heroIMGTablet from "../../assets/tablet/image-hero.jpg";
export default function Hero() {
  return (
    <div className='space-y-8 md:flex'>
      <picture className='md:absolute'>
        <source media='(min-width: 376px)' srcSet={heroIMGTablet} />
        <source media='(min-width: 769px)' srcSet={heroIMGDesktop} />
        <img src={heroIMGMobile} />
      </picture>
      <div className='md:z-10 md:flex md:flex-col md:gap-12 md:py-[9.0625rem] md:ml-auto md:mr-10 w-1/2'>
        <h1 className='headingM uppercase px-4 md:px-0'>
          MODERN <br /> ART GALLERY
        </h1>
        <p className='bodyS px-4 md:px-0'>
          The arts in the collection of the Modern Art Gallery all started from a spark of
          inspiration. Will these pieces inspire you? Visit us and find out.
        </p>
        <div className='px-4 md:px-0'>
          <a className='flex' href='/location'>
            <div className='bg-almostBlack py-6 px-8 w-fit'>
              <p className='fontShoulderExtraBold text-xl text-white'>OUR LOCATION</p>
            </div>
            <div className='bg-gold p-6 w-fit'>
              <img src={arrowRight} className='w-2 h-6'></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
