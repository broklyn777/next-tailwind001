import Head from 'next/head'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Services from '../components/Services'
function Thumbnail() {
  return (
    <>
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout />
      </div>
      <Banner />
      <Services />
    </>
  )
}

export default Thumbnail
