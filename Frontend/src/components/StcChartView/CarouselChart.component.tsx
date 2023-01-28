//React core imports
import { FC } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules for swiper
import { Keyboard, Pagination, Navigation } from "swiper";
//Props for type component
type CarouselChartProps = {
  toggleChart: string;
  renderBar: JSX.Element[] | null;
  renderLine: JSX.Element[] | null;
};
//Single chart for type=Month in searchParam
const CarouselChart: FC<CarouselChartProps> = ({
  toggleChart,
  renderBar,
  renderLine,
}) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Monthly chart for alberghi or extra-alberghi */}
      {renderBar !== null && toggleChart === "Bar"
        ? renderBar.map((e) => <SwiperSlide>{e}</SwiperSlide>)
        : toggleChart === "Line" && renderLine !== null
        ? renderLine.map((e) => <SwiperSlide>{e}</SwiperSlide>)
        : null}
    </Swiper>
  );
};

export default CarouselChart;
