//Handles all type comparisons

//Types Known
const NORMAL = "NORMAL";
const FIRE = "FIRE";
const WATER = "WATER";
const ELECTRIC = "ELECTRIC";
const GRASS = "GRASS";
const ICE = "ICE";
const FIGHTING = "FIGHTING";
const POISON = "POISON";
const GROUND = "GROUND";
const FLYING = "FLYING";
const PSYCHIC = "PSYCHIC";
const BUG = "BUG";
const ROCK = "ROCK";
const GHOST = "GHOST";
const DRAGON = "DRAGON";
const DARK = "DARK";
const STEEL = "STEEL";
const FAIRY = "FAIRY";

//Compares a skill type to a type(s) of a pokemon, to determine its effectiveness
exports.compareSkillToTypes = function(skill, type1, type2) {
    console.log("comparing types => " + skill + " versus " + type1 + " and " + type2);

    if (!type2 || type2 == "") {
      return skillToTypeStrengthDictionary[skill][type1];
    } else {
      return skillToTypeStrengthDictionary[skill][type1] * skillToTypeStrengthDictionary[skill][type2];
  }
}


//We will construct a associative array with all the type strengths/weaknesses
//the array will be sorted from left to right, top to bottom, where the X axis is the defending type
//and the y is the offensive type.
//There are 18 types to compare, so we will in essence be creating an 18x18 grid.
const skillToTypeStrengthDictionary = new Array();

//NORMAL skill to type mapping
skillToTypeStrengthDictionary[NORMAL] = new Array();
skillToTypeStrengthDictionary[NORMAL][NORMAL] = 1
skillToTypeStrengthDictionary[NORMAL][FIRE] = 1
skillToTypeStrengthDictionary[NORMAL][WATER] = 1
skillToTypeStrengthDictionary[NORMAL][ELECTRIC] = 1
skillToTypeStrengthDictionary[NORMAL][GRASS] = 1
skillToTypeStrengthDictionary[NORMAL][ICE] = 1
skillToTypeStrengthDictionary[NORMAL][FIGHTING] = 1
skillToTypeStrengthDictionary[NORMAL][POISON] = 1
skillToTypeStrengthDictionary[NORMAL][GROUND] = 1
skillToTypeStrengthDictionary[NORMAL][FLYING] = 1
skillToTypeStrengthDictionary[NORMAL][PSYCHIC] = 1
skillToTypeStrengthDictionary[NORMAL][BUG] = 1
skillToTypeStrengthDictionary[NORMAL][ROCK] = .5
skillToTypeStrengthDictionary[NORMAL][GHOST] = 0
skillToTypeStrengthDictionary[NORMAL][DRAGON] = 1
skillToTypeStrengthDictionary[NORMAL][DARK] = 1
skillToTypeStrengthDictionary[NORMAL][STEEL] = .5
skillToTypeStrengthDictionary[NORMAL][FAIRY] = 1

//FIRE skill to type mapping
skillToTypeStrengthDictionary[FIRE] = new Array();
skillToTypeStrengthDictionary[FIRE][NORMAL] = 1
skillToTypeStrengthDictionary[FIRE][FIRE] = .5
skillToTypeStrengthDictionary[FIRE][WATER] = .5
skillToTypeStrengthDictionary[FIRE][ELECTRIC] = 1
skillToTypeStrengthDictionary[FIRE][GRASS] = 2
skillToTypeStrengthDictionary[FIRE][ICE] = 2
skillToTypeStrengthDictionary[FIRE][FIGHTING] = 1
skillToTypeStrengthDictionary[FIRE][POISON] = 1
skillToTypeStrengthDictionary[FIRE][GROUND] = 1
skillToTypeStrengthDictionary[FIRE][FLYING] = 1
skillToTypeStrengthDictionary[FIRE][PSYCHIC] = 1
skillToTypeStrengthDictionary[FIRE][BUG] = 1
skillToTypeStrengthDictionary[FIRE][ROCK] = .5
skillToTypeStrengthDictionary[FIRE][GHOST] = 1
skillToTypeStrengthDictionary[FIRE][DRAGON] = .5
skillToTypeStrengthDictionary[FIRE][DARK] = 1
skillToTypeStrengthDictionary[FIRE][STEEL] = 2
skillToTypeStrengthDictionary[FIRE][FAIRY] = 1

