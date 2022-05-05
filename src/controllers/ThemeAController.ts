import burr from "../worker/user.json";

class ThemeAController {
  defaultMethod() {
    console.log(burr.length + " beats returned");
    return burr;
  }
}

export = new ThemeAController();
