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

const myTask = [
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date(),
  },

  {
    titoloTask: "Studiare JavaScript",
    priorita: "media",
    data: new Date(),
  },

  {
    titoloTask: "Comprare il pane",
    priorita: "bassa",
    data: new Date(),
  },

  {
    titoloTask: "Chiamare il dentista",
    priorita: "alta",
    data: new Date(),
  },

  {
    titoloTask: "Riposarsi",
    priorita: "bassa",
    data: new Date(),
  },
];

function aggiungiTask() {
  myTask.forEach((task) => {
    const newLi = document.createElement("li");
    newLi.classList.add(`priorita-${task.priorita}`);

    const textSpan = document.createElement("span");
    textSpan.textContent = task.titoloTask;
    newLi.appendChild(textSpan);

    const badge = document.createElement("span");
    badge.classList.add("badge");
    badge.textContent = task.priorita;
    newLi.appendChild(badge);

    const taskDate = document.createElement("span");
    taskDate.classList.add("data", "divData");
    taskDate.textContent = task.data.toLocaleString("it-IT");

    const elimina = document.createElement("button");
    elimina.textContent = "Elimina";
    taskDate.appendChild(elimina);
    newLi.appendChild(taskDate);

    lista.appendChild(newLi);
  });
}

function aggiornaContatore() {
  contatore.textContent = myTask.length;
}

aggiungiTask();
aggiornaContatore();
