// code your solution here

function superbowlWin(arrayRecord){
    for(const rec of arrayRecord){
        if(rec.result === "W"){
            return (rec.year)
        }
    }
}


// function superbowlWin(element){
//     if(element.result === "W"){
//         return (element.year)
//     }
// }

// record.find(superbowlWin)