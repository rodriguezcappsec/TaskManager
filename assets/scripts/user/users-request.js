import apiUrl from "../config.js";
import usersContainer from "./all-users-container";
import authenticatedUser from "../authenticated.js";
import tableUsers from "../user/users-table.js";
import modelAlert from "../modals/modalAlert.js";

let users = () => {
  $.ajax({
    url: apiUrl.apiUrl + "/users",
    method: "GET",
    headers: {
      Authorization: "Token token=" + authenticatedUser.user.token
    }
  })
    .then(data => {
      let showEmployees = () => {
        $("#all-employees").on("click", () => {
          $("#dashboard-container").html("");
          tableUsers(data.users);
        });
      };
      usersContainer.users = data.users;
      showEmployees();
    })
    .catch(() => {
      console.log("error");
    });
};
export default users;
