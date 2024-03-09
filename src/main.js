'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링을 적용한다.
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
	if (window.scrollY > headerHeight)
		header.classList.add('header--dark');
	else
		header.classList.remove('header--dark');
});

// home section을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
	home.style.opacity = 1 - window.scrollY / homeHeight;
});

// home의 절반정도 내려갔을 때 화살표 버튼이 나타나게 함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight / 2)
		arrowUp.style.opacity = 1;
	else
		arrowUp.style.opacity = 0;
});

// Nav bar 토글 버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('open');
});

// Nav bar menu 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
	navbarMenu.classList.remove('open');
});