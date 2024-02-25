    // Get all <p> elements
    var paragraphs = document.getElementsByTagName("p");

    // Loop through the HTMLCollection and change the text content
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = "This paragraph has been changed by JavaScript.";
    }