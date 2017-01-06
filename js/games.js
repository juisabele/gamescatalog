


function save() {
//save values
var game = {
    name: document.getElementById("txtName").value,
    genre:document.getElementById("txtGenre").value,
    publisher:document.getElementById("txtPublisher").value }
//alert box
    alert("Game salvo com sucesso");
 //firebase
var gameId = game.name.replace(/ /g, '');
firebase.database().ref('games/' + gameId).set(game);
}
