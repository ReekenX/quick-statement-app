import statementFromText from '@/helpers/statement'

export const state = () => ({
  statement: null,
  categories: [],
  years: [],
  months: {},
  report: null,
  authorized: false
})

export const mutations = {
  setStatement(state, statement) {
    state.statement = statement
  },

  setStatementCategory(state, { statementId, categoryTitle }) {
    // Update category for statement
    const statement = state.statement.find((s) => s.id === statementId)
    statement.category = categoryTitle

    // Create category if does not exist
    if (!state.categories.includes(categoryTitle)) {
      state.categories.push(categoryTitle)
      state.categories.sort()
    }
  },

  setReport(state, report) {
    state.report = report
  },

  setYears(state, years) {
    state.years = years
  },

  setMonths(state, { year, months }) {
    state.months = {}
    state.months[year] = months
  },

  setAuthorized(state, authorized) {
    state.authorized = authorized
  }
}

export const actions = {
  async load(context, csvData) {
    const statement = statementFromText(csvData)

    // Store everything for the UI
    context.commit('setStatement', statement)

    // Process using API
    const { data } = await this.$axios.post('/analyse', { statement })
    data.forEach((entry) => {
      if (entry.category) {
        context.commit('setStatementCategory', {
          statementId: entry.id,
          categoryTitle: entry.category
        })
      }
    })
  },

  async save(context) {
    // Process using API
    const statement = context.state.statement.filter(
      ({ category }) => !!category
    )
    await this.$axios.post('/store', { statement })

    // Cleanup for the UI
    return context.commit('setStatement', null)
  },

  async report(context, dateParams) {
    // Get report from the API
    const { year, month } = dateParams
    const { data } = await this.$axios.get(`/reports/${year}/${month}`)

    // Cleanup for the UI
    return context.commit('setReport', data)
  },

  async years(context) {
    // Get report from the API
    const { data } = await this.$axios.get('/years')

    // Cleanup for the UI
    return context.commit('setYears', data)
  },

  async months(context, { year }) {
    // Get report from the API
    const { data } = await this.$axios.get(`/years/${year}`)

    // Cleanup for the UI
    return context.commit('setMonths', { year, months: data })
  },

  async checkInMemoryToken(context) {
    let authorized = false

    if (localStorage.API_TOKEN) {
      this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.API_TOKEN}`

      try {
        await this.$axios.get('/check')
        authorized = true
      } catch (e) {
        console.error(e)
      }
    }

    context.commit('setAuthorized', authorized)

    return authorized
  },

  async registerToken(context, token) {
    // Register API token to the browser "memory"
    this.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
    localStorage.API_TOKEN = token

    // Check if token is really valid (raises exception if not)
    try {
      await this.$axios.get('/check')
      context.commit('setAuthorized', true)
    } catch (e) {
      console.error(e)
      context.commit('setAuthorized', false)
    }
  }
}
