const partone = document.getElementById('part-one');
const parttwo = document.getElementById('part-two');

partone.addEventListener('mouseover',() =>{
    
    parttwo.classList.remove('hover-right');
    partone.classList.remove('hover-right');
    parttwo.classList.add('hover-left');
    partone.classList.add('hover-left');
    
});

partone.addEventListener('mouseout',() =>{
    parttwo.classList.remove('hover-left');
    partone.classList.remove('hover-left');

});

parttwo.addEventListener('mouseover',() =>{
    parttwo.classList.remove('hover-left');
    partone.classList.remove('hover-left');
    parttwo.classList.add('hover-right');
    partone.classList.add('hover-right'); 

});


parttwo.addEventListener('mouseout',() =>{
    parttwo.classList.remove('hover-right');
    partone.classList.remove('hover-right');

});
