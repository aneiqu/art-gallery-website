import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";

export default function Footer({ color }: { color: string }) {
  return (
    <div
      className={`px-8 md:px-[2.4375rem] py-12 md:py-[3.5rem] lg:px-[10.3125rem] lg:py-20 flex flex-col md:flex-row space-y-9 md:space-y-0 justify-between ${
        color === "almostBlack" ? "bg-almostBlack" : "bg-gold"
      }`}
    >
      <img
        src={color === "almostBlack" ? logoLight : logoDark}
        className='w-[6.875rem] h-[2.5rem] lg:w-[10rem] lg:h-[3.625rem]'
      />
      <p
        className={`bodyS font-light md:w-5/12 ${
          color === "almostBlack" ? "text-white" : "text-almostBlack"
        }`}
      >
        The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
        Find us at 99 King Street, Newport, USA.
      </p>
      <div
        className={`flex space-x-5 flex-shrink-0 md:w-3/12 md:justify-end ${
          color === "almostBlack" ? "" : "invert"
        }`}
      >
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
