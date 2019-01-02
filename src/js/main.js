function openSideNav() {
    document.getElementById('sideNav').style.width = '100%';
    document.getElementById('opensideNav').style.display = 'none';
    document.getElementById('closesideNav').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden';
}

function closeSideNav() {
    document.getElementById('sideNav').style.width = '0%';
    document.getElementById('opensideNav').style.display = 'block';
    document.getElementById('closesideNav').style.display = 'none';
    document.getElementById('body').style.overflow = 'unset';
}