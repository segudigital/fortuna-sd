<template>
    <section>
        <!-- Tomo las preguntas del archivo de idioma @/locales/\lng\.js y genero un div para cada una -->
        <div v-for="(item, cat_index) in jsonData" :key="item.index">
            <!-- Pinto los bloques de categorias -->
            <div v-show="cat_index === itemIndex">
                <!-- <small>Categoria {{item.category}} : {{ cat_index }} --  {{itemIndex}}</small><hr/> -->
                
                <!-- Acá pinto las preguntas -->
                <div v-for="(question, ques_index) in item.questions" :key="question.index" >
                    <div v-show="ques_index === questionIndex">
                        <div id="question"></div>
                        <h3>{{ question.text }}</h3>
                        <!-- Numero de preguntas en la seccion: {{item.questions.length}} -->
                        <b-row v-for="response in question.responses" :key="response.index" class="justify-content-md-center">
                            <b-col class="col-lg-6 mb-3">
                                <b-button variant="link" size="lg" block squared class="response" @click="check(item.questions.length, response.correct ? true : false)"><span>{{ response.text }}</span></b-button>
                                <!-- <b-button variant="link" size="lg" block squared class="response" @click="check(item.questions.length, response.correct ? true : false)"><span>{{ response.text }} - (val: {{response.correct ? true : false}})</span></b-button> -->
                            </b-col>
                        </b-row>
                        <b-row class="justify-content-md-center">
                            <b-col class="col-4 col-sm-2 text-center m-auto">
                                <b-img :src="require('@/assets/tarjetas_tarot.svg')" alt="Tarot, seguridad digital"></b-img>
                            </b-col>
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
            questionIndex: 0
        }
    },
    methods:{
        check (length,val_response) {
            this.jsonData[this.itemIndex].questions[this.questionIndex].responses = val_response

            this.questionIndex++;
            // verifico que se recorran todas las preguntas por categoria
            if (this.questionIndex == length) {
                this.itemIndex++
                this.questionIndex = 0
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
    min-height: 29px;
    position: relative;
    bottom: -14px;
    right: -20px;
}
h3 {
    margin-bottom: 1.5em;
    letter-spacing: 3px;
    font-weight: 600;
}
.response {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
    /* border-top: 1.5px solid rgba(255, 255, 255, 0.514);
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.514);
    border-right: none;
    border-left: none; */
    border: none;
    font-weight: bold;
    color: white;
}
.response span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.response span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.response:hover span {
  padding-right: 25px;
}
.response:hover span:after {
  opacity: 1;
  right: 0;
}
</style>