<template>
    <div>
        <div class="mb-5">
          <b-img :src="require('@/assets/adivina-saludo-final.svg')" class="w-25"></b-img>
          <h2>{{ $t('quiz.title_results') }}</h2>
          <p>{{ $t('quiz.text_results') }}</p>
        </div>

        <!-- Aqui muestro las cartas de resultados por categoria -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col mb-4" v-for="(item, index) of userResponses" :key="item.index">
            <b-card class="card tarot-card" :header="item.category" :class="random_rotate()">
              <div class="card-body text-dark">
                <div v-if="score(item.questions) === 0">
                  <b-card-img :src="require('@/assets/tarot-escudo-alto.svg')" alt="Image" class="w-25"></b-card-img>
                  <p class="card-text mt-3"> {{ item.text_result_bad }} </p>
                </div>
                <div v-else-if="score(item.questions) < item.questions.length">
                  <b-card-img :src="require('@/assets/tarot-escudo-medio.svg')" alt="Image" class="w-25"></b-card-img>
                  <p class="card-text mt-3"> {{ item.text_result_medium }} </p>
                </div>
                <div v-else>
                  <b-card-img :src="require('@/assets/tarot-escudo-bajo.svg')" alt="Image" class="w-25"></b-card-img>
                  <p class="card-text mt-3"> {{ item.text_result_good }} </p>
                </div>

                <!-- Aui es la parte del modal que muestra las recomendaciones -->
                <b-button block v-b-modal="'modal-'+index" class="mt-3 star-button"><span class="l"></span>{{ $t('quiz.button_recomendations') }}<span class="r"></span></b-button>
                
                <b-modal :id="'modal-'+index" :title="item.category" size="lg" ok-only :content-class="'modal-tarot'" >
                  <div>
                    <p class="my-4">{{ item.text_result_default }}</p>
                    <div v-for="responses of item.questions" :key="responses.index" class="text-left mx-5">
                      <b-card v-if="!responses.responses" :title="responses.text" bg-variant="dark" class="mb-2 modal-card-tarot">
                        <!-- <b-card v-if="!responses.responses" :title="responses.text" :sub-title="responses.responses.toString()" bg-variant="light" class="mb-2"> -->
                        <b-card-text v-html="responses.error_text">
                          <!-- {{ responses.error_text }} -->
                        </b-card-text>
                        <div class="text-right"><b-link :href="responses.url_resource " class="card-link" target="_blank">Más info >></b-link></div>
                      </b-card>
                    </div>
                    <RetoForm />
                  </div>
                </b-modal>
              </div>
              <template v-slot:footer>
                <div class="text-right"><small>{{ $t('quiz.score') }}: {{ score(item.questions) }} de {{ item.questions.length }}</small></div>
              </template>
            </b-card>
          </div>
        </div>

        <RetoForm />

<!-- {{userResponses}} -->
        
    </div>
</template>

<script>
import RetoForm from '@/components/RetoForm'
export default {
    name: "QuizResults",
    components: {
      RetoForm
    },
    props:
        ['userResponses']
    ,
    data(){
        return{
          
        }
    },
    methods: {
      score(v) {
        return v.filter((is) => is.responses === true).length;
      },
      random_rotate() {
        return "rotate_"+Math.ceil(Math.random()*4);
      }
    }
}
</script>

<style scoped>
.tarot-card  {
  background-color: #ecedc8;
  background-image: url('~@/assets/tarjeta-tarot-sombra.svg');
  background-repeat: no-repeat;
  background-position: 0px -5px;
  background-size: cover;
  border-radius: 15px;
  border-bottom: 3px solid #aaab90;
  border-right: 3px solid #aaab90;
  box-shadow: 0px 5px 20px -10px #111111;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.tarot-card:hover {
  z-index: 5;
  box-shadow: 0px 13px 30px -15px #000000;
  -webkit-transform: translateY(-10px) !important;
          transform: translateY(-10px) !important;
}

.tarot-card > .card-body {
  padding: 0;
  font-weight: bold;
}
.tarot-card > .card-body > div {
  background-color: #717fc6;
  margin: 0 11px;
  padding: 10px;
  background-image: url('~@/assets/tarjeta-tarot-sombra.svg');
  background-repeat: no-repeat;
  background-position: 10px -46px;
  background-size: cover;
  
}
.tarot-card .card-header {
  font-weight: 800 !important;
  font-size: 1.2em;
}
.tarot-card .card-text {
  color: white;
  font-weight: normal;
}
.tarot-card > .card-footer, .tarot-card .card-header, .tarot-card > .card-footer small {
  color: #707053;
  background-color: initial;
  font-weight: bold;
  border: none;
}
.star-button {
  background: #6371ad;
  border: 6px solid #ffe200;
  border-radius: 14px;
  box-shadow: 1px 1px 1px rgba(0,0,0, 0.8);
}
.star-button:hover, .star-button:active {
  background: #6e7ab1;
  border: 6px solid #ffe200;
  border-radius: 14px;
  box-shadow: 3px 3px 4px rgba(0,0,0, 0.5);
}
.star-button > span {
  background-image: url('~@/assets/star-button.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 22px;
  height: 22px;
}
.star-button > span.l {
  float: left;
}
.star-button > span.r {
  float: right;
}

.rotate_1 {
  -webkit-transform: translateY(0px) rotate(-3deg);
          transform: translateY(0px) rotate(-3deg);
}
.rotate_2 {
  -webkit-transform: translateY(0px) rotate(-2deg);
          transform: translateY(0px) rotate(-2deg);
}
.rotate_3 {
  -webkit-transform: translateY(0px) rotate(2deg);
          transform: translateY(0px) rotate(2deg);
}
.rotate_4 {
  -webkit-transform: translateY(0px) rotate(3deg);
          transform: translateY(0px) rotate(3deg);
}
</style>

<style>
.modal-tarot {
  background-color: #ecedc8;
  background-image: url('~@/assets/tarjeta-tarot-sombra.svg');
  background-repeat: no-repeat;
  background-position: 0px -5px;
  background-size: cover;
  border-radius: 15px;
  border-bottom: 3px solid #aaab90;
  border-right: 3px solid #aaab90;
}
.modal-tarot > .modal-body {
  color: white;
  padding: 0;
  font-weight: normal;
}
 .modal-tarot > .modal-body > div {
  background-color: #717fc6;
  margin: 0 18px;
  padding: 10px;
  background-image: url('~@/assets/tarjeta-tarot-sombra.svg');
  background-repeat: no-repeat;
  background-position: 10px -46px;
  background-size: cover;
  
}
.modal-tarot > .modal-footer, .modal-tarot > .modal-header, .modal-tarot > .modal-header > .modal-title {
  color: #707053;
  background-color: initial;
  font-weight: bold;
  border: none;
}
.modal-card-tarot {
  background-color: rgba(0,0,0, 0.15) !important;
}
.modal-card-tarot .card-link {
  color: rgba(255,255,255, 0.5);
   -webkit-transition: 0.4s;
  transition: 0.4s;
}
.modal-card-tarot .card-link:hover {
  color: white;
}
.modal-card-tarot .card-text > a {
    color: rgba(255,255,255, 0.5);
    transition: 0.4s;
  text-decoration: underline;
}
.modal-card-tarot .card-text > a:hover {
  text-decoration: underline;
    color: rgba(255,255,255, 1);
    transition: 0.4s;
}

</style>