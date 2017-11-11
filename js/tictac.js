var squares=document.querySelectorAll("td");
var reset=document.querySelector('#b');

function clear() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].textContent='';
	}
}

reset.addEventListener('click',clear);

function change (){
	if(this.textContent===''){
		this.textContent='X';
	}
	else if (this.textContent==='X'){
		this.textContent='O';
	}
	else{
		this.textContent='';
	}
}



for (var i = 0; i < squares.length; i++) {

	squares[i].addEventListener('click', change);

}
