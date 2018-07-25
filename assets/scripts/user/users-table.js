import authenticatedUser from "../authenticated.js";
import formEditModal from "../edit-employee/edit-employee-form.js";
let tableUsers = users => {
  let body = "";
  let closeTags = `
  </tbody>
  </table>
</div>
</div>
</div>
</div>`;
  let table = `
    <div class="col-md-12">
      <div class="card card-plain">
        <div class="card-header card-header-primary">
          <h4 class="card-title mt-0"> Employees</h4>
          <p class="card-category"></p>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover" id="employee-table">
              <thead class="">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Address</th>
                <th>Dob</th>
                <th>Actions</th>
              </thead>
              <tbody>
              `;
  for (let key in users) {
    if (
      users[key].user_id == authenticatedUser.user.id &&
      users[key].isadmin != true
    ) {
      body +=
        `       <tr>
                  <td>${users[key].full_name}</td>
                  <td>${users[key].email}</td>
                  <td>${users[key].role}</td>
                  <td>${users[key].address}</td>
                  <td>${users[key].dob}</td>
                  <td><button type="button" id="editEmployee-${users[key].id}" data-id="${users[key].id}" class="btn btn-warning">Edit</button></td>
                </tr>
    `;
    }
  }
  let constructedTable = table + body + closeTags;

  $("#dashboard-container")
    .append(constructedTable);
    formEditModal();
};

export default tableUsers;
