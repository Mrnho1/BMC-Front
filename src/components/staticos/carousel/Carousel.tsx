import * as React from 'react';
import Box from '@mui/material/Box';

import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';



function Carousel() {
  const items = [
    <>
      <img src="https://github.com/tjfaccipieri.png" alt="" />
      <h2>Thiago Faccipieri</h2>
    </>,
    <img className='imgCar' src="https://images.pexels.com/photos/7282104/pexels-photo-7282104.jpeg" alt="" />,
    <img className='imgCar' src="https://cdn.discordapp.com/attachments/1070726742672679023/1101221857723687002/Captura_de_Tela_283.png" alt="" />,
    <img className='imgCar' src="https://github.com/JaineSantos0.png" alt="" />,
    <img className='imgCar' src="https://github.com/ElizangelaXavierS.png" alt="" />,
  ]

  const responsivo = {
    0: {
        items: 1,
    },
    1024: {
        items: 2,
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
      autoPlayInterval={500} />
  );
}

export default Carousel;