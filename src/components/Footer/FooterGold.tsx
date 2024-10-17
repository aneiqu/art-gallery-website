import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function FooterGold() {
  return (
    <div className={`px-8 py-12 flex flex-col space-y-9 bg-gold`}>
      <img src={logoDark} className='w-[6.875rem] h-[2.5rem]' />
      <p className='bodyS'>
        The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
        Find us at 99 King Street, Newport, USA.
      </p>
      <div className='flex space-x-5'>
        <a href=''>
          <img src={iconFacebook} className='invert-[1]' alt='Facebook icon' />
        </a>
        <a href=''>
          <img src={iconInstagram} className='invert-[1]' alt='Instagram icon' />
        </a>
        <a href=''>
          <img src={iconTwitter} className='invert-[1]' alt='Twitter icon' />
        </a>
      </div>
    </div>
  );
}
