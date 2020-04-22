function init()
{

	var msg=document.getElementById('entryinput');
	var button=document.getElementById('entrybutton');
	var screen=document.getElementById('textoutput');
	var joxh=document.getElementsByClassName('center')[1];

	function alertUser()
	{
		alert(joxh.textContent+': '+msg.value);
	}

	function msgOutput()
	{
		screen.innerHTML=msg.value;
	}
	button.addEventListener('click', alertUser);
	button.addEventListener('click',msgOutput);
}
window.addEventListener('load',init);

