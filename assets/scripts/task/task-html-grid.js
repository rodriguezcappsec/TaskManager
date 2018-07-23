import users from "../user/all-users-container.js";
let tasksgrid = tasks => {
  let grid = "";
  let name = "";
  for (const key in tasks) {
    let id = tasks[key].id;

    name = tasks[key].user_id
      ? users.users.map(v => {
          return v.id == tasks[key].user_id ? v.full_name : "";
        })
      : "";

    grid +=
      "<div class='col-md-4'" +
      "id=" +
      `"${id}"` +
      ">" +
      `
                <div class="card card-chart">
                  <div class="card-header  card-header-success">
                    <div class="ct-chart" id="dailySalesChart" style="font-weight: bold;"> Assigned to ${
                      tasks[key].user_id
                        ? JSON.stringify(name.join(""))
                        : "No employee"
                    }</div>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">${tasks[key].title}</h4>
                    <p class="card-category">
                      <span class="text-success">
                        <i class="material-icons">description</i></span>${
                          tasks[key].description
                        }</p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">access_time</i>${
                        tasks[key].status
                      }
                    </div>
                  </div>
                </div>
              </div>
    `;
  }
  $("#dashboard-container").append(grid);
  name = "";
};

export default tasksgrid;
