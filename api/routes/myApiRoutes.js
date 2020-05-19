"use strict";
module.exports = function(app) {
  var myList = require("../controllers/myApiController");

  //myList Routes
  app
    .route("/tasks")
    .get(myList.list_all_tasks)
    .post(myList.create_a_task);

  app
    .route("/tasks/:taskId")
    .get(myList.read_a_task)
    .put(myList.update_a_task)
    .delete(myList.delete_a_task);
};
