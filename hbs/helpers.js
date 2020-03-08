const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((palabras, idx) => {
        palabras[idx] = palabras.charAt(0).toUpperCase() + palabras.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});