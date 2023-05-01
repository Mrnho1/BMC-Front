import * as React from 'react';
import Box from '@mui/material/Box';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import '../carousel/Carousel.css'



function Carousel() {
  const items = [
    <img className='imgCar' src='https://i.imgur.com/T6qYVJR.png' alt="" />,
    <img className='imgCar' src="https://i.imgur.com/eWrfSlT.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/rFj22Vd.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/VRGhATR.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/xquMUpQ.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/7CXltqL.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/BsKfZn8.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/Z9XTO7S.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/98wCNx5.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/XWxCHXK.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/Ke3yTPm.png" alt="" />,
    <img className='imgCar' src="https://i.imgur.com/r42ujtF.png" alt="" />,
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