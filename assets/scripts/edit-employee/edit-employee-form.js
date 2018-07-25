import editEmployee from "../edit-employee/edit.employee.js";
let editUser = () => {
  $("button[id^='editEmployee-']").on("click", (event) => {
    $("#edit-employee-modal").remove();
    $("body").append(/*html*/ `
    <div class="modal" tabindex="-1" role="dialog" id="edit-employee-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >Edit Employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">`+"<form id="+"'edit-employee-form'"+"data-id="+`'${event.target.getAttribute('data-id')}'>`
      +
              /*html*/`<div class="form-row">
<div class="form-group col-md-6">
  <input type="text" class="form-control"  name="edit-full-name" id="add-full-name" placeholder="Full Name">
</div>
<div class="form-group col-md-6">
  <input type="email" class="form-control" name="edit-email" id="add-email" placeholder="Email">
</div>
</div>
<div class="form-row">
<div class="form-group">
<input type="text" class="form-control" name="edit-address" id="add-address" placeholder="Address">
</div>
<div class="form-group col-md-6">
<label for="select-employee">Dob</label>
  <input type="date" class="form-control" name="edit-dob" id="add-dob" placeholder="Date of Birth">
</div>
<div class="form-group col-md-6">
  <input type="text" class="form-control" name="edit-zipcode" id="add-zipcode" placeholder="Zip Code">
</div>
<div class="form-group col-md-6">
  <input type="text" class="form-control" name="edit-salary" id="add-salary" placeholder="Salary">
</div>
<div class="form-group col-md-6">
  <input type="text" class="form-control" name="edit-role" id="add-role" placeholder="Role">
</div>
</div>
<div class="form-group">
<input type="text" class="form-control" name="edit-profilepicture" id="add-profilepicture" placeholder="Profile Picture URL">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  `);
    $("#edit-employee-modal").modal("show");
    editEmployee(event.target.getAttribute('data-id'));
  });
};

export default editUser;
