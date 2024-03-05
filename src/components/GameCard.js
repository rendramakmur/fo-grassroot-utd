import Link from "next/link";
import { useEffect, useState } from "react";

export default function GameCard({ data }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [mapUrl, setMapUrl] = useState('')
  const [duration, setDuration] = useState(0)
  const [outfieldQuota, setoutFieldQuota] = useState(0)
  const [goalkeeperQuota, setGoalkeeperQuota] = useState(0)
  const [filledOutfield, setFilledOutfield] = useState(0)
  const [filledGoalkeeper, setFilledGoalkeeper] = useState(0)
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (data) {
      const [datePart, timePart] = data?.gameDate?.split(" ")
      const formattedTime = timePart.slice(0, 5)
  
      const rawDate = new Date(datePart);
  
      const formattedDate = rawDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
  
      setDate(formattedDate)
      setTime(formattedTime)

      setMapUrl(data?.mapUrl)
      setDuration(data?.duration)
      setoutFieldQuota(data?.outfieldQuota)
      setGoalkeeperQuota(data?.goalkeeperQuota)
      setFilledOutfield(data?.filledOutfield)
      setFilledGoalkeeper(data?.filledGoalkeeper)
      setStatus(data?.gameStatus?.name)
    }
  }, [data])

  return (
    <div className="border shadow-md p-5 rounded-md text-xsm my-5">
      <div className="pb-4 w-full">
        <div className="flex items-center justify-between">
          <p className="text-lg font-black">{data?.venueName}</p>
          <div className="flex bg-black rounded-md shadow-md">
            <Link href={mapUrl} className="px-2 py-1 text-center text-white text-xs">Google Map</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-1">
        <div className="block w-full">
          <p className="font-bold">Tanggal</p>
          <p className="">{date}</p>
        </div>
        <div className="block w-full">
          <p className="font-bold">Jam</p>
          <p className="">{time}</p>
        </div>
        <div className="block w-full">
          <p className="font-bold">Durasi</p>
          <p className="">{duration} Menit</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-1">
        <div className="block w-full">
          <p className="font-bold">Player</p>
          <p className="">{filledOutfield}/{outfieldQuota}</p>
        </div>
        <div className="block w-full">
          <p className="font-bold">Goalkeeper</p>
          <p className="">{filledGoalkeeper}/{goalkeeperQuota}</p>
        </div>
        <div className="block w-full">
          <p className="font-bold">Status</p>
          <p className="">{status}</p>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className="px-2 py-2.5 bg-black text-white border rounded-md shadow-sm w-full">Daftar</button>
      </div>
    </div>
  )
}