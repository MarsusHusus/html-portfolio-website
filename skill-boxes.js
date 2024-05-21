let openBox = null; // Variable to track the currently open box

function toggleDescription(element) {
    const description = element.querySelector('.description');
    const skillBoxes = document.querySelectorAll('.skill-box');

    // Clicking on an already opened box should not close it
    if (element === openBox) {
        return;
    }

    // Close the currently open box if there is one
    if (openBox) {
        const openDescription = openBox.querySelector('.description');
        openDescription.style.display = 'none';
        skillBoxes.forEach(box => {
            box.classList.remove('opened');
            box.style.transform = 'translateY(0)';
        });
    }

    // Open the clicked box
    description.style.display = 'block';
    skillBoxes.forEach(box => {
        if (box !== element) {
            const boxRect = box.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            const descriptionRect = description.getBoundingClientRect();
            
            // Only apply translation if the box is below the currently opened description
            const overlap = Math.max(0, elementRect.bottom - boxRect.top);
            box.style.transform = (boxRect.top > elementRect.top) ? `translateY(${overlap + descriptionRect.height}px)` : 'translateY(0)';
        }
    });

    openBox = element;
    element.classList.add('opened');
}

document.addEventListener('DOMContentLoaded', function() {
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach(box => {
        box.addEventListener('click', () => toggleDescription(box));
    });
});
