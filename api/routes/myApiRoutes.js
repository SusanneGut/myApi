"use strict";
module.exports = function(app) {
  var myList = require("../controllers/myApiController");

  //myList Routes
  app
    .route("/tasks")
    .post(myList.create_a_task)
    .get(myList.list_all_tasks, (req, res) => {
      const param = req.query.q;
      if (!param) {
        res.json({ error: "Missing required parameter 'q" });
        return;
      }
    });

  app
    .route("/tasks/:taskId")
    .get(myList.read_a_task)
    .put(myList.update_a_task)
    .delete(myList.delete_a_task);
};
