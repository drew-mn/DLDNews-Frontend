import React from 'react';
import Slider from 'react-slick';

import story1 from '../../resources/images/story1.png';
import story2 from '../../resources/images/story2.jpg';

const Featured = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 8000
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

        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${story2})`,
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
