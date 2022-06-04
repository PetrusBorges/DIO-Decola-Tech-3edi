//Assincronicidade
//promise - 3 estados pending, fulfilled, rejected
//funções assincronas precisam dessas duas palavras chaves async/await
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log('resolvida!'))
  }, 2000)
})

await myPromise
  .then(result => result + ' passando pelo then')
  .then(result => result + ' e agora acabou!')
  .catch(err => console.log(err.message))

//--------------------------------------------------------
//ASYNC
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('resolva')
    }, 3000)
  })

  const resolved = await myPromise
    .then(result => result + ' passando pelo then')
    .then(result => result + ' e agora acabou!')
    .catch(err => console.log(err.message))

  return resolved
}

//ASYNC + TRY CATCH---------------------------------------------

async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('resolva')
    }, 3000)
  })

  let result

  try {
    result = await myPromise
      .then(result => result + ' passando pelo then')
      .then(result => result + ' e agora acabou!')
  } catch (err) {
    result = err.message
  }

  return result
}

//CONSUMINDO API COM FETCH---------------------------------------------
//retorna uma promisse
fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))

//retorna uma promisse
fetch('https://endereço-api.com/', {
  method: 'GET',
  cache: 'no-cache'
})
  .then(response => response.json())
  .then(json => console.log(json))

//retorna uma promisse
fetch('https://endereço-api.com/', {
  method: 'POST',
  cache: 'no-cache',
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(json => console.log(json))
