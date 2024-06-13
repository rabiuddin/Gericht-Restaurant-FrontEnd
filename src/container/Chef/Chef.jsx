import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={ images.chef } alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title = "Chef's Word"/>

      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src= {images.quote } alt="quote" />
          <p className="p__opensans">
            At Gericht, we believe that every dish tells a story.
          </p>
        </div>
        <p className="p__opensans">Our commitment to culinary excellence, innovation, and the finest ingredients ensures that each plate is a masterpiece, crafted with passion and precision.</p>
      </div>
      
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
