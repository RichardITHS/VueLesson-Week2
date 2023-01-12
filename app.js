/* Vue.createApp({

}) */

//Part 1 Interpolation
const app = Vue.createApp({
data(){
    return {
        message: "Vue lektion!"
       
    }
}
});

app.mount("#app");

//Part 2 HTML Template via VUE
const template = Vue.createApp({
    template: "<h2>This made by template in Vue</h2>"
});
template.mount("#template");

//Part 3 Function Output, Event Handler, attribute with V-Bind and a link
const random = Vue.createApp({
    data() {
        return {
            messageA: "Hej vi har så offantligt kul",
            messageB: "Vi älskar VUE!!!",
            vueLink: 'https://iths.se'
        }
    },
    methods: {
        outputMessage(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.messageA;
            } else {
                return this.messageB;
            }
        
        },
        refresh(){
           window.location.reload(); 
        }
    }
});
random.mount("#random");

const numberBind = Vue.createApp({
    data(){
        return {
            number: 43
        }
    }
});
numberBind.mount('#numberBind');

const styleBind = Vue.createApp({
data(){
    return {
        name: 'Richard'
    }
}
});
styleBind.mount('#styleBind')

// Part 6 - TODO APP - v-if, v-else, v-model, render conditionally
const myTask = Vue.createApp({
   data(){
    return {
        taskValue: '',
        tasks: []
    }
   },
   methods:{
   addTask(){
    this.tasks.push(this.taskValue);
   },
   removeTask(idx){
        this.tasks.splice(idx, 1)
   }
   }

});
myTask.mount('#myTask')