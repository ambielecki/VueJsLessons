/**
 * Created by abielecki on 1/30/17.
 */
Vue.component('andrew-message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true,
        }
    },
    template:  `
        <article class="message" v-show="isVisible">
              <div class="message-header">
                <p>{{ title }}</p>
                <button type="delete" @click="hideModel" class="delete"></button>
              </div>
              <div class="message-body">
                {{ body }}
              </div>
        </article>`,
    methods: {
        hideModel() {
            this.isVisible = false;
        }
    }
});

let app = new Vue ({
    el: '#root',
});
