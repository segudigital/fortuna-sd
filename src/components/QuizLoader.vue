<template>
    <section> <!-- div contenedor del template -->
        <!-- Tomo las preguntas del archivo de idioma y genero un div para cada una -->
        <div v-for="(question, index) in $t('quiz.questions')" :key="question.index">
            <div v-show="index === questionIndex">
                <h3>{{question.text}}</h3>
                <!-- Acá pinto las respuestas, sin limite pero por disenio mejor manter pocas -->
                    <b-row v-for="response in question.responses" :key="response.index">
                        <label :class="'p-3'" class="col col-lg-6 mb-3">
                            <input type="radio" :name="index" :value="response.correct" v-model="userResponses[index]" @change="check">{{response.text}}
                        </label>
                    </b-row>
            </div>
        </div>
            <b-img :src="require('@/assets/tarjetas_tarot.svg')" fluid :alt="$t('quiz.alt_imagen')" class="col col-lg-2 col-5 col-md-3"></b-img>

        <!-- Pagina de resultados hay uqe hacer un modulo -->
        <div v-show="questionIndex === quiz.questions.length">
            <h2>Respuests y eso</h2>
            <p>Total score: {{ score() }} / {{ quiz.questions.length }}</p>
        </div>
    </section>
</template>

<script>
// Para servidor api usar vue-axios
// https://www.npmjs.com/package/vue-axios
// // import axios from 'axios';

// import { mapState, mapMutations } from 'vuex';

var quiz = {
        _comment: 'My quiz',
        questions: [
            {
            text: "Question 1",
            responses: [
                {text: 'Wrong, too bad.'}, 
                {text: 'Right!', correct: true}, 
            ]
            }, {
            text: "Question 2",
            responses: [
                {text: 'Right answer', correct: true}, 
                {text: 'Wrong answer'}, 
            ]
            } 
        ]
        };

export default{
    name: 'QuizLoader',
    data(){
        return{
            quiz: quiz,
            questionIndex: 0,
            // An array initialized with "false" values for each question
            // It means: "did the user answered correctly to the question n?" "no".
            // userResponses: Array(quiz.questions.length).fill(false)
            userResponses: Array(quiz.questions.length).fill(false) 

        }
    },
    computed: {
        // ...mapState([''])
    },
    methods:{
        // ...mapMutations(['']),
        check: function() {
            this.questionIndex++;
        },
        score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
        }
    },
    created(){
    }
}
</script>

<style scoped>
section {
    z-index: 999 !important;
    text-align: center;
}
section > div {
    background: url('~@/assets/estrellitas.svg') no-repeat right top;
    background-size: 2em;
}
h3 {
    margin-bottom: 1.5em;
    letter-spacing: 3px;
    font-weight: 600;
}
label{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
    margin: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.514);
    border-bottom: 1px solid rgba(255, 255, 255, 0.514);
    
}
input[type="radio"] {
    display: none;
    cursor: pointer;
    font-weight: bold;
}
</style>