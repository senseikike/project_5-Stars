// let starUno = document.querySelector(".uno");

// starUno.addEventListener("click", () => {
//     apretarEstrella(starUno)
// });

// function apretarEstrella(starUno){
//     console.log(starUno);

// }

// let starUno 
// = document.querySelector(".uno");

// function apretarEstrella(){
//     console.log(starUno);
//     document.querySelector(".uno");
// }

// src-"star-gray.png"
// src-"star-pink.png"

// document.addEventListener('DOMContentLoaded', () => {
//     const stars = document.querySelectorAll('.estrella');
//     const totalStars = stars.length;

//     stars.forEach(star => {
//         star.addEventListener('click', (e) => {
//             e.preventDefault();
//             const rating = star.getAttribute('data-value');
//             setRating(rating);
//             alert(`Has seleccionado ${rating} estrellas.`);
//         });
//     });

//     function setRating(rating) {
//         stars.forEach(star => {
//             const starValue = star.getAttribute('data-value');
//             if (starValue <= rating) {
//                 star.querySelector('img').src = 'img/star-pink.png';
//             } else {
//                 star.querySelector('img').src = 'img/star-gray.png';
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.estrella');
    
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            e.preventDefault();
            const rating = star.getAttribute('data-value');
            setRating(rating);
            alert(`Has seleccionado ${rating} estrellas.`);
        });
    });

    function setRating(rating) {
        stars.forEach(star => {
            const starValue = star.getAttribute('data-value');
            const img = star.querySelector('img');
            if (starValue <= rating) {
                img.src = 'img/star-pink.png';
            } else {
                img.src = 'img/star-gray.png';
            }
        });
    }
});