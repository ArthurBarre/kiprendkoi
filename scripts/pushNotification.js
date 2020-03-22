module.exports = class Pusher {
  //check if web notification is supported
  checkSupport() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  }
// check if users's permission
  checkPermission() {
    if (Notification.permission === "granted") {
      return true;
    } else {
      Notification.requestPermission(function(permission) {
        if (permission === "granted") {
          var notification = new Notification(
            "Notifications are enabled from now !"
          );
          localStorage.setItem("notification", true);
        }
      });
    }
  }
  //excute notification
  pushNotification(body) {
    Notification.requestPermission(function(permission) {
      if (permission === "granted") {
        var notification = new Notification(body);
      }
    });
  }
};
