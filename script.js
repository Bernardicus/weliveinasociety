window.onload = function() {
    // Path to your text file
    var filePath = "textfile.txt";

    // Fetch the text file
    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        // Display the text in the HTML page
        document.getElementById('text-container').innerText = data;
    })
    .catch(error => {
        console.error('Error fetching the file:', error);
    });
};
