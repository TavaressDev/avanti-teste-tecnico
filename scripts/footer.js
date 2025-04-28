document.addEventListener('DOMContentLoaded', function() {
    const initMobileFooter = () => {
        const dropdownButtons = document.querySelectorAll('.mobile-dropdown-btn');
        
        const closeAllDropdowns = () => {
            document.querySelectorAll('.mobile-dropdown-content').forEach(content => {
                content.style.display = 'none';
                const btn = content.previousElementSibling;
                if (btn) btn.classList.remove('active');
            });
        };
        
        const toggleDropdown = (button) => {
            const content = button.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            closeAllDropdowns();
            
            if (!isOpen) {
                content.style.display = 'block';
                button.classList.add('active');
            }
        };
        
        dropdownButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDropdown(this);
            });
        });
    
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.mobile-dropdown')) {
                closeAllDropdowns();
            }
        });
    };
    
    initMobileFooter();

});