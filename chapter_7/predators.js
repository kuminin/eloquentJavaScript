function SmartPlantEater() {
  this.energy = 30;
  this.direction = "s";
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 90 && space)
    return {type: "reproduce", direction: space};
  var plants = view.findAll("*");
  if (plants.length > 1)
    return {type: "eat", direction: randomElement(plants)};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "move", direction: this.direction};
}

// Your code here
function Tiger() {
  this.energy = 100;
  this.direction = "e";
}

Tiger.prototype.act = function(view) {
  var space = view.find(" ");
  var smartPlantEaters = view.findAll("O");
  if (this.energy >= 300)
    return {type:"reproduce", direction: space};
  if (smartPlantEaters.length > 1) {
    return {type:"eat", direction: randomElement(smartPlantEaters)};
  }
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type:"move", direction: this.direction};

}

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));