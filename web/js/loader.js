document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
});