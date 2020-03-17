exports.share = function() {
  const $shareEl = document.getElementById("url");
  const shareButton = document.getElementById("share");
  shareButton.addEventListener("click", function() {
    navigator
      .share({
        title: document.title,
        text: window.location.href,
        url: window.location.href
      })
      .then(
        () => console.log("Successful share"),
        error => console.log("Error sharing:", error)
      );
  });
};
