setYearCopy();

function setYearCopy() {
    const yearCopy = document.querySelectorAll('.year-copy');

    yearCopy.forEach(element => {
        element.innerHTML = (new Date()).getFullYear();
    })    
}