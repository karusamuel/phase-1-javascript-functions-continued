// code your solution here
function wrapAdjective(flair="*"){

    return function(text="special"){
        return "You are "+flair+text+flair+"!"
    }
}

function saturdayFun(activity="roller-skate"){

    return "This Saturday, I want to "+activity+"!";
}

function mondayWork(activity="go to the office"){

    return "This Monday, I will "+activity+".";
}