const ratings = document.querySelectorAll('.rate-num');

for (let rating of ratings) {
rating.addEventListener('click', () => {
  for (let rating of ratings) {
    rating.classList.remove('active');
    rating.classList.add('disabled');
  }
  rating.classList.add('active');
  rating.classList.remove('disabled')
})}
