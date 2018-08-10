<template>
    <div class="response" v-if="dataResponse.id">
        <h1 class="title">Result</h1>
        <h1>Type : {{dataResponse.TYPE}}</h1>
        <h1>Type Desc : {{dataResponse.type_desc}}</h1>
        <div class="content">
            <p>Tendencies : {{dataResponse.tendencies}}</p>
            <p>Environtment : {{dataResponse.environment}}</p>
            <p>Who : {{dataResponse.who}}</p>
            <p>Effective : {{dataResponse.effective}}</p>
            <p>Dominance : {{dataResponse.c_dominance}}</p>
            <p>Influence : {{dataResponse.c_influence}}</p>
            <p>Steadiness : {{dataResponse.c_steadiness}}</p>
            <p>Conscientiousness : {{dataResponse.c_conscientiousness}}</p>
            <p>Style : {{dataResponse.style}}</p>
            <p>Style Desc : {{dataResponse.style_desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Response',
  computed: {
    dataResponse () {
      return this.$store.getters.dataResponse
    }
  }
}
</script>
<style scoped>
    .response {
        margin-top: 2em;
    }
    .response p {
        white-space: pre-wrap;
    }
    main {
        text-align: left;
    }
</style>

