import authenticatedUser from "../authenticated.js";
import apiUrl from "../config.js";
import modelAlert from "../modals/modalAlert.js";
import loadUsers from "../user/users-request.js";
let addEmployee = (userId) => {
    $("#edit-employee-form").on("submit", event => {
      let serialization = $("#edit-employee-form").serializeArray();
      event.preventDefault();
      $.ajax({
        url: apiUrl.apiUrl + `/users/${userId}`,
        method: "PUT",
        headers: {
          Authorization: "Token token=" + authenticatedUser.user.token
        },
        data: {
          user: {
            full_name: serialization[0].value,
            email: serialization[1].value,
            address: serialization[2].value,
            dob: serialization[3].value,
            zip_code: serialization[4].value,
            salary: serialization[5].value,
            role: serialization[6].value,
            profile_picture: serialization[7].value
          }
        }
      })
        .then(data => {
          loadUsers();
          $("#edit-employee-modal").modal("hide");
          $("#all-employees").trigger("click");
          modelAlert("Employee added succesfully", "Success");
          console.log(data);
        })
        .catch(() => {
          modelAlert("Error adding new employee","Invalid!")
        });
    });
  };
  export default addEmployee;