import Vue from 'vue'
import Vuex from 'vuex'
import saveData from '../api/saveData'
Vue.use(Vuex)
const state = {
  data: {
    name: 'reza primasatya',
    age: '30',
    email: 'rezaprimasatya@gmail.com',
    answer: []
  },
  response: {},
  responsedummy: {
    'id': 53,
    'TYPE': 'Influence',
    'type_desc': 'Emphasis is on shaping the environment by influencing or persuading others.',
    'tendencies': '1. Contacting people\r\n2. Making a favorable impression\r\n3. Verbalizing with articulateness\r\n4. Creating a motivational environment\r\n5. Generating enthusiasm\r\n6. Entertaining people\r\n7. Viewing people and situations optimistically\r\n8. Participating in a group',
    'environment': '1. Popularity, social recognition\r\n2. Public recognition of ability\r\n3. Freedom of expression\r\n4. Group activities outside of the job\r\n5. Democratic relationships\r\n6. Freedom from control and detail\r\n7. Opportunity to verbalize proposals\r\n8. Coaching and counseling\r\n9. Favorable working conditions',
    'who': '1. Concentrate on the task\r\n2. Seek facts\r\n3. Speak directly\r\n4. Respect sincerity\r\n5. Develop systematic approaches\r\n6. Prefer dealing with things to dealing with people\r\n7. Take a logical approach\r\n8. Demonstrate individual follow-through',
    'effective': '1. Control of time, if D or S is low\r\n2. Objectivity in decision making\r\n3. Participatory management\r\n4. More realistic appraisals of others\r\n5. Priorities and deadlines\r\n6. To be more firm with others, if D is low',
    'c_dominance': 'Domineering, Demanding, Forceful, Risk-taker, Adventuresome, Decisive, Inquisitive',
    'c_influence': 'Enthusiastic, Gregarious, Persuasive, Impulsive, Emotional, Self-promoting, ',
    'c_steadiness': 'Change-oriented, Fault-finding, Spontaneous, Frustrated by status quo, Active, , ',
    'c_conscientiousness': 'Analytical, Sensitive, Mature, Evasive, \'Own person\', Self-righteous, Opinionated',
    'style': 'Inspirational',
    'style_desc': 'Emotions: accepts aggression, tends to outwardly downplay their need for affection.\r\nGoal: controlling their environment or audience.\r\nJudges others by: how they project personal strength, character, and social power.\r\nInfluences others by: charm, direction, intimidation, use of rewards.\r\nValue to the organization: \'people mover\' initiates, demands, compliments, disciplines.\r\nOveruses: \'ends justify the means\' approach.\r\nUnder pressure: becomes manipulative, quarrelsome, belligerent.\r\nFears: being too soft, loss of social status.\r\nWould increase effectiveness with more: genuine sensitivity, willingness to help others succeed in their own personal development.',
    'insert_date': '2018-08-10T05:53:31.000Z'
  }
}
export default new Vuex.Store({
  state,
  mutations: {
    setAnswer (state, data) {
      const index = state.data.answer.findIndex(item => {
        return item.number === data.number
      })
      if (index === -1) {
        state.data.answer.push(data)
      }
    },
    setProfile (state, data) {
      state.data.name = data.name
      state.data.age = data.age
      state.data.email = data.email
    },
    addResponse (state, data) {
      state.response = data
    }
  },
  getters: {
    dataAnswer: state => {
      return state.data
    },
    dataResponse: state => {
      return state.response
    }
  },
  actions: {
    submitData ({commit, getters}, state) {
      console.log(getters.dataAnswer)
      saveData.saveData(getters.dataAnswer).then((response) => {
        commit('addResponse', response.data)
      })
    }
  }
})
