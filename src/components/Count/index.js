import React, { useState, useEffect } from 'react';

import "./index.css"

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  

  const handleIncrement = () => {
   
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount.toString());
  };

  return (
    <div className='bg-container'>
      <p className='count-heading'>Count: {count}</p>
      
      <button className='count-btn' onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Count;