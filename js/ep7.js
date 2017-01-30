/**
 * Created by abielecki on 1/30/17.
 */
Vue.component('task', {
    template: '<li><slot></slot></li>',
});

let app = new Vue ({
    el: '#root',
    data: {
        messages: ['first', 'second', 'third']
    }
});