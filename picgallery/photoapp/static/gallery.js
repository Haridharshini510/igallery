let wrapper = document.getElementById('wrapper');
let myImg = document.getElementById('fullImg');
let close = document.getElementById('close');

function open(imageName) {
    wrapper.style.display = 'flex';
    myImg.src = imageName;
}

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});
