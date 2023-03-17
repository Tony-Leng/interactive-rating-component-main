const ratings = document.querySelectorAll('.rate-num');
const selectednum = document.querySelector('.rate-num active').innerText;
const finalrating = document.querySelector('.rate-num').innerText;
const ratingdisplay = document.querySelector('#finalrating');
const submit = document.querySelector('#submit');
const thankyoucard = document.querySelector('#thankyou-body');
const ratingcard = document.querySelector('#rating-body');

for (let rating of ratings) {
rating.addEventListener('click', () => {
  for (let rating of ratings) {
    rating.classList.remove('active');
    rating.classList.add('disabled');
  }
  rating.classList.add('active');
  rating.classList.remove('disabled')
})}


submit.addEventListener('click', () => {
  ratingcard.classList.add('hidden');
  thankyoucard.classList.remove('hidden');
})
