var surveyData = require("../data/friends.js")

module.exports = function (app) {

   app.get("/api/friends", function (req, res) {
       res.json(surveyData);
   });

   app.post("/api/friends", function (req, res) {
        console.log(req.body);
        surveyData.push(req.body)
   });
}