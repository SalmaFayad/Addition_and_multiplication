
    var x = prompt('Enter 1 for multiplication, or 2 for addition:');
    if (x == 1) {
        document.querySelector('#result').innerHTML = '<p>' + 'Multiplication' + '</p>';
        for (var i = 1; i <= 10; i++) 
            document.querySelector('#p' + i).innerHTML = i + ' * ' + '3 = ' + (i * 3);
    }
    else if (x == 2) {
        document.querySelector('#result').innerHTML = '<p>' + 'Addition' + '</p>';
        for (var i = 1; i <= 10; i++)
            document.querySelector('#p' + i).innerHTML = i + ' + ' + '3 = ' + (i + 3);
    }
        