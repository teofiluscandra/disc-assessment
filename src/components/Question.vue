<template>
    <div>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>{{index + 1}}</th>
                <th>Most</th>
                <th>Least</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in data.item" :key="item.id">
                <td width="60%">{{item}}</td>
                <td>
                    <div class="radio">
                        <input type="radio" :value="(i + 1).toString()" :name="mostTitle+(index + 1)" v-model="answer.most" @change="setAnswer(answer)" required>
                    </div>
                </td>
                <td>
                    <div class="radio">
                        <input type="radio" :value="(i + 1).toString()" :name="leastTitle+(index + 1)" v-model="answer.least" @change="setAnswer(answer)" required>
                    </div>
                </td>
            </tr>
            </tbody>
    </table>
    </div>
</template>
<script>
export default {
  name: 'Question',
  props: {
    data: Object,
    index: Number
  },
  data: function () {
    return {
      mostTitle: 'most',
      leastTitle: 'least',
      answer: {
        number: this.index + 1,
        most: '0',
        least: '0'
      }
    }
  },
  methods: {
    setAnswer (data) {
      this.$store.commit('setAnswer', data)
    }
  }
}
</script>

<style scoped>
.table {
    margin-bottom: 1em;
}
</style>
