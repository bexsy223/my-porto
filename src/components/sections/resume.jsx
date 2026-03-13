import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2021 - 2024'} title={'Divisi PDD'} institution={'Himapel Poljam'} />
                                    <Card year={'2025 - 2026'} title={'Intership Divisi SDM'} institution={'PT Perkebunan Nusantara IV'} />
                                    <Card year={'2026 - present'} title={'Ghrapic Designer'} institution={'Mahakarya Advertising'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2015 - 2017'} title={'Junior High School'} institution={'SMP Muhammadiyah Jambi City'} />
                                    <Card year={'2017 - 2020'} title={'Vocational high School'} institution={'SMK N 3 Jambi City'} />
                                    <Card year={'2021 - 2025'} title={'Diploma in Information Technology'} institution={'Politeknik Jambi City'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}