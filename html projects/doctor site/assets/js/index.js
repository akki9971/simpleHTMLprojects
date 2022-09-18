let pNameArr=[]
fetch('https://fakestoreapi.com/users')
    .then(res => res.json())
    .then(json => {
        cardMania.innerHTML = json.map((elem) => {
    return (`<div class="col-sm-4">
        <div class="card">
            <div class="card-body">aliji</div>
        </div>
      </div>`)
})
    })
    .catch(err => console.warn(err))

let cardMania = document.querySelector('#cardMania')
// console.log(pNameArr[0])
// cardMania.innerHTML = userData().map((elem) => {
//     return `<div class="card">
//         <div class="card-body">${elem.email}</div>
//       </div>`
// })

console.log(pNameArr);