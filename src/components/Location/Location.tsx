import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import Footer from "../Footer/Footer";
import "./Location.css";

export default function Location() {
  return (
    <div>
      <a href='/' className='flex absolute z-[2]'>
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
        <Marker position={[41.48, -71.311]}></Marker>
      </MapContainer>
      <div className='flex flex-col gap-12 px-4 py-12 bg-almostBlack'>
        <h2 className='text-[3.125rem] leading-[2.8125rem] text-white'>OUR LOCATION</h2>

        <div className='flex flex-col space-y-5'>
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
