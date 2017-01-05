
function save() {
//save values
var publisher = {
    name: o-nome-da-publisher,
    country: o-país-da-publisher }
//alert box
    alert("Pulisher salva com sucesso");
 //firebase
var publisherId = publisher.name.replace(/ /g, '');
firebase.database().ref('publishers/' + publisherId).set(publisher);
}
