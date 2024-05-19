let openBox = null; // Variable to track the currently open box

function toggleDescription(element) {
    const description = element.querySelector('.description');
    const descriptionHeight = description.scrollHeight;
    const skillBoxes = document.querySelectorAll('.skill-box');

    if (element === openBox) {
        // Close the currently open box
        description.style.display = 'none';
        skillBoxes.forEach(box => {
            box.classList.remove('opened'); // Remove the 'opened' class
            box.style.transform = 'translateY(0)';
        });
        openBox = null; // Reset the open box variable
    } else if (!openBox) {
        // Open the clicked box
        description.style.display = 'block';
        skillBoxes.forEach(box => {
            if (box !== element) {
                const boxRect = box.getBoundingClientRect();
                const descriptionRect = description.getBoundingClientRect();
                const overlap = Math.max(0, boxRect.bottom - descriptionRect.top);
                box.style.transform = `translateY(${overlap}px)`;
            }
        });
        openBox = element; // Set the open box variable
        element.classList.add('opened'); // Add the 'opened' class
    }
}

function closeAllDescriptions() {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(description => {
        description.style.display = 'none';
    });
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach(box => {
        box.classList.remove('opened'); // Remove the 'opened' class from all boxes
    });
    openBox = null; // Reset the open box variable
}

document.addEventListener('DOMContentLoaded', function() {
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach(box => {
        box.addEventListener('mouseleave', function() {
            if (box === openBox) {
                toggleDescription(box);
            }
        });
    });
});