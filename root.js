// create new vue application
const app = Vue.createApp({
    // in this section we will create any data,template or function that
    // we want to react in our html file
    // template is just a html section or file

    // template: "<p>I am template</p>",
    // but if we need multiple html lines then it will be best ot create a separate vue template file

    // we can also pass variable in our html to make the site dynamic
    data() {
        return {
            showBooks: true,
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45,
        };
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
    },
});

// mount the specific section of html where I want to bind with vue
app.mount("#app");
