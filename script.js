const navBtn = document.querySelector('.c-nav-btn')

navBtn.addEventListener("click", function(){
  navBtn.classList.toggle("is-active")
  navBtn.classList.remove("load")
})