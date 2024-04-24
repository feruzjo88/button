const Next = document.querySelector('.sitenav-header--open');
const Dark = document.querySelector('.site-header__sitenav-toggler');

if(Dark){
  Dark.addEventListener('click', function(){
    Next.classList.toggle('sitenav-header--open');
  })
}