//WATER skill to type mapping
skillToTypeStrengthDictionary[WATER] = new Array();
skillToTypeStrengthDictionary[WATER][NORMAL] = 1
skillToTypeStrengthDictionary[WATER][FIRE] = 2
skillToTypeStrengthDictionary[WATER][WATER] = .5
skillToTypeStrengthDictionary[WATER][ELECTRIC] = 1
skillToTypeStrengthDictionary[WATER][GRASS] = .5
skillToTypeStrengthDictionary[WATER][ICE] = 1
skillToTypeStrengthDictionary[WATER][FIGHTING] = 1
skillToTypeStrengthDictionary[WATER][POISON] = 1
skillToTypeStrengthDictionary[WATER][GROUND] = 2
skillToTypeStrengthDictionary[WATER][FLYING] = 1
skillToTypeStrengthDictionary[WATER][PSYCHIC] = 1
skillToTypeStrengthDictionary[WATER][BUG] = 1
skillToTypeStrengthDictionary[WATER][ROCK] = 2
skillToTypeStrengthDictionary[WATER][GHOST] = 1
skillToTypeStrengthDictionary[WATER][DRAGON] = .5
skillToTypeStrengthDictionary[WATER][DARK] = 1
skillToTypeStrengthDictionary[WATER][STEEL] = 2
skillToTypeStrengthDictionary[WATER][FAIRY] = 1

//ELECTRIC skill to type mapping
skillToTypeStrengthDictionary[ELECTRIC] = new Array();
skillToTypeStrengthDictionary[ELECTRIC][NORMAL] = 1
skillToTypeStrengthDictionary[ELECTRIC][FIRE] = 1
skillToTypeStrengthDictionary[ELECTRIC][WATER] = 2
skillToTypeStrengthDictionary[ELECTRIC][ELECTRIC] = .5
skillToTypeStrengthDictionary[ELECTRIC][GRASS] = .5
skillToTypeStrengthDictionary[ELECTRIC][ICE] = 1
skillToTypeStrengthDictionary[ELECTRIC][FIGHTING] = 1
skillToTypeStrengthDictionary[ELECTRIC][POISON] = 1
skillToTypeStrengthDictionary[ELECTRIC][GROUND] = 0
skillToTypeStrengthDictionary[ELECTRIC][FLYING] = 2
skillToTypeStrengthDictionary[ELECTRIC][PSYCHIC] = 1
skillToTypeStrengthDictionary[ELECTRIC][BUG] = 1
skillToTypeStrengthDictionary[ELECTRIC][ROCK] = 1
skillToTypeStrengthDictionary[ELECTRIC][GHOST] = 1
skillToTypeStrengthDictionary[ELECTRIC][DRAGON] = .5
skillToTypeStrengthDictionary[ELECTRIC][DARK] = 1
skillToTypeStrengthDictionary[ELECTRIC][STEEL] = 1
skillToTypeStrengthDictionary[ELECTRIC][FAIRY] = 1

