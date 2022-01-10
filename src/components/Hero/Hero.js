import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Assist my employers to build a full stack application and improve my skills by contributing the growth of the company.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1w1i6xP3JN_W6gI-WdSYZVk5l5XF1eIO3/view?usp=sharing'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;