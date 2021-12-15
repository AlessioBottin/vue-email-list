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
            getMail: function() {
                while (this.mailArray.length < 10) {

                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.mailArray.push(response.data.response);
                    });
                };
                console.log(this.mailArray);
            }
        },
        created: function() {
            this.getMail();
        }
    }
);