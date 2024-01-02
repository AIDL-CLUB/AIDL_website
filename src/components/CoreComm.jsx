import React from "react";
import CP from '../components/images/Chair.jpeg';
import Vcp from '../components/images/VChair.jpg';
import Secre from '../components/images/Sec.jpg';
import ASec from './images/ASec.jpg';
import THead from '../components/images/TecH.jpeg';
import ATecH from './images/ATecH.jpg';
import TecC from './images/TecC.jpg';
import CommH from './images/CommH.jpg';
import ACommH from './images/ACommH.jpeg';
import EHead from './images/EvH.jpg';
import AEvH from './images/AEvH.jpeg';
import SponH from './images/SpoH.jpg';
import ASpoH from './images/ASpoH.jpeg';
import PrH from './images/PrH.jpeg';
import APrH from './images/APrH.jpeg';
import CreH from './images/CreH.jpg';
import ACreH from './images/ACreH.jpg';
import Tre from './images/Tre.jpg';
import { Container} from "react-bootstrap";
import Footer from "./Footer";

function CoreComm() {
return(
   <>
    <Container fluid className="corecomm-section" id="CORE COMMITEE">
    <div className="mt-0 justify-items-center gap-1 justify-items-center pt-10 text-gray-400 text-sm pb-8 sm:ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 font-normal text-white text-sm pb-4">
    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white pt-10 mt-10  ">
          Lets Meet the Core Commitee 2023-2024
        </p></div>
        <br />
      
    <div name="CoreComm" id="CORE COMMITEE" className="flex min-h-screen items-center justify-center ">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={CP} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">ChairPerson</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Aditya A</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/aditya-arockiadass-3529ab247/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/Aditya101103">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Vcp} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Vice Chairperson</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Austin Paul</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/austinpaul01">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/AustinPaul01">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Secre} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Secretary</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Neil Coutinho</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/neil-ez/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/Spriggan819">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ASec} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Asst. Secretary</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Harsh Khairnar</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/harsh-khairnar-844001227/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/khairnarhg">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={THead} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Technical Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Shruti Dalvi</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="http://www.linkedin.com/in/shrutidalvi14">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/dalvishruti14">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ATecH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Asst. Technical Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Stephen Mathew</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/stephen-mathew-ab1978232/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/Stephenmathew03">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={TecC} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Technical Coordinator</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Joshua Vinu Koshy</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="http://www.linkedin.com/in/joshua-vinu-koshy-8328b7287">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/Joshua16VK">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={CommH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Communications Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Leona Alphonso</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/leona-alphonso-612b18243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/LeonaAlphonso">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ACommH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Asst. Communication Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Anushka Sawant</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/anushka-sawant-2511b4284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/AnushkaaaaS">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={EHead} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Event Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Angela Viju</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/angela-viju-2a650b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/AnnelaViju">GitHub</a></button>
        </div>
        </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={AEvH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Asst. Event Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Yaseer Quraishi</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/fcrit-aidl-group-2948b5228/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/AIDL-CLUB">GitHub</a></button>
        </div>
      
      </div>

      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={SponH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Sponsorship Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Rose Mary Jose</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/rose-mary-jose-43a632286">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/RoseJ02">GitHub</a></button>
        </div>
      
      </div>

      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ASpoH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Asst. Sponsorship Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Steffi Mary Varghese</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/steffi-varghese-9a40182a0">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/steffimv">GitHub</a></button>
        </div>
      
      </div>

      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={PrH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">PR Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Aathisaya Lancy</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/lancy-nadar-301780280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/Lano2703">GitHub</a></button>
        </div>
      
      </div>

      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={APrH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Asst. PR Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Poorva Raut</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/poorva-raut-896193261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/PoorvaRaut">GitHub</a></button>
        </div>
      
      </div>


      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={CreH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Creative Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Purva Nerkar</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/purva-nerkar-b22043282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/PurvaNerkar4204">GitHub</a></button>
        </div>
      
      </div>



      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ACreH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Asst. Creative Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Prisha Bhosale</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/fcrit-aidl-group-2948b5228/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/prish-a">GitHub</a></button>
        </div>
      
      </div>



      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Tre} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Treasurer</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Ananth Balvalli</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/ananth-balvalli-775b4b27b/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/ananthvgb2003">GitHub</a></button>
        </div>
      
      </div>


    </div>
    </div>
  </Container>
  <div><Footer/>
  </div>
  </>
);};
export default CoreComm;

