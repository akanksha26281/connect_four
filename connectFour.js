var activePlayer, gamePlaying = true;

var player0 = prompt("Player 1 enter your name you will be blue!");
var player1 = prompt("Player 2 enter your name you will be red!");

activePlayer = 0;
$('h3').text(player0 + ": it's your turn please pick a column to drop your blue chip.");

$('button').click(function(event){
    
    if(gamePlaying){
    
        var Class, targetItem, targetBtn, color;

        Class = event.target.parentElement.className;

    //    console.log(Class);

        targetItem = $('.' + Class).last();
        r = $('.' + Class).length;
    //    console.log(r);

    //    console.log(targetItem);

        targetBtn = targetItem.children();
    //    console.log(targetBtn);

        if(activePlayer === 0){
            color = "blue";
        }else if(activePlayer === 1){
            color = "red";
        }

        targetBtn.css("background-color", color);
    //    console.log(targetBtn.css("background-color"));

        targetItem.removeClass(Class);
        targetItem.addClass(Class.toUpperCase());     //Adding the column numbers, to help checking the win along column....



        /*******************************************  WINNING CONDITION ****************************************/


        //  Checking Along the rows......

        var rowName, row, rowElements;
        switch(r){
            case 1:
                rowName = '1';
                break;
            case 2:
                rowName = '2';
                break;
            case 3:
                rowName = '3';
                break;
            case 4:
                rowName = '4';
                break;
            case 5:
                rowName = '5';
                break;
            case 6:
                rowName = '6';
                break;
        }

        row = $('.' + rowName);
        rowElements = row.children();
    //    console.log(rowElements);


        for(var i = 0; i<4; i++){
            if( (rowElements.eq(i).children().css("background-color") === "rgb(0, 0, 255)" && rowElements.eq(i+1).children().css("background-color") === "rgb(0, 0, 255)" && rowElements.eq(i+2).children().css("background-color") === "rgb(0, 0, 255)" && rowElements.eq(i+3).children().css("background-color") === "rgb(0, 0, 255)")  ||   (rowElements.eq(i).children().css("background-color") === "rgb(255, 0, 0)" && rowElements.eq(i+1).children().css("background-color") === "rgb(255, 0, 0)" && rowElements.eq(i+2).children().css("background-color") === "rgb(255, 0, 0)" && rowElements.eq(i+3).children().css("background-color") === "rgb(255, 0, 0)") ){
    //          console.log("YUPPP!!");
                activePlayer === 0 ? Player = player0 : Player = player1;
                $('h3').text(Player + " won!!!");
                gamePlaying = false;
                break;
            }else{
    //            console.log("NOPEEE!!");
            }
        }

            
            
            //  Checking winning along the columns.....
            
            var col, num, colElements;
            col = $('.' + Class.toUpperCase());
            colElements = col.children();
//            console.log(colElements);

            if(colElements.length >= 4){

                for(var i = 0; i<4; i++){
                    if( (colElements.eq(i).css("background-color") === "rgb(0, 0, 255)" && colElements.eq(i+1).css("background-color") === "rgb(0, 0, 255)" && colElements.eq(i+2).css("background-color") === "rgb(0, 0, 255)" && colElements.eq(i+3).css("background-color") === "rgb(0, 0, 255)")  ||   (colElements.eq(i).css("background-color") === "rgb(255, 0, 0)" && colElements.eq(i+1).css("background-color") === "rgb(255, 0, 0)" && colElements.eq(i+2).css("background-color") === "rgb(255, 0, 0)" && colElements.eq(i+3).css("background-color") === "rgb(255, 0, 0)") ){
    //                    console.log("YUPPP!!");
                        activePlayer === 0 ? Player = player0 : Player = player1;
                        $('h3').text(Player + " won!!!");
                        gamePlaying = false;
                        break;
                    }else{
    //                    console.log("NOPEEE!!");
                    }

                }
            }

            
        if(gamePlaying){
            
            //  Changing Players...
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            var Player, Color;
            activePlayer === 0 ? Player = player0 : Player = player1;
            activePlayer === 0 ? Color = "blue" : Color = "red";
            $('h3').text(Player + ": it's your turn please pick a column to drop your " + Color + " chip.");
            
        }

        
    }
    
})



















