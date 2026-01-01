

function filterDiv(category) {
    const containers = document.querySelectorAll(".containerr");

    containers.forEach(container => {
        if (container.dataset.category === category) {
            container.style.display = "flex";
        } else {
            container.style.display = "none";
        }
    });
}


filterDivs('firstSlide');