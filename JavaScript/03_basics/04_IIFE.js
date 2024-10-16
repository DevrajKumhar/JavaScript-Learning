// Immediatly Invoked Function Expressions (IIFE)

(function parseInt(){
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('Dveraj');