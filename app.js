(function(){

const firebaseConfig = {
  apiKey: "AIzaSyDyjMft_Uh_bVdqzZBJOKG-Uw9Xaqbjwwg",
  authDomain: "webapp-c7ee9.firebaseapp.com",
  databaseURL: "https://webapp-c7ee9.firebaseio.com",
  projectId: "webapp-c7ee9",
  storageBucket: "webapp-c7ee9.appspot.com",
  messagingSenderId: "249038761804",
  appId: "1:249038761804:web:4bc261eee4f6ff00f629e9",
  measurementId: "G-HR1P5EBT47"
};
firebase.initialseApp(firebaseConfig);

//elements

const txtUsername = document.getElementById('txtUsername');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

//Login

btnLogin.addEventListener('click',e =>{
	const username = txtUsername.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassowrd(username,pass);
	promise.catch(e => console.log(e.message));

});

	btnLogout.addEventListener('click' => {
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseuser){
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
	}
	else{
		console.log('not logged in');
		btnLogout.classList.add('hide');
	}
});


















})