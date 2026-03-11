import Image from 'next/image'
import { prefixPath } from '@/utlits/prefixPath'
import React from 'react'

const BannerSpanduk = () => {
    const galleryImages = [
        "/images/projects/banner-spanduk.jpg",
        "/images/projects/banner-spanduk1.jpg",
        "/images/projects/banner-spanduk2.jpg",
        "/images/projects/banner-spanduk3.jpg",
        "/images/projects/banner-spanduk4.jpg",
        "/images/projects/banner-spanduk5.jpg",
        "/images/projects/banner-spanduk6.jpg",
        "/images/projects/banner-spanduk7.jpg"

    ]
    const delays = ["delay-0-2s", "delay-0-4s", "delay-0-6s", "delay-0-8s"]
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>BANNER SPANDUK</p>
                        <h1>Kumpulan Desain Banner Spanduk</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={prefixPath("/images/projects/spanduk.jpg")} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                           <div className="single-info">
                                <p>Author</p>
                                <h3>Irfan Hafizh</h3>
                            </div>
                            <div className="single-info">
                                <p>Title</p>
                                <h3>Banner Spanduk</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Portofolio</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Deskripsi
                            </h2>
                            <p>Kumpulan karya pada halaman ini menampilkan desain banner spanduk yang saya kerjakan untuk berbagai keperluan acara, promosi, dan publikasi, dengan menekankan visual yang profesional dan penyampaian pesan yang efektif.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    {galleryImages.map((src, i) => (
                        <div key={src} className="col-lg-6 col-md-6">
                            <div className={`single-image wow fadeInUp ${delays[i % delays.length]}`}>
                                <Image width={1600} height={900} sizes='(min-width: 992px) 50vw, 100vw' style={{width:"100%", height:"auto"}} src={prefixPath(src)} alt="gallery" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BannerSpanduk
