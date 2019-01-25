  

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDOGT8_uv09eI0quH6O6Wwve6zW9lvTr4",
    authDomain: "mental-health-79bfe.firebaseapp.com",
    databaseURL: "https://mental-health-79bfe.firebaseio.com",
    projectId: "mental-health-79bfe",
    storageBucket: "mental-health-79bfe.appspot.com",
    messagingSenderId: "270496081505"
  };
  firebase.initializeApp(config);







  document.getElementById('form1').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

	var name = document.getElementById("name").value
    var email = document.getElementById("email").value
	var text = document.getElementById("comment").value
    
	ab3ith(name,email,text);

		document.getElementById('form1').reset();	
}

function getValues(id){return document.getElementById(id).value;}

var feedbacks = firebase.database().ref('feedbacks');

function ab3ith(name,email,text){
	var feedback = feedbacks.push();
	feedback.set({
		name: name,
		email: email,
		text: text,
		
	});
}

