import authenticatedUser from "../authenticated.js";
import apiUrl from "../config.js";
import modelAlert from "../modals/modalAlert.js";
import loadUsers from "../user/users-request.js";
let addEmployee = () => {
  $("#form-add-employee").on("submit", event => {
    let serialization = $("#form-add-employee").serializeArray();
    event.preventDefault();
    $.ajax({
      url: apiUrl.apiUrl + `/sign-up`,
      method: "POST",
      data: {
        credentials: {
          full_name: serialization[0].value,
          email: serialization[1].value,
          password: serialization[2].value,
          password_confirmation: serialization[3].value,
          address: serialization[4].value,
          dob: serialization[5].value,
          zip_code: serialization[6].value,
          salary: serialization[7].value,
          role: serialization[8].value,
          profile_picture: serialization[9].value,
          user_id: authenticatedUser.user.id
        }
      }
    })
      .then(data => {
        loadUsers();
        modelAlert("Employee added succesfully", "Success");
        $("#add-employee-modal").modal("hide");
        $("#all-employees").trigger("click");
      })
      .catch(() => {
        modelAlert("Error adding new employee","Invalid!")
      });
  });
};

export default addEmployee;
