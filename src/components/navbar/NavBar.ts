import { Component, Prop, Vue } from "vue-property-decorator";
import StyleModule from "@/store/VuexModules/style";

@Component
export default class NavBar extends Vue {
  get colour() {
    return StyleModule.colourMode;
  }
}
