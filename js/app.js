var button = document.querySelector("button"),
    div = document.querySelector("div");

button.addEventListener("click", function() {
    div.classList.toggle("hidden");
    var span = this.querySelector("span");
    var temp = span.innerHTML;
    span.innerHTML = span.dataset.text;
    span.dataset.text = temp;
    this.classList.toggle("center");
});


