<template>
  <div>
      <b-sidebar id="sidebar-right" title="" right shadow backdrop>
          <div class="px-3 py-2">
          <p>{{$t('about.text')}}</p>
          <pre>
            {{$t('about.credits')}}
          </pre>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
      </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>