import apiUrl from "../config.js";
import modalAlert from "../modals/modalAlert.js";
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
        
      })
      .catch(() => {
        modalAlert("error loging out user", "Alert!!");
      });
  });
};

export default logOut;
