<template>
    <section>
        <!-- Tomo las preguntas del archivo de idioma @/locales/\lng\.js y genero un div para cada una -->
        <div v-for="(item, index) in jsonData" :key="item.index" id="question">
            <!-- Pinto los bloques de categorias -->
            <div v-show="index === itemIndex">
                <!-- <small>{{item.category}} -- {{item.color}} -- {{itemIndex}}</small><hr/> -->
                
                <!-- Acá pinto las preguntas -->
                <div v-for="(question, index) in item.questions" :key="question.index" >
                    <div v-show="index === questionIndex">
                        <h3>{{ question.text }}</h3> 
                        <!-- Numero de preguntas en la seccion: {{item.questions.length}} -->
                        <b-row v-for="response in question.responses" :key="response.index">
                            <label :class="'p-3'" class="col col-lg-6 mb-3">
                                <input type="radio" :name="index" :value="response.correct ? true : false" v-model="userResponse" @change="check(item.questions.length,itemIndex)">{{ response.text }}
                            </label>
                        </b-row>
                    </div>
                </div>
            </div>
        </div>        
        <!-- cargo modulo de los resultados -->
        <div v-show="itemIndex === jsonData.length">
            <QuizResults :userResponses="jsonData" />
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
            jsonData: this.$i18n.messages[this.$i18n.locale].quiz_items, // cargo datos de i18n
            itemIndex: 0,
            questionIndex: 0,
            userResponse: ''
        }
    },
    methods:{
        check (length) {
            // console.log(this.jsonData[this.itemIndex].questions[this.questionIndex]) 
            this.jsonData[this.itemIndex].questions[this.questionIndex].responses = this.userResponse

            this.questionIndex++;
            // verifico que se recorran todas las preguntas por categoria
            if (this.questionIndex === length) {
                this.questionIndex = 0
                this.itemIndex++
            }
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