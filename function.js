let output = document.getElementById('display')
put = 0
output.innerHTML=put 
setInterval(() => {
    put ++
    output.innerHTML=put
}, 1000);
