//alert("hello from js")
const users = [
 {
   "name" : "Jonn Doe",
   "gender" : "Male",
   "image" : "john.png"
 },
   {
   "name" : "Jane Doe",
   "gender" : "Female",
   "image" : "jane.png"
 }
]


var curIndex = 0;


function toggle(){
 if(curIndex == 0)
   curIndex = 1;
 else
   curIndex = 0;


 document.getElementById("card-img").src = users[curIndex].image
 document.getElementById("card-name").innerText =users[curIndex].name
 document.getElementById("card-gender").innerText =users[curIndex].gender
 //gender needs to be updated
}
function random(){
  //url = "https://randomuser.me/api/"
  fetch("https://randomuser.me/api/")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    var detail=data.results[0];
    var name = detail.name.title + " " + detail.name.first + " " + detail.name.last;
    document.getElementById("card-img").src = detail.picture.large;
    document.getElementById("card-name").innerText = name;
    document.getElementById("card-gender").innerText = detail.gender;
  });
}
