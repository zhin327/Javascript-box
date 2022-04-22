document.getElementById('button1').addEventListener('click', function(){
    document.getElementById('box').style.height = "250px";
});

document.getElementById('button2').addEventListener('click', function(){
    document.getElementById('box').style.background = "blue";

})

document.getElementById('button3').addEventListener('click', function(){
    document.getElementById('box').style.background = 'orange'
})

document.getElementById('button4').addEventListener('click', function(){
    document.getElementById('box').style.opacity = '.5'
})

document.getElementById('button5').addEventListener('click', function(){
    document.getElementById('box').style = "height:150px; width:150px; background-color:orange; margin:25px"
})

document.getElementById('button6').addEventListener('click', function(){
    document.getElementById('box').style.border = "4px solid black"
})