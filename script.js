var stickmanWindow = Math.floor((Math.random() * 24)) + 1;
console.log(stickmanWindow);

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
    document.getElementById("demo").innerHTML = "You clicked window " + windowNumber;

    // If the clicked one is correct
    if(windowNumber == stickmanWindow)
    {
		allWindows[stickmanWindow-1].style.backgroundImage="url('img/man2.png')";
		document.getElementById("demo").innerHTML = "Success!";
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