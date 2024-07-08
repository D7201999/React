import React from 'react';
import Login from'./login.jsx';
function Registration(){
    return(
      <>
      <div className='card cam'>
        <div className='card-body'>
        <form action="">
        < div className='registration'>
        <h1>Registration Form</h1>
        <div className="mb-3 registration">
        <label htmlFor="formGroupExampleInput" className="form-label">First Name</label>
        <input type="text" class="form-control w-100 " id="formGroupExampleInput" placeholder="Enter First Name" />
       </div>
       <div className="mb-3">
       <label htmlFor="formGroupExampleInput" className="form-label ">Last Name</label>
      <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Enter Last Name" />
      </div>
      <div className="mb-3">
       <label htmlFor="formGroupExampleInput" className="form-label ">Father Name</label>
      <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Enter Father Name" />
      </div>
      <div className="mb-3">
       <label htmlFor="formGroupExampleInput" className="form-label ">Mother Name</label>
      <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Enter Mother Name" />
      </div>
      <div className="mb-3">
       <label htmlFor="formGroupExampleInput" className="form-label ">Email Id</label>
      <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Email address" />
      </div>
      <div>
       <label htmlFor="formGroupExampleInput" className="form-label ">Gender</label>
       </div>
       <div>
      <input type="radio" name='gender'id="formGroupExampleInput"/>Male
      <input type="radio" name='gender' id="formGroupExampleInput"/>FeMale
      <input type="radio" name='gender'id="formGroupExampleInput"/>Others
      </div>
      <div>
          <button className='login'>Login</button>
      <button className='signup'>signUp</button>
    </div>

      </div>
      </form>

        </div>

      </div>
      
      </>

    );
}
export default Registration;