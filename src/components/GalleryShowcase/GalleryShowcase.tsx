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
    <div className='px-4 md:px-[2.4375rem]'>
      <div className='mb-8 md:flex flex-row-reverse gap-[4.25rem]'>
        <picture className='flex-shrink-0'>
          <source media='(min-width: 376px)' srcSet={imageGrid1Tablet} />
          <source media='(min-width: 769px)' srcSet={imageGrid1Desktop} />
          <img src={imageGrid1Mobile} />
        </picture>
        <div className=''>
          <h2 className='text-[3.125rem] leading-[2.8125rem] mt-[1.5625rem] mb-5 uppercase'>
            Your Day at the Gallery
          </h2>
          <p className='bodyS text-darkGray font-light'>
            Wander through our distinct collections and find new insights about our artists. Dive
            into the details of their creative process.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 md:gap-[0.6875rem]'>
        <picture className='shrink-0'>
          <source media='(min-width: 376px)' srcSet={imageGrid2Tablet} />
          <source media='(min-width: 769px)' srcSet={imageGrid2Desktop} />
          <img src={imageGrid2Mobile} />
        </picture>
        <div className='flex flex-col gap-[0.6875rem]'>
          <picture>
            <source media='(min-width: 376px)' srcSet={imageGrid3Tablet} />
            <source media='(min-width: 769px)' srcSet={imageGrid3Desktop} />
            <img src={imageGrid3Mobile} />
          </picture>
          <div className='bg-almostBlack px-6 py-12 flex flex-col gap-6'>
            <h2 className='text-[3.125rem] leading-[2.8125rem] text-white'>COME & BE INSPIRED</h2>
            <p className='bodyS text-white'>
              We’re excited to welcome you to our gallery and see how our collections influence you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
