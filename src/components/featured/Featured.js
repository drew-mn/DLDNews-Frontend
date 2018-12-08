import React from 'react';
import Slider from 'react-slick';

import story1 from '../../resources/images/story1.png';

const Featured = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000
  }

  return (
    <div
      className="slider_wrapper"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '600px'
      }}
    >

      <Slider {...settings}>
        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${story1})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
          <p>Headline goes here</p>

        </div>
      </Slider>

    </div>
  )

}

export default Featured;
