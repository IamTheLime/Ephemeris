import { Component, Prop, Vue } from "vue-property-decorator";
import StyleModule from "@/store/VuexModules/style";

@Component
export default class Home extends Vue {
  testClick() {
    StyleModule.toggle();
  }
  getColour() {
    return StyleModule.colourMode;
  }
}
