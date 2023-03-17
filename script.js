const submitbtn = document.querySelector('#submit');
const thankyoucard = document.querySelector('.thankyou-body');
const ratingcard = document.querySelector('.rating-body');
const ratingnum = document.querySelectorAll('.rate-num');
const disabled = document.querySelector('.disabled');
const result = document.querySelector('#final-rating');


ratingnum.forEach(rating => {
  rating.addEventListener('click', () => {
    ratingnum.forEach((ifActive) => {
      ifActive.classList.remove('active');
    })
    rating.classList.add('active');
    disabled.classList.remove('disabled');
  })
});

submitbtn.addEventListener('click', () => {
  const isActive = document.querySelector('.active');
  let ratingValue = isActive.textContent;
  thankyoucard.classList.remove('hidden');
  ratingcard.classList.add('hidden');
  result.textContent = ratingValue;
})
