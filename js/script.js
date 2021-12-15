// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            mailArray: []
        },
        methods: {
        },
        created: function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                console.log(response.data.response);
            });
        }
    }
);