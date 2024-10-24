import heroIMGDesktop from "../../assets/desktop/image-hero.jpg";
import arrowRight from "../../assets/icon-arrow-right.svg";
import heroIMGMobile from "../../assets/mobile/image-hero.jpg";
import heroIMGTablet from "../../assets/tablet/image-hero.jpg";
export default function Hero() {
  return (
    <div className='space-y-8 md:space-y-0 md:flex items-center lg:items-start h-max lg:flex-row lg:space-y-0'>
      <div className='w-1/3 h-[50rem] bg-black hidden lg:block'></div>
      <picture className='md:flex-shrink-0'>
        <source media='(min-width: 769px)' srcSet={heroIMGDesktop} />
        <source media='(min-width: 376px)' srcSet={heroIMGTablet} />
        <img src={heroIMGMobile} />
      </picture>
      <div className='w-1/3 bg-black'></div>

      <div className='space-y-8 md:space-y-12 lg:space-y-0 md:absolute md:w-[44%] md:right-10 lg:flex gap-10 lg:left-0 lg:pt-[11.875rem] lg:w-screen lg:justify-between lg:px-[10.25rem]'>
        <h1 className='headingM md:text-[4.375rem] md:leading-[4.0625rem] lg:text-[6rem] lg:leading-[5.5rem] uppercase px-4 md:px-0  lg:w-1/2 lg:mix-blend-difference lg:text-white'>
          MODERN <br /> ART GALLERY
        </h1>
        <div className='space-y-8 md:space-y-12 lg:w-[21.875rem]'>
          <p className='bodyS lg:text-[1.375rem] lg:leading-8 px-4 md:px-0 text-darkGray font-light'>
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
    </div>
  );
}
