import authenticatedUser from "../authenticated.js";
import modalAlert from "./../modals/modalAlert.js";
import apiUrl from "../config.js";
let changePassword = () => {
  $("#form-changePassword").on("submit", event => {
    event.preventDefault();
    let serialization = $("#form-changePassword").serializeArray();
    console.log(serialization[0].value);

    $.ajax({
      url: apiUrl.apiUrl + "/change-password",
      method: "PATCH",
      headers: {
        Authorization: "Token token=" + authenticatedUser.user.token
      },
      data: {
        passwords: {
          old: serialization[0].value,
          new: serialization[1].value
        }
      }
    })
      .then(data => {
        $("#modal-change-password").modal("toggle");
        modalAlert(
          "Password Changed, you can know log in with your new password!",
          "Success"
        );
        console.log(data);
      })
      .catch(() => {
        modalAlert("Error changing password", "Alert!!");
      });
  });
};

export default changePassword;
