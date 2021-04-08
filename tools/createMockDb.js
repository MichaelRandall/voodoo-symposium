/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {
  courses,
  authors,
  members,
  stages,
  stages_tasks,
  migration_tasks,
  operating_systems,
  migration_types,
  migrations,
} = mockData;
const data = JSON.stringify({
  courses,
  authors,
  members,
  stages,
  stages_tasks,
  migration_tasks,
  operating_systems,
  migration_types,
  migrations,
});
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
