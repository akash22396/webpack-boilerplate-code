
const greet = (name) =>{
    console.log(`Hello ${name}`)
    
}

greet('akash')


let btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    console.log('button on click');
    
    greet('rajan 2')
})



var arr=[1,2,3,4,5]
console.log(arr);
 arr.push(6)
 console.log(arr);
  arr.unshift(1)
  console.log(arr);
   arr.pop()
   console.log(arr);
    arr.shift()

    console.log(arr);
    