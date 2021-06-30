import React from 'react';
import {Table, MediaBox, Icon, Row, Card, CardTitle, Col, Slider, Slide, Caption, Carousel} from 'react-materialize';
import 'materialize-css';


const NaszeRealizacje = () => {
    return(
      <Row>
        <Col
           m={10}
           s={12}
           push="m1"
        >
<Carousel
  carouselId="Carousel-2"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
  <div className="orange">
    <h2>
      project no 1

    </h2>
   <img src='https://pluspng.com/img-png/png-machine-steam-machine-png-by-mysticmorning-900.png' alt='' height='800px' width='80%' />
  </div>
  <div className="amber">
    <h2>
      Second Panel
    </h2>
    <p>
      This is your second panel
    </p>
  </div>
  <div className="green">
    <h2>
      Third Panel
    </h2>
    <p>
      This is your third panel
    </p>
  </div>
  <div className="blue">
    <h2>
      Fourth Panel
    </h2>
    <p>
      This is your fourth panel
    </p>
  </div>
</Carousel>
</Col>
</Row>
)
}
export default NaszeRealizacje;