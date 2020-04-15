const greet = (name) =>{
    console.log(`Hello ${name}`)
    
}

greet('akash')


let btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    console.log('button on click');
    
    greet('rajan 2')
})
