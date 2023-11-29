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
  ul.innerHTML = "";

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

  if (newObject.type.toLowerCase() == "normal") {
    span.classList.add("span-normal");
  } else if (newObject.type.toLowerCase() == "importante") {
    span.classList.add("span-important");
  } else if (newObject.type.toLowerCase() == "urgente") {
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

function createNewTask() {
  const formButton = document.querySelector(".form__button--add-task");

  formButton.addEventListener("click", function (event) {
    event.preventDefault();
    const inputText = document.querySelector(".form__input--text");
    const inputSelect = document.querySelector(".form__input--priority");

    const newTask = {
      title: inputText.value,
      type: inputSelect.value,
    };

    if (newTask.title !== "" && newTask.type !== "") {
      tasks.push(newTask);
      renderElements(tasks);
      inputText.value = "";
      inputSelect.value = "";
    } else {
      alert("Todas as tarefas precisam ter um TÍTULO e um TIPO.");
    }
  });
}

renderElements(tasks);
createNewTask();
