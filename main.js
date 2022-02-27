const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggleBtn = sidebar.querySelector('.toggleBtn'),
      sunmoonBtn = sidebar.querySelector('.sunmoonBtn'),
      searchIcon = sidebar.querySelector('.search');

toggleBtn.addEventListener('click',()=>{
  sidebar.classList.toggle('close')
})
searchIcon.addEventListener('click',()=>{
  sidebar.classList.remove('close')
})


sunmoonBtn.addEventListener('click',()=>{
  body.classList.toggle('dark')
})