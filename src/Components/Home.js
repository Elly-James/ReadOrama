import React from 'react';
import homeBg from '../home.png';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${homeBg})` }}>
      <h1 className='page'>Welcome to ReadOrama</h1>
      <p className='page'>Your One Stop Shop For All Your Books Solutions</p>
      <a href="/shop"><button>Shop Now</button></a>
    </div>
  );
}

export default Home;