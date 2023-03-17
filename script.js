const submitbtn = document.querySelector('#submit');
const thankyoucard = document.querySelector('.thankyou-body');
const ratingcard = document.querySelector('.rating-body');
const ratingnum = document.querySelector('.rating-nums');


// ratingnum.forEach(rating => {
//   rating.addEventListener('click', () => {
//     rating.addEventListener('click', () => {
//       rating.classList.add('disable');
//       rating.classList.remove('active')
//     } )
//     rating.classList.add('active');
//     rating.classList.remove('disabled')
//   })
// });

submitbtn.addEventListener('click', () => {
  thankyoucard.classList.remove('hidden');
  ratingcard.classList.add('hidden');
})
