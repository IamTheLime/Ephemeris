import store from '@/store/store';
import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule,
} from 'vuex-module-decorators';
import { StyleGuide, ColourMode } from '@/types/Styleguide';

@Module({
    store,
    dynamic: true,
    name: 'Style',
    namespaced: true,
})
class StyleModule extends VuexModule {
    private style: StyleGuide = {
        colourMode: ColourMode.LIGHT,
    };

    @Mutation
    toggleColourMode(toggleSwitch: boolean): void {
        if (toggleSwitch) {
            this.style.colourMode =
                this.style.colourMode === ColourMode.LIGHT
                    ? ColourMode.DARK
                    : ColourMode.LIGHT;
        }
    }

    get colourMode(): ColourMode {
        return this.style.colourMode;
    }

    @Action({ commit: 'toggleColourMode' })
    toggle() {
        return true;
    }
}

export default getModule(StyleModule);
