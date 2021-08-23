// var x = document.getElementById('test')
// var y = document.getElementById('testBtn')
// var image = document.getElementById('image')
// y.style.color = "red"
// x.style.backgroundColor = "red"
// x.style.color = "blue"
// x.innerHTML="Hello From JS File"



// y.addEventListener('mouseover', function(){
//     image.src="./assets/images/download (4).jfif"
// })

// y.addEventListener('mouseout', function(){
//     image.src="./assets/images/download (1).jfif"
// })

// let x = document.querySelectorAll('#test')
// for (let index = 0; index < x.length; index++) {
//     x[index].style.backgroundColor = "red"
// }

var x = $('.test1')
x.css( 'backgroundColor', '#ff0' )
var btn = $('#testBtn');

btn.click(function() {
    var name = $('#name').val();
    var name2 = $('#name2');
    $('#para').html(name);
    $('#abc').show(3000);
    x.toggle(2000)
    name2.val(name)
    
})



var age = $('#age');
var paichi = $('#keyval');

age.keypress(function () {
    paichi.html(age.val())
})


