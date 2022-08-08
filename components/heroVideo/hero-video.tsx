import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  @media (min-width: 768px) {
    height: 95%;
  }
`;

export const HeroVideo = () => <Container>
  <iframe
    className='embed-responsive-item'
    src='https://www.youtube.com/embed/h-bS0NuYYfA?autoplay=1&mute=1&loop=1&controls=0&playlist=h-bS0NuYYfA'
    title='AdaLoversConf 2021'
    frameBorder='0'
    allowFullScreen
  />
</Container>;
