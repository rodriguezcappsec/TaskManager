import apiUrl from "../config.js";
import authenticatedUser from "../authenticated.js";
import users from "../user/all-users-container.js";
import tasks from "../task/all-tasks-container.js";
let logOut = () => {
  $("#log-out").on("click", () => {
    $.ajax({
      url: apiUrl.apiUrl + "/sign-out",
      method: "DELETE",
      headers: {
        Authorization: "Token token=" + authenticatedUser.user.token
      }
    })
      .then(() => {
        // delete users;
        // delete tasks;
        location.reload();
      })
      .catch(() => {
        modalAlert("error loging out user", "Alert!!");
      });
  });
};

export default logOut;
