import imageGrid1Desktop from "../../assets/desktop/image-grid-1.jpg";
import imageGrid2Desktop from "../../assets/desktop/image-grid-2.jpg";
import imageGrid3Desktop from "../../assets/desktop/image-grid-3.jpg";
import imageGrid1Mobile from "../../assets/mobile/image-grid-1.jpg";
import imageGrid2Mobile from "../../assets/mobile/image-grid-2.jpg";
import imageGrid3Mobile from "../../assets/mobile/image-grid-3.jpg";
import imageGrid1Tablet from "../../assets/tablet/image-grid-1.jpg";
import imageGrid2Tablet from "../../assets/tablet/image-grid-2.jpg";
import imageGrid3Tablet from "../../assets/tablet/image-grid-3.jpg";

export default function GalleryShowcase() {
  return (
    <div className='flex flex-col items-center px-4 md:px-10 lg:px-[10.25rem] gap-3'>
      <div className='flex flex-col-reverse md:flex-row lg:gap-[7.8125rem] mb-4 lg:mb-[1.875rem]'>
        <div className='flex flex-col gap-6 lg:gap-8  max-w-[21.875rem] lg:pr-20 m-auto md:m-0 mb-8'>
          <h2 className='text-[3.125rem] leading-[2.8125rem] text-almostBlack pt-10 lg:pt-[3.75rem]'>
            YOUR DAY AT THE GALLERY
          </h2>
          <p className='bodyS text-darkGray'>
            Wander through our distinct collections and find new insights about our artists. Dive
            into the details of their creative process.
          </p>
        </div>
        <picture className='flex-shrink-0'>
          <source media='(min-width: 1440px)' srcSet={imageGrid1Desktop} />
          <source media='(min-width: 376px)' srcSet={imageGrid1Tablet} />
          <img src={imageGrid1Mobile} />
        </picture>
      </div>
      <div className='flex flex-col md:flex-row gap-3 lg:gap-[1.875rem] items-center md:items-start'>
        <picture className='flex-shrink-0'>
          <source media='(min-width: 1440px)' srcSet={imageGrid2Desktop} />
          <source media='(min-width: 768px)' srcSet={imageGrid2Tablet} />
          <img src={imageGrid2Mobile} alt='Large gallery image' />
        </picture>
        <div className='flex flex-col gap-4 xl:gap-[1.875rem] items-center md:items-start'>
          <picture className=''>
            <source media='(min-width: 769px)' srcSet={imageGrid3Desktop} />
            <source media='(min-width: 376px)' srcSet={imageGrid3Tablet} />
            <img src={imageGrid3Mobile} alt='Small gallery image' />
          </picture>
          <div className='flex flex-col bg-almostBlack text-white gap-6 lg:gap-8 px-7 py-12 mx:px-[1.75rem] md:py-[5.25rem] lg:px-[3rem] lg:py-[4rem] md:max-w-[17.5rem] lg:max-w-[27.8125rem]'>
            <h2 className='text-[3.125rem] leading-[2.8125rem] lg:text-[3.75rem] lg:leading-[3.75rem]'>
              COME & BE INSPIRED
            </h2>
            <p className='bodyS lg:text-[1.375rem] lg:leading-8 font-light'>
              We’re excited to welcome you to our gallery and see how our collections influence you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
