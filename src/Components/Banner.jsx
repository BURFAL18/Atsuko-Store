import React from 'react';

const Banner=(props)=>
{
    return (
      <>
        <div className="banner">
          <img src={props.img} class="img-fluid" alt="Responsive image"></img>
        </div>
      </>
    );
}
export default Banner;