let regCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
let infoBlock = document.querySelector('.info-block');

function doIt() {
    let counter = 0;
    for (let i = 0; i < regCheckBoxes.length; i++) {
        regCheckBoxes[i].required = false;
        if (regCheckBoxes[i].checked) {
            counter++
        }
        if (counter === regCheckBoxes.length) {
            infoBlock.style.display = 'block';
            counter--;
        } else {
            infoBlock.style.display = 'none'
        }
    }
}



if (!!regCheckBoxes.length) {
    for (let i = 0; i < regCheckBoxes.length; i++) {
        regCheckBoxes[i].addEventListener('change', doIt)
    }
}

