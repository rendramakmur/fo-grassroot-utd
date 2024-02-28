import Meta from "@/components/Meta";
import Image from "next/image";

export default function Login() {
  return (
    <section>
      <Meta title="Login" description="Login to Grassroot United FC" />
      <div className="">
        <div className="flex flex-col items-center px-6 py-8 mx-auto h-screen">
            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 py-10">
              <p>Logo</p>
              {/* <Image src="/logo-img.png" width={100} height={100} alt="grassroot united fc logo" priority="true"></Image> */}
            </a>
            <div className="px-10 space-y-4 w-full">
                <h1 className="text-2xl font-black leading-tight tracking-tight text-gray-900">
                    Sign in
                </h1>
                <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="player@mail.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                    {/* <div className="flex items-center justify-between">
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                    </div> */}
                    <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    <p className="text-sm font-light text-gray-500">
                        Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline">Register</a>
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}