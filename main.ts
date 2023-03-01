import { listen } from "./module/static.ts";
import { loadWebview } from "./module/webview.ts";
import { blue, red } from "std/fmt/colors.ts";
import {
  getAllfield,
  getLanguagesKey,
  Lang,
  languages,
  setLanguageId,
} from "./lang/index.ts";

let lang: Lang = "en";
class Menu {
  id;
  callBack;
  sort = "";
  constructor(id: number, name: string, callBack: () => void) {
    const sort = languages[lang]["sort"];
    const description = languages[lang]["description"];
    Reflect.set(this, sort, id);
    Reflect.set(this, description, name);
    this.id = id;
    this.callBack = callBack;
  }
}

function welcome() {
  console.clear();
  const SelectLangText = blue(languages[lang]["SelectLang"]);
  console.table(getLanguagesKey(lang));
  const text = prompt(SelectLangText);
  if (text) {
    const l = setLanguageId(parseInt(text));
    if (l) lang = l;
  }
  console.clear();
  showMenu();
}
welcome();

function showMenu() {
  const menus = [
    new Menu(0, languages[lang]["openWsServerPort"], () => {
    }),
    new Menu(1, languages[lang]["selectMenuLang"], welcome),
  ];
  //   const sort = languages[lang]["sort"];
  const description = languages[lang]["description"];
  console.clear();
  console.table(
    menus,
    [description],
  );

  const SelectMenuText = blue(languages[lang]["SelectMenu"]);
  let text1 = prompt(SelectMenuText);
  function passMenuText() {
    const item = menus.find((e) => text1 && e.id === parseInt(text1));
    item?.callBack();
    if (!item) {
      text1 = prompt(SelectMenuText);
      passMenuText();
    }
  }
  passMenuText();
}

// console.log(text);
// listen();
// setTimeout(loadWebview);
