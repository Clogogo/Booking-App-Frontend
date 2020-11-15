import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                src='https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/cover23.jpeg'
                text='Explore the hidden waterfall of Estonia'
                label='Adventure'
                path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
