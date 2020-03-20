exports.share = function() {
  const $shareEl = document.getElementById("url");
  const shareButton = document.getElementById("share");
  shareButton.addEventListener("click", function() {
    navigator
      .share({
        title: $shareEl.getAttribute("data-share-title"),
        text: $shareEl.getAttribute("data-share-text"),
        url: $shareEl.getAttribute("data-share-url")
      })
      .then(
        () => console.log("Successful share"),
        error => console.log("Error sharing:", error)
      );
  });
};
