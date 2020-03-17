exports.init = function() {
  if (navigator.clipboard) {
    console.log("Support du presse papier");
  } else {
    console.warn("Pas de support :(");
  }
  document.querySelectorAll("[data-clipboard]").forEach($clipboardEl => {
    const $button = document.createElement("button");
    $button.innerHTML = "Copier";
    $clipboardEl.parentNode.append($button);
    let $copyText = document.getElementById("url");
    $button.addEventListener("click", function() {
      $copyText.select();
      document.execCommand("copy");
    });
  });
};