//GRASS skill to type mapping
skillToTypeStrengthDictionary[GRASS] = new Array();
skillToTypeStrengthDictionary[GRASS][NORMAL] = 1
skillToTypeStrengthDictionary[GRASS][FIRE] = .5
skillToTypeStrengthDictionary[GRASS][WATER] = 2
skillToTypeStrengthDictionary[GRASS][ELECTRIC] = 1
skillToTypeStrengthDictionary[GRASS][GRASS] = .5
skillToTypeStrengthDictionary[GRASS][ICE] = 1
skillToTypeStrengthDictionary[GRASS][FIGHTING] = 1
skillToTypeStrengthDictionary[GRASS][POISON] = .5
skillToTypeStrengthDictionary[GRASS][GROUND] = 2
skillToTypeStrengthDictionary[GRASS][FLYING] = .5
skillToTypeStrengthDictionary[GRASS][PSYCHIC] = 1
skillToTypeStrengthDictionary[GRASS][BUG] = .5
skillToTypeStrengthDictionary[GRASS][ROCK] = 2
skillToTypeStrengthDictionary[GRASS][GHOST] = 1
skillToTypeStrengthDictionary[GRASS][DRAGON] = .5
skillToTypeStrengthDictionary[GRASS][DARK] = 1
skillToTypeStrengthDictionary[GRASS][STEEL] = .5
skillToTypeStrengthDictionary[GRASS][FAIRY] = 1

//ICE skill to type mapping
skillToTypeStrengthDictionary[ICE] = new Array();
skillToTypeStrengthDictionary[ICE][NORMAL] = 1
skillToTypeStrengthDictionary[ICE][FIRE] = .5
skillToTypeStrengthDictionary[ICE][WATER] = .5
skillToTypeStrengthDictionary[ICE][ELECTRIC] = 1
skillToTypeStrengthDictionary[ICE][GRASS] = 2
skillToTypeStrengthDictionary[ICE][ICE] = .5
skillToTypeStrengthDictionary[ICE][FIGHTING] = 1
skillToTypeStrengthDictionary[ICE][POISON] = 1
skillToTypeStrengthDictionary[ICE][GROUND] = 2
skillToTypeStrengthDictionary[ICE][FLYING] = 2
skillToTypeStrengthDictionary[ICE][PSYCHIC] = 1
skillToTypeStrengthDictionary[ICE][BUG] = 1
skillToTypeStrengthDictionary[ICE][ROCK] = 1
skillToTypeStrengthDictionary[ICE][GHOST] = 1
skillToTypeStrengthDictionary[ICE][DRAGON] = 2
skillToTypeStrengthDictionary[ICE][DARK] = 1
skillToTypeStrengthDictionary[ICE][STEEL] = .5
skillToTypeStrengthDictionary[ICE][FAIRY] = 1

//FIGHTING skill to type mapping
skillToTypeStrengthDictionary[FIGHTING] = new Array();
skillToTypeStrengthDictionary[FIGHTING][NORMAL] = 2
skillToTypeStrengthDictionary[FIGHTING][FIRE] = 1
skillToTypeStrengthDictionary[FIGHTING][WATER] = 1
skillToTypeStrengthDictionary[FIGHTING][ELECTRIC] = 1
skillToTypeStrengthDictionary[FIGHTING][GRASS] = 1
skillToTypeStrengthDictionary[FIGHTING][ICE] = 2
skillToTypeStrengthDictionary[FIGHTING][FIGHTING] = 1
skillToTypeStrengthDictionary[FIGHTING][POISON] = .5
skillToTypeStrengthDictionary[FIGHTING][GROUND] = 1
skillToTypeStrengthDictionary[FIGHTING][FLYING] = .5
skillToTypeStrengthDictionary[FIGHTING][PSYCHIC] = .5
skillToTypeStrengthDictionary[FIGHTING][BUG] = .5
skillToTypeStrengthDictionary[FIGHTING][ROCK] = 2
skillToTypeStrengthDictionary[FIGHTING][GHOST] = 0
skillToTypeStrengthDictionary[FIGHTING][DRAGON] = 1
skillToTypeStrengthDictionary[FIGHTING][DARK] = 2
skillToTypeStrengthDictionary[FIGHTING][STEEL] = 2
skillToTypeStrengthDictionary[FIGHTING][FAIRY] = .5

