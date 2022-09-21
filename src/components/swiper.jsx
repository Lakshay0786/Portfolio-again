
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.css'

import { Autoplay, Pagination, Navigation } from "swiper";
import dataSlider from './dataSlider'

function SkillSwiper() {
    return (
        <div className="swiper-body">
            <h1 className="swiper-h1">Some Things I've Built. </h1>
            <p className="projects-p">I'm a great believer in learning by building, so I build stuff from scratch, get stuck, google & repeat because everything is figureoutable.</p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {dataSlider.map((obj) => {
                    return (
                        <SwiperSlide>
                            <div className="projects-top">
                                <div className="img-projects-div">
                                    <img className="project-img" src={require(`../project-img/best/${obj.img}`)} alt='photo2' />
                                </div>
                                <div className="text-projects">
                                    <h2>{obj.title}</h2>
                                    <h4>{obj.subTitle}</h4>
                                    <div className="stack">
                                        <h4>{obj.stack1}</h4>
                                        <h4>{obj.stack2}</h4>
                                        <h4>{obj.stack3}</h4>
                                        <h4>{obj.stack4}</h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    )
}

export default SkillSwiper;