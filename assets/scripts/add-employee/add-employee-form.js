import addEmployee from "../add-employee/add-employee.js";
import loadUsers from "../user/users-request.js";
let addEmployeeForm = () => {
  $("#add-employees").on("click", () => {
    $("#add-employee-modal").remove();
    $("body").append(/*html*/ `
        <div class="modal" tabindex="-1" role="dialog" id="add-employee-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Employee</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                  <form id="form-add-employee">
                  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control"  name="add-full-name" id="add-full-name" placeholder="Full Name">
    </div>
    <div class="form-group col-md-6">
      <input type="email" class="form-control" name="add-email" id="add-email" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <input type="password" class="form-control" name="add-password" id="add-password" placeholder="Password">
    </div>
    <div class="form-group col-md-6">
    <input type="password" class="form-control" name="add-passwordconfirmation" id="add-passwordconfirmation" placeholder="Password Confirmation">
  </div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" name="add-address" id="add-address" placeholder="Address">
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <input type="text" class="form-control" name="add-dob" id="add-dob" placeholder="Date of Birth">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" name="add-zipcode" id="add-zipcode" placeholder="Zip Code">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" name="add-salary" id="add-salary" placeholder="Salary">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" name="add-role" id="add-role" placeholder="Role">
    </div>
  </div>
  <div class="form-group">
  <input type="text" class="form-control" name="add-profilepicture" id="add-profilepicture" placeholder="Profile Picture URL">
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                </div>
            </div>
          </div>
        </div>
      `);
    $("#add-employee-modal").modal("show");
    addEmployee();
  });
};
export default addEmployeeForm;
