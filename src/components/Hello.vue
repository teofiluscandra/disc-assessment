<template>
  <div class="section">
    <div class="container">
      <form @submit.prevent="submit">
      <div class="columns">
        <div class="column is-desktop">
          <div class="field">
              <div class="control">
                  <label class="label">Name </label>
                  <div class="is-danger" v-if="$v.name.required">Field A is required.</div>
                  <input class="input" type="text" placeholder="" name="name" v-model="profile.name" v-model.trim="$v.name.$model" required>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="label">Email</label>
                <input class="input" type="email" placeholder="" v-model="profile.email" required>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="label">Age</label>
                <input class="input" type="number" placeholder="" v-model="profile.age" v-model.trim="$v.age.$model" required>
              </div>
            </div>
        </div>
        <div class="column">
          <div class="notification is-link">
            <h1 class="title is-5">Instruction: </h1><br> please choose one word <strong> most describe you (most) </strong>, and one word <strong> least describe you (least) </strong> of each of the statement below .
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div v-for="(item, index) in data" :key="item.id">
             <Question :data="item" :index="index"/>
          </div>
        </div>
        <div class="column">
          
        </div>
      </div>
      <input class="button is-link" type="submit"/>
      <button class="button is-danger" @click="refresh">
        <span class="icon is-small">
          <i class="fa fa-refresh"></i>
        </span>
      </button>
      </form>
      <Response />
    </div>
  </div>
</template>

<script>
import Question from './Question.vue'
import Response from './Response.vue'
import data from '../api/data'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'hello',
  components: {
    Question,
    Response
  },
  data () {
    return {
      msg: 'DISC Assessment',
      profile: {
        name: '',
        email: '',
        age: ''
      },
      submitStatus: 'OK',
      data
    }
  },
  methods: {
    submit (e) {
      e.target.value = ''
      this.$store.commit('setProfile', this.profile)
      this.$store.dispatch('submitData')
      this.profile = {
        name: '',
        email: '',
        age: ''
      }
    },
    refresh () {
      location.reload()
    }
  },
  validations: {
    name: {
      required
    },
    age: {
      required
    }
  }
}
</script>
