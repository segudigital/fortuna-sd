<template>
    <section>
        <!-- Tomo las preguntas del archivo de idioma @/locales/\lng\.js y genero un div para cada una -->
        <div v-for="(question, index) in $t('quiz.questions')" :key="question.index" id="question">
            <div v-show="index === questionIndex">
                <h3>{{question.text}}</h3>
                <!-- Acá pinto las respuestas, sin limite pero por disenio mejor manter pocas -->
                    <b-row v-for="response in question.responses" :key="response.index">
                        <label :class="'p-3'" class="col col-lg-6 mb-3">
                            <input type="radio" :name="index" :value="response.correct ? true : false" v-model="userResponses[index]" @change="check">{{response.text}}
                        </label>
                    </b-row>
                <b-img :src="require('@/assets/tarjetas_tarot.svg')" fluid :alt="$t('quiz.alt_imagen')" class="col col-lg-2 col-5 col-md-3"></b-img>
            </div>
        </div>
        <div v-show="questionIndex === $t('quiz.questions').length">
            <QuizResults :results="userResponses" />
        </div>
    </section>
</template>

<script>
// Para servidor api usar vue-axios
// https://www.npmjs.com/package/vue-axios
// // import axios from 'axios';

import QuizResults from "@/components/QuizResults.vue"

export default{
    name: 'QuizLoader',
    components: {
        QuizResults
    },
    data(){
        return{
            questionIndex: 0,
            userResponses: [],
        }
    },
    methods:{
        // ...mapMutations(['']),
        check: function() {
            this.questionIndex++;
        }
    }
}
</script>

<style scoped>
section {
    z-index: 999 !important;
    text-align: center;
}
#question {
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