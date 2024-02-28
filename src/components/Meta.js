import Head from "next/head";

export default function Meta(props) {
  const title = `${props?.title} - Grassroot United FC`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description}></meta>
      <meta name="robots" content="index, follow" />
    </Head>
  )
}