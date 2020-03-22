exports.share = function() {
  if (navigator.share) {
    console.log("supported");
  } else {
    console.log("not");
  }
  const shareButton = document.getElementById("share");
  const $shareEl = document.getElementById("url");
  if (shareButton) {
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
  }
};
