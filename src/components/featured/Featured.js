import React from 'react';
import Slider from 'react-slick';

import story1 from '../../resources/images/story1.jpg';
import story2 from '../../resources/images/story2.jpg';
import story3 from '../../resources/images/story3.jpg';
import story4 from '../../resources/images/story4.jpg';
import story5 from '../../resources/images/story5.jpg';

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
        width: '580px'
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
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${story3})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${story4})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${story5})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>

      </Slider>

    </div>
  )

}

export default Featured;
