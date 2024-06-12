import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title = "Chase the new falvour"/>
      <h1 className="app__header-h1">
        The Key to Fine Dining
      </h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Gericht offers an exquisite culinary experience with meticulously prepared dishes, elegant ambiance, exceptional service, and a focus on quality ingredients.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Header" />
    </div>
  </div>
);

export default Header;
