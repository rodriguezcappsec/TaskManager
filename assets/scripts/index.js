"use strict";
import loginApi from "./Authentication/log-in.js";
import getTasks from "./task/tasks-request.js";
import authenticatedUser from "./authenticated.js";
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const showDashboard = () => {
  $("#tasks-dashboard").on("click", () => {
    $("#dashboard-container").html("");
    getTasks();
  });
};


$(() => {
  $(".wrapper").hide();
  loginApi();
  showDashboard();
});
