//Estructura del Objeto
class Curso{
  constructor(numero,nombre, diaHorario){
          this.numero = numero;
          this.nombre = nombre;          
          this.diaHorario = diaHorario;
          }          
          verCursoInscripto() {
                return "Estás Inscripto a: "+ this.nombre +" "+"Los días "+ this.diaHorario;            
        }  
}  
//Creación del Objeto
let cursoInscripto = new Curso();

//Lamada a la función medio de button que muestra los cursos disponibles
function verCursos(valor) {
  if (valor == 'arrayconvalores') {
    var materias = [{
        "curso": "5. Markegint Digital",
    }, {
      "curso": "4. Raect",        
    }, {
      "curso": "3. JavaScript",        
    }, {
      "curso": "2. Css",        
    }, {
      "curso": "1. HTML",
      
    },];

  }    
  data = '';

  for (i = 0; i < materias.length; i++) {

  data = ('Curso: ' + materias[i].curso + '\n\n') + data;
  }
  
  alert('Listado de Cursos\n\n' + data);

  cursoSeleccionado = prompt("Ingrese número de Curso");
  
  //Se llama la función elegir curso para seleccionar el curso deseado
  elegirCurso(cursoSeleccionado);
}

//Llamada por botón a la función "Elegir Curso"
function btn_ElegirCurso(valor){
      if (valor == 'arrayconvalores') {          
          cursoSeleccionado = prompt("Ingrese número de curso");        
          elegirCurso(cursoSeleccionado);          
      }
}
//Función para seleccionar el curso deseado
  function elegirCurso(numerodeCurso){
      switch(numerodeCurso){
          case '1':            
            cursoInscripto.numero = 1;
            cursoInscripto.nombre = 'HTML';                       
            var html= "1";
            verDiaHorario(html);
            break;
          case '2':
            cursoInscripto.numero = 2;
            cursoInscripto.nombre = 'CSS';
            var css= "2";
            verDiaHorario(css);
          break;
          case '3':
            cursoInscripto.numero = 3;
            cursoInscripto.nombre = 'Javascript';            
            var js= "3";
            verDiaHorario(js);
          break;
          case '4':
            cursoInscripto.numero = 4;
            cursoInscripto.nombre = 'React';            
            var react= "4";
            verDiaHorario(react);
            break;
          case '5':
            cursoInscripto.numero = 5;
            cursoInscripto.nombre = 'Marketing Digital';            
            var markerting= "5";
            verDiaHorario(markerting);
            break;         
      }
  }

  // Elegir dia y horario del curso seleccionado
  function verDiaHorario(valor) {
    if (valor == '1') {
      var name = 'HTML'
      var diasYHorarios = [{         
        "curso": "3. Sábados de 09:00 a 14hs",        
      }, {
        "curso": "2. Lunes de Miércoles de 18 a 22hs",        
      }, {
        "curso": "1. Martes y jueves de 10 a 12hs",
        
      },];

    }else if (valor == '2'){
      var name = 'CSS'
      var diasYHorarios = [{         
        "curso": "3. Sábados de 14:00 a 18hs",        
      }, {
        "curso": "2. Jueves y Viernes de 18 a 22hs",        
      }, {
        "curso": "1. Lunes y Miércoles de 10 a 12hs",
        
      },];
    }else if (valor == '3'){
      var name = 'Javascript'
        var diasYHorarios = [{         
          "curso": "3. Sábados de 09 a 14hs",        
        }, {
          "curso": "2. Martes y jueves de 10 a 12hs",        
        }, {
          "curso": "1. Lunes y Miércoles de 18 a 22hs",
          
        },];
        
        
      }else if (valor == '4'){
        var name = 'React'
        var diasYHorarios = [{         
          "curso": "3. Miércoles y Viernes de 10 a 12hs",        
        }, {
          "curso": "2. Lunes y Miércoles de 10 a 12hs",        
        }, {
          "curso": "1. Martes y jueves 18 a 22hs",
          
        },];
      }else if (valor == '5'){
        var name = 'Marketing Digital'
      var diasYHorarios = [{         
        "curso": "4. Sábados de 09 a 14hs",        
      }, {
        "curso": "3. Martes y jueves de 18 a 22hs",        
      }, {
        "curso": "2. Lunes y Miércoles de 10 a 12hs",
        
      },{
        "curso": "1. Lunes y Miércoles de 18 a 22hs",
        
      },];
    }
    data = '';

    for (i = 0; i < diasYHorarios.length; i++) {

    data = (`Curso ${name} los días: ${diasYHorarios[i].curso}\n\n`) + data;
    }
    
    
    alert(`Listado de Cursos \n\n ${data}`);   

    
    let cursoSeleccionado = prompt("Ingrese número de Día y Horario");

    elegirdiayhorario(cursoSeleccionado);  
    
}

