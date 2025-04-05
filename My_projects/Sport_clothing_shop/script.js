const optionsDivs = document.getElementsByClassName('options-divs');
const bgColor = document.getElementsByClassName('bg-color');
const optionsP = document.getElementsByClassName('options-p');
const discover = document.getElementsByClassName('discover')

for(let i = 0; i < optionsDivs.length; i++){
    optionsDivs[i].addEventListener('mouseover', () => {
        bgColor[i].style.background = 'rgba(0, 0, 0, 0.1)';
        optionsP[i].style.marginBottom = '120px';
        discover[i].style.opacity = '1';
    });
    optionsDivs[i].addEventListener('mouseleave', () => {
        bgColor[i].style.background = 'rgba(0, 0, 0, 0.3)';
        optionsP[i].style.marginBottom = '0';
        discover[i].style.opacity = '0';
    });
};