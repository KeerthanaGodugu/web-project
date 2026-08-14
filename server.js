let express = require('express');

let app = express();
app.use(express.json())

let port = process.env.PORT || 3000;
const users=[
    {
        "id":"1",
        "name":"john",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/18.jpg",
    },

    {
        "id":"2",
        "name":"amber",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/43.jpg",
    },

    {
        "id":"3",
        "name":"lily",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/26.jpg",
    },

    {
        "id":"4",
        "name":"juan",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/88.jpg",
    },

    {
        "id":"5",
        "name":"valtteri rantala",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/5.jpg",
    },

]
//get all users
app.get("/api/users", function(req,res){
    res.status(200).json(users);

})
function getUserById(uid){  
  for(let i=0;i<users.length;i++){
    if(users[i].id==uid)
      return i;
  }
  return -1;
}

//get user by id
app.get("/api/users/:id", function(req,res){
    var uid=req.params.id;
    var userid = getUserById(uid);
    if(userid==-1){
        res.status(404).json({"message":"user not found"})
    }
     res.status(200).json(users[userid])
    })
    //get random user
app.get("/api/randomuser", function(req,res){
    var n=users.length;
    var randomid=Math.floor(Math.random()*n);
    res.status(200).json(users[randomid])
})
//add new user
var newuserid = users.length+1;
app.post("/api/users", function(req,res){
    if(!req.body.name || !req.body.gender || !req.body.image)
   return res.json({"message" : " name, gender and image is required"})

    let user = req.body;
    user.id = newuserid;
    newuserid++;
    users.push(user);
    res.status(200).json({"message":"user added successfully"});
})
//edit user details
app.put("/api/users/:id", function(req, res){
 var userid = getUserById(req.params.id);


 if(userid == -1)
   return res.json({"message" : "user not found"})


   if(req.body.name)
     users[userid].name = req.body.name;


   if(req.body.gender)
     users[userid].gender = req.body.gender;


   if(req.body.image)
     users[userid].image = req.body.image;


   return res.status(200).json({"message" : "user details updated", "user" : users[userid]})
})

//delete
app.delete("/api/users/:id", function(req, res){
 var userid = getUserById(req.params.id);
 if(userid == -1)
   return res.json({"message" : "user not found"})


 users.splice(userid, 1);


 res.status(200).json({"message" : "user deleted successfully"})


})





app.use(express.static("frontend"))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
