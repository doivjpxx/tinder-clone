import Swiper from 'components/Swiper';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = (): JSX.Element => {
  return (
    <Container>
      <Swiper />
      <Swiper />
      <Swiper />
      <Swiper />
    </Container>
  );
};

export default Home;
