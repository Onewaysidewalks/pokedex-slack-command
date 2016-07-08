//An aggregating object for all pokedex functions for ease of use elsewhere

var pokedex_types = require("./pokedex_types.js");

exports.compareSkillToTypes = function(skill, type1, type2) {
  return pokedex_types.compareSkillToTypes(skill, type1, type2);
}
