self.addEventListener("push", function (event) {
  console.log("Push Notification received:", event);

  const body = "TEST";
  const icon = "img/icon.png";
  const badge = "img/badge.png";

  const options = { body, icon, badge };

  event.waitUntil(self.registration.showNotification("TEST", options));
});
