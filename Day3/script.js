var i = 1;
var table = 3;
var operator = 'addition';
var msg = '';

if(operator === 'addition'){
    while(i<10){
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
        i++;
    }
}
else {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}


var answers = document.getElementById('blackboard');
answers.innerHTML = msg;