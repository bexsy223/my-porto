import Image from 'next/image'
import React from 'react'

const BannerPage = () => {
    const galleryImages = [
        "/images/projects/banner-1.jpg",
        "/images/projects/banner-2.jpg",
        "/images/projects/banner-3.jpg",
        "/images/projects/banner-4.jpg",
        "/images/projects/banner-5.jpg",
        "/images/projects/banner-6.jpg",
        "/images/projects/banner-7.jpg",
        "/images/projects/banner-8.jpg",
        "/images/projects/banner-9.jpg"
    ]
    const delays = ["delay-0-2s", "delay-0-4s", "delay-0-6s", "delay-0-8s"]
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>BANNER</p>
                        <h1>Kumpulan Desain Banner</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/BANNER.jpg"} alt="image" />
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
                                <h3>Banner Design</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Creative</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Deskripsi
                            </h2>
                            <p>Halaman ini menampilkan koleksi desain banner. Tambahkan file baru ke folder projects dan daftarkan di array untuk memperluas galeri.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    {galleryImages.map((src, i) => (
                        <div key={src} className="col-lg-4">
                            <div className={`single-image wow fadeInUp ${delays[i % delays.length]}`}>
                                <Image width={1200} height={800} sizes='100%' style={{width:"100%", height:"auto"}} src={src} alt="gallery" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BannerPage
