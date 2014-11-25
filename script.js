var position = 0;

function myFunction(windowNumber) {

	var allWindows = document.getElementsByClassName("win");
	for (i = 0; i < allWindows.length; i++)
	{ 
		allWindows[i].style.background="#000";
	}

	allWindows[windowNumber-1].style.background='#e6e65c';
    document.getElementById("demo").innerHTML = "You clicked window " + windowNumber;
    if(windowNumber == 14)
    {
		allWindows[13].style.background="#123456"
    }
}