//POISON skill to type mapping
skillToTypeStrengthDictionary[POISON] = new Array();
skillToTypeStrengthDictionary[POISON][NORMAL] = 1
skillToTypeStrengthDictionary[POISON][FIRE] = 1
skillToTypeStrengthDictionary[POISON][WATER] = 1
skillToTypeStrengthDictionary[POISON][ELECTRIC] = 1
skillToTypeStrengthDictionary[POISON][GRASS] = 2
skillToTypeStrengthDictionary[POISON][ICE] = 1
skillToTypeStrengthDictionary[POISON][FIGHTING] = 1
skillToTypeStrengthDictionary[POISON][POISON] = .5
skillToTypeStrengthDictionary[POISON][GROUND] = .5
skillToTypeStrengthDictionary[POISON][FLYING] = 1
skillToTypeStrengthDictionary[POISON][PSYCHIC] = 1
skillToTypeStrengthDictionary[POISON][BUG] = 1
skillToTypeStrengthDictionary[POISON][ROCK] = .5
skillToTypeStrengthDictionary[POISON][GHOST] = .5
skillToTypeStrengthDictionary[POISON][DRAGON] = 1
skillToTypeStrengthDictionary[POISON][DARK] = 1
skillToTypeStrengthDictionary[POISON][STEEL] = 0
skillToTypeStrengthDictionary[POISON][FAIRY] = 2

//GROUND skill to type mapping
skillToTypeStrengthDictionary[GROUND] = new Array();
skillToTypeStrengthDictionary[GROUND][NORMAL] = 1
skillToTypeStrengthDictionary[GROUND][FIRE] = 2
skillToTypeStrengthDictionary[GROUND][WATER] = 1
skillToTypeStrengthDictionary[GROUND][ELECTRIC] = 2
skillToTypeStrengthDictionary[GROUND][GRASS] = .5
skillToTypeStrengthDictionary[GROUND][ICE] = 1
skillToTypeStrengthDictionary[GROUND][FIGHTING] = 1
skillToTypeStrengthDictionary[GROUND][POISON] = 2
skillToTypeStrengthDictionary[GROUND][GROUND] = 1
skillToTypeStrengthDictionary[GROUND][FLYING] = 0
skillToTypeStrengthDictionary[GROUND][PSYCHIC] = 1
skillToTypeStrengthDictionary[GROUND][BUG] = .5
skillToTypeStrengthDictionary[GROUND][ROCK] = 2
skillToTypeStrengthDictionary[GROUND][GHOST] = 1
skillToTypeStrengthDictionary[GROUND][DRAGON] = 1
skillToTypeStrengthDictionary[GROUND][DARK] = 1
skillToTypeStrengthDictionary[GROUND][STEEL] = 2
skillToTypeStrengthDictionary[GROUND][FAIRY] = 1

//FLYING skill to type mapping
skillToTypeStrengthDictionary[FLYING] = new Array();
skillToTypeStrengthDictionary[FLYING][NORMAL] = 1
skillToTypeStrengthDictionary[FLYING][FIRE] = 1
skillToTypeStrengthDictionary[FLYING][WATER] = 1
skillToTypeStrengthDictionary[FLYING][ELECTRIC] = .5
skillToTypeStrengthDictionary[FLYING][GRASS] = 2
skillToTypeStrengthDictionary[FLYING][ICE] = 1
skillToTypeStrengthDictionary[FLYING][FIGHTING] = 2
skillToTypeStrengthDictionary[FLYING][POISON] = 1
skillToTypeStrengthDictionary[FLYING][GROUND] = 1
skillToTypeStrengthDictionary[FLYING][FLYING] = 1
skillToTypeStrengthDictionary[FLYING][PSYCHIC] = 1
skillToTypeStrengthDictionary[FLYING][BUG] = 2
skillToTypeStrengthDictionary[FLYING][ROCK] = .5
skillToTypeStrengthDictionary[FLYING][GHOST] = 1
skillToTypeStrengthDictionary[FLYING][DRAGON] = 1
skillToTypeStrengthDictionary[FLYING][DARK] = 1
skillToTypeStrengthDictionary[FLYING][STEEL] = .5
skillToTypeStrengthDictionary[FLYING][FAIRY] = 1

