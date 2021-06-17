import React from 'react'
import watchOne from '../../assets/watches/watch1.jpg';
import watchTwo from '../../assets/watches/watch2.jpg';
import watchThree from '../../assets/watches/watch3.jpg';
import watchFour from '../../assets/watches/watch4.jpg'

function Watches() {
    return (
        <>
        <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Watches</h4>
            </div>
          </div>
        </div>
      </section>

         <div className="container">
            <div className="row">
                <div className="col-md-6"></div>
            </div>
         </div>

        
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <img 
                                src={watchOne}
                                alt="Mobile data"
                                height="50%"
                                width="50%"
                                />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">watch One</li>
                                    <li className="list-group-item">30000</li>
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
                                src={watchTwo}
                                alt="Mobile data"
                                height="50%"
                                width="50%"
                                />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">watch Two</li>
                                    <li className="list-group-item">30000</li>
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
                                src={watchThree}
                                alt="Mobile data"
                                height="50%"
                                width="50%"
                                />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">watch Three</li>
                                    <li className="list-group-item">30000</li>
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
                                src={watchFour}
                                alt="Mobile data"
                                height="50%"
                                width="50%"
                                />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">watche Four</li>
                                    <li className="list-group-item">30000</li>
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

export default Watches
