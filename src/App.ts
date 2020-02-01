import { Component, Vue } from 'vue-property-decorator';
import RouterView from 'vue-router';
import NavBar from '@/components/navbar/NavBar.vue';
import Home from '@/components/Home/Home.vue';
import NotFound from '@/components/notffound/NotFound.vue';
import Blog from '@/components/Blog/Blog.vue';
import StyleModule from '@/store/VuexModules/style';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faTerminal,
    faAt,
    faMapMarkedAlt,
    faSun,
    faMoon,
    faHamburger,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(
    faTerminal,
    faGithub,
    faTwitter,
    faAt,
    faMapMarkedAlt,
    faSun,
    faMoon,
    faHamburger
);

@Component({
    components: {
        NavBar,
        Home,
        NotFound,
        Blog,
    },
})
export default class App extends Vue {
    get colour() {
        return StyleModule.colourMode;
    }
}
