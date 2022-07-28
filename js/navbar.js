$(function () {
  $('body').scrollspy({ target: '#navbar-id' })
  const navbar = $("#navbar-id")
  const navbarCollapse = $('#navbarCollapse')
  const registerBtn = $('#register-button-id')
  const loginBtn = $('#login-button-id')
  const etsyTxt = $('#etsy-text-navbar-id')

  etsyTxt.attr('style', 'color: white;');
  navbar.attr('style', 'background-color: transparent !important; transition: 1s;');
  registerBtn.addClass('btn-navbar');
  loginBtn.addClass('btn-navbar');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      etsyTxt.attr('style', 'color: #f1641e;');
      navbar.attr('style', 'background-color: #222529 !important; transition: .5s;');
      registerBtn.removeClass('btn-navbar');
      registerBtn.addClass('btn-primary');
      loginBtn.removeClass('btn-navbar');
      loginBtn.addClass('btn-primary');    
    } else {
      etsyTxt.attr('style', 'color: white;');
      navbar.attr('style', 'background-color: transparent !important; transition: .5s;');
      registerBtn.removeClass('btn-primary');
      registerBtn.addClass('btn-navbar');
      loginBtn.removeClass('btn-primary');
      loginBtn.addClass('btn-navbar');
    }
  });

  navbarCollapse.on('show.bs.collapse', function () {
    etsyTxt.attr('style', 'color: #f1641e;');
    navbar.attr('style', 'background-color: #222529 !important; transition: .5s;');    
    registerBtn.removeClass('btn-navbar');
    registerBtn.addClass('btn-primary');
    loginBtn.removeClass('btn-navbar');
    loginBtn.addClass('btn-primary');
  })

  navbarCollapse.on('hidden.bs.collapse', function () {
    if ($(window).scrollTop() < 400) {
      etsyTxt.attr('style', 'color: white;');
      navbar.attr('style', 'background-color: transparent !important; transition: .5s;');
      registerBtn.removeClass('btn-primary');
      registerBtn.addClass('btn-navbar');
      loginBtn.removeClass('btn-primary');
      loginBtn.addClass('btn-navbar');
    } 
  })
});