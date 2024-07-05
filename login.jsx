import React from 'react';
function Login(){
return(
    <>
      <div class="main">
            <h1>Login Form</h1>
            <h3>Enter your login credentials</h3>
            <form action="">
                  <label for="first">
                        Username:
                  </label>
                  <input type="text" 
                         id="first" 
                         name="first" 
                         placeholder="Enter your Username" required />

                  <label for="password">
                        Password:
                  </label>
                  <input type="password"
                         id="password" 
                         name="password"
                         placeholder="Enter your Password" required />

                  <div class="wrap">
                        <button type="submit"
                                onclick="solve()">
                              Submit
                        </button>
                  </div>
            </form>
            <p>Not registered?
                  <a href="#">
                        Create an account
                  </a>
            </p>
      </div>

    </>
);
}
export default Login;