//PSYCHIC skill to type mapping
skillToTypeStrengthDictionary[PSYCHIC] = new Array();
skillToTypeStrengthDictionary[PSYCHIC][NORMAL] = 1
skillToTypeStrengthDictionary[PSYCHIC][FIRE] = 1
skillToTypeStrengthDictionary[PSYCHIC][WATER] = 1
skillToTypeStrengthDictionary[PSYCHIC][ELECTRIC] = 1
skillToTypeStrengthDictionary[PSYCHIC][GRASS] = 1
skillToTypeStrengthDictionary[PSYCHIC][ICE] = 1
skillToTypeStrengthDictionary[PSYCHIC][FIGHTING] = 2
skillToTypeStrengthDictionary[PSYCHIC][POISON] = 2
skillToTypeStrengthDictionary[PSYCHIC][GROUND] = 1
skillToTypeStrengthDictionary[PSYCHIC][FLYING] = 1
skillToTypeStrengthDictionary[PSYCHIC][PSYCHIC] = .5
skillToTypeStrengthDictionary[PSYCHIC][BUG] = 1
skillToTypeStrengthDictionary[PSYCHIC][ROCK] = 1
skillToTypeStrengthDictionary[PSYCHIC][GHOST] = 1
skillToTypeStrengthDictionary[PSYCHIC][DRAGON] = 1
skillToTypeStrengthDictionary[PSYCHIC][DARK] = 0
skillToTypeStrengthDictionary[PSYCHIC][STEEL] = .5
skillToTypeStrengthDictionary[PSYCHIC][FAIRY] = 1

//BUG skill to type mapping
skillToTypeStrengthDictionary[BUG] = new Array();
skillToTypeStrengthDictionary[BUG][NORMAL] = 1
skillToTypeStrengthDictionary[BUG][FIRE] = .5
skillToTypeStrengthDictionary[BUG][WATER] = 1
skillToTypeStrengthDictionary[BUG][ELECTRIC] = 1
skillToTypeStrengthDictionary[BUG][GRASS] = 2
skillToTypeStrengthDictionary[BUG][ICE] = 1
skillToTypeStrengthDictionary[BUG][FIGHTING] = .5
skillToTypeStrengthDictionary[BUG][POISON] = .5
skillToTypeStrengthDictionary[BUG][GROUND] = 1
skillToTypeStrengthDictionary[BUG][FLYING] = .5
skillToTypeStrengthDictionary[BUG][PSYCHIC] = 2
skillToTypeStrengthDictionary[BUG][BUG] = 1
skillToTypeStrengthDictionary[BUG][ROCK] = 1
skillToTypeStrengthDictionary[BUG][GHOST] = .5
skillToTypeStrengthDictionary[BUG][DRAGON] = 1
skillToTypeStrengthDictionary[BUG][DARK] = 2
skillToTypeStrengthDictionary[BUG][STEEL] = .5
skillToTypeStrengthDictionary[BUG][FAIRY] = .5

//ROCK skill to type mapping
skillToTypeStrengthDictionary[ROCK] = new Array();
skillToTypeStrengthDictionary[ROCK][NORMAL] = 1
skillToTypeStrengthDictionary[ROCK][FIRE] = 2
skillToTypeStrengthDictionary[ROCK][WATER] = 1
skillToTypeStrengthDictionary[ROCK][ELECTRIC] = 1
skillToTypeStrengthDictionary[ROCK][GRASS] = 1
skillToTypeStrengthDictionary[ROCK][ICE] = 2
skillToTypeStrengthDictionary[ROCK][FIGHTING] = .5
skillToTypeStrengthDictionary[ROCK][POISON] = 1
skillToTypeStrengthDictionary[ROCK][GROUND] = .5
skillToTypeStrengthDictionary[ROCK][FLYING] = 2
skillToTypeStrengthDictionary[ROCK][PSYCHIC] = 1
skillToTypeStrengthDictionary[ROCK][BUG] = 2
skillToTypeStrengthDictionary[ROCK][ROCK] = 1
skillToTypeStrengthDictionary[ROCK][GHOST] = 1
skillToTypeStrengthDictionary[ROCK][DRAGON] = 1
skillToTypeStrengthDictionary[ROCK][DARK] = 1
skillToTypeStrengthDictionary[ROCK][STEEL] = .5
skillToTypeStrengthDictionary[ROCK][FAIRY] = 1

