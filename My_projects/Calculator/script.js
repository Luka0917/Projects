const p = document.querySelector('p');
const remove = document.getElementById('remove');
const c = document.getElementById('c');
const is = document.getElementById('is');
const operations = document.getElementsByClassName('op');
const numbers = document.getElementsByClassName('nums');

c.addEventListener('click', () => {
    p.textContent = '0';
})
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => {
        if(p.textContent === '0'){
            p.textContent = numbers[i].textContent;
        }else{
            p.textContent += numbers[i].textContent;
        };
    });
    if(p.textContent.length >= 15){
        alert("You can't write 15 or over 15 characters!");
        p.textContent = '0';
    };
};
for(let i = 0; i < operations.length; i++){
    operations[i].addEventListener('click', () => {
        p.textContent += operations[i].textContent;
    });
};
is.addEventListener('click', () => {
    p.textContent = eval(p.textContent);
});
remove.addEventListener('click', () => {
    p.textContent = p.textContent.slice(0, -1);
    if(p.textContent === ''){
        p.textContent = '0';
    };
});