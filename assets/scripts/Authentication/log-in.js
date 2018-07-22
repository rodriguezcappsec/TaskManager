import apiUrl from "../config.js";
import modalAlert from "../modals/modalAlert.js";
import authenticatedUser from "../authenticated.js";
import getTasks from "../task/tasks-request.js";
import getUsers from "../user/users-request";
const authExcalation = () => {
  if (authenticatedUser.user.isadmin == null) {
    $("#all-tasks").hide();
    $("#all-employees").hide();
  } else {
    $("#all-tasks").show();
    $("#all-employees").show();
  }
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
        modalAlert(`Welcome ${data.user.full_name}`, "Log in Successful");
        $(".log-in").fadeOut();
        $(".wrapper").fadeIn("slow");
        authenticatedUser.user = data.user;
        console.log(authenticatedUser.user);
        getTasks();
        getUsers();
        authExcalation();
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
