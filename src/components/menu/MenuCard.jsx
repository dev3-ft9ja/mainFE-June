import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

const MenuCard = ({item}) => {

  const playerRef = useRef(null);

  const handleAdminReroute = () => {
    window.location.replace('https://www.ft9ja.com/admin');
  };

  return (
    <Link to={item.label !== 'Dashboard' ? item.route : undefined}>
      <button
        onMouseEnter={() => playerRef.current.play()}
        onMouseLeave={() => playerRef.current.stop()}
        onClick={item.label === 'Dashboard' ? handleAdminReroute : undefined}
        >
        <div className='md:w-[200px] md:h-[180px] sm:w-[150px] sm:h-[150px] w-[150px] h-[150px] border border-primary bg-white 
          rounded-[5px] flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out justify-center mb-4 mr-3'>
        <div className='md:w-20 md:h-20 sm:w-10 sm-h-10 w-10 h-10 rounded-full bg-lightGreen mb-4 flex flex-col items-center justify-center'>
         <Player
            ref={playerRef}
            autoplay={false}
            loop={true}
            src={item.icon}
            className="h-[100%] w-full object-contain"
          />
        </div>
          <p className='md:text-base sm:text-sm text-xs text-primary hover:text-primary transition duration-300 ease-in-out'>{item.label}</p>
        </div>  
      </button>
    </Link>
  )
}

export default MenuCard