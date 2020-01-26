import { Component, Prop, Vue } from 'vue-property-decorator'
import StyleModule from '@/store/VuexModules/style'
import { ColourMode } from '@/types/Styleguide'

@Component
export default class NavBar extends Vue {
    get colour() {
        return StyleModule.colourMode
    }

    get ColourMode() {
        return ColourMode
    }

    toggleColourMode() {
        StyleModule.toggle()
    }
}
