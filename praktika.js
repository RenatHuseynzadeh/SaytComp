let computers = [
    {
        id: 1,
        img: 'https://aztech.az/wp-content/uploads/2022/06/ASUS-TUF-Gaming-A15-FA507-4.png',
        cpu: 'intel core i7',
        ram: 16,
        rom: 512,
        price: 1500
    },
     {
         id: 2,
         img: 'https://aztechshop.az/image/cache/catalog/ASUS%20Ultrabuklar/ASUS%20Vivobook%20Go%2015%20E1504F,%20E1504G%20Mixed%20Black%20Non-Fingerprint%20(3)(Sayt)-1000x832.png',
         cpu: 'intel core i7',
         ram: 8,
         rom: 1,
         price: 1200
     }
]

const cardsSec = document.querySelector('.sec')

function updateSite() {
    cardsSec.innerHTML = ''


    for (let computer of computers) {
        cardsSec.innerHTML += `<div class="card">
        <button id='${computer.id}' class='deleteBtn'>x</button>
        <img src="${computer.img}" alt="">
        <div class="info">
            <p class="p1">CPU: ${computer.cpu}</p>
            <p class="p1">Ram: ${computer.ram}GB</p>
            <p class="p1">SSD: ${computer.rom}GB</p>
            <p class="p1">PRIS: ${computer.price}$</p>
            <button class="dt">Ditels</button>
        </div>
    </div>`
    }

    // for(let input of allInputs){
        // input.value = ''
    // }
}

updateSite()

function addComputer(e){
    e.preventDefault()
    
    let newComputer = {
        id: Math.random(3, 1000000),
        img: allInputs[4].value,
        cpu: allInputs[0].value,
        ram: allInputs[1].value,
        rom: allInputs[2].value,
        price: allInputs[3].value
    }
    computers.push(newComputer)
    updateSite()
}
// 1
 function deleteComputer(id){
     computers = computers.filter(comp => comp.id !== id) 

     updateSite()
 }

const login = document.querySelector('.login')
const logout = document.querySelector('.logout')
const reg = document.querySelector('.reg')
const addComp = document.querySelector('.addBtn')
const allInputs = document.querySelectorAll('input')
// const modal = document.querySelector('.modal')
// const form = document.querySelector('form')

login.addEventListener("click", function(){
    logout.style = 'display: inline;'
    reg.style = 'display: none'
    login.style = 'display: none'
})

logout.addEventListener("click", function(){
    logout.style = 'display: none;'
    reg.style = 'display: inline'
    login.style = 'display: inline'
})

 function handleClick(e){
     if(e.target.innerHTML === 'x'){
         deleteComputer(Number(e.target.id))
     }
 }

addComp.addEventListener('click', addComputer)

// 2
 cardsSec.addEventListener('click', handleClick)

//  modal.addEventListener('click', () => {
    // form.style = 'transform: scale(1)'
//  })