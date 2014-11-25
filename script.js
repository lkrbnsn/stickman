var stickmanWindow = Math.floor((Math.random() * 23)) + 1;

function clickFunction(windowNumber) {

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
    // Move the stickman
    else
    {
    	var randomVar = Math.random();
    	console.log(randomVar);
    	if (randomVar > 0.7)
    	{
    		console.log("hello");
            console.log(stickmanWindow);
    		allWindows[stickmanWindow-1].style.background='#e6e65c';
    		allWindows[stickmanWindow-1].style.backgroundImage="url('img/man2.png')";
            // pauseComp(500);
            // allWindows[stickmanWindow-1].style.background='#000';
            // allWindows[stickmanWindow-1].style.backgroundImage="none";
    		if(randomVar > 0.85)
    			stickmanWindow = stickmanWindow + 1;
    		else
    			stickmanWindow = stickmanWindow - 1
    	}
    }
}

// Function to pause
function pauseComp(millis)
{
var date = new Date();
var curDate = null;

do { curDate = new Date(); }
while(curDate-date < millis);
}