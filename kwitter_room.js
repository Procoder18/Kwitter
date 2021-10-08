document.getElementById("welcome").innerHTML = "Welcome " + localStorage.getItem("Username");

const firebaseConfig = {
      apiKey: "AIzaSyAxs9kCeuqelmrCKCFFpifES_YGOdB-NTs",
      authDomain: "kwitter-e266f.firebaseapp.com",
      databaseURL: "https://kwitter-e266f-default-rtdb.firebaseio.com",
      projectId: "kwitter-e266f",
      storageBucket: "kwitter-e266f.appspot.com",
      messagingSenderId: "1021188832443",
      appId: "1:1021188832443:web:3637867dfc87528d57fd9e",
      measurementId: "G-04P0NW4WK6"
};
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

// function Add(){
//       var stu_name= document.getElementById("txt").value;
//       firebase.database().ref("/").child(stu_name).update(
//             {
//                   name:stu_name,
//                   grade:"7",
//                   school:"St.Lawrence High School",
//                   username:localStorage.getItem("Username")
//             }
//       )
// }
