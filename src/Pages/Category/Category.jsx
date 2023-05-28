import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/assets/home/slide1.jpg";
import slide2 from "../../assets/assets/home/slide2.jpg";
import slide3 from "../../assets/assets/home/slide3.jpg";
import slide4 from "../../assets/assets/home/slide4.jpg";
import slide5 from "../../assets/assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Online Order"}
        subHeading={"from 10.00am to 11.00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="uppercase text-center -mt-12 text-3xl text-white">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="uppercase text-center -mt-12 text-3xl text-white">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="uppercase text-center -mt-12 text-3xl text-white">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="uppercase text-center -mt-12 text-3xl text-white">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="uppercase text-center -mt-12 text-3xl text-white">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
