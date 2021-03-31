 var btn = document.getElementById('button');
 var output = document.getElementById('output');
 
 btn.addEventListener('click', getImages)
 
 
 function getImages(){
fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => {
    let jsonOutput = '';

    //Then use a forEach loop since it is a JSON Array

    data.forEach(info => {
        jsonOutput +=`
        <ul>
        <li>ID: ${info.id}</li>
        <li>Title: ${info.title}</li>
        <li><img src='${info.url}' width='100' height='100'> </li>
        </ul>
        `
    });
    output.innerHTML = jsonOutput;
})
 }