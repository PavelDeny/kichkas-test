const iconMenu = document.querySelector('.header__menu-icon');
if (iconMenu) {
   const header = document.querySelector('.header');
   iconMenu.addEventListener('click',function(e) {
      iconMenu.classList.toggle('active');
      header.classList.toggle('active');
   })
}




document.querySelectorAll('.tabs__item').forEach((item)=>
   item.addEventListener('click', function(e){
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');

      document.querySelectorAll('.tabs__item').forEach(
         (child) => child.classList.remove('active')
      );
      document.querySelectorAll('.tabs__block').forEach(
         (child) => child.classList.remove('active')
      );

      item.classList.add('active');
      document.getElementById(id).classList.add('active')
   })

   
);

document.querySelector('.tabs__item').click();