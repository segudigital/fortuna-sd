<template>
    <b-container class="d-flex align-items-center justify-content-center">
    <div class="quiz"></div>
      <QuizLoader />
    </b-container>
</template>

<script>
import QuizLoader from "@/components/QuizLoader.vue"

export default {
  name: 'Quiz',
  components: {
        QuizLoader
    } 
}
</script>

<style >
.bg {
  /* background-color: rgb(2, 3, 39) !important; */
  background-color: #754dfb !important;
}
.quiz {
  background:url('~@/assets/circulo-ho-blanco.svg') no-repeat 50% 50%;
  width: 100%; 
  height: 100%;
  background-size:contain;
  animation:spin 90s linear infinite;
  position: fixed;
  right: -35%;
  bottom: -25%;
  opacity: .20;
}
@keyframes spin{
	from{transform:rotate(360deg)}
	to{transform:rotate(0deg)}	
}
</style>