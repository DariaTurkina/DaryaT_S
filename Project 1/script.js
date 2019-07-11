let idCounter=0;

$(document).ready(function(){
    $('button').on('click', function(){

        let text = $('textarea#textAr').val();
        if (text){
            $('.toDoList').append(`<div class="taskBox ${idCounter}"><div class="checkInList"><div class="boxWithCheck"><input type="checkbox" class="taskBox ${idCounter}" name="checkingList" id="justCheckBox"></div></div><div class="labelInList"><div class="boxWithP"><p id="justP">${text}</p></div></div></div>`);
            
            let rand = Math.floor(Math.random()*6)+1;
            switch(rand){
                case 1:{
                    $('.'+idCounter).addClass('redCheck');
                    break;
                }
                case 2:{
                    $('.'+idCounter).addClass('pinkCheck');
                    break;
                }
                case 3:{
                    $('.'+idCounter).addClass('purpleCheck');
                    break;
                }
                case 4:{
                    $('.'+idCounter).addClass('blueCheck');
                    break;
                }
                case 5:{
                    $('.'+idCounter).addClass('greenCheck');
                    break;
                }
                case 6:
                    $('.'+idCounter).addClass('yellowCheck');
                    break;
            };
            idCounter++;
        }
        else alert("Name your task, please.");
    });

    $('input[name="colors"]').on('click', function(){
        let colorClass = $('input[name="colors"]:checked').attr('class');

        for(let i=0;i<=idCounter-1;i++){
            let bool=$('input[name="checkingList"].'+i).is(':checked');
            console.log(bool);
            if(bool){
                $('.'+i).removeClass('redCheck');
                $('.'+i).removeClass('pinkCheck');
                $('.'+i).removeClass('purpleCheck');
                $('.'+i).removeClass('blueCheck');
                $('.'+i).removeClass('greenCheck');
                $('.'+i).removeClass('yellowCheck');
                $('.'+i).addClass(`${colorClass}`);
            }
        }
    });
})