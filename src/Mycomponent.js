import React from 'react';


const MyComponent = ({handleClick}) => {
  

  return (<button onClick={(e) => handleClick (e)}>
      Click me
    </button>)
};

export default MyComponent;



