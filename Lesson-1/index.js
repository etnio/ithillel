//console fetch ('https://swapi.co/api/')
//Книга Чистый код - Боба Мартина
//Visual Studio Code - editor
//battery indicator plugin

// Lesson-1
console.log(fetch ('https://swapi.co/api/people/1')); 
var message = 'Information';
document.write(`<h1>${message}</h1>`);
console.time();
console.info(message);  // Information
console.log('Hello world!'); // Hello world!
console.debug('Fix it'); // Fix it
console.warn('Don\'t do it anymore'); // ⚠️ Don't do it anymore
console.error('WTF'); // ❌ WTF
console.timeEnd(); // default: 0.714111328125ms 