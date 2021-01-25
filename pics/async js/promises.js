// AWAIT

const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// colorChange('red', 1000)
//     .then(() => colorChange('orange', 1000))
//     .then(() => colorChange('yellow', 1000))
//     .then(() => colorChange('green', 1000))
//     .then(() => colorChange('blue', 1000))
//     .then(() => colorChange('indigo', 1000))
//     .then(() => colorChange('violet', 1000))

async function rainbow() {
    await colorChange('red', 1000)
    await colorChange('orange', 1000)
    await colorChange('green', 1000)
    await colorChange('blue', 1000)
    await colorChange('indigo', 1000)
    await colorChange('violet', 1000)
}

rainbow()

// Egna löften

// const login = async (username, password) => {
//     if (!username || !password) throw 'missing login-info';
//     if (password === 'lol') return 'Welcome';
//     throw 'invalid password'
// }

// login('bro', 'lol')
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((data) => {
//         console.log(data)
//     });

// const sing = async () => {
//     // throw "ah fuck man"
//     return 'lalalala'
// }

// sing()
//     .then((data) => {
//         console.log("promise resolved with:", data)
//     })
//     .catch((err) => {
//         console.log(err);
//         console.log("DAMN YOU");
//     })

// const colorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// colorChange('red', 1000)
//     .then(() => colorChange('orange', 1000))
//     .then(() => colorChange('yellow', 1000))
//     .then(() => colorChange('green', 1000))
//     .then(() => colorChange('blue', 1000))
//     .then(() => colorChange('indigo', 1000))
//     .then(() => colorChange('violet', 1000))

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.5) {
//             resolve(url);
//             }
//             reject('request denied');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then((data) => {
//     console.log('done');
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err)
// })

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout( () => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your new fake data from ${url}`)
//             }
//         }, delay)    
//     })
// }

// MAGIN

// request = fakeRequestPromise('google.com/p1')
//     .then( (data) => {
//         console.log('it worked! #1')
//         console.log(data)
//         return fakeRequestPromise('google.com/p1')
//     })
//     .then( (data) => {
//         console.log('it worked! #2')
//         console.log(data)
//         return fakeRequestPromise('google.com/p2')
//     })
//     .then( (data) => {
//         console.log('it worked! #3')
//         console.log(data)
//         return fakeRequestPromise('google.com/p3')
//     })
//     .catch((err) => {
//         console.log("didnt work bro")
//         console.log(err)
//     })

// Likadant som callback hell nedan

// request = fakeRequestPromise('google.com/p1')
//     .then( () => {
//     console.log('it worked! #1')
//     request = fakeRequestPromise('google.com/p2')
//         .then( () => {
//         console.log('it worked! #2')
//         request = fakeRequestPromise('google.com/p3')
//            .then( () => {
//             console.log('it worked! #3')
//             })
//            .catch( () => {
//            console.log('didnt work #3')
//             })
//         })
//         .catch( () => {
//         console.log('didnt work #2')
//         })
//     })
//     .catch( () => {
//     console.log('didnt work! #1')
//     })

// CALLBACK HELL:

// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(');
//         } else {
//             success(`Here is your fake data from ${url}`);
//         }
//     }, delay)
// }

// fakeRequestCallback('books.com/page1',
//     (response) => {
//         console.log('it worked!');
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//             (response) => {
//             console.log('it worked! 2nd');
//             console.log(response);
//             fakeRequestCallback('books.com/page3',
//                 (response) => {
//                 console.log('it worked! 3nd');
//                 console.log(response);
//                 },
//                 (err) => {
//                 console.log('didnt work! 3nd!', err)
//                 })
//             },
//             (err) => {
//             console.log('didnt work! 2nd!', err)
//             })
//     },
//     (err) => {
//         console.log('didnt work!', err)
//     })