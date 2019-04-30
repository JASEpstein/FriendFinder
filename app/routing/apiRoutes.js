var surveyData = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(surveyData);
    });

    app.post("/api/friends", function (req, res) {
        surveyData.push(req.body)
        var checkArray = [];
        var reqArray = req.body.scores;
        for (i = 0; i < surveyData.length; i++) {
            var diff = 0;
            for (j = 0; j < reqArray.length; j++) {
                diff += Math.abs(parseInt(reqArray[j]) - parseInt(surveyData[i].scores[j]));
            }
            checkArray.push(diff);
        }
        var lowestDiff = Math.min.apply(null, checkArray);
        var lowestDiffIndex = checkArray.indexOf(lowestDiff);
        res.json(surveyData[lowestDiffIndex]);
    });
}