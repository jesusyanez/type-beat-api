import beatList from "../worker/beats.json";

class ThemeAController {
  defaultMethod() {
    console.log(beatList.length + " beats returned");
    return beatList[Math.floor(Math.random()*beatList.length)];
  }
}

export = new ThemeAController();
