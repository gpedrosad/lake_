import SocialMediaIcons from './SocialMediaIcons';
import { FaWhatsapp } from "react-icons/fa";
//img
import logo from '/public/images/logo-lake.png'

const Footer = () => {
  return (
    <>
      <div className="bg-custom-green grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="md:w-3/6 mt-10" />
        </div>
        <div className="flex flex-col md:ml-36 xs:items-center md:items-start justify-center">
          <h1 className="font-rufina font-bold text-white text-3xl sm:text-3xl md:text-3xl xl:text-4xl pb-5">Contact</h1>
          <p className="text-white text-xl md:text-md xl:text-xl">(61) 455916688</p>
          <p className="text-white mb-10 text-xl md:text-md xl:text-xl">info@lakebarrine.com.au</p>
          <span className="text-white text-xl md:text-md xl:text-xl text-center md:text-left">Lake Barrine Teahouse</span>
          <span className="text-white text-xl md:text-md xl:text-xl ml-5 mr-5 text-center md:text-left md:ml-0 md:mr-0">Gillies Highway</span>
          <span className="text-white text-xl md:text-md xl:text-xl ml-5 mr-5 text-center md:text-left md:ml-0 md:mr-0">Queensland</span>
        </div>
        <div className="flex flex-col xs:items-center md:items-start justify-center p-16 sm:pt-3 md:pt-24">
          <h1 className="whitespace-nowrap font-rufina font-bold text-white text-3xl md:text-3xl xl:text-3xl pb-5">Opening 7 days a week</h1>
          <p className="text-white text-xl md:text-md xl:text-xl font-bold">9.00 am - 15.00 pm</p>
          <p className="sm:mr-0 text-white sm:text-xl md:text-md xl:text-xl text-center md:text-left mt-10">
            Please note:
            <br />Our kitchen closes 30 minutes before the teahouse closing time.
          </p>
          <h1 className="whitespace-nowrap font-rufina font-bold text-white text-3xl sm:text-3xl md:text-3xl xl:text-3xl md:pt-10 sm:pb-3 sm:pt-12 mt-4 xs:pt-6">Stay connected</h1>
          <SocialMediaIcons/>
        </div>
      </div>

      <div className="bg-custom-green grid grid-cols-1 place-items-center">
        <div className="w-full bg-yellow-500 h-0.5"></div>
        <p className="m- text-white">© 2025. All Rights Reserved</p>

        {/* agregado: crédito que abre WhatsApp al +56968257817 con mini ícono */}
        <p className="mt-1 text-white/90 text-xs">
          Created by{" "}
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4 decoration-white/60 hover:decoration-white"
            title="Contact Gonzalo Pedrosa by WhatsApp"
          >
            <span>Gonzalo Pedrosa</span>
            <FaWhatsapp className="h-3.5 w-3.5 opacity-90 -mt-[1px]" aria-hidden />
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;