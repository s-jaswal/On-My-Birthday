function toggleInfoParagraph1() {
    var paragraph = document.getElementById("hiddenParagraph");

    // Toggle the display property
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}