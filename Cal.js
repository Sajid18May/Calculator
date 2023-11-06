


function display(val){


    document.getElementById('result').value += val

}


function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

}
function floor()
{
    var f = document.getElementById('result').value;
    document.getElementById('result').value=Math.floor(f);
    
}

function remove()
{
    var r = document.getElementById('result').value;
    document.getElementById('result').value=r.slice(0,r.length-1);
    
}


function clearScreen(){

    document.getElementById('result').value = ''

}

function s2()
{
    var v = document.getElementById('result').value;
    document.getElementById('result').value=Math.sqrt(v);
    
}

