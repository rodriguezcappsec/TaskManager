import apiUrl from "../config.js";
import taskContainer from "./all-tasks-container.js";
import tasksGrid from "./task-html-grid.js";
import authenticatedUser from "../authenticated.js";

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
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
};
export default tasks;
