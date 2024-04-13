const navItems = document.getElementsByClassName('nav-item');
const dropdownItems = document.getElementsByClassName('dropdown-item');

const links = document.getElementsByTagName('a');

// console.log(navItems);
// console.log(dropdownItems);
console.log(links);
let url = window.location.href;
console.log(url)
for (const elem of links) {
    console.log(elem.href);
    if (elem.href == url || elem.href + '?' == url || elem.href + '#' == url) {
        elem.className += " active";
    }
}

if (url.includes('dogs.html') ||
        url.includes('cats.html') ||
        url.includes('birds.html') ||
        url.includes('fish.html') ||
        url.includes('small_animals.html')) {
        document.getElementById('pet_guides').className += " active";
}


// for (var i = 0; i < navItems.length; i++) {
//     navItems[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//       }
//       this.className += " active";
//     });
// }

// for (var i = 0; i < dropdownItems.length; i++) {
//     dropdownItems[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//       }
//       this.className += " active";
//     });
// }
