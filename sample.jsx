import React from 'react';
import Login from'./login.jsx';
function Registration(){
    return(
      <form action="">
        < div class='registration'>
        <h1>Registration Form</h1>
        <div class="mb-3 registration">
        <label for="formGroupExampleInput" class="form-label">First Name</label>
        <input type="text" class="form-control w-25 " id="formGroupExampleInput" placeholder="Enter First Name" />
       </div>
       <div class="mb-3">
       <label for="formGroupExampleInput" class="form-label ">Last Name</label>
      <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Last Name" />
      </div>
      <div class="mb-3">
       <label for="formGroupExampleInput" class="form-label ">Father Name</label>
      <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Father Name" />
      </div>
      <div class="mb-3">
       <label for="formGroupExampleInput" class="form-label ">Mother Name</label>
      <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Mother Name" />
      </div>
      <div class="mb-3">
       <label for="formGroupExampleInput" class="form-label ">Email Id</label>
      <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Email address" />
      </div>
      <div>
       <label for="formGroupExampleInput" class="form-label ">Gender</label>
       </div>
       <div>
      <input type="radio" name='gender'id="formGroupExampleInput"/>Male
      <input type="radio" name='gender' id="formGroupExampleInput"/>FeMale
      <input type="radio" name='gender'id="formGroupExampleInput"/>Others
      </div>
      <div>
          <button class='login' onClick={<Login />}>Login</button>
      <button class='signup'>signUp</button>
    </div>

      </div>
      </form>

    );
}
export default Registration;