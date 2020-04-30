<template>
    <b-container class="d-flex align-items-center justify-content-center">
    <div class="quiz"></div>
      <h1>quiz page</h1>
    </b-container>
</template>

<style >
.bg {
  /* background-color: rgb(2, 3, 39) !important; */
  background-color: #7543ff !important;
}
.quiz {
  background:url('/circulo-horoscopo-blanco.svg') no-repeat 50% 50%;
  width: 100%; 
  height: 100%;
  background-size:contain;
  animation:spin 120s linear infinite;
  position: fixed;
  right: -35%;
  bottom: -25%;
}
@keyframes spin{
	from{transform:rotate(360deg)}
	to{transform:rotate(0deg)}	
}
</style>