// Change text of the paragraph when button is clicked
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = "Text changed successfully!";
});

// Change background color of body element to a random color on page load
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Append a new paragraph to the container on page load
document.addEventListener('DOMContentLoaded', function() {
    var newParagraph = document.createElement('p');
    newParagraph.textContent = "New paragraph added dynamically!";
    document.getElementById('container').appendChild(newParagraph);
});
