//Crear seleccion de territorio
function crearTerritorios()
{
    let territorio= ["Euskadi","Nafarroa","Iparralde"]
    let opcion=document.createElement("option")
    opcion.innerHTML="Seleccione territorio"
    opcion.setAttribute("value", "ninguna")
    document.getElementById("territorio").appendChild(opcion)
    for(let i=0;i<territorio.length;i++)
    {
        let opt=document.createElement("option")
        opt.innerHTML=territorio[i]
        document.getElementById("territorio").appendChild(opt)
        opt.setAttribute("value", territorio[i])
    }
}

//Comprobar el dni
function valDni()
{
    let letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L','C', 'K', 'E', 'T');
    let strdni = String(document.getElementById("dni").value)
    if(strdni=="")
    {
        alert("Campo dni obligatorio")
        document.getElementById("dni").focus()
    }
    else if(strdni.length!=9)
    {
        alert("No es un dni (longitud)")
        document.getElementById("dni").focus()
    }
    else if(!parseInt(strdni.substring(0,strdni.length-1)))
    {
        alert("No es un dni (8 primeros no numeros)");
        document.getElementById("dni").focus()
    }
    else if(!isNaN(strdni.substring(strdni.length-1)))
    {
        alert("No es un dni (ultimo no letra)")
        document.getElementById("dni").focus()
    }
    else
    {
        nums=parseInt(strdni.substring(0,strdni.length-1))
        letr=strdni.substring(strdni.length-1)
        rest=nums%23
        ltrrest=letras[rest]
        if (String(letr.toUpperCase())!=String(ltrrest.toUpperCase()))
        {
            alert("Letra de dni incorrecta")
            document.getElementById("dni").focus()
            return false
        }
        return true
    }
}

//Validar nombre
function valNombre()
{
    strNombre=document.getElementById("firstname").value
    if(strNombre=="")
    {
        alert("Campo Nombre obligatorio")
        document.getElementById("firstname").focus()
    }
    else if(/[a-zA-Zºª ]$/.test(strNombre))
    {
        if(strNombre.length>50)
        {
            alert ("No puede ser mayor de 50 caracteres")
            document.getElementById("firstname").focus()
        }
        else
            return true
    }
    else
    {
        alert("Solo se permiten letras y espacios")
        document.getElementById("firstname").focus()
    }
}

//Validar apellido
function valApellido()
{
    strApellido=document.getElementById("lastname").value
    if(strApellido=="")
    {
        alert("Campo Apellidos obligatorio")
        document.getElementById("lastname").focus()
        return false
    }
    else if(/[a-zA-Zºª ]$/.test(strApellido))
    {
        if(strApellido.length>50)
        {
            alert ("No puede ser mayor de 50 caracteres")
            document.getElementById("lastname").focus()
        }
        else
            return true
    }
    else
    {
        alert("Solo se permiten letras y espacios")
        document.getElementById("lastname").focus()
    }
}

//Validar direccion
function valDireccion()
{
    strDireccion=document.getElementById("address").value
    if(strDireccion=="")
    {
        alert("Campo Direccion obligatorio")
        document.getElementById("address").focus()
        return false
    }
    else if(/[a-zA-Z0-9º ]$/.test(strDireccion))
    {
        if(strDireccion.length>50)
        {
            alert ("No puede ser mayor de 50 caracteres")
            document.getElementById("address").focus()
        }
        else
            return true
    }
    else
    {
        alert("Solo se permiten letras, espacios y numeros")
        document.getElementById("address").focus()
    }
}

//Creacion de Provincias
function crearProvincias(){
    document.getElementById("provincia").innerHTML=""
    document.getElementById("municipio").innerHTML=""

    if (document.getElementById("territorio").value!="ninguna")
    {
        let provincias={
            "Euskadi":["Araba","Bizkaia","Gipuzkoa"],
            "Nafarroa":["Navarra"],
            "Iparralde":["Lapurdi","Behe Nafarroa","Zuberoa"]
        }
        let opcion=document.createElement("option")
        opcion.innerHTML="Seleccione provincia"
        opcion.setAttribute("value", "ninguna")
        document.getElementById("provincia").appendChild(opcion)
        for(let i=0;i<provincias[document.getElementById("territorio").value].length;i++)
        {
            let opt=document.createElement("option")
            opt.innerHTML=provincias[document.getElementById("territorio").value][i]
            document.getElementById("provincia").appendChild(opt)
            opt.setAttribute("value", provincias[document.getElementById("territorio").value][i])
        }
        return true
    }

}

