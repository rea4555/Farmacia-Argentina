function validar(){
    var form = document.form;

    if(form.nombre.value==0){
        alert("el campo nombre esta vacio");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }
    if(form.correo.value==0){
        alert("el campo email esta vacio");
        form.correo.value="";
        form.correo.focus();
        return false;

    }
    if(form.telefono.value==0){
        alert("el campo telefono esta vacio");
        form.telefono.value="";
        form.telefono.focus();
        return false;


    }
    if(form.mensaje.value==0){
        alert("el campo mensaje esta vacio");
        form.mensaje.value="";
        form.mensaje.focus();
        return false;



    }
    alert("datos enviados con exito");
    form.submit();
    


}