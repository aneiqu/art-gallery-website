import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import iconLocation from "../../assets/icon-location.svg";
import Footer from "../Footer/Footer";
import "./Location.css";

export default function Location() {
  const themeLocationIcon = new Icon({
    iconUrl: iconLocation,
    iconSize: [66, 88],
    iconAnchor: [33, 88],
  });
  return (
    <div>
      <a href='/' className='flex absolute z-[2] md:ml-[2.4375rem] xl:ml-[9.75rem]'>
        <div className='bg-gold p-6 w-fit'>
          <img src={arrowLeft} className='w-2 h-6'></img>
        </div>
        <div className='bg-almostBlack py-6 px-8 w-fit'>
          <p className='fontShoulderExtraBold text-xl text-white'>BACK TO HOME</p>
        </div>
      </a>
      <MapContainer center={[41.48, -71.311]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker icon={themeLocationIcon} position={[41.48, -71.311]}></Marker>
      </MapContainer>
      <div className='flex flex-col md:flex-row gap-12 md:gap-[4.25rem] px-4 md:px-[2.4375rem] md:pt-[5.5rem] md:pb-[5rem] py-12 lg:px-[10.3125rem] lg:py-[6.5rem] bg-almostBlack lg:justify-between'>
        <h2 className='text-[3.125rem] leading-[2.8125rem] lg:text-[4.375rem] lg:leading-[4.375rem] text-white lg:w-1/4'>
          OUR LOCATION
        </h2>

        <div className='flex flex-col space-y-5 lg:w-1/2'>
          <h3 className='text-[2rem] leading-[2rem] text-gold'>99 King Street</h3>
          <p className='bodyS text-white'>
            Newport <br /> RI 02840 <br /> United States of America
          </p>
          <p className='bodyS text-white'>
            Our newly opened gallery is located near the Edward King House on 99 King Street, the
            Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
      <Footer color='gold' />
    </div>
  );
}
