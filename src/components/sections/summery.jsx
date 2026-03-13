import React from 'react'
import Image from 'next/image'
import { prefixPath } from '@/utlits/prefixPath'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import Link from 'next/link'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <Image width={400} height={400} sizes="100vw" style={{ width: "100%", height: "auto" }} src={prefixPath("/images/about/irfan2.png")} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Irfan Hafizh, a Ghrapic Designer.
                                </h2>
                                <p>I am Irfan Hafizh Fadhlurrahman, a Graphic Designer based in Jambi City with a focus on print design. I am passionate about creating visual designs that are clear, attractive, and able to communicate messages effectively. I believe that good design is not only about appearance, but also about how a message can be delivered in a strong and memorable way.</p>
                                <p>I work with tools such as CorelDRAW, Adobe Photoshop, and Canva to create a variety of design materials. Through these tools, I develop visual concepts that are both creative and functional, while paying close attention to layout, color, typography, and overall visual balance. My goal is to produce designs that are visually appealing and easy to understand.</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery
