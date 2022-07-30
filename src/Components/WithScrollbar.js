import React from "react";
import Carousel from "react-multi-carousel";
import "./WithScrollbar.css";

const data = [
  {
    id: 1,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 2,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 3,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 4,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 5,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 6,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 7,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 8,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 9,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 10,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 11,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 12,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 13,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
  {
    id: 14,
    imageLink:
      "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
    title: "No Fly No Stress",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={(e) => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide,
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <Carousel
        ssr={false}
        ref={(el) => (this.Carousel = el)}
        partialVisbile={true}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={this.state.additionalTransfrom}
        beforeChange={(nextSlide) => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >
        {data.map((v) => {
          return (
            <div class="image-container increase-size w-3/5 ">
              <img
                draggable={false}
                style={{
                  width: "100%",
                  heigh: "500px",
                  cursor: "pointer",
                }}
                className="rounded-tl-md rounded-tr-md"
                src={v.imageLink}
              />
              <div class="image-container-text bg-blue-800  text-center text-xs p-1 text-white mb-2 rounded-bl-md rounded-br-md ">
                <p>{v.title}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default WithScrollbar;
