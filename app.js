document.getElementById('output').style.visibility='hidden';


document.getElementById('pdinput').addEventListener('input',function(e){
    let lbs=e.target.value;
    document.getElementById('output').style.visibility='visible';
    if(lbs.toString().length==0){
        document.getElementById('output').style.visibility='hidden';
    }
    document.getElementById('gramoutput').innerHTML=lbs/0.0022046;
    document.getElementById('kgoutput').innerHTML=lbs/2.2046;
    document.getElementById('ounceoutput').innerHTML=lbs*16;
})