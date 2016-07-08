//The entrypoint of the API

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var pokedex = require("./pokedex.js");

var app = express();
app.use(express.static(__dirname + "/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// ERROR HANDLING
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message}); //returns a code and the error, or 500 and the error if no code present
}

// API ROUTES
/*  POST /pokedex/slack
 *  This is the endpoint that is invoked by slack servers when /pokedex is used. It is provided in urlencoded form properties, of which
 *  we are mainly interested in the "text" field (the query string when used with /pokedex) and the "response_url", which should be used
 *  if the request will take longer than ~3 seconds
 */

app.post("/pokedex/slack", function(req, res) {
  console.log("received request: text: " + req.body.text + " response_url: " + req.body.response_url);

  var parts = [];
  var queryType = "";
  if (req.body.text.indexOf("versus") > -1) {
    queryType = "TYPE_COMPARISON";
    parts = req.body.text.split(" versus ");
    for (var i=0;i<parts.length;i++) { //remove unnecessary whitespace
      parts[i] = parts[i].trim();
    }

    var defenseTypes = parts[1].split(" ")
    parts[1] = defenseTypes[0];

    if (defenseTypes.length > 1) {
      parts[2] = defenseTypes[1];
    } else {
      parts[2] = ""
    }
  }

  console.log("Parsed parts: " + parts);

  if (queryType == "TYPE_COMPARISON") { //TODO return slack compatible text
    res.status(200).json({"state": pokedex.compareSkillToTypes(parts[0].toUpperCase(), parts[1].toUpperCase(), parts[2].toUpperCase())});
  } else {
    res.status(200).json({"state": "NOT_FOUND"});
  }
});
