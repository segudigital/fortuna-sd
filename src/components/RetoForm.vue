<template>
    <div class="my-5 p-3 reto">
        <h2 class="font-weight-bold text-left">{{ $t('reto_form.title_challenge') }}</h2>
        <p class="font-weight-bold text-left">{{ $t('reto_form.text_challenge') }}</p>
        <b-form action="https://segudigital.us10.list-manage.com/subscribe/post?u=bf0e3af99eb77a7f806d1920d&amp;id=8b423449c2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <b-input-group size="lg">
            <b-form-input type="email" name="EMAIL" :placeholder="$t('reto_form.input_challenge')" required></b-form-input>
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_bf0e3af99eb77a7f806d1920d_8b423449c2" tabindex="-1" value=""></div>
            <b-input-group-append>
            <b-button type="submit" variant="warning" value="Subscribe" name="subscribe">{{ $t('reto_form.button_challenge') }}</b-button>
            </b-input-group-append>
        </b-input-group>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "RetoForm",
    components: {

    } 
}
</script>
<style scoped>
.reto {
  background-color: rgba(0,0,0, 0.15);
}
</style>