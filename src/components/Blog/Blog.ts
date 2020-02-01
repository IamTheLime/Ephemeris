import StyleModule from '@/store/VuexModules/style';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Blog extends Vue {
    testClick() {
        StyleModule.toggle();
    }
    get colour() {
        return StyleModule.colourMode;
    }
}
