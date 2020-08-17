import React, { useState, useEffect } from 'react';

import { ParallaxBanner } from 'react-scroll-parallax';

import { Container } from './styles';

interface SectionProps {
  image?: string;
}

const Section: React.FC<SectionProps> = ({ image }) => {
  const [background] = useState(image);

  useEffect(() => {}, [background]);
  return (
    <Container>
      <ParallaxBanner
        className="section-content"
        layers={[
          {
            image: background,
            amount: 0.5,
          },
        ]}
        style={{
          height: '400px',
        }}
      ></ParallaxBanner>
    </Container>
  );
};

export default Section;
