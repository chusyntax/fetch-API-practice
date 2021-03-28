 var btn = document.getElementById('button');
 var output = document.getElementById('output');
 
 btn.addEventListener('click', getImages)
 
 
 function getImages(){
fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => {
    var jsonOutput = '';

    //Then use a forEach loop since it is a JSON Array

    data.forEach(data => {
        
    });{
        jsonOutput +=`
        
        
        
        `
    ;}
output.innerHTML = jsonOutput;
})
 }