'use strict';
// Project 필터링
// 클릭 -> 타입 -> 프로젝트 고유 인덱싱을 하고
// 카테고리 타입에 따라 필터링.

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects')
categories.addEventListener('click', (event)=> {
	const filter = event.target.dataset.filter;
	if (filter == null)
		return;
	handleActiveSelection(event.target);
	filterProjects(filter);
});

function handleActiveSelection(target) {
	const active = document.querySelector('.category--selected');
	active.classList.remove('category--selected');
	target.classList.add('category--selected');
}

function filterProjects(filter) {
	projects.forEach(project => {
		if (filter === 'all' || filter === project.dataset.type)
			project.style.display = 'block';
		else
			project.style.display = 'none';
	});
	projectsContainer.classList.add('anim-out');
	setTimeout(() => {
		projectsContainer.classList.remove('anim-out');
	}, 200);
}