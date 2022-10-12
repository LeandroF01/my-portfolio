import React from "react";
import { Projects } from "./Projects";
import { results } from "../../utils/db";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/bundle";
console.log(results);

export const SliderScroll = () => {
  return (
    <section className="flex py-16 px-0 overflow-hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        {results.map((project) => (
          <SwiperSlide key={project.id}>
            <Projects project={project} key={project.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
