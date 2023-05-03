import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import '../carousel/Carousel.css'

function Carousel() {
  const items = [
    <img className='imgCarousel' src='https://i.imgur.com/Ysu3EyN.png' alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/hwGeOjE.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/KSGth0S.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/ShOqpb4.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/qNG82mn.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/UreEBRn.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/G8180Ca.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/XUhx0QK.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/zcd3HDJ.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/MuWqC7d.png" alt="" />,
    <img className='imgCarousel' src="https://i.imgur.com/7mfYkud.png" alt="" />,
  ]

  const responsivo = {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
      itemsFit: 'contain',
    }
  }

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      infinite
      responsive={responsivo}
      disableDotsControls={true}
      disableButtonsControls={true}
      autoPlayInterval={1500} />
  );
}

export default Carousel;