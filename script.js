var stickmanWindow = Math.floor((Math.random() * 24)) + 1;
console.log(stickmanWindow);
var success = 0;
var difference;
var startTime;

function timer()
{
    var allWindows = document.getElementsByClassName("win");
    // Sets them all clickable
    for (i = 0; i < allWindows.length; i++)
    { 
        allWindows[i].style.cursor="pointer";
    }
    startTime = (new Date()).getTime();
    console.log(startTime);
}

// Happens every time a window is clicked
function clickFunction(windowNumber)
{
    console.log("Start function!");
	var allWindows = document.getElementsByClassName("win");
	// Sets them all to black
	for (i = 0; i < allWindows.length; i++)
	{ 
		allWindows[i].style.background="#000";
	}

	// Sets the clicked one to yellow
	allWindows[windowNumber-1].style.background='#e6e65c';

    // If the clicked one is correct
    if(windowNumber == stickmanWindow)
    {
		allWindows[stickmanWindow-1].style.backgroundImage="url('img/man2.png')";
        var finishTime = (new Date()).getTime();
        var time = finishTime - startTime;
        time = time/1000;
		document.getElementById("result").innerHTML = "You found him in " + time + " seconds";
        success = 1;
    }
    
    // Maybe flash, move the stickman.
    else
    {
    	var randomVar = Math.random();
    	console.log(randomVar);

        // Maybe flash the stickman.
    	if (randomVar > 0.7)
    	{
    		console.log("hello");
            console.log(stickmanWindow);
    		allWindows[stickmanWindow-1].style.background='#e6e65c';
    		allWindows[stickmanWindow-1].style.backgroundImage="url('img/man2.png')";
    	}

        // Wait, then turn off flash and move stickman.
        setTimeout(function()
        {
            allWindows[stickmanWindow-1].style.background='#000';
            allWindows[stickmanWindow-1].style.backgroundImage="none";
            console.log("waited");
            if(randomVar > 0.85)
                if(stickmanWindow == 24)
                    stickmanWindow = 23;
                else
                    stickmanWindow = stickmanWindow + 1;
            else
                if (stickmanWindow == 1)
                    stickmanWindow == 2;
                else
                    stickmanWindow = stickmanWindow - 1;
        }, 500)
    }
}