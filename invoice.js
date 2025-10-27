document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeButton = document.querySelector('.close-button');
    const contentWrapper = document.querySelector('.content-wrapper');
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('show', isMenuOpen);
        if (isMenuOpen) {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            contentWrapper.appendChild(overlay);
            overlay.addEventListener('click', toggleMenu);
        } else {
            const overlay = contentWrapper.querySelector('.overlay');
            if (overlay) {
                contentWrapper.removeChild(overlay);
            }
        }
    };

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    if (closeButton) {
        closeButton.addEventListener('click', toggleMenu);
    }

    const selectAllCheckbox = document.querySelector('.table-title .title-check');
    const rowCheckboxes = document.querySelectorAll('.row .title-check');

    const toggleRow = (checkbox) => {
        const row = checkbox.closest('.row');
        const isChecked = checkbox.textContent.trim() === 'check_box';
        
        checkbox.textContent = isChecked ? 'check_box_outline_blank' : 'check_box';
        row.classList.toggle('row-selected', !isChecked);
        checkbox.classList.toggle('selected', !isChecked);
    };

    const toggleSelectAll = () => {
        const isChecked = selectAllCheckbox.textContent.trim() === 'check_box';
        const newIcon = isChecked ? 'check_box_outline_blank' : 'check_box';
        
        selectAllCheckbox.textContent = newIcon;
        selectAllCheckbox.classList.toggle('selected', !isChecked);

        rowCheckboxes.forEach(checkbox => {
            const row = checkbox.closest('.row');
            checkbox.textContent = newIcon;
            row.classList.toggle('row-selected', !isChecked);
            checkbox.classList.toggle('selected', !isChecked);
        });
    };

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('click', toggleSelectAll);
    }

    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => toggleRow(checkbox));
    });
});
