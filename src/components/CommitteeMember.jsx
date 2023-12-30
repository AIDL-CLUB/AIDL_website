import React from "react";

const CommitteeMember = ({ image, position, name, linkedin, github }) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{position}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{name}</p>
        <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
        <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href={linkedin}>LinkedIn</a></button>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href={github}>GitHub</a></button>
      </div>
    </div>
  );
};

export default CommitteeMember;
