let chbox = document.querySelector('.checkbox');
let body = document.body;
let link = document.querySelector('link[href="style.css"]'); 

chbox.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('style', '');
        link.setAttribute('href', 'dark.css'); 
    } else {
        body.setAttribute('style', '');
        link.setAttribute('href', 'style.css'); 
    }
});
