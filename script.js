const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tasks) {
  const ul = document.querySelector(".tasks__list");
  const oldLi = document.querySelectorAll(".task__item");

  for (let i = 0; i < oldLi.length; i++) {
    const currentLi = oldLi[i];
    ul.removeChild(currentLi);
  }

  for (let i = 0; i < tasks.length; i++) {
    const currentTask = tasks[i];
    ul.append(createTaskItem(currentTask));
  }
}

function createTaskItem(newObject) {
  const newLi = document.createElement("li");
  newLi.classList.add("task__item");

  const div = document.createElement("div");
  div.classList.add("task-info__container");

  const span = document.createElement("span");
  span.classList.add("task-type");

  if (newObject.type == "Normal") {
    span.classList.add("span-normal");
  } else if (newObject.type == "Importante") {
    span.classList.add("span-important");
  } else if (newObject.type == "Urgente") {
    span.classList.add("span-urgent");
  }

  const p = document.createElement("p");
  p.innerText = newObject.title;

  const button = document.createElement("button");
  button.classList.add("task__button--remove-task");

  div.append(span, p);
  newLi.append(div, button);

  return newLi;
}

renderElements(tasks);
