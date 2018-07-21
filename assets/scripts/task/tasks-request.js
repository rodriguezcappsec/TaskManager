import apiUrl from "../config.js";
import taskContainer from "./all-tasks-container.js";
let tasks = () => {
  $.ajax({
    url: apiUrl.apiUrl + "/tasks",
    method: "GET",
    headers: {
      Authorization: "Token token=" + authenticatedUser.user.token
    }
  })
    .then(data => {
      taskContainer.tasks = data.tasks;
    })
    .catch(() => {
      console.log("error");
    });
};
export default tasks;
