const ratings = document.querySelectorAll('.rate-num');

// const toggleRating = () => {
//   ratings.forEach(rating => {
//     rating.currentTarget.classList.toggle('active');
//     console.log('rating')
//   });
// }

// ratings.forEach(rating => ('click', () => {
//   rating.currentTarget.classList.toggle('active');
//   console.log('rating')
// }));


for (let rating of ratings) {
rating.addEventListener('click', () => {
  rating.classList.toggle('active');
})}
