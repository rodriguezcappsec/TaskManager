import changePassword from "../change-password.js";
let changePasswordModal = () => {
  $("#change-password").on("click", () => {
    $("#modal-change-password").remove();
    $("body").append(/*html*/ `
    <div class="modal" tabindex="-1" role="dialog" id="modal-change-password">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Change Password</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
              <form id="form-changePassword">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">visibility_off
                      </i>
                    </span>
                  </div>
                  <input type="password" name="old-password" class="form-control" placeholder="Old Password">
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">visibility_off</i>
                    </span>
                  </div>
                  <input type="password" name="new-password" class="form-control" placeholder="New Password">
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  `);
    changePassword();
    $("#modal-change-password").modal("show");
  });
};
export default changePasswordModal;
