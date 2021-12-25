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
            books: [
                { title: "The Final Empire", author: "Brandon Sanderson" },
                { title: "Sell like crazy", author: "Sabri Suby" },
                { title: "Bela furabar agge", author: "Arif Azad" },
            ],
            x: 0,
            y: 0,
        };
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, anythingNEW) {
            console.log("event fired");
            console.log(e);
            console.log("You fired an " + e.type + " event");

            // check that if additional argument were passed through function
            if (anythingNEW) {
                console.log("New argument passed: " + anythingNEW);
            }

            console.log("=================================");
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    },
});

// mount the specific section of html where I want to bind with vue
app.mount("#app");
