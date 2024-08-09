import SwiperSlider from '../../components/SwiperSlider/SwiperSlider.js';
import { Title, Container } from './Home.style';
const Home = () => {
  return (
    <Container style={{ height: 'auto' }}>
      <Title>
        Empower Your Journey: <br /> Seamless Car Rentals Tailored Just for You!
      </Title>
      <SwiperSlider />
    </Container>
  );
};

export default Home;
