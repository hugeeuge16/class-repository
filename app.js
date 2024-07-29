document.getElementById('light').style.display = "none";

dark.addEventListener('click', function(){
document.body.style.backgroundColor = "#343a40";
document.getElementById('h1').style.color = "#eee";
document.getElementById('dark').style.display = "none";
document.getElementById('light').style.display = "inline";
});

light.addEventListener('click', function(){
    document.body.style.backgroundColor = "#f8f9fa";
    document.getElementById('h1').style.color = "#eee";
    document.getElementById('dark').style.display = "inline";
    document.getElementById('light').style.display = "none";
})