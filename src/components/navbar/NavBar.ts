import { Component, Prop, Vue } from 'vue-property-decorator';
import StyleModule from '@/store/VuexModules/style';
import { ColourMode } from '@/types/Styleguide';

@Component
export default class NavBar extends Vue {
    displayHamburguerMenu: boolean = false;

    get colour() {
        return StyleModule.colourMode;
    }

    get ColourMode() {
        return ColourMode;
    }

    disableMenuDisplay() {
        this.displayHamburguerMenu = this.displayHamburguerMenu
            ? !this.displayHamburguerMenu
            : this.displayHamburguerMenu;
    }

    toggleColourMode() {
        StyleModule.toggle();
        this.displayHamburguerMenu = !this.displayHamburguerMenu;
    }
}
