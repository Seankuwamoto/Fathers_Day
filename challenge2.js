
window.onload = function() {
    document.getElementsByTagName("input")[1].addEventListener('click', _ => {
        let response = document.getElementsByTagName("input")[0].value.toLowerCase();
        let params = new URLSearchParams();
        params.append("completed", true);
        if (response === "yuzu tree") window.location.href = "index.html?" + params.toString();
        else window.location.href = "wrongAnswer2.html?" + params.toString();
    });
}