//GHOST skill to type mapping
skillToTypeStrengthDictionary[GHOST] = new Array();
skillToTypeStrengthDictionary[GHOST][NORMAL] = 0
skillToTypeStrengthDictionary[GHOST][FIRE] = 1
skillToTypeStrengthDictionary[GHOST][WATER] = 1
skillToTypeStrengthDictionary[GHOST][ELECTRIC] = 1
skillToTypeStrengthDictionary[GHOST][GRASS] = 1
skillToTypeStrengthDictionary[GHOST][ICE] = 1
skillToTypeStrengthDictionary[GHOST][FIGHTING] = 1
skillToTypeStrengthDictionary[GHOST][POISON] = 1
skillToTypeStrengthDictionary[GHOST][GROUND] = 1
skillToTypeStrengthDictionary[GHOST][FLYING] = 1
skillToTypeStrengthDictionary[GHOST][PSYCHIC] = 2
skillToTypeStrengthDictionary[GHOST][BUG] = 1
skillToTypeStrengthDictionary[GHOST][ROCK] = 1
skillToTypeStrengthDictionary[GHOST][GHOST] = 2
skillToTypeStrengthDictionary[GHOST][DRAGON] = 1
skillToTypeStrengthDictionary[GHOST][DARK] = .5
skillToTypeStrengthDictionary[GHOST][STEEL] = 1
skillToTypeStrengthDictionary[GHOST][FAIRY] = 1

//DRAGON skill to type mapping
skillToTypeStrengthDictionary[DRAGON] = new Array();
skillToTypeStrengthDictionary[DRAGON][NORMAL] = 1
skillToTypeStrengthDictionary[DRAGON][FIRE] = 1
skillToTypeStrengthDictionary[DRAGON][WATER] = 1
skillToTypeStrengthDictionary[DRAGON][ELECTRIC] = 1
skillToTypeStrengthDictionary[DRAGON][GRASS] = 1
skillToTypeStrengthDictionary[DRAGON][ICE] = 1
skillToTypeStrengthDictionary[DRAGON][FIGHTING] = 1
skillToTypeStrengthDictionary[DRAGON][POISON] = 1
skillToTypeStrengthDictionary[DRAGON][GROUND] = 1
skillToTypeStrengthDictionary[DRAGON][FLYING] = 1
skillToTypeStrengthDictionary[DRAGON][PSYCHIC] = 1
skillToTypeStrengthDictionary[DRAGON][BUG] = 1
skillToTypeStrengthDictionary[DRAGON][ROCK] = 1
skillToTypeStrengthDictionary[DRAGON][GHOST] = 1
skillToTypeStrengthDictionary[DRAGON][DRAGON] = 2
skillToTypeStrengthDictionary[DRAGON][DARK] = 1
skillToTypeStrengthDictionary[DRAGON][STEEL] = .5
skillToTypeStrengthDictionary[DRAGON][FAIRY] = 0

