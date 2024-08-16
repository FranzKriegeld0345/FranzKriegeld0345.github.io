document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.clickable').forEach(element => {
        element.addEventListener('click', () => {
            const targetId = element.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
