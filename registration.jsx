function Registration(){

    return(
        <>
         <div class="row mb-3">
              <label for="first" class="col-sm-1 col-form-label">First Name:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control w-25" id="first" />
              </div>
              </div>
              <div class="row mb-3">
              <label for="last" class="col-sm-1 col-form-label">Last Name:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control w-25" id="last" />
              </div>
            </div>
            <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-1 col-form-label">Email:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control w-25" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-1 col-form-label">Password:</label>
          <div class="col-sm-10">
            <input type="password" class="form-control w-25" id="inputPassword3" />
          </div>
        </div>
        <div class="row mb-3">
              <label for="father" class="col-sm-1 col-form-label">Father Name:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control w-25" id="father" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="mother" class="col-sm-1 col-form-label">Mother Name:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control w-25" id="mother" />
              </div>
            </div>
        
            </>


        
        
    );
}
export default Registration;