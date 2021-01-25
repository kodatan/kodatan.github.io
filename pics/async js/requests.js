// AXIOS


let lol = ""
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const getJoke = await axios.get('https://icanhazdadjoke.com/', config);
    lol = getJoke.data.joke
    console.log(lol)
}

getDadJoke()

// const fetchBitCoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd');
//         console.log(res.data.ticker.price);
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// FETCH THEN CATCH / THEN TRY

// fetch('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price);
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
