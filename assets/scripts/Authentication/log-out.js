import apiUrl from "../config.js";
import authenticatedUser from "../authenticated.js";
let logOut = () => {
  $("#log-out").on("click", () => {
    $.ajax({
      url: apiUrl.apiUrl + "/sign-out",
      method: "DELETE",
      headers: {
        Authorization: "Token token=" + authenticatedUser.user.token
      }
    })
      .then(() => {
        location.reload();
      })
      .catch(() => {
        modalAlert("error loging out user", "Alert!!");
      });
  });
};

export default logOut;
