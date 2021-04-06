import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type ImageSliderProps = {
  imageName: string,
  total: number,
  extension: string
}

export const ImageSlider: React.FC<ImageSliderProps> = (props) => {
  let images : JSX.Element[] = [];

  for (let index = 1; index <= props.total; index++) {
    images.push(<div key={index}><img src={`images/${props.imageName}${index}.${props.extension}`} alt=""/></div>);
  }

  return (
    <Carousel autoPlay infiniteLoop stopOnHover={false} showThumbs={false}>
      {images}
    </Carousel>
  );
}

export default ImageSlider;
