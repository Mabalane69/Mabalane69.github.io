// downloadCV.js

function downloadCV() {
    // Define the URL of the CV file
    var cvUrl = 'cv.pdf'; // Adjust the URL according to your file structure

    // Create an anchor element to trigger the download
    var anchor = document.createElement('a');
    anchor.href = cvUrl;
    anchor.download = 'cv.pdf'; // Specify the filename for the downloaded file

    // Append the anchor to the body and simulate a click event
    document.body.appendChild(anchor);
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
}
