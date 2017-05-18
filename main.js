new Vue({
    el: '#root',
    data: {
        todo: '',
        search: '',
        todos: [
            { name: 'abc', done: true },
            { name: 'abc', done: false }
        ]
    },
    methods: {
        append() {
            this.todos.push({ name: this.todo, done: false });
            this.todo = '';
        },
        remove(index) {
            this.todos.splice(index, 1);
        }
    },
    computed: {
        filteredTodos() {
            var self = this;
            return this.todos.filter(function (todo) {
                if (self.search === '') {
                    return 1;
                }
                return !todo.done && (todo.name.indexOf(self.search) !== -1);
            });
        }
    }
});
