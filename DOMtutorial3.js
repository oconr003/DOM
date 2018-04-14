var button = document.getElementById('button').addEventListener('click', buttonClick());

function buttonClick(e){
    console.log("Button clicked");
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';

    console.log(e.target.id);

    var output = document.getElementById('outputForTargetExample');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type); 
    console.log(e.clientX);
    console.log(e.offsetX);
  
}

var button = document.getElementById('button').addEventListener('click', runEvent());
button.addEventListener('dbclick', runEvent);
button.addEventListener('mousedown', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: ' +e.type);
}

var box = document.getElementById('Box');
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);
