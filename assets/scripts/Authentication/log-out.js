let logOut = () => {
  $("#log-out").on("click", () => {
    $.ajax({
        url: apiUrl.apiUrl + "/sign-out",
        method: "DELETE",
        headers: {
          Authorization: "Token token=" + config.user.token
        }
      })
      .then(() => {
        logOutEvents();
      })
      .catch((data) => {
        modalAlert("error loging out user", "Alert!!");
      });
  });
};

export default logOut;
