import Image from 'next/image'
import { prefixPath } from '@/utlits/prefixPath'
import React from 'react'

const MediaSosial = () => {
    const galleryImages = [
        "/images/projects/wisuda.jpg",
        "/images/projects/bunga.jpg",
        "/images/projects/Hebat.jpg",
        "/images/projects/80.png",
        "/images/projects/onic.jpg",
        "/images/projects/adha.jpg",
        "/images/projects/who.jpg",
        "/images/projects/ucapan.jpg",
        "/images/projects/Imlek.jpg",
        "/images/projects/purnatugas.jpg",
        "/images/projects/hari.jpg",
        "/images/projects/ramadhan.jpg",
        "/images/projects/pahlawan.jpg",
        "/images/projects/btn1.jpg",
        "/images/projects/btn2.jpg" 
    ]
    const delays = ["delay-0-2s", "delay-0-4s", "delay-0-6s", "delay-0-8s"]
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>SOSIAL MEDIA</p>
                        <h1>Kumpulan Desain Feed Instagram</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={prefixPath("/images/projects/sosial-media(2).jpg")} alt="image" />
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
                                <h3>Social Media Design</h3>
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
                            <p>Portofolio ini menampilkan berbagai desain konten media sosial yang saya rancang berdasarkan pengalaman dalam mengelola kebutuhan visual akun Instagram himpunan selama masa perkuliahan serta pengembangan konten kreatif untuk akun pribadi saya hingga sekarang.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    {galleryImages.map((src, i) => (
                        <div key={src} className="col-lg-4">
                            <div className={`single-image wow fadeInUp ${delays[i % delays.length]}`}>
                                <Image width={1080} height={1350} sizes='100%' style={{width:"100%", height:"auto"}} src={prefixPath(src)} alt="gallery" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MediaSosial
