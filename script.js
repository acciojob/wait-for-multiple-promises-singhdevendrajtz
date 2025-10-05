//your JS code here. If required.
const table_=document.querySelector("#output");
let row1=table_.insertRow(-1)
row1.id="loading";
let cell1=row1.insertCell(0)
// let cell2=row1.insertCell(1)
// cell2.textContent="xyz"
cell1.textContent="Loading...";
cell1.colSpan=2;

function getRandomInteger(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let promise1= new Promise((resolve,reject)=>{
	let time_taken=getRandomInteger(1,3);
setTimeout(()=>{
	resolve(time_taken);
},time_taken*1000);
})
let promise2= new Promise((resolve,reject)=>{
	let time_taken=getRandomInteger(1,3);
setTimeout(()=>{
	resolve(time_taken);
},time_taken*1000);
})
let promise3= new Promise((resolve,reject)=>{
	let time_taken=getRandomInteger(1,3);
setTimeout(()=>{
	resolve(time_taken);
},time_taken*1000);
})
Promise.all([promise1,promise2,promise3]).then((data)=>{
	table_.innerHTML="";
	for(let x=0;x<data.length;x++)
		{
		let row_new=table_.insertRow(-1);
		let new_cell_1=row_new.insertCell(0);
		let new_cell_2=row_new.insertCell(1);
			new_cell_1.textContent=`Promise ${x+1}`
			new_cell_2.textContent=`${data[x]}`
		}
	let new_row=table_.insertRow(-1);
	let new_cell3=new_row.insertCell(0)
	let new_cell4=new_row.insertCell(1)
	new_cell3.textContent="Total";
	new_cell4.textContent=Math.max(...data).toFixed(3)
	


	}).finally(()=>{
	console.log("got it");
	})


