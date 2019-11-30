import VueTestUtils, { mount } from '@vue/test-utils'
import Page from '@/pages/analysis.vue'

VueTestUtils.config.mocks.$t = (key) => key
VueTestUtils.config.mocks.$store = {
  state: {
    statement: []
  }
}

describe('Analysis Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Page)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
