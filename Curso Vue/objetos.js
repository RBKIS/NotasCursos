//objetos
const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true
}
console.log(mascota)

//Imprimir solo el nombre
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.vivo)

//Agregar otra propiedad
mascota.id = 1

console.log(mascota.id)

//Agregar un array 
mascota.apellidos = [
    'flores', 'torres'
]

console.log(mascota.apellidos)

//Destructuring JS Object
const nombreMascota = mascota.nombre

const { edad, nombre } = mascota
console.log(edad)

//Ejemplo 1 
const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
        },
        web: {
            blog: 'https://wesbos.com'
        }
    }
};

const twitter = wes.links.social.twitter;
const facebook = wes.links.social.facebook;

const { twitter, facebook } = wes.links.social;
console.log(twitter, facebook); // logs the 2 variables

const web = {
    nombre: 'bluuweb',
    links: {
        enlace: 'www.bluu.cl'
    },
    redesSociales: {

        youtube: {
            enlace: 'youtube.com/bluu',
            nombre: 'bluuweb yt'
        },
        facebook: {
            enlace: 'facebook.com/bluu',
            nombre: 'bluuweb fb'
        }
    }
}
const { enlace } = web.redesSociales.youtube;
console.log(enlace)