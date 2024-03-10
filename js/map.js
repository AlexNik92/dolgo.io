const tooltip = document.querySelector('.tooltip');
const continents = document.querySelectorAll('.continent');
const popupBg = document.querySelector('.info__bg');
const popup__photo = document.querySelector('.info__photo');
const popup__title = document.querySelector('.info__title');
const popup__text = document.querySelector('.info__text');
const popup__ref = document.querySelector('.info__ref');

continents.forEach((continent) => {
	continent.addEventListener('click', function() {
		popup__ref.setAttribute('href', this.getAttribute('data-ref'));
	})
});


continents.forEach((continent) => {
	continent.addEventListener('click', function() {
		popup__title.textContent = this.getAttribute('data-title');
		popup__photo.setAttribute('src', this.getAttribute('data-photo'));
		popup__text.textContent = this.getAttribute('data-text');
		popupBg.classList.add('active');
    });

	continent.addEventListener('mousemove', function(e) {
		tooltip.innerText = this.dataset.title;
		tooltip.style.top = (e.y + 15) + 'px';
		tooltip.style.left = (e.x + 15) + 'px';
	});

	continent.addEventListener('mouseenter', function(){
		tooltip.style.display = 'block';
	});

	continent.addEventListener('mouseleave', function () {
		tooltip.style.display = 'none';
	});
});

document.addEventListener('click', (e) => {
	if(e.target === popupBg) {
		popupBg.classList.remove('active');
	}
});