//Según los datos ingresado por el usuario se agrega el ultimo dato al objeto y por último se muestra a qué curso se inscribió la persona
function elegirdiayhorario(diahorario){    
      if( diahorario  && cursoInscripto.numero == '1' ){
        switch(diahorario){
            case '1':
              cursoInscripto.diaHorario = "Martes y jueves de 10 a 12hs";
              alert(cursoInscripto.verCursoInscripto());              
              break;
            case '2':
              cursoInscripto.diaHorario = "Lunes de Miércoles de 18 a 22hs";                    
              alert(cursoInscripto.verCursoInscripto());
            break;
            case '3':
              cursoInscripto.diaHorario = "Sábados de 09:00 a 14hs";
              alert(cursoInscripto.verCursoInscripto());
            break;     
            default:{
              alert("error");
            }       
        }
      }else if(diahorario && cursoInscripto.numero == '2'){
        switch(diahorario){
            case '1':
              cursoInscripto.diaHorario = "Lunes y Miércoles de 10 a 12hs";                    
              alert(cursoInscripto.verCursoInscripto());
              break;
            case '2':
              cursoInscripto.diaHorario = "Jueves y Viernes de 18 a 22hs";                    
              alert(cursoInscripto.verCursoInscripto());
            break;
            case '3':
              cursoInscripto.diaHorario = "Sábados de 14:00 a 18hs";
              alert(cursoInscripto.verCursoInscripto());
            break;            
        }
      }else if(diahorario && cursoInscripto.numero == '3'){
        switch(diahorario){
            case '1':
              cursoInscripto.diaHorario = "Lunes y Miércoles de 18 a 22hs";                    
              alert(cursoInscripto.verCursoInscripto());
              break;
            case '2':
              cursoInscripto.diaHorario  = "Martes y jueves de 10 a 12hs";                    
              alert(cursoInscripto.verCursoInscripto());
            break;
            case '3':
              cursoInscripto.diaHorario = "Sábados de 09 a 14hs";
              alert(cursoInscripto.verCursoInscripto());
            break;            
        }
      }else if(diahorario  && cursoInscripto.numero == '4'){
        switch(diahorario){
            case '1':
              cursoInscripto.diaHorario  ="Martes y jueves 18 a 22hs";                    
              alert(cursoInscripto.verCursoInscripto());
              break;
            case '2':
              cursoInscripto.diaHorario = "Lunes y Miércoles de 10 a 12hs";                    
              alert(cursoInscripto.verCursoInscripto());
            break;
            case '3':
              cursoInscripto.diaHorario = "Miércoles y Viernes de 10 a 12hs";
              alert(cursoInscripto.verCursoInscripto());
            break;            
        }
      }else if(diahorario && cursoInscripto.numero == '5'){
        switch(diahorario){
            case '1':
              cursoInscripto.diaHorario = "Lunes y Miércoles de 18 a 22hs";                    
              alert(cursoInscripto.verCursoInscripto());
              break;
            case '2':
              cursoInscripto.diaHorario = "Lunes y Miércoles de 10 a 12hs";                    
              alert(cursoInscripto.verCursoInscripto());
            break;
            case '3':
              cursoInscripto.diaHorario = "Martes y jueves de 18 a 22hs";
              alert(cursoInscripto.verCursoInscripto());
            break;
            case '4':
              cursoInscripto.diaHorario = "Sábados de 09 a 14hs";
              alert(cursoInscripto.verCursoInscripto());
            break;            
        }
      }
}





















