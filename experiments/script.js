window.addEventListener("load", () => {
  if (!navigator.serviceWorker) {
    return;
  }
  navigator.serviceWorker
    .register("sw.js", {
      scope: "/experiments/",
    })
    .catch((err) => {
      console.log("SW registration failed", err);
    });
});
