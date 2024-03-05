import Image from 'next/image';

export default function Banner() {
  return (
    <div className="h-1/2 bg-black">
      <div className="flex justify-center py-20">
        <Image src="/logo-img.png" width={100} height={100} alt="grassroot united fc logo" priority="true"></Image>
      </div>
      <div>
        <h1 className="text-center text-m text-white font-black">WE ARE UNDER CONSTRUCTION.</h1>
      </div>
    </div>
  )
}