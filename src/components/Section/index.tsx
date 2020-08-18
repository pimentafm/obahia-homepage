import React, { useState, useEffect } from 'react';

import { ParallaxBanner } from 'react-scroll-parallax';

import { Container } from './styles';

interface SectionProps {
  image?: string;
}

const Section: React.FC<SectionProps> = ({ image }) => {
  const [backgroundImage] = useState(image);

  useEffect(() => {
  }, [backgroundImage]);
  return (
    <Container>
      <ParallaxBanner
        className="section-content"
        layers={[
          {
            image: backgroundImage,

            amount: 0.5,
          },
        ]}
      >
        <h1>Section</h1>
      </ParallaxBanner>
    </Container>
  );
};

export default Section;
