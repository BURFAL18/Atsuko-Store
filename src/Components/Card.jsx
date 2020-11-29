import React from 'react';
import '../css/index.css';

const Card=(props)=>
{
    return (
      <>
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={props.imgbg} className="card-img" alt="card" />
            <div className="card-body">
              <h5 className="card-title">{props.ctitle}</h5>
              <div className="card-text">{props.ctext}</div>
              <a exact href="/" className="btn btn-primary">
                {props.btntext}
             </a>
            </div>
          </div>
        </div>
      </>
    );
}
export default Card;