//Creacion de muncipios
function crearMunicipios(){
    document.getElementById("municipio").innerHTML=""

    if (document.getElementById("provincia").value!="ninguna")
    {
        let municipios={
            "Araba":["Gasteiz","Laguardia","Salvatierra"],
            "Bizkaia":["Bilbo","Barakaldo","Durango"],
            "Gipuzkoa":["Donosti","Arrasate","Bergara"],
            "Navarra":["Iruña","Lizarra","Ujue"],
            "Lapurdi":["Baiona","Biarritz","Hendaya"],
            "Behe Nafarroa":["Bidarray","St-Palais"],
            "Zuberoa":["Maule","Etxarri"]
        }
        let opcion=document.createElement("option")
        opcion.innerHTML="Seleccione provincia"
        opcion.setAttribute("value", "ninguna")
        document.getElementById("municipio").appendChild(opcion)
        for(let i=0;i<municipios[document.getElementById("provincia").value].length;i++)
        {
            let opt=document.createElement("option")
            opt.innerHTML=municipios[document.getElementById("provincia").value][i]
            document.getElementById("municipio").appendChild(opt)
            opt.setAttribute("value", municipios[document.getElementById("provincia").value][i])
        }
        return true
    }

}

//Calcular y validar la edad
function calcularEdad() {
    let fecha = document.getElementById("birthday")

    if(fecha.value=="")
    {
        alert("Campo fecha obligatorio")
    }
    else
    {
        let dNacimeinto = new Date(fecha.value)
        let fechaact = new Date();
        fecha = new Date(fechaact.getTime() - dNacimeinto.getTime())
        if (fechaact.getTime()<dNacimeinto.getTime()) {
            alert("La fecha no es correcta(Fecha en el futuro)")
        }
        let edad = (fecha.getUTCFullYear() - 1970)
        return edad
    }   
}

//Validar mail
function valEmail()
{
    let mail=document.getElementById("email").value
    if(mail=="")
    {
        alert ("Campo E-mail obligatorio")
        document.getElementById("email").focus()
    }
    else if (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(mail))
    {
        return true
    }
    else
    {
        alert ("Email no valido")
        document.getElementById("email").focus()
    }
}

//Validar telefono
function valTelefono() {
    let telefono = document.getElementById("phone").value
    if(telefono==""){
        alert("Campo telefono obligatorio")
        document.getElementById("phone").focus()
    }
    else if (/^(\+[0-9]{2})?[6|7|8|9][0-9]{8}$/.test(telefono)) {
        return true
    }else {
        alert("Campo telefono incorrecto")
        document.getElementById("phone").focus()
    }
}

//Habilitar/Deshabilitar boton
function habilitarBoton() {
    let boton = document.getElementById("enviar")
    let aceptoPol = document.getElementById("politicas")
    if (aceptoPol.checked) {
        boton.removeAttribute("disabled")
    } else {
        boton.setAttribute("disabled","true")
    }
}

//Crear local e ir a Thankyou despues de comprobar que todo esta puesto y en su sitio
function enviarFormulario(){
    if(!document.getElementById("enviar").disabled && valDni() && valNombre() && valApellido() && valDireccion() && document.getElementById("territorio").value!="ninguna" && document.getElementById("provincia").value!="ninguna" && document.getElementById("municipio").value!="ninguna"  && calcularEdad() && valEmail() && valTelefono())
    {
        let edad=calcularEdad()
        let persona = {
            "address": document.getElementById("address").value,
            "dni": document.getElementById("dni").value.toUpperCase(),
            "email": document.getElementById("email").value,
            "fnaci": document.getElementById("birthday").value,
            "fname": document.getElementById("firstname").value,
            "lname": document.getElementById("lastname").value,
            "phone": document.getElementById("phone").value,
            "territorio": document.getElementById("territorio").value,
            "municipio": document.getElementById("municipio").value,
            "provincia": document.getElementById("provincia").value,
            "years": edad
        }

        localStorage.setItem(document.getElementById("dni").value.toUpperCase(), JSON.stringify(persona))
        window.location.href = 'thankyou.html'
    }
}

//para volver desde thankyou
function volver()
{
    window.location.href = 'index.html'
}
document.addEventListener('DOMContentLoaded', function(event) {
    //Para comprobar en que pagina estoy
    if (document.getElementById("volver")) {
        document.getElementById("volver").addEventListener("click", volver)
    }
    else
    {
        //Para crear el primer select
        crearTerritorios()

        //Cambio la longitud maxiam de los campos
        document.getElementById("firstname").setAttribute("maxlength",50)
        document.getElementById("lastname").setAttribute("maxlength",50)
        document.getElementById("address").setAttribute("maxlength",50)

        //Habilito los listener de las cajas de texto para cuando tomen algun cambio validen si lo cambiado esta bien o mal
        document.getElementById("dni").addEventListener("change", valDni)
        document.getElementById("firstname").addEventListener("change", valNombre)
        document.getElementById("lastname").addEventListener("change", valApellido)
        document.getElementById("address").addEventListener("change", valDireccion)
        document.getElementById("territorio").addEventListener("change", crearProvincias)
        document.getElementById("provincia").addEventListener("change", crearMunicipios)
        document.getElementById("birthday").addEventListener("change", calcularEdad)
        document.getElementById("email").addEventListener("change", valEmail)
        document.getElementById("phone").addEventListener("change", valTelefono)
        document.getElementById("politicas").addEventListener("change", habilitarBoton)
        document.getElementById("enviar").addEventListener("click", enviarFormulario)
    }
})