import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel}  from 'react-responsive-carousel';

import BANNER_1 from '../../Assets/images/welcome_banner_1.jpeg';
import BANNER_2 from '../../Assets/images/welcome_banner_2.jpeg';
import BANNER_3 from '../../Assets/images/welcome_banner_3.jpeg';

export class WelcomeBanner extends React.Component {
  
	render() {
    return (
      <div id="welcome-banner-wrapper">
        <Carousel showArrows={true} 
                  showStatus={false} 
                  showThumbs={false} 
                  showIndicators={false}
                  autoPlay={true}
                  stopOnHover={true}
                  interval={10000}>
          <div>
            <img src={BANNER_1} />
          </div>
          <div>
            <img src={BANNER_2} />
          </div>
          <div>
            <img src={BANNER_3} />
          </div>
        </Carousel>
      </div>
    );
	}  
}

export default WelcomeBanner;