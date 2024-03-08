import React from 'react';
import logo from '@assets/img/logo.svg';

export default function Popup(): JSX.Element {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-[#2cb]">
      <header className="flex flex-col items-center justify-center text-white">


        <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />


        <p>Popup styled with TailwindCSS!</p>
      </header>
    </div>
  );
}
