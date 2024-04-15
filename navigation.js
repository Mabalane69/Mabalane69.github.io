function showHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('aboutSection').style.display = 'none';
}

function showAbout() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'block';
}

document.getElementById('homeLink').addEventListener('click', showHome);
document.getElementById('aboutLink').addEventListener('click', showAbout);
