let tasksgrid = tasks => {
  let grid = "";
  for (const key in tasks) {
    let id = tasks[key].id;
    grid +=
      "<div class='col-md-4'" +
      "id=" +
      `"${id}"` +
      ">" +
      `
                <div class="card card-chart">
                  <div class="card-header  card-header-success">
                    <div class="ct-chart" id="dailySalesChart"></div>
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
};

export default tasksgrid;
