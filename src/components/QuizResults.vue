<template>
    <div>
        <h2>{{ $t('quiz.title_results') }}</h2>
        <p>{{ $t('quiz.text_results') }}</p>

        <b-card-group columns id="cards" class="d-md-flex">
          <b-card v-for="(item, index) of userResponses" :key="item.index" text-variant="white" :header="item.category" class="my-card text-center"
          :class="[{
            'card-fire':  score(item.questions) === 0,
            'card-electric':  score(item.questions) < item.questions.length,
            'card-water': score(item.questions) === item.questions.length 
          }, random_rotate()]">
            <b-card-text class="text-dark font-weight-bold">
              <p v-if="score(item.questions) === 0">{{ item.text_result_bad }}</p>
              <p v-else-if="score(item.questions) < item.questions.length">{{ item.text_result_medium }}</p>
              <p v-else>{{ item.text_result_good }}</p>

              <b-button block v-b-modal="'modal-'+index">{{ $t('quiz.button_recomendations') }}</b-button>
              <b-modal :id="'modal-'+index" :title="item.category" size="lg" ok-only>
                <p class="my-4">{{ item.text_result_default }} {{index}}</p>

                <div v-for="responses of item.questions" :key="responses.index" class="text-left">
                  <b-card v-if="!responses.responses" :title="responses.text" bg-variant="light" class="mb-2">
                    <!-- <b-card v-if="!responses.responses" :title="responses.text" :sub-title="responses.responses.toString()" bg-variant="light" class="mb-2"> -->
                    <b-card-text>
                      {{ responses.error_text }}
                    </b-card-text>
                    <b-link :href="responses.url_resource " class="card-link" target="_blank">Más info</b-link>
                  </b-card>
                </div>


              </b-modal>
            </b-card-text>
            <template v-slot:footer>
              <div class="text-right"><small>Score: {{ score(item.questions) }} de {{ item.questions.length }}</small></div>
            </template>
          </b-card>
        </b-card-group>

<!-- {{userResponses}} -->
        
    </div>
</template>

<script>
export default {
    name: "QuizResults",
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
.my-card  {
  box-shadow: 0px 5px 20px -10px #111111;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.my-card:hover {
  z-index: 5;
  box-shadow: 0px 13px 30px -15px #000000;
  -webkit-transform: translateY(-10px) !important;
          transform: translateY(-10px) !important;
} 
.my-card .card-body {
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 0 0 3px 3px;
  margin: 10px;
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


.card-water {
  background: linear-gradient(120deg, #1CB5E0 0%, #000851 100%);
  box-shadow: 0px 5px 20px -10px #000851;
}
.card-water .card__type {
  background-color: #1CB5E0;
}
.card-electric {
  background: linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%);
  box-shadow: 0px 5px 20px -10px #3A1C71;
}
.card-electric .card__type {
  background-color: #C08A53;
}
/* .card-electric {
  background: -webkit-gradient(linear, left top, right top, color-stop(34%, #ffde00), color-stop(83%, #e8ff99));
  background: linear-gradient(90deg, #ffde00 34%, #e8ff99 83%);
}
.card-electric .card__type {
  background-color: #000;
} */
.card-fire {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(10%, #c71800), to(#fcc245));
  background: linear-gradient(0deg, #c71800 10%, #fcc245 100%);
}
.card-fire .card__type {
  background-color: #c71800;
}
</style>