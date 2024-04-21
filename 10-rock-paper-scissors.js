       
      let scoreBoard = JSON.parse(localStorage.getItem('scoreBoard'))||{
        wins: 0,
        losses: 0,
        ties: 0
      }; 
        function updateScore() {
          document.querySelector('.js-score').innerHTML = `Wins: ${scoreBoard.wins}  Losses: ${scoreBoard.losses} Ties: ${scoreBoard.ties}`;
        }
        
     
        function compMove(){
          const choose = Math.random();
          if(choose<=1/3&&choose>=0)
            comp = 'rock';
          else if(choose>1/3&&choose<=2/3)
            comp = 'paper';
          else if(choose>2/3&&choose<=1)
            comp = 'scissors';   
          return comp;
        }
       
      function game(myTurn,compTurn){
        let res = '';
        if(myTurn==='rock'&&compTurn==='scissors')
          res = 'You win.';
        else if(myTurn==='scissors'&&compTurn==='rock')
          res = 'You lose.';  
        else if(myTurn==='paper'&&compTurn==='rock')
          res = 'You win.';
        else if(myTurn==='rock'&&compTurn==='paper')
            res = 'You lose.'
        else if(myTurn==='scissors'&&compTurn==='paper')
            res = 'You win.';
        else if(myTurn==='paper'&&compTurn==='scissors')
              res = 'You lose.'  
        else
          res = 'Its a tie.';     
        
        if(res==='You win.')
          scoreBoard.wins++;
        else if(res==='You lose.')
          scoreBoard.losses++;
        else 
          scoreBoard.ties++;
        
        localStorage.setItem('scoreBoard',JSON.stringify(scoreBoard));
        document.querySelector('.js-res').innerHTML = `${res}`;
        document.querySelector('.js-choices').innerHTML = `You
        <img src ="images/${myTurn}-emoji.png" class ="move-icon">
        <img src ="images/${compTurn}-emoji.png"class ="move-icon">
        Computer`;     
        updateScore();
      }

      function resetScore(){ 
        scoreBoard.wins = 0;
        scoreBoard.losses = 0;
        scoreBoard.ties = 0;  
        updateScore(); 
        localStorage.removeItem('scoreBoard');
        document.querySelector('.js-res').innerHTML = 'New Game';
        document.querySelector('.js-choices').innerHTML = '';
         

      }

