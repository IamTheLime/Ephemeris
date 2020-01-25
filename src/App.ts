import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import Home from "@/components/Home/Home.vue";

@Component({
  components: {
    NavBar,
    Home
  }
})
export default class App extends Vue {}
