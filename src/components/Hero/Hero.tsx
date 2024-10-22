import heroIMGDesktop from "../../assets/desktop/image-hero.jpg";
import arrowRight from "../../assets/icon-arrow-right.svg";
import heroIMGMobile from "../../assets/mobile/image-hero.jpg";
import heroIMGTablet from "../../assets/tablet/image-hero.jpg";
export default function Hero() {
  return (
    <div className='space-y-8 md:flex items-center'>
      <picture className='md:flex-shrink-0'>
        <source media='(min-width: 376px)' srcSet={heroIMGTablet} />
        <source media='(min-width: 769px)' srcSet={heroIMGDesktop} />
        <img src={heroIMGMobile} />
      </picture>
      <div className='space-y-8 md:space-y-12 md:absolute md:max-w-[44%] right-10'>
        <h1 className='headingM md:text-[4.375rem] md:leading-[4.0625rem] uppercase px-4 md:px-0'>
          MODERN <br /> ART GALLERY
        </h1>
        <p className='bodyS px-4 md:px-0 text-darkGray font-light'>
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
