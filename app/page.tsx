import Image from "next/image";

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
            <button className="demo">BOOK A FREE DEMO</button>
            <button className="partner">PARTNER WITH US</button>
          </div>

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
            className="main-img"
          />

          <div className="label after">
            After school & Competition
          </div>

          <div className="label iot">
            IoT & Arduino
          </div>

          <div className="label robotics">
            Robotics & AI
          </div>

          <div className="label stem">
            STEM Lab setup
          </div>

<Image src="/small1.jpg" alt="img1" width={70} height={70} className="floating img1" />
<Image src="/small2.jpg" alt="img2" width={70} height={70} className="floating img2" />
<Image src="/small3.png" alt="img3" width={70} height={70} className="floating img3" />
<Image src="/small4.png" alt="img4" width={70} height={70} className="floating img4" />
<Image src="/small5.png" alt="img5" width={70} height={70} className="floating img5" />



        </div>

      </section>


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
  );
}