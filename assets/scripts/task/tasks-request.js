import apiUrl from "../config.js";
import taskContainer from "./all-tasks-container.js";
import tasksGrid from "./task-html-grid.js";
import authenticatedUser from "../authenticated.js";
import usersContainer from "../user/all-users-container.js";
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
      tasksGrid(taskContainer.tasks);
    })
    .catch(() => {
      console.log("error");
    });
};
export default tasks;
