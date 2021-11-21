/** @format */

import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrapper bgImage={backgroundImg}>
      <Fade bottom>
        <PageHeading>
          <h1>{title}</h1>
          <p>{description}</p>
        </PageHeading>
      </Fade>
      <Container>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Container>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; //verticle
  align-items: center; //horizontal alignment
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const PageHeading = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: Uppercase;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const RightButton = styled(LeftButton)`
  background-color: white !important;
  color: black !important;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
