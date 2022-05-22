import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Services from '../components/Services'
function Thumbnail() {
  return (
    <>
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
        {/* <div className={styles.service}>
          <div className={styles.catInfo}></div>
          <span className={styles.cat}></span>
          <div className={styles.media}>
            (
            <video
              className={styles.video}
              src={`/Avocado.mp4`}
              muted
              autoPlay
              loop
            />
            ) : (
            <Image
              src={`/Avocado.png`}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt=""
            />
            ){'}'}
          </div>
        </div> */}
      </>
      <div className="relative mx-auto mt-28  h-[140vh]  max-w-2xl py-16 px-4 sm:py-24  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3  xl:gap-x-8">
          <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <Image
              src={`/Avocado.png`}
              className="rounded-sm object-cover md:rounded"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Thumbnail

// import Image from 'next/image'

// function Avatar() {
//   return (
//     <Image
//       src="/static/images/ester-spoke.jpg"
//       alt="me"
//       width="64"
//       height="64"
//     />
//   )
// }

// export default Avatar

// import Image from 'next/image'
// import Link from 'next/link'
// import styles from '../styles/Services.module.css'

// const Services = ({ services }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.info}>
//         <h1 className={styles.title}>Vad vi erbjuder!</h1>
//         <h2 className={styles.subtitle}>
//           Ett helhetskoncept för att <br />
//           du ska lyckas digitalt!
//         </h2>
//         <div className={styles.services}>
//           {services.map((service) => (
//             <Link key={service.id} href={`/products/${service.name}`} passHref>
//               <div className={styles.service}>
//                 <div className={styles.catInfo}>{service.desc}</div>
//                 <span className={styles.cat}>{service.title}</span>
//                 <div className={styles.media}>
//                   {service.video ? (
//                     <video
//                       className={styles.video}
//                       src={`/img/${service.video}`}
//                       muted
//                       autoPlay
//                       loop
//                     />
//                   ) : (
//                     <Image
//                       src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
//                       width="100%"
//                       height="100%"
//                       layout="responsive"
//                       objectFit="cover"
//                       alt=""
//                     />
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services
