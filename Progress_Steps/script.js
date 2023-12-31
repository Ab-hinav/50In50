
const nxt = document.getElementById('nxt');
const pre = document.getElementById('prev');
const bar = document.getElementById('bar');
let currPos =1;
pre.setAttribute('disabled', true);

nxt.addEventListener('click', () => {

    const items = document.querySelectorAll('.item');
    console.log(items);
    
    if(currPos<items.length){
        items[currPos].classList.add('active');
        currPos++;
    }

    const width = ((currPos -1)/3)*100;
    bar.setAttribute('style', `width: ${width}%`);

    if(currPos>1){
        pre.removeAttribute('disabled');
    }

    if(currPos == items.length ){
        nxt.setAttribute('disabled', true);
    }
    
});

pre.addEventListener('click', () => {


    const items = document.querySelectorAll('.item');

    if(currPos>1){
        items[currPos-1].classList.remove('active');
        currPos--;
    }
    const width = ((currPos -1)/3)*100;
    bar.setAttribute('style', `width: ${width}%`);

    if(currPos===1){
        pre.setAttribute('disabled', true);
    }

    if(currPos < items.length ){
        nxt.removeAttribute('disabled');
    }

});