
import React,{useState} from 'react'

function Login() {
    let[login,setLogin]=useState({email:"",password:"",})
    let inputHandler=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault();
    }
    return (
        <>
              <section className="bg-warning p-2">

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="h3"><p>Login details</p></div>
                </div>
            </div>
        </div>
        </section>
        <section>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5 m-auto">
                        <div className="card">
                            <div className="card-header">
                                <h4>login form</h4>
                                <pre>{JSON.stringify(login)}</pre>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input
                                        type="text"
                                        placeholder="email"
                                        name="email"
                                        onChange={inputHandler}
                                        className="form-control" required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                        type="text"
                                        placeholder="password"
                                        name="password"
                                        onChange={inputHandler}
                                        className="form-control" required
                                        />
                                    </div> 
                                    <div className="form-group">
                                        <input
                                        type="submit"
                                        className="form-control btn btn-success" 
                                        />
                                    </div>
                                    
                                </form>
                                <small>
                                    don't <a href="/signup">Have Account</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default Login
