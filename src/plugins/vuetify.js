import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  // theme: {
  //   // options: {
  //   //   customProperties: true
  //   // },
  //   // themes: {
  //   //   light: {
  //   //     primary: "#2196F3",
  //   //     secondary: "#424242",
  //   //     accent: "#90CAF9",
  //   //     error: "#B71C1C",
  //   //     info: "#009688",
  //   //     success: "#4CAF50",
  //   //     warning: "#FFC107"
  //   //   }
  //   // }
  // },
  lang: {
    locales: { pt },
    current: "pt"
  },
  icons: {
    iconfont: "md"
  }
});
