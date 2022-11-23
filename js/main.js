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
}).mount("#app");
