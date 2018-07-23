import addTask from "../add-task/add-task.js";
import usersList from "../user/all-users-container.js";
let addTaskForm = () => {
  let users = "";
  $("#add-tasks").on("click", () => {
    for (let key in usersList) {
      // users+=`<option value='${usersList[key].id}'>TEST</option>`
      usersList[key].forEach(
        el =>
          el.isadmin
            ? (users += "")
            : (users += `<option value='${el.id}'>${el.full_name}</option>`)
      );
    }
    console.log(users);

    $("#add-task-modal").remove();
    $("body").append(/*html*/ `
        <div class="modal" tabindex="-1" role="dialog" id="add-task-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                  <form id="form-add-task">
                  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control"  name="title" id="add-title" placeholder="Task title">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" name="start-date" id="add-date" placeholder="Start Date(yy-mm-dd)">
    </div>
    <div class="form-group col-md-6">
    <input type="text" class="form-control" name="due-date" id="add-due-date" placeholder="Due Date(yy-mm-dd)">
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
  <textarea class="form-control" name="description" id="add-description" placeholder="Task description" rows="3"></textarea>
  </div>
  <div class="form-group col-md-6">
  <label for="select-employee">Assign task to:</label>
  <select class="form-control" name="to-user" placeholder="Assign To" id="select-employee">
      ${users}
    </select>
  </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
          </div>
        </div>
      `);
    users = "";
    $("#add-task-modal").modal("show");
    addTask();
  });
};
export default addTaskForm;
