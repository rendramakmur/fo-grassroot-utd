import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function LoadingPage () {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg text-black font-black">Please wait{dots}</p>
    </div>
  );
};