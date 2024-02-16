import React, { useState,useEffect } from 'react'
import Card from './Card';
import '../Style/Main.css';


function Main () {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
            );
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json();
            setData(responseData);
            
          } catch (error) {
            setError(error.message);
            
          }
        };
        fetchData();
    }, []);
  


  return (
    <div className="Main">
   

    {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
    <div className="cardtiles">
      {data &&
        data.map((card) => (
          <Card
            key={card.id} 
            id={card.id}
            title={card.title}
            thumbnail={card.thumbnail}
            card={card}
          />
        ))}
    </div>
  </div>
);
}

export default Main;