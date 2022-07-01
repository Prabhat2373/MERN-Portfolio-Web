/* eslint-disable no-undef */
console.log("Welcome to Prabhat's Personal Website");
$(document).ready(function () {
  $('.burger').click(() => {
    $('.navMenu').toggleClass('show');
    $('.burger').toggleClass('active');
    $('#line').toggleClass('active');
  });
});
$(document).on('click', (e) => {
  if (
    e.target.id !== 'navmen' &&
    e.target.id !== 'brg' &&
    e.target.id !== 'active' &&
    e.target.id !== 'active'
  ) {
    $('.navMenu').removeClass('show');
    $('.burger').removeClass('active');
    $('#line').removeClass('active');
  }
});
// $(document).scroll(function () {
//   let scrollHt = $(this).scrollTop();
//   if (scrollHt > 500) {
//     //   $('#arrow').fadeIn("fast");
//     $('.arrowCont').removeClass('hide');
//   } else {
//     //   $('#arrow').fadeOut("fast");
//     $('.arrowCont').addClass('hide');
//   }
// });

// let ageinp = document.getElementById('ageans');
// let date = new Date();

// function YourAge(birthYear, birthMon) {
//   let curYear = date.getFullYear();

//   const currentAge = curYear - 1 - birthYear;
//   return currentAge;
// }

// // console.log(YourAge(2004))
// ageinp.innerHTML = `${YourAge(2004)} Years Old`;

// const li = document.querySelectorAll('.links');
// const sect = document.querySelectorAll('section');

// function activeMenu() {
//   let len = sect.length;
//   // console.log(--len )

//   // console.log(icons)

//   while (--len && window.scrollY + 97 < sect[len].offsetTop) {}
//   li.forEach((el) => el.classList.remove('active'));
//   // li[len].classList.add('active');
//   li[len].classList.add('active');
// }

// activeMenu();
// window.addEventListener('scroll', activeMenu);

let inputs = document.querySelectorAll('input[type=range]');
// let meter = document.getElementsByClassName('meter');
// console.log(meter)
let node = document.getElementById('node');
let nodebar = document.getElementById('nodebar');
let express = document.getElementById('express');
let expressbar = document.getElementById('expressbar');
let mongodb = document.getElementById('mongodb');
let bootstrap = document.getElementById('bootstrap');
let npm = document.getElementById('npm');
let npmbar = document.getElementById('npmbar');

let mongobar = document.getElementById('mongobar');
let jquery = document.getElementById('jquery');

let bootstrapbar = document.getElementById('bootstrapbar');

let jquerybar = document.getElementById('jquerybar');

let mongoose = document.getElementById('mongoose');
let mongoosebar = document.getElementById('mongoosebar');

let wordpress = document.getElementById('wordpress');
let wordpressbar = document.getElementById('wordpressbar');

for (items of inputs) {
  items.addEventListener('blur', () => {
    node.innerHTML = nodebar.value;
    express.innerHTML = expressbar.value;
    mongodb.innerHTML = mongobar.value;
    mongoose.innerHTML = mongoosebar.value;
    npm.innerHTML = npmbar.value;
    jquery.innerHTML = jquerybar.value;
    wordpress.innerHTML = wordpressbar.value;
    bootstrap.innerHTML = bootstrapbar.value;
  });
}
node.innerHTML = nodebar.value;
express.innerHTML = expressbar.value;
mongodb.innerHTML = mongobar.value;
mongoose.innerHTML = mongoosebar.value;
npm.innerHTML = npmbar.value;
jquery.innerHTML = jquerybar.value;
wordpress.innerHTML = wordpressbar.value;
bootstrap.innerHTML = bootstrapbar.value;

// $(window).on('load', function () {
//   $('.center').delay(500).fadeOut('fast');
// });
