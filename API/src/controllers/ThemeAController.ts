import burr from "../data/mockBeats.json";

class ThemeAController {
  defaultMethod() {
    console.log(burr[1]);
    return burr;
  }
}

export = new ThemeAController();