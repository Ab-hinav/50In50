

const ctr = document.querySelector('.img');
const mp = new Map();
const container = document.querySelector('.container');
mp.set('active',ctr);

function removeActiveClass(activeDiv) {
    const currActive = mp.get('active');
    currActive.classList.remove('active');
    mp.set('active',activeDiv);    
}

container.addEventListener('click',(e) => {
    console.log(e.target);
    removeActiveClass(e.target);
    e.target.classList.toggle('active');
})
