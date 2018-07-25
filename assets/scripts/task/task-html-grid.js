import allUsers from "../user/all-users-container.js";
let tasksgrid = tasks => {
  let grid = "";
  let name = "";
  let count = 0;
  for (const key in tasks) {

    name = tasks[key].user_id
      ? allUsers.users.map(v => {
          return v.id == tasks[key].user_id ? v.full_name : "";
        })
      : "";

    count++;
    grid +=
      "<div class='col-md-4'" +
      "id=" +
      `"${tasks[key].id}"` +
      ">" +
      `
                <div class="card card-chart">
                  <div class="card-header  card-header-success">
                    <div class="ct-chart" id="dailySalesChart" style="font-weight: bold;"> Assigned to 
                    ${
                      tasks[key].user_id
                        ? JSON.stringify(name.join(""))
                        : "No employee"
                    }
                    </div>
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
  name = "";
  $("#dashboard-container").append(grid);
  $("#notification").text(count);
  $("#dropdown_notification").text(`There are ${count} tasks assigned!`);
};

export default tasksgrid;
