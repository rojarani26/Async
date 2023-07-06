
console.log('person1: shows ticket');
console.log('person2: shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });

// const getPopcorn = promiseWifeBringingTickets.then((t) =>{
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=> resolve(`${t} popcorn`));
// })

// const getButter = getPopcorn.then((t) =>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve,reject)=> resolve(`${t} popcorn`));
// })

// const getColdDrinks = getButter.then((t) =>{
//     console.log('husband: i got some cold drinks');
//     console.log('husband: we should go in');
//     console.log('wife: i need a straw');
//     return new Promise((resolve,reject)=> resolve(`${t} popcorn`));
// })

// getButter.then((t)=> console.log(t));

const preMovie = async() =>{

    const promiseWifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
    const addButter = new Promise((resolve,reject)=> resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject)=> resolve(`coldDrinks`));

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: i need coldDrinks');

    let coldDrinks = await getColdDrinks;

    console.log(`husband: i got some ${coldDrinks}`);
    console.log('wife: lets go we are getting late');
    console.log('husband: Thanks for the remainder');

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');