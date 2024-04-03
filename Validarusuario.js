function ir(){
    const url='https://angelitapython25.pythonanywhere.com/productos';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        validaUsuario(data);
    })
    .catch(err => {
        console.error(err);
    })          
var c= 7410;
var u= "anita maldonado"
if (document.form.password.value==c && document.form.login.value==u){
alert ("Bienvenidos");
window.location="./productos.html";}

else{
alert("Por favor ingrese, nombre y usuario correctos. ");
}
}

