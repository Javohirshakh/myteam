var elsToggleButton = document.querySelectorAll("button")

elsToggleButton.forEach(function(button) {
  button.addEventListener('click', function() {
    // alert('salom')
    button.closest('.card').classList.toggle('card--unhidden');
    button.classList.toggle('active')
  })
})