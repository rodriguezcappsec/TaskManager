"use strict";
import loginApi from "./Authentication/log-in.js";
import getTasks from "./task/tasks-request.js";
import getUsers from "./user/users-request.js";

const showDashboard = () => {
  $("#tasks-dashboard").on("click", () => {
    $("#dashboard-container").html("");
    getTasks();
  });
};
// const showEmployees = () => {
//   $("#all-employees").on("click", () => {
//     $("#dashboard-container").html("");
//     getUsers();
//   });
// };

$(() => {
  $(".wrapper").hide();
  loginApi();
  showDashboard();
  // showEmployees();
});
