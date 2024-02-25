import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <title>{props.title} - Grassroot United FC</title>
      <meta name="description" content={props.description}></meta>
      <meta name="robots" content="index, follow" />
    </Head>
  )
}