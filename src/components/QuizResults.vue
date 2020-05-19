<template>
    <div>
        <h2>{{ $t('quiz.title_results') }}</h2>
        
        


<b-card-group deck>
  <b-card v-for="(item, index) of userResponses" :key="item.index" text-variant="white" :header="item.category" class="text-center" :class="{
    'bg-danger':  score(item.questions) === 0,
    'bg-warning':  score(item.questions) < item.questions.length,
    'bg-success': score(item.questions) === item.questions.length 
  }">
    <b-card-text :id="index">
      <h4>{{ item.text_result_good }}</h4>
      <div v-for="responses of item.questions" :key="responses.index" class="text-left">
        

        <b-card :title="responses.text" :sub-title="responses.responses" bg-variant="dark">
          <b-card-text>
            {{ responses.error_text }}
          </b-card-text>
          <b-link :href="responses.url_resource " class="card-link">Más info</b-link>
        </b-card>

      </div>
    </b-card-text>
    <template v-slot:footer>
      <div class="text-right"><small>Score: {{ score(item.questions) }} de {{ item.questions.length }}</small></div>
    </template>
  </b-card>
</b-card-group>

{{userResponses}}
        
    </div>
</template>

<script>
export default {
    name: "QuizResults",
    props:
        ['userResponses']
    ,
    methods: {
      score(v) {
        return v.filter((is) => is.responses === true).length;
      }
    }
}
</script>