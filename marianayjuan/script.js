

/* inicio formulario*/

const data = [
  {name:"Laura Filloy", tickets:1},
  {name:"Emilia López", tickets:2},
  {name:"Martha Luján", tickets:3},
  {name:"Leonardo López", tickets:2},
  {name:"Virginia Arenas", tickets:2},
  {name:"Fernanda López", tickets:2},
  {name:"Guillermo López", tickets:1},
  {name:"Roberto Filloy", tickets:2},
  {name:"Mariana Filloy", tickets:3},
  {name:"Daniel Filloy", tickets:2},
  {name:"Diego Filloy", tickets:2},
  {name:"Bertha Luján", tickets:2},
  {name:"Gabriel Nadal", tickets:3},
  {name:"Miguel Nadal", tickets:2},
  {name:"Andrea Aldana", tickets:2},
  {name:"Maria Fernanda Aldana", tickets:1},
  {name:"Ayari Filloy", tickets:4},
  {name:"Raquel Filloy", tickets:2},
  {name:"Enrique Filloy", tickets:2},
  {name:"Silvia Cigales", tickets:1},
  {name:"Juan Santillán", tickets:5},
  {name:"Cristian Santillan", tickets:3},
  {name:"Alma Alyne Santillán", tickets:2},
  {name:"Yolanda Cigales", tickets:2},
  {name:"Emma Santillán", tickets:2},
  {name:"Maricela Santillán", tickets:2},
  {name:"Catarino Santillán", tickets:2},
  {name:"Eleuterio Santillán", tickets:2},
  {name:"Teodora Santillán", tickets:2},
  {name:"Leonor Santillán", tickets:2},
  {name:"Norma Cigales", tickets:2},
  {name:"Miguel Ángel Díaz Cigales", tickets:2},
  {name:"Jaramy Cigales", tickets:2},
  {name:"Sandra Cigales", tickets:1},
  {name:"Hortensia Cigales", tickets:2},
  {name:"Elizabeth Díaz", tickets:1},
  {name:"Aldo Díaz", tickets:2},
  {name:"Dante Díaz", tickets:2},
  {name:"Fernado Javier Díaz", tickets:2},
  {name:"David Cigales", tickets:3},
  {name:"Nancy Cigales", tickets:2},
  {name:"Diego Cigales", tickets:2},
  {name:"Guillermina Santillán", tickets:2},
  {name:"Fernanda Arenas", tickets:2},
  {name:"Karen Covarrubias", tickets:2},
  {name:"Ana Sofia Díaz", tickets:2},
  {name:"Aline Ruiz", tickets:2},
  {name:"Jenny Shiraishi", tickets:2},
  {name:"María Fabrega", tickets:1},
  {name:"Alinne Venegas", tickets:2},
  {name:"Cesar Melendez", tickets:2},
  {name:"Omar Moreno Proo", tickets:2},
  {name:"David Frometa", tickets:2},
  {name:"David Jorge Díaz", tickets:2},
  {name:"Guillermina Lozano", tickets:1},
  {name:"Yareth Lira", tickets:1},
  {name:"Nilthon Torres", tickets:2},
  {name:"Virginia Arriaga", tickets:2},
  {name:"Octavio Mercado", tickets:2},
  {name:"Xavier Mungarro", tickets:1},
  {name:"Fernando Becerra", tickets:1},
  {name:"Xochitl Flores", tickets:1},
  {name:"Dulce Carrera", tickets:2},
  {name:"Montserrat Chávez", tickets:2},
  {name:"Sandra Pinto", tickets:2},
  {name:"Alejandro Salazar", tickets:2},
  {name:"Elizabeth Rico", tickets:2},
  {name:"Rolando Ernesto", tickets:1},
  {name:"Guillermina Neria", tickets:1},
  {name:"Isabel Cervantes", tickets:1},
  {name:"Xochitl Medina", tickets:2},
  {name:"Jacqueline Fortson", tickets:1},
  {name:"Rocío Echeverría", tickets:1},
  {name:"Alejandro Lubezki", tickets:2},
  {name:"Claudia Norman", tickets:2},
  {name:"Claudia Alvarado", tickets:1},
  {name:"Monica Chirinos", tickets:1},
  {name:"Martin Levenson", tickets:2},
  {name:"Gisela Mateos", tickets:1},
  {name:"Marcela Arteaga", tickets:1},
  {name:"Carlos Brody", tickets:1},
  {name:"María Olvido Moreno", tickets:1},
  {name:"Diego Jimenez", tickets:1},
  {name:"Daniela Cruz y Corro", tickets:2},
  {name:"Adriana Sanrromán", tickets:1},
  {name:"Concepción Obregón", tickets:1},
  {name:"Raquel Beato", tickets:2},
  {name:"Guilhem Olivier", tickets:2},
  {name:"Eduardo Matos", tickets:2},
  {name:"Enrique Vela", tickets:2},
  {name:"Patricia Ledesma", tickets:2},
  {name:"María Mendez", tickets:1},
  {name:"Michelle De Anda", tickets:2},
  {name:"Gerardo Guerra", tickets:1},
  {name:"Rodrigo Montero", tickets:1},
  {name:"Emilio De Icaza", tickets:1},
  {name:"Mario Badillo", tickets:1},
  {name:"David Gutierrez", tickets:1},
  {name:"Rogelio Caballero", tickets:1},
  {name:"Javier Cigales", tickets:2},
  {name:"Alejandro Filloy", tickets:2},
  {name:"Mirna", tickets:2},
  {name:"Ana Karen Castellanos", tickets:1},
  {name:"Haya", tickets:1},
  {name:"Ivan Velasco", tickets:2},
  {name:"Susana Gonzalez", tickets:1},
  {name:"Renato Gonzalez", tickets:2},
  {name:"Melanie Trinidad", tickets:1},
  {name:"Itzel Hernandez", tickets:1},
  {name:"Ximena Chávez", tickets:2},
  {name:"Hanny Torres", tickets:2},
  {name:"Jocelyn Dariana", tickets:2},
  {name:"Adriana Barajas", tickets:1},
  {name:"Alejandra Barajas", tickets:1},
  {name:"Andrea Arnal", tickets:1},
  {name:"Manuella Vela", tickets:1},
  {name:"Cecilia Ramirez", tickets:1},
  {name:"Santiago Liendo", tickets:1},
  {name:"Alberto de Alba", tickets:2},
  {name:"Joanne Pillsbury", tickets:2},
  {name:"Ayla", tickets:1},
  {name:"Leonardo Méndez", tickets:2},
  {name:"Tania Carreño", tickets:2},
  {name:"Fernando Hernández Real", tickets:1},
  {name:"María Inés Roqué", tickets:1},
  {name:"Verónica Moore", tickets:1},
  {name:"Martin Silva", tickets:1},
  {name:"Alain Rosas", tickets:2},
  {name:"Luis Miguel García", tickets:1},
  {name:"Salvador Rodríguez", tickets:2},
  {name:"Gerardo Chino", tickets:1},
  {name:"Omar Carreño", tickets:1},
  {name:"Ruben Gustav Hernández", tickets:1},
  {name:"Omar Collazo", tickets:1},
  {name:"Margareht Reyes", tickets:1},
  {name:"Ramon Moreno", tickets:1},
  {name:"José Antonio Mercado", tickets:1},
  {name:"Carlos Brockman", tickets:2}
 ];
 
 let currentPerson = null;
 let selectedTickets = 1;
 
 const search = document.getElementById("search");
 const suggestions = document.getElementById("suggestions");
 
 search.addEventListener("input", () => {
     const value = search.value.toLowerCase();
     suggestions.innerHTML = "";
     if (!value) return;
 
     data.filter(p => p.name.toLowerCase().includes(value))
         .forEach(p => {
             const div = document.createElement("div");
             div.textContent = p.name;
             div.onclick = () => selectPerson(p);
             suggestions.appendChild(div);
         });
 });
 
 function selectPerson(person) {
     currentPerson = person;
     search.value = person.name;
     suggestions.innerHTML = "";
     selectedTickets = 1;
 
     document.getElementById("card").style.display = "block";
     document.getElementById("personName").textContent = person.name;
     document.getElementById("totalTickets").textContent = person.tickets;
     updateTickets();
 }
 
 function changeTickets(value) {
     selectedTickets += value;
     if (selectedTickets < 1) selectedTickets = 1;
     if (selectedTickets > currentPerson.tickets) selectedTickets = currentPerson.tickets;
     updateTickets();
 }
 
 function updateTickets() {
     document.getElementById("selectedTickets").textContent = selectedTickets;
     document.getElementById("selectedTicketsText").textContent = selectedTickets;
 }


 document.querySelectorAll("input[name='foodRestriction']").forEach(radio => {
  radio.addEventListener("change", () => {
      const show = document.querySelector("input[name='foodRestriction']:checked").value === "yes";
      document.getElementById("comment-container").style.display = show ? "block" : "none";
  });
});


 
 function confirmAttendance(attending) {
  if (!currentPerson) return; // por seguridad

  const foodRestriction = document.querySelector("input[name='foodRestriction']:checked").value;
let comment = "";
if (foodRestriction === "yes") {
    comment = document.getElementById("comment").value;
}

  const email = "danielamoreno.design@gmail.com"; // <-- cambia esto al correo real
  const subject = attending
      ? `Confirmación de asistencia: ${currentPerson.name}`
      : `Cancelación de asistencia: ${currentPerson.name}`;
  
      const body = attending
      ? `Hola,%0D%0A%0D%0AMi nombre es ${currentPerson.name} y confirmo asistencia con ${selectedTickets} boleto(s).%0D%0ARestricción alimentaria: ${foodRestriction === "yes" ? comment : "Ninguna" }`
      : `Hola,%0D%0A%0D%0AMi nombre es ${currentPerson.name} y no podré asistir.%0D%0ARestricción alimentaria: ${foodRestriction === "yes" ? comment : "Ninguna" }`;
  

  // Abrir el cliente de correo
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Mensaje en la pantalla
  document.getElementById("message").textContent =
      attending
      ? `¡Gracias ${currentPerson.name}!, confirmaste ${selectedTickets} boletos.`
      : `¡Gracias ${currentPerson.name}!, hemos registrado que no asistirás.`;

  document.getElementById("card").style.display = "none";
}


 /*fin fomrulario*/





/* inicio contador */

const fechaObjetivo = new Date("April 18, 2026 00:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia < 0) return;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

/* fin contador */


/* inicio button */

  const btn = document.getElementById("verMapaBtn");
  const opciones = document.getElementById("opcionesMapa");

  btn.addEventListener("click", () => {
    opciones.style.display = opciones.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !opciones.contains(e.target)) {
      opciones.style.display = "none";
    }
  });

  /* fin button */



/* inicio meú hamburguesa */
  const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
  
/* fin menú hamburgeusa */