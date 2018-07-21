import apiUrl from "../config.js";
import usersContainer from "./all-users-container";
import authenticatedUser from "../authenticated.js";

let tasks = () => {
  $.ajax({
    url: apiUrl.apiUrl + "/users",
    method: "GET",
    headers: {
      Authorization: "Token token=" + authenticatedUser.user.token
    }
  })
    .then(data => {
      usersContainer.users = data.users;
      console.log(usersContainer);
    })
    .catch(() => {
      console.log("error");
    });
};
export default tasks;
