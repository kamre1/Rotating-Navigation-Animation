// 'open' button element ko 'open' variable mein store kiya gaya hai
const open = document.getElementById('open')

// 'close' button element ko 'close' variable mein store kiya gaya hai
const close = document.getElementById('close')

// '.container' element ko 'container' variable mein store kiya gaya hai
const container = document.querySelector('.container')

// 'open' button par click hone par 'show-nav' class ko 'container' element mein add karta hai
open.addEventListener('click', () => container.classList.add('show-nav'))

// 'close' button par click hone par 'show-nav' class ko 'container' element se remove karta hai
close.addEventListener('click', () => container.classList.remove('show-nav'))
