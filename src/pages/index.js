import Banner from '@/components/Home/Banner'
import Meta from '@/components/Meta'

export default function Home() {
  return (
    <main className="mx-auto md:max-w-md h-screen w-screen bg-black">
      <Meta title="Home" description="Grassroot United FC - Football for everyone | Join us and play fun football together" />
      <Banner />
    </main>
  )
}
