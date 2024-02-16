import { useState} from 'react';
import React from 'react'
import '../Style/Card.css';


export default function Card({ id, title, thumbnail, card }) {
    const [state, setcurrentState] = useState(false);
  
    const openModal = () => {
      setcurrentState(true);
    };
  
    const closeModal = () => {
      setcurrentState(false);
    };
    const Dateformat = (unixTimestamp) => {
      const dateObject = new Date(unixTimestamp * 1000);
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return dateObject.toLocaleDateString('en-US', options);
  };

  return (
    <div> 
    <div className="card">
    <div className="container" onClick={openModal}>
      <img src={thumbnail.small} alt="Avatar" className="image" ></img>
      <div className="midd">
        <div className="text">Learn More</div>
      </div>
    </div>

    <h1 onClick={openModal}>{title}</h1> 
    <div className="container">
      <p>{card.content}</p>
    </div>

    <div >
    <div >
      {card.author.name} - {card.author.role}
    </div>

    <div >
    {Dateformat(card.date)}
    </div>
    </div>
    </div>

  {state && (
    <div className="Modal">
      <p className="closemodal" onClick={closeModal}> X </p>
      <div className="pop">
        <div>
          <img src={thumbnail.large} alt="Avatar"></img>
        </div>

        <h1>{title}</h1>
        <div>
          <p>{card.content}</p>
        </div>
        <div className="footer">
          <img src={card.author.avatar} alt="Author's Avatar" className='img'/>
          <p>
            {card.author.name} - {card.author.role}
          </p>
        </div>
      </div>
    </div>
  )}
</div>
);
}