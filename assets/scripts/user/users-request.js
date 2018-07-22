import apiUrl from "../config.js";
import usersContainer from "./all-users-container";
import authenticatedUser from "../authenticated.js";
import tableUsers from "../user/users-table.js";

let users = () => {
  $.ajax({
    url: apiUrl.apiUrl + "/users",
    method: "GET",
    headers: {
      Authorization: "Token token=" + authenticatedUser.user.token
    }
  })
    .then(data => {
      usersContainer.users = data.users;
      const showEmployees = () => {
        $("#all-employees").on("click", () => {
          $("#dashboard-container").html("");
          tableUsers(usersContainer.users);
        });
      };
      showEmployees();
    })
    .catch(() => {
      console.log("error");
    });
};
export default users;
