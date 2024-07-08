import React from 'react';
import {Outlet,Link} from 'react-router-dom';
export default function Header(){
    return(
        <>
        <div class='container'>
            <div class='row'>
                <div class='col'>
                    
                <Link to='/registration'><button className='mb-3 border-0 rounded-left bg-danger'>Registration</button></Link>
                </div>
                <div class='col-sm'>
                <Link to='/login'><button className='mb-3 border-0 bg-warning'>Login</button>
                        </Link>

                </div>
                <div class='col'> 

                <Link to='/signup'><button className='mb-3 border-0 bg-success'>SignUp</button>
                        </Link>
                </div>
            </div>
        </div>
            
            
                
                    
                
            
                
                
        
    
        <Outlet />
        </>
    );
}