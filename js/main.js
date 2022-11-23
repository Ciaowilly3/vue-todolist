const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      tasksToDoArray: [
        {
          text: "Prendi il pane",
          done: false,
        },
        {
          text: "Dai da mangiare ai cervi",
          done: false,
        },
        {
          text: "Innaffia i girasoli",
          done: true,
        },
        {
          text: "Raccogli le uova di drago",
          done: false,
        },
      ],
    };
  },
  methods: {
    removeTask(indexToDelete) {
      //   aggiungo un confirm per correttezza come fatto da Florian
      const remove = confirm(
        "Sei sicuro di voler eliminare il task selezionato?"
      );
      if (remove === true) {
        this.tasksToDoArray.splice(indexToDelete, 1);
      }
    },
    getNewTask(newText) {
      //   aggiungo la new task all'array pre-compilato
      const newTask = {
        text: newText,
        done: false,
      };
      this.tasksToDoArray.push(newTask);
    },
  },
}).mount("#app");
