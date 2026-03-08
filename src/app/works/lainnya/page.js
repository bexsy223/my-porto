import Image from 'next/image'
import React from 'react'

const Lainnya = () => {
  const portraitImages = [
    "/images/projects/other-1.jpg",
    "/images/projects/other-2.png",
    "/images/projects/other-4.jpg",
  ]
  const landscapeImages = [
    "/images/projects/other-3.jpg",
    "/images/projects/other-5.jpg",
    "/images/projects/other-6.jpg",
  ]
  const delays = ["delay-0-2s", "delay-0-4s", "delay-0-6s", "delay-0-8s"]

  return (
    <div className="single-project-page-design">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center pb-30">
            <p>Lainnya</p>
            <h1>Desain Lainnya</h1>
          </div>
        </div>
      </div>
      <div className="single-project-image">
        <Image
          width={1095}
          height={1072}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={"/images/projects/other.jpg"}
          alt="image"
        />
      </div>
      <div className="container pt-30">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-project-page-left wow fadeInUp delay-0-2s">
              <div className="single-info">
                <p>Year</p>
                <h3>2024</h3>
              </div>
              <div className="single-info">
                <p>Client</p>
                <h3>Bento Studio</h3>
              </div>
              <div className="single-info">
                <p>Services</p>
                <h3>Graphic Design</h3>
              </div>
              <div className="single-info">
                <p>Project</p>
                <h3>Creative</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="single-project-page-right wow fadeInUp delay-0-4s">
              <h2>Deskripsi</h2>
              <p>
                Kumpulan desain yang tidak masuk kategori lain. Galeri ini
                menampilkan variasi karya untuk kebutuhan beragam.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-30">
          {portraitImages.map((src, i) => (
            <div key={src} className="col-lg-4">
              <div
                className={`single-image wow fadeInUp ${delays[i % delays.length]}`}
                style={{ position: "relative", width: "100%", paddingTop: "133.33%" }}
              >
                <Image fill sizes="100%" style={{ objectFit: "cover" }} src={src} alt="gallery" />
              </div>
            </div>
          ))}
        </div>
        <div className="row pt-30">
          {landscapeImages.map((src, i) => (
            <div key={src} className="col-lg-4">
              <div
                className={`single-image wow fadeInUp ${delays[i % delays.length]}`}
                style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
              >
                <Image fill sizes="100%" style={{ objectFit: "cover" }} src={src} alt="gallery" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lainnya
