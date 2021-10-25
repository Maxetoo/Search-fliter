var input = document.querySelector('input');
var item = document.querySelectorAll('.item');
var container = document.querySelector('.container');
var listItems = container.children

input.addEventListener('keydown', function() {
    adder();
    item.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            let go = e.target.textContent;
            input.value = go;
            btn.style.display = 'none';
        })
    })
});

function adder() {
    let inputs = input.value;
    inputs = inputs.toLocaleLowerCase();
    let regex = new RegExp(inputs, 'i');
    for (var i = 0; i < listItems.length; i++) {
        if (regex.test(listItems[i].textContent)) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
};