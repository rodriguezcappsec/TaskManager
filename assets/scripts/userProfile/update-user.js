import authenticatedUser from "../authenticated.js";
import apiUrl from "../config.js";
import modelAlert from "../modals/modalAlert.js";

let updateUser = () => {
  $("#update-user").on("submit", event => {
    let serialization = $("#update-user").serializeArray();
    // console.log(serialization);
    event.preventDefault();
    $.ajax({
      url: apiUrl.apiUrl + `/users/${authenticatedUser.user.id}`,
      method: "PATCH",
      headers: {
        Authorization: "Token token=" + authenticatedUser.user.token
      },
      data: {
        user: {
          full_name: serialization[0].value,
          email: serialization[1].value,
          address: serialization[2].value,
          zip_code: serialization[3].value,
          salary: serialization[4].value,
          role: serialization[5].value,
          profile_picture: serialization[6].value,
          user_id: authenticatedUser.user.isadmin
            ? null
            : authenticatedUser.user.id
        }
      }
    })
      .then(data => {
        modelAlert("User Updated Successfuly!", "Success");
        // $("#profile-employee").trigger("click");
        console.log(data);
      })
      .catch(() => {});
  });
};
export default updateUser;
