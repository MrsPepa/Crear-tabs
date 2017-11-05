
function mostrarOcultar(e){
	var tabSeleccionado = e.target.dataset.tabSeleccionado;
	var desayuno = document.getElementById("desayuno");
	var comida = document.getElementById("comida");
	var cena = document.getElementById("cena");

	if(tabSeleccionado === "tabDesayuno"){
		console.log("quiero desayunar");
		//ocultar comida y cena
		comida.style.display = 'none';
		cena.style.display = 'none';
		//mostrar desayuno
		desayuno.style.display = 'block';

	} else if(tabSeleccionado === "tabComida"){
		console.log("quiero comer");
		//ocultar desayuno y cena
		desayuno.style.display = 'none';
		cena.style.display = 'none';
		//mostrar comida
		comida.style.display = 'block';

	} else if(tabSeleccionado === "tabCena"){
		console.log("quiero cenar");
		//ocultar deayuno y comida
		desayuno.style.display = 'none';
		comida.style.display = 'none';
		//mostrar cena
		cena.style.display = 'block';
	}
}

function cargarPagina (){
	var desayuno = document.getElementById("desayuno");
	var comida = document.getElementById("comida");
	var cena = document.getElementById("cena");
	desayuno.style.display = 'none';
	comida.style.display = 'none';
	cena.style.display = 'none';
	var elementosTab = document.getElementsByClassName("tab");
	for(var i = 0; i < elementosTab.length; i++){
		elementosTab[i].addEventListener("click", mostrarOcultar);
	}
}
cargarPagina();