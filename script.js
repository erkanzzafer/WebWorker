const worker=new Worker("worker.js");
const sumButton=document.querySelector("#sumButton");
const bgButton=document.querySelector("#bgButton");

sumButton.addEventListener("click",(event)=>{
/*	let sum=0;
	for (let i=0;i<1000000000000;i++){
		sum+=i;

	}
		alert(`the final sum is: ${sum}"`);
		*/	
	worker.postMessage("hello, worker");
	
});

worker.onmessage=function(message){
	
	alert(`the final sum is: ${message.data}"`);
}

console.log("işlem devam ediyor");

bgButton.addEventListener("click",(event)=>{
	if (document.body.style.background!=="green"){
		document.body.style.background="green";
	}else{
		document.body.style.background="blue";
	}
})