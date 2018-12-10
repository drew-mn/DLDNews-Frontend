import React from 'react';
import Slider from 'react-slick';

import politics1 from '../../resources/images/politics1.jpg';
import science1 from '../../resources/images/science1.jpg';
import tech1 from '../../resources/images/tech1.jpg';
import business1 from '../../resources/images/business1.jpg';
import other1 from '../../resources/images/other1.jpg';

const Featured = (props) => {

  const display = props.articles.map((story) => {
    return <p key={story.id}>
      <h2>{story.title}</h2>
      <p>{story.summary}</p>
    </p>
  })

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
              height: '330px'
            }}
          >
          </div>
          {display[0]}
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${science1})`,
              height: '330px'
            }}
          >
          </div>
          {display[5]}
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${tech1})`,
              height: '330px'
            }}
          >
          </div>
          {display[10]}
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${business1})`,
              height: '330px'
            }}
          >
          </div>
          {display[15]}
        </div>

        <div>
          <div
            className="slider_image"
            style={{
              background:`url(${other1})`,
              height: '330px'
            }}
          >
          </div>
          {display[20]}
        </div>

      </Slider>

    </div>
  )

}

export default Featured;
