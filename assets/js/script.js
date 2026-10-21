/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

// intercettare la lista  (#lista-task) - FATTO
// creare un array con dentro degli oggetti con testo, data formattata (stringa), priorità (alta-media-bassa) - FATTO
// scrivere gli oggetti nella lista - FATTO
// intercettare lo span #contatore - FATTO
// sostituire il contenuto dello span con il numero di oggetti nell'array - FATTO

const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");
const inputNuovoTask = document.querySelector("#nuovo-task");
const aggiungi = document.querySelector("#bottone-aggiungi");
const bottoniFiltro = document.querySelectorAll(".filtri button");

const myTask = [
  {
    titoloTask: "Pagare le bollette",
    // priorita: "alta",
    data: new Date(),
  },

  {
    titoloTask: "Studiare JavaScript",
    // priorita: "media",
    data: new Date(),
  },

  {
    titoloTask: "Comprare il pane",
    // priorita: "bassa",
    data: new Date(),
  },

  {
    titoloTask: "Chiamare il dentista",
    // priorita: "alta",
    data: new Date(),
  },

  {
    titoloTask: "Riposarsi",
    // priorita: "bassa",
    data: new Date(),
  },
];

function aggiungiTask() {
  lista.innerHTML = "";
  myTask.forEach((task) => {
    if (bottone === "Attivi" && task.completato) return;
    if (bottone === "Completati" && !task.completato) return;

    const newLi = document.createElement("li");
    // newLi.classList.add(`priorita-${task.priorita}`);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completato;
    checkbox.addEventListener("change", () => {
      task.completato = checkbox.checked;
      aggiungiTask();
      aggiornaContatore();
    });
    newLi.appendChild(checkbox);

    const textSpan = document.createElement("span");
    textSpan.textContent = task.titoloTask;
    if (task.completato) {
      textSpan.style.textDecoration = "line-through";
    }
    newLi.appendChild(textSpan);

    /* const badge = document.createElement("span");
    badge.classList.add("badge");
    badge.textContent = task.priorita;
    newLi.appendChild(badge); */

    const taskDate = document.createElement("span");
    taskDate.classList.add("data", "divData");
    taskDate.textContent = task.data.toLocaleString("it-IT");

    const elimina = document.createElement("button");
    elimina.textContent = "Elimina";
    elimina.addEventListener("click", () => {
      const indice = myTask.indexOf(task);
      if (indice !== -1) {
        myTask.splice(indice, 1);
        aggiungiTask();
        aggiornaContatore();
      }
    });

    taskDate.appendChild(elimina);
    newLi.appendChild(taskDate);

    lista.appendChild(newLi);
  });
}

function aggiornaContatore() {
  contatore.textContent = myTask.filter((t) => !t.completato).length;
}

aggiungi.addEventListener("click", () => {
  const testo = inputNuovoTask.value.trim();
  if (testo === "") return;

  myTask.push({
    titoloTask: testo,
    // priorita: "bassa",
    data: new Date(),
  });

  inputNuovoTask.value = "";
  aggiungiTask();
  aggiornaContatore();
});

bottoniFiltro.forEach((btn) => {
  btn.addEventListener("click", () => {
    const testo = btn.textContent.trim().toLowerCase();
  });
});

aggiungiTask();
aggiornaContatore();
