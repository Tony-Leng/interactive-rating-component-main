const ratings = document.querySelectorAll('.rate-num');

for (let rating of ratings) {
rating.addEventListener('click', () => {
  for (let rating of ratings) {
    rating.classList.remove('active');
  }
  rating.classList.toggle('active');
  if (rating.classList.contains('active')) {
    rating.classList.remove('disabled')
  }
  else {
    rating.classList.add('disabled');
  }
})}
