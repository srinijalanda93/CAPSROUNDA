document.addEventListener('DOMContentLoaded', (event) => {
    const schoolDropdown = document.getElementById('school-dropdown');
    const dropdownContent = document.getElementById('dropdown-content');

    schoolDropdown.addEventListener('mouseenter', () => {
        dropdownContent.style.display = 'block';
    });

    schoolDropdown.addEventListener('mouseleave', () => {
        dropdownContent.style.display = 'none';
    });
});
