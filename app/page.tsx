import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            TRUSTED BY 50+ SCHOOLS
          </span>

          <h1>
            Empowering India <br />
            Through Hands-On <br />
            STEM Learning
          </h1>

          <p>
            Practical Learning for the Next Generation
          </p>

          <div className="hero-buttons">

            <button className="demo">
              BOOK A FREE DEMO
            </button>

            <button className="partner">
              PARTNER WITH US
            </button>

          </div>

          {/* STICKERS */}

          <div className="stickers">

            <Image
              src="/certificate.png"
              alt="certificate"
              width={200}
              height={140}
            />

            <Image
              src="/stem-accredited.png"
              alt="stem accredited"
              width={200}
              height={90}
            />

          </div>

        </div>

        <div className="hero-right">
          <Image
            src="/hero.jpg"
            alt="students"
            width={450}
            height={500}
          />
        </div>

      </section>

      {/* GREEN STATS BAR */}

      <section className="stats">

        <div className="stats-box">

          <div className="stat">
            <h2>10,000+</h2>
            <p>STUDENTS EMPOWERED</p>
          </div>

          <div className="divider"></div>

          <div className="stat">
            <h2>50</h2>
            <p>SCHOOLS PARTNERED</p>
          </div>

          <div className="divider"></div>

          <div className="stat">
            <h2>500</h2>
            <p>TEACHERS TRAINED</p>
          </div>

          <div className="divider"></div>

          <div className="stat">
            <h2>5</h2>
            <p>YEARS OF INNOVATION</p>
          </div>

        </div>

      </section>

    </>
  )
}