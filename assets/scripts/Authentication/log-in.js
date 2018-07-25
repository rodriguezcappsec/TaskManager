import apiUrl from "../config.js";
import modalAlert from "../modals/modalAlert.js";
import authenticatedUser from "../authenticated.js";
import getTasks from "../task/tasks-request.js";
import changePassModal from "./auth-modals/change-ps-modal.js";
import logOut from "./log-out.js";
import getUsers from "../user/users-request.js";
import userProfile from "../userProfile/userprofile.js";
import addEmployee from "../add-employee/add-employee-form.js";
import addTask from "../add-task/add-task-form.js";
import editEmployeeForm from "../edit-employee/edit-employee-form.js";
const isUserAdmin = () => {
  if (authenticatedUser.user.isadmin == null) {
    $("#all-tasks").hide();
    $("#all-employees").hide();
    $("#add-employees").hide();
    $("#add-tasks").hide();
  } else {
    $("#all-tasks").show();
    $("#all-employees").show();
    $("#add-employees").show();
    $("#add-tasks").show();
  }
};

const logInEvents = () => {
  $(".log-in").fadeOut();
  $(".wrapper").fadeIn("slow");
  modalAlert(
    `Welcome ${authenticatedUser.user.full_name}`,
    "Log in Successful"
  );
  isUserAdmin();
  getUsers();
  getTasks();
  changePassModal();
  userProfile();
  addEmployee();
  addTask();
  logOut();
};

let logIn = () => {
  $("#login-form").on("submit", event => {
    event.preventDefault();
    let serialization = $("#login-form").serializeArray();
    $.ajax({
      url: apiUrl.apiUrl + "/sign-in",
      method: "POST",
      data: {
        credentials: {
          email: serialization[0].value,
          password: serialization[1].value
        }
      }
    })
      .then(data => {
        authenticatedUser.user = data.user;
        logInEvents();
        // console.log(data.user);
      })
      .catch(() => {
        modalAlert(
          `You have entered an invalid username or password`,
          "Unsuccessful LogIn"
        );
      });
  });
};

export default logIn;
