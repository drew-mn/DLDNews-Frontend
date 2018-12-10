import React from 'react';
import Slider from 'react-slick';

import politics1 from '../../resources/images/politics1.jpg';
import science1 from '../../resources/images/science1.jpg';
import tech1 from '../../resources/images/tech1.jpg';
import business1 from '../../resources/images/business1.jpg';
import other1 from '../../resources/images/other1.jpg';

const Featured = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    fade: true

  }

  return (
    <div
      className="slider_wrapper"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '580px',
        height: '500px'

      }}
    >

      <Slider {...settings}>
        <div>
          <div
            className="slider_image"
            style={{
              background: `url(${politics1})`,
              height: '350px'
            }}
          >
          </div>
          <h2>{props.articles.title}</h2>
          <p>{props.articles.summary}</p>
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${science1})`,
              height: '350px'
            }}
          >
          </div>
          <h2>Heading</h2>
          <p>Summary</p>
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${tech1})`,
              height: '350px'
            }}
          >
          </div>
          <h2>Heading</h2>
          <p>Summary</p>
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${business1})`,
              height: '350px'
            }}
          >
          </div>
          <h2>Heading</h2>
          <p>Summary</p>
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${other1})`,
              height: '350px'
            }}
          >
          </div>
          <h2>Heading</h2>
          <p>Summary</p>
        </div>

      </Slider>

    </div>
  )

}

export default Featured;