//DARK skill to type mapping
skillToTypeStrengthDictionary[DARK] = new Array();
skillToTypeStrengthDictionary[DARK][NORMAL] = 1
skillToTypeStrengthDictionary[DARK][FIRE] = 1
skillToTypeStrengthDictionary[DARK][WATER] = 1
skillToTypeStrengthDictionary[DARK][ELECTRIC] = 1
skillToTypeStrengthDictionary[DARK][GRASS] = 1
skillToTypeStrengthDictionary[DARK][ICE] = 1
skillToTypeStrengthDictionary[DARK][FIGHTING] = .5
skillToTypeStrengthDictionary[DARK][POISON] = 1
skillToTypeStrengthDictionary[DARK][GROUND] = 1
skillToTypeStrengthDictionary[DARK][FLYING] = 1
skillToTypeStrengthDictionary[DARK][PSYCHIC] = 2
skillToTypeStrengthDictionary[DARK][BUG] = 1
skillToTypeStrengthDictionary[DARK][ROCK] = 1
skillToTypeStrengthDictionary[DARK][GHOST] = 2
skillToTypeStrengthDictionary[DARK][DRAGON] = 1
skillToTypeStrengthDictionary[DARK][DARK] = .5
skillToTypeStrengthDictionary[DARK][STEEL] = 1
skillToTypeStrengthDictionary[DARK][FAIRY] = .5

//STEEL skill to type mapping
skillToTypeStrengthDictionary[STEEL] = new Array();
skillToTypeStrengthDictionary[STEEL][NORMAL] = 1
skillToTypeStrengthDictionary[STEEL][FIRE] = .5
skillToTypeStrengthDictionary[STEEL][WATER] = .5
skillToTypeStrengthDictionary[STEEL][ELECTRIC] = .5
skillToTypeStrengthDictionary[STEEL][GRASS] = 1
skillToTypeStrengthDictionary[STEEL][ICE] = 2
skillToTypeStrengthDictionary[STEEL][FIGHTING] = 1
skillToTypeStrengthDictionary[STEEL][POISON] = 1
skillToTypeStrengthDictionary[STEEL][GROUND] = 1
skillToTypeStrengthDictionary[STEEL][FLYING] = 1
skillToTypeStrengthDictionary[STEEL][PSYCHIC] = 1
skillToTypeStrengthDictionary[STEEL][BUG] = 1
skillToTypeStrengthDictionary[STEEL][ROCK] = 2
skillToTypeStrengthDictionary[STEEL][GHOST] = 1
skillToTypeStrengthDictionary[STEEL][DRAGON] = 1
skillToTypeStrengthDictionary[STEEL][DARK] = 1
skillToTypeStrengthDictionary[STEEL][STEEL] = .5
skillToTypeStrengthDictionary[STEEL][FAIRY] = 2

//FAIRY skill to type mapping
skillToTypeStrengthDictionary[FAIRY] = new Array();
skillToTypeStrengthDictionary[FAIRY][NORMAL] = 1
skillToTypeStrengthDictionary[FAIRY][FIRE] = .5
skillToTypeStrengthDictionary[FAIRY][WATER] = 1
skillToTypeStrengthDictionary[FAIRY][ELECTRIC] = 1
skillToTypeStrengthDictionary[FAIRY][GRASS] = 1
skillToTypeStrengthDictionary[FAIRY][ICE] = 1
skillToTypeStrengthDictionary[FAIRY][FIGHTING] = 2
skillToTypeStrengthDictionary[FAIRY][POISON] = .5
skillToTypeStrengthDictionary[FAIRY][GROUND] = 1
skillToTypeStrengthDictionary[FAIRY][FLYING] = 1
skillToTypeStrengthDictionary[FAIRY][PSYCHIC] = 1
skillToTypeStrengthDictionary[FAIRY][BUG] = 1
skillToTypeStrengthDictionary[FAIRY][ROCK] = 1
skillToTypeStrengthDictionary[FAIRY][GHOST] = 1
skillToTypeStrengthDictionary[FAIRY][DRAGON] = 2
skillToTypeStrengthDictionary[FAIRY][DARK] = 2
skillToTypeStrengthDictionary[FAIRY][STEEL] = .5
skillToTypeStrengthDictionary[FAIRY][FAIRY] = 1
