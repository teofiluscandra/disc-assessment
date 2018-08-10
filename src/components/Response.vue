<template>
    <div class="response" v-if="dataResponse.id">
        <h1 class="title">Result</h1>
        <h1 class="title is-5">Type : </h1>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>{{dataResponse.TYPE}} </th>
                    <th colspan="3">{{dataResponse.type_desc}}</th>
                </tr>
                <tr>
                    <th>Your tendencies are:</th>
                    <th>You desires an environment which includes:</th>
                    <th>You needs others who:</th>
                    <th>To be more effective, you needs:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{dataResponse.tendencies}}</td>
                    <td>{{dataResponse.environment}}</td>
                    <td>{{dataResponse.who}}</td>
                    <td>{{dataResponse.effective}}</td>
                </tr>
            </tbody>
        </table>
        <h1 class="title is-5">Characteristic : </h1>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Dominance</th>
                    <th>Influence</th>
                    <th>Steadiness</th>
                    <th>Conscientiousness</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{dataResponse.c_dominance}}</td>
                    <td>{{dataResponse.c_influence}}</td>
                    <td>{{dataResponse.c_steadiness}}</td>
                    <td>{{dataResponse.c_conscientiousness}}</td>
                </tr>
            </tbody>
        </table>
        <h1 class="title is-5">Style : </h1>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>{{dataResponse.style}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{dataResponse.style_desc}}</td>
                </tr>
            </tbody>
        </table>
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
    .response td {
        white-space: pre-wrap;
    }
    main {
        text-align: left;
    }
</style>

