/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }

const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

function catBuilder(name, color, toys) {
  const catobj = {};

  catobj.name = name;
  catobj.color = color;
  catobj.toys = toys;

  return catobj;

  const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
  cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }
  console.log(cat1);
  const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
  cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ]);
  console.log(cat2)}