import React from 'react'
import laptopone from '../../assets/laptops/laptop1.jpg'
import laptoptwo from '../../assets/laptops/laptop2.jpg';
import laptopthree from '../../assets/laptops/laptop3.jpg';
import laptopfour from '../../assets/laptops/laptop4.jpg';

let Laptop=()=>{
    return(
        <>
        <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Laptops</h4>
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
                            src={laptopone}
                            alt='Mobile Data'
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">Laptop one</li>
                                <li className="list-group-item">60000</li>
                                <li className="list-group-item">
                                <button className="btn btn-success">Add Cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img 
                            src={laptoptwo}
                            alt="Mobile Data"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">laptop two</li>
                                <li className="list-group-item">6000</li>
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
                            src={laptopthree}
                            alt="Mobile Data"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">laptop three</li>
                                <li className="list-group-item">60000</li>
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
                            src={laptopfour}
                            alt="Mobile Data"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">laptop four</li>
                                <li className="list-group-item">60000</li>
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

export default Laptop