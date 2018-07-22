import updateUser from "./update-user.js";
import authenticatedUser from "../authenticated.js";
let userProfile = () => {
  $("#profile-employee").on("click", () => {
    $("#dashboard-container").html("");

    $("#dashboard-container").append(`
      <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title">Edit Profile</h4>
            <p class="card-category">Complete your profile</p>
          </div>
          <div class="card-body">
            <form id="update-user">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="bmd-label-floating">Full Name</label>
                    <input type="text" name="update-fullname" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="bmd-label-floating">Email</label>
                    <input type="text" name="update-email" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="bmd-label-floating">Adress</label>
                    <input type="text" name="update-address" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="bmd-label-floating">Zip Code</label>
                    <input type="text" name="update-zipcode" class="form-control">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="bmd-label-floating">Salary</label>
                    <input type="text" name="update-salary" class="form-control">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="bmd-label-floating">Role</label>
                    <input type="text" name="update-role" class="form-control">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="bmd-label-floating">Profile Picture URL</label>
                    <input type="text" name="update-profilepicture" class="form-control">
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
              <div class="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-profile">
          <div class="card-avatar">
            <a href="#">
             ${"<img "+"class="+"'img'"+" src="+"'"+ authenticatedUser.user.profile_picture+"' >"}
            </a>
          </div>
          <div class="card-body">
            <h6 class="card-category text-gray">${authenticatedUser.user.role}</h6>
            <h4 class="card-title">${authenticatedUser.user.full_name}</h4>
            <p class="card-description">
            ${authenticatedUser.user.full_name} | ${authenticatedUser.user.role} | ${authenticatedUser.user.salary} 
            </p>
            <a href="#" class="btn btn-primary btn-round">Follow</a>
          </div>
        </div>
      </div>
    </div>
      `);
      updateUser();
  });
};
export default userProfile;
