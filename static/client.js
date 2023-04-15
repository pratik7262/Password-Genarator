let btn=document.getElementById('btn');
let inp=document.getElementById('inp')

btn.addEventListener('click',async ()=>{
    let pas=await fetch('http://localhost:766/');
    inp.value=pas;
})

