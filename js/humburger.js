window.addEventListener('DOMContentLoaded', () => {

  var menu = document.querySelector('.promo__nav'),
      menuItem = document.querySelectorAll('.promo__li'),
      humburger = document.querySelector('.humburger');
      

       humburger.addEventListener('click', () => {
          humburger.classList.toggle('humburger_active');
          menu.classList.toggle('promo__nav_active');
          
      });

      menuItem.forEach(item => {
        item.addEventListener('click', () => {
          humburger.classList.toggle('humburger_active');
          menu.classList.toggle('promo__nav_active');
          });
      });
});