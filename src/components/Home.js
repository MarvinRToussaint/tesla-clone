/** @format */

import styled from "styled-components";
import Section from "./Section";
import Header from "./Header";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Fade left>
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
      </Fade>
      <Fade right>
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
      </Fade>
      <Fade left>
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
      </Fade>
      <Fade right>
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
        />
      </Fade>
      <Fade left>
        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Then a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
        />
      </Fade>
      <Fade bottom big>
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        />
      </Fade>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
