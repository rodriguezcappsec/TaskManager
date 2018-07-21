let tasksgrid = tasks => {
  let grid = "";
  for (const key in tasks) {
    grid += /*html*/ `
    <div class="row" id="dashboard-tasks">
              <div class="col-md-4">
                <div class="card card-chart">
                  <div class="card-header card-header-success">
                    <div class="ct-chart" id="dailySalesChart"></div>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">${key}</h4>
                    <p class="card-category">
                      <span class="text-success">
                        <i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">access_time</i> updated 4 minutes ago
                    </div>
                  </div>
                </div>
              </div>
        </div>
    `;
  }
  $("#master-container").append(grid);
};

export default tasksgrid;
