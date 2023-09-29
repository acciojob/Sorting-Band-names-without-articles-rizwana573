//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let list = document.getElementsByTagName("ul")[0];
list.id="bands";
//  let res=touristSpots.filter(elem => !(elem.toLowerCase().includes("the"||"an"||"a")));
// res.sort();
// touristSpots.forEach((item) => { 
//             let li = document.createElement("li");
//             li.innerText = item;
//             list.appendChild(li);
//         });
// console.log(res);
function excludeArticles(spot){
	return spot.replace(/^(a |the |an)/i, '').trim();
}
const sortSpots = touristSpots.sort(function(a,b){
	if(a>b){
		return 1 ;
	}
	else{
		return -1;
	}
})
const sortedSpots = touristSpots.sort((a,b) => excludeArticles(a) > excludeArticles(b) ? 1 : -1);
console.log(sortedSpots);
document.querySelector("#bands").innerHTML = 
  sortedSpots
  .map(sortedSpots => `<li>${sortedSpots}</li>`)
  .join('') 