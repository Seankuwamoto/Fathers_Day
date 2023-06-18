
window.onload = function() {
    document.getElementsByTagName("input")[1].addEventListener('click', _ => {
        let response = document.getElementsByTagName("input")[0].value;
        if (response === "223") window.location.href = "correctAnswer.html"
        else window.location.href = "wrongAnswer.html"
    });
}
