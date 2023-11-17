const menuItems = document.querySelectorAll('.panel__navigation__list__item');
const logo = document.querySelector('.panel__logo__image')

const pageMap = {
  'contacts.html' : 'Контакты',
  'best.html' : 'Лучшее',
  'catalog.html': 'Каталог'
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseover', () => {
    menuItem.classList.add('hover_menu_item');
  });

  menuItem.addEventListener('mouseout', () => {
    menuItem.classList.remove('hover_menu_item');
  });
});

menuItems.forEach((menuItem) => {
  menuItem.classList.remove('active_menu_item');
});

window.addEventListener('load', () => {
  const curPage = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  if (curPage !== 'index.html') {
    const menuItem = Array.from(menuItems).find((item) => item.innerText === pageMap[curPage]);
    menuItem.classList.add('active_menu_item')
  }
})