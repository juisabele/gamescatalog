

function save() {
//save values
var publisher = {
    name: document.getElementById("txtName").value,
    country:document.getElementById("txtCountry").value }
//alert box
    alert("Pulisher salva com sucesso");
 //firebase
var publisherId = publisher.name.replace(/ /g, '');
firebase.database().ref('publishers/' + publisherId).set(publisher);
}