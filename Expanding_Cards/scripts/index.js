

const ctr = document.querySelectorAll('.img');
// console.log(ctr);

function removeActiveClass() {

    for(const i of ctr){
        i.classList.remove('active');
    }
}

const container = document.querySelector('.container');

container.addEventListener('click',(e) => {
    console.log(e.target.closest('.img'));
    removeActiveClass();
    e.target.closest('.img').classList.toggle('active');
})
