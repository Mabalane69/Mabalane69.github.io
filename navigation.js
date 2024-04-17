function showHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('aboutSection').style.display = 'none';
}

function showAbout() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'block';
}

function showContact() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
}

function showProjects() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
}

document.getElementById('homeLink').addEventListener('click', showHome);
document.getElementById('aboutLink').addEventListener('click', showAbout);
document.getElementById('contactLink').addEventListener('click', showContact);
document.getElementById('projectsLink').addEventListener('click', showProjects);
