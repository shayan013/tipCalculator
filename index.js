const inp1=document.getElementById('inp')
const inp2=document.getElementById('inp2')

let select=document.getElementById('options')
let array=[{
    value:1,
    title:"Best-20%"
},{
    value:2,
    title:"Good-10%"
},
{
    value:3,
    title:"Bad-2%"
}
]
array.forEach((selection)=>{
const options=document.createElement('option')
options.value=selection.value
options.textContent=selection.title

select.appendChild(options)

})

console.log(select.value)




const submit=document.querySelector('.submitBtn')
submit.addEventListener('click',()=>{
    const selection_value=document.querySelector('#options')
let percenttip=''



if(selection_value.value==1){
   percenttip=0.2
}
else if(selection_value.value==2){
percenttip=0.1
}
else {

percenttip=0.01
}
let tip=(Number(inp1.value)*2)/100
let totalamount=Number(inp1.value)+Number(tip);
let each_share=Number(totalamount)/Number(inp2.value)
console.log(tip,totalamount,each_share) 
const result=document.querySelector('.result')
const tipamount=document.getElementById('tip-amount')
const totalamount1=document.getElementById('total-amount')
const personamount=document.getElementById('person-amount')
result.classList.add('active')
tipamount.textContent=tip
totalamount1.textContent=totalamount
personamount.textContent=each_share


})