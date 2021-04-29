// code start from here

// script for sidebar toggle
const toggle    = document.querySelector('.nav .nav-left .nav-icon');
const sidebar   = document.querySelector('.sidebar');
const close     = document.querySelector('.sidebar .sidebar-title .sidebar-title-close');

toggle.addEventListener('click', () => {
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
    sidebar.style.transition = "all 1s ease-in-out";
});

close.addEventListener('click', () => {
    sidebar.style.display = "none";
});
// end sidebar toggle script