const ratings = document.querySelector('.rate-num');

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

ratings.addEventListener('click', () => {
  ratings.classList.toggle('active');
})
