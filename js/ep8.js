/**
 * Created by abielecki on 1/30/17.
 */
Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',
    data() {
        return {
            tasks: [
                {task: 'Go to the store', complete: true},
                {task: 'Finish Screencast', complete: false},
                {task: 'Make Donation', complete: false},
                {task: 'Clear Inbox', complete: false},
                {task: 'Make Dinner', complete: false},
                {task: 'Clean Room', complete: true},
            ],
        }
    },
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
});

let app = new Vue ({
    el: '#root',
});