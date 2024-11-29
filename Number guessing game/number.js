let guess = (Math.floor(Math.random()*100+1))
let count = 0
let game_status = 1
const hints = document.getElementById('hints')
const attempts = document.getElementById('attempts')



function check(){
    if(game_status == 1 ){
        let val = document.forms[0]['val'].value
        count ++
        console.log(val)
        
        if( val == guess){
            hints.innerHTML ='Guess is correct'
            attempts.innerHTML = 'Attempts: ' + count
            game_status = 0;
           
            button1.innerHTML='Reset';
            button1.setAttribute('onclick','reset()')
        }
        else if ( val < guess){
            hints.innerHTML ='Guess is lower '
            attempts.innerHTML = 'Attempts: ' + count
        }

       else{
            hints.innerHTML ='Guess is higher'
            attempts.innerHTML = 'Attempts: ' + count
          }
        }
    else{
        game_status=1;
        reset();
    }
       
}

function reset(){
    let guess = (Math.floor(Math.random()*100+1))
    console.log(guess)
    count=0;
    attempts.innerHTML='Attempts:'+count;
    hints.innerHTML='Guess it';
    
    button1.innerHTML='Check';
    button1.setAttribute('onclick','check()');
    document.forms[0]['val'].value=""
    
}





