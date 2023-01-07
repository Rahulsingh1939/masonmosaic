import React from 'react';


const Image=({imag}) => {
  return (
    <div>
      <div className="gridItem">
                <img src={imag} alt="img" />
            </div>
    </div>
  )
}

export default Image
