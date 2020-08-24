var headers = new Headers();
// *** I set the header in order to solve the error above:
// *** The value is set to "/" because this js is included in html file in upper folder.
// *** I tried even "../" and many more others values...
headers.append("Service-Worker-Allowed", "/");
console.log(headers.get("Service-Worker-Allowed"));

window.addEventListener("load", () => {
  if (!navigator.serviceWorker) {
    return;
  }
  navigator.serviceWorker
    .register("sw.js", {
      scope: "/experiments",
    })
    .catch((err) => {
      console.log("SW registration failed", err);
    });
});
