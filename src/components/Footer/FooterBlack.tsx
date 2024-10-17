import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import logoLight from "../../assets/logo-light.svg";

export default function FooterBlack() {
  return (
    <div className={`px-8 py-12 flex flex-col space-y-9 bg-almostBlack`}>
      <img src={logoLight} className='w-[6.875rem] h-[2.5rem]' />
      <p className='bodyS text-white'>
        The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
        Find us at 99 King Street, Newport, USA.
      </p>
      <div className='flex space-x-5'>
        <a href=''>
          <img src={iconFacebook} alt='Facebook icon' />
        </a>
        <a href=''>
          <img src={iconInstagram} alt='Instagram icon' />
        </a>
        <a href=''>
          <img src={iconTwitter} alt='Twitter icon' />
        </a>
      </div>
    </div>
  );
}
