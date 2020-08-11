import React, { Component } from 'react';

import { Container } from 'theme/grid';
import WhenInView from 'components/WhenInView/WhenInView';

import { 
  HeroImage,
  RevealP,
} from './Home.style';

class Home extends Component {
  static propTypes = {};
  render() {
    return (
      <Container>
        <HeroImage>
          <h1>Kate Evelyne.</h1>
          <h2>Full Stack Developer</h2>

        </HeroImage>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
             Being a programmer is a gradual process which requires a lot of dedication and patience. You be able to learn diversely from the environment and friends and being able to adapt to any new programmin language introduced to you at a very short time interval.
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
              A lady doing also doing programming turns to be more difficult and chanllenging to get truth. But consistent determination will help push through and putting in double efforts to be able to put up with the competition with men.
              Endeavours as a female programmer is rewarding at an early stage...
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
              Affirm in your strengths and let no one look down on you.. Everything is possible when you believe in yourself. Get acquinted with every help you can get communication is key. 
            </RevealP>
          }
        </WhenInView>
        
      </Container>
    );
  }
}

export default Home;
