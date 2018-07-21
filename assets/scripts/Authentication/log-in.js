import apiUrl from "../config.js";
import modalAlert from "../modals/modalAlert.js";
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
        $(".log-in").hide();
        $(".wrapper").show();
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  });
};

export default logIn;
