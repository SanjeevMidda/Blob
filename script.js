let circle = document.querySelector('.circle');

circle.addEventListener('click', borderRadius);

function randomValue(){
    return Math.floor(Math.random()*100);
}

function borderRadius(){
    // let values = circle.style.borderRadius = `${randomValue()}px ${randomValue()}px ${randomValue()}px ${randomValue()}px`;

    let values = circle.style.borderRadius = `${randomValue()}% ${randomValue()}% ${randomValue()}% ${randomValue()}%`;

    console.log(values);
}