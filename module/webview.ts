import { Webview } from "https://deno.land/x/webview@0.7.5/mod.ts";

const webview = new Webview();

export function loadWebview(url = "http://localhost:19198") {
  console.log(`开启窗口${url}`);
  webview.navigate(url);
  webview.run();
}

// var readCount = 1; // 计数器
// const stopId = setInterval(() => { // 循环
//   top.amIDCardReader.ReadData();
//   if (readCount >= 5) {
//     clearInterval(stopId);
//   }
// }, 5000); // 5000ms = 5s


