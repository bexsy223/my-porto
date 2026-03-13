'use client'
import React from 'react'
import Image from 'next/image'
import { prefixPath } from '@/utlits/prefixPath'
import Link from 'next/link';
import { RiInstagramFill, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <Image width={400} height={400} sizes="100vw" style={{ width: "100%", height: "auto" }} src={prefixPath("/images/about/irfan1.jpg")} alt="About Me" />
                                <h2>Irfan Hafizh</h2>
                                <p>I am a Web Developer and Ghrapic Designer.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href="https://www.instagram.com/irfan_hafis07?igsh=MXFjbWIwdGhkazB3Zg==" target="_blank"><RiInstagramFill size={20} /></Link></li>
                                        <li><Link href="https://www.linkedin.com/in/irfan-hafizh-fadhlurrahman-a691922a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="https://github.com/Bexsy223" target="_blank"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                   I’m Irfan Hafizh, a graphic designer who specializes in print design, turning ideas into clean, impactful, and print-ready visuals.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a href="/CV-Irfan_Hafizh.pdf" download className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </a>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero
