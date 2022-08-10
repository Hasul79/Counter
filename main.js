// Created by R R


function init() {
	var count = 0;
	var counter = document.getElementById("counter");
	var btnAdd = document.getElementById("btnAdd");
	var btnSub = document.getElementById("btnSub");
	var btnReset = document.getElementById("btnReset");
  
	btnAdd.addEventListener("click", function(){
	  count++;
	  counter.innerHTML = count;
	});
  
	btnSub.addEventListener("click", function(){
	  count--;
	  counter.innerHTML = count;
	});
	
	btnReset.addEventListener("click", function(){
	  count = 0;
	  counter.innerHTML = count;
	});
  }
  
  window.onload = init;