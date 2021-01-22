//kilometerToMeter

function kilometerToMeter(kilometer){

    var meter = kilometer/1000;
    
    return meter;
    
    
    }
    
    var mymeter = kilometerToMeter(3000);
    console.log(mymeter);

//budgetCalculator

    function budgetCalculator(watch,mobile,laptop){

        return watch*15+mobile*5+laptop*2;
        
        
        
         }
            
        var total =budgetCalculator(50,100,500);
        console.log(total);


//megaFriend


        function megaFriend (dost){

            var max = dost[0];
            for(var i = 0; i<dost.length; i++){
        
                var element = dost[i];
                if(element.length>max.length){
        
                    max= element;
        
                    return max;
                }
                
        
        
            }
        
        
        
        }
        
        var total = megaFriend(['mahmud','hasan','ifrit','luicifers']);
        console.log(total);