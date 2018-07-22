import authenticatedUser from "../authenticated.js";
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
            <table class="table table-hover">
              <thead class="">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Address</th>
                <th>Dob</th>
              </thead>
              <tbody>
              `;
  for (let key in users) {
    if (
      users[key].user_id == authenticatedUser.user.id &&
      users[key].isadmin != true
    ) {
      body +=
        "<tr" +
        " " +
        `id="${users[key].id}">` +
        `
                  <td>${users[key].full_name}</td>
                  <td>${users[key].email}</td>
                  <td>${users[key].role}</td>
                  <td>${users[key].address}</td>
                  <td>${users[key].dob}</td>
                </tr>
    `;
    }
  }
  let constructedTable = table + body + closeTags;

  $("#dashboard-container")
    .append(constructedTable)
    .fadeIn();
};

export default tableUsers;
