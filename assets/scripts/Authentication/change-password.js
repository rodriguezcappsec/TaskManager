import authenticatedUser from "../authenticated.js";
import modalAlert from "./../modals/modalAlert.js";
import apiUrl from "../config.js";
let changePassword = () => {
  $("#form-changePassword").on("submit", event => {
    event.preventDefault();
    let serialization = $("#form-changePassword").serializeArray();
    $.ajax({
      url: apiUrl.apiUrl + `/change-password`,
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
      .then(() => {
        $("#modal-change-password").modal("toggle");
        modalAlert(
          "Password Changed, you can know log in with your new password!",
          "Success"
        );
      })
      .catch(() => {
        modalAlert("Error changing password", "Alert!!");
      });
  });
};

export default changePassword;
