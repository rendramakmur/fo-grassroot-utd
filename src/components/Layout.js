import Navbar from "./Navbar";

export default function Layout({ children }) {
  console.log(children)

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}