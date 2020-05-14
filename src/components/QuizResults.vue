<template>
    <div>
        <h2>{{ $t('quiz.title_results') }}</h2>
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
        pinta(params) {  //ESTA COSA SE  VA AL FINAL
            console.log(params)
            return 0
        }
    }
}
</script>