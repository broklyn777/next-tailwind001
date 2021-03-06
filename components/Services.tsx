import Image from 'next/image'
import styles from '../styles/Services.module.css'

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Vad vi erbjuder!</h1>
        <h2 className={styles.subtitle}>
          Ett helhetskoncept för att <br />
          du ska lyckas digitalt!
        </h2>
        <div className={styles.services}>
          <div className={styles.service}>
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
          </div>
          {/* <div className={styles.service}>
                <div className={styles.catInfo}>{service.desc}</div>
                <span className={styles.cat}>{service.title}</span>
                <div className={styles.media}>
                  {service.video ? (
                    <video
                      className={styles.video}
                      src={`/img/${service.video}`}
                      muted
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div> */}
        </div>
      </div>
    </div>
  )
}

export default Services
