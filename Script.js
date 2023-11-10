const data = {
  tasks: {
    one: {
      task: "Learning Javascript",
      state: true,
      end: "2020/10/21",
    },
    two: {
      task: "Reader Book Clean Code",
      state: false,
      end: "2023/12/31",
    },
    three: {
      task: "Running",
      state: false,
      end: "2023/06/25",
    },
    four: {
      task: "Pass the Evaluation",
      state: false,
      end: "2023/11/09",
    },
    five: {
      task: "Go to Karaoke",
      state: true,
      end: "2022/08/25",
    },
    six: {
      task: "Finish watching the serie",
      state: false,
      end: "2023/12/31",
    },
    seven: {
      task: "Controll Weight",
      state: false,
      end: "2020/11/22",
    },
  },
};
const actividades = new Map(Object.entries(data));

function cargarActividades() {
  const actividadesCumplidasVigentes = document.getElementById(
    "actividades-cumplidas-vigentes"
  );
  const actividadesNoCumplidasVigentes = document.getElementById(
    "actividades-no-cumplidas-vigentes"
  );
  const actividadesVencidas = document.getElementById("actividades-vencidas");
  const todasActividades = document.getElementById("actividades-todas");

  for (const [key, value] of actividades) {
    const tareas = new Map(Object.entries(value));
    for (const [key, value] of tareas) {
      let endDate = new Date(value.end);
      todasActividades.append(new Option(value.task, key));
      if (value.state && endDate > Date.now()) {
        actividadesCumplidasVigentes.append(new Option(value.task, key));
      } else if (!value.state && endDate > Date.now()) {
        actividadesNoCumplidasVigentes.append(new Option(value.task, key));
      } else if (endDate < Date.now()) {
        actividadesVencidas.append(new Option(value.task, key));
      }
    }
  }
}
cargarActividades();

const numeros = [
  { one: 1 },
  { two: 2 },
  { three: 3 },
  { four: 4 },
  { five: 5 },
  { six: 6 },
  { seven: 7 },
  { eight: 8 },
  { nine: 9 },
  { ten: 10 },
  { eleven: 11 },
  { twelve: 12 },
  { thirteen: 13 },
  { fourteen: 14 },
  { fifteen: 15 },
  { sixteen: 16 },
  { seventeen: 17 },
  { eighteen: 18 },
  { nineteen: 19 },
  { twenty: 20 },
];

document.getElementById("btn-agregar").addEventListener("click", () => {
  const name = document.getElementById("task-name").value;
  const end = document.getElementById("task-end").value;

  const date = new Date(end);
  let cont = 0;
  for (const [key, value] of actividades) {
    const tareas = new Map(Object.entries(value));
    for (const [subKey, subValue] of tareas) {
      cont++;
    }
  }
  if (cont > 20) {
    alert("Se alcanzo el maximo de actividades");
  } else if (date < Date.now() || !date.getDate()) {
    alert("Fecha erronea");
  } else {
    const key = Object.keys(numeros[cont])[0];

    const nuevaTarea = {
      task: name,
      state: false,
      end: end,
    };
    data.tasks[key] = nuevaTarea;

    cargarActividades();
  }
  const nameF = document.getElementById("task-name");
  nameF.value = "";
  const endF = document.getElementById("task-end");
  endF.value = "";
});

document.getElementById("task-state").addEventListener("change", () => {
  const input = document.getElementById("task-state");
  const select = document.getElementById("actividades-no-cumplidas-vigentes");
  for (const [key, value] of actividades) {
    const tareas = new Map(Object.entries(value));
    for (const [key, value] of tareas) {
      if (value == select.value){
        input.textContent = value
      }
    }
  }
});
