import React from 'react'
import mobileOne from '../../assets/mobiles/mobile1.jpg'
import mobileTwo from '../../assets/mobiles/mobile2.jpg';
import mobileThree from '../../assets/mobiles/mobile3.jpg';
import mobileFour from '../../assets/mobiles/mobile4.jpg';

function Mobiles() {
    return (
        <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Mobiles</h4>
            </div>
          </div>
        </div>
      </section>

        <div className="container">
            <div className="row">
                <div className="col-md-6"></div>
            </div>
         </div>

         <div className="container mt-4">
             <div className="row">
                 <div className="col-md-3">
                     <div className="card">
                         <div className="card-header">
                             <img
                             src={mobileOne}
                             alt="mobile Data"
                             height="50%"
                             width="50%"
                             />
                         </div>
                         <div className="card-body">
                             <ul className="list-group">
                                 <li className="list-group-item">Mobile One</li>
                                 <li className="list-group-item">100000</li>
                                 <li className="list-group-item">
                                     <button className="btn btn-success">Add cart</button>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-3">
                     <div className="card">
                         <div className="card-header">
                             <img
                             src={mobileTwo}
                             alt="mobile Data"
                             height="50%"
                             width="50%"
                             />
                         </div>
                         <div className="card-body">
                             <ul className="list-group">
                                 <li className="list-group-item">Mobile Two</li>
                                 <li className="list-group-item">100000</li>
                                 <li className="list-group-item">
                                 <button className="btn btn-success">Add cart</button>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-3">
                     <div className="card">
                         <div className="card-header">
                         <img
                             src={mobileThree}
                             alt="mobile Data"
                             height="50%"
                             width="50%"
                             />

                         </div>
                         <div className="card-body">
                             <ul className="list-group">
                                 <li className="list-group-item">Mobile Three</li>
                                 <li className="list-group-item">100000</li>
                                 <li className="list-group-item">
                                 <button className="btn btn-success">Add cart</button>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-3">
                     <div className="card">
                         <div className="card-header">
                         <img
                             src={mobileFour}
                             alt="mobile Data"
                             height="50%"
                             width="50%"
                             />

                         </div>
                         <div className="card-body">
                             <ul className="list-group">
                                 <li className="list-group-item">Mobile Four</li>
                                 <li className="list-group-item">100000</li>
                                 <li className="list-group-item">
                                     <button className="btn btn-success">Add cart</button>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
            
        </>
    )
}

export default Mobiles
