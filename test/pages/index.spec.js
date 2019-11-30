import VueTestUtils, { mount } from '@vue/test-utils'
import Page from '@/pages/index.vue'

// Mock translation lib
VueTestUtils.config.mocks.$t = (key) => key

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Page)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
