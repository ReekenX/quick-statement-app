<template>
  <div class="container mx-auto py-4 px-2 bg-white">
    <div class="md:flex md:flex-wrap">
      <div class="md:w-1/2 lg:w-1/4 mb-2 px-2">
        <div class="bg-blue-600 text-white rounded p-4">
          <div class="text-small">{{ $t('Date') }}</div>
          <div class="text-4xl font-bold">
            {{ $store.state.report.date.year }}
            {{ $t(`month.${$store.state.report.date.month}`) }}
          </div>
        </div>
      </div>

      <div class="md:w-1/2 lg:w-1/4 mb-2 px-2">
        <div class="bg-green-500 text-white rounded p-4">
          <div class="text-small">{{ $t('Total Income') }}</div>
          <div class="text-4xl font-bold">
            {{ numberWithCommas($store.state.report.total.income) }} &euro;
          </div>
        </div>
      </div>

      <div class="md:w-1/2 lg:w-1/4 mb-2 px-2">
        <div class="bg-red-400 text-white rounded p-4">
          <div class="text-small">{{ $t('Total Expense') }}</div>
          <div class="text-4xl font-bold">
            {{ numberWithCommas($store.state.report.total.expense) }} &euro;
          </div>
        </div>
      </div>

      <div class="md:w-1/2 lg:w-1/4 mb-2 px-2">
        <div
          :class="{
            'bg-red-400': totalLeft <= 0,
            'bg-green-500': totalLeft > 0
          }"
          class="text-white rounded p-4"
        >
          <div class="text-small">{{ $t('Total Left') }}</div>
          <div class="text-4xl font-bold">
            {{ numberWithCommas(totalLeft) }} &euro;
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-800 mt-4 px-2">
      {{ $t('Income Categories') }}
    </h2>

    <div class="md:flex flex-wrap">
      <div
        v-for="(val, title) in $store.state.report.income"
        class="md:w-1/2 lg:w-1/4 p-2"
      >
        <div class="bg-gray-200 rounded p-4 text-gray-800">
          <div class="text-small text-gray-600">{{ title }}</div>
          <div class="text-5xl font-bold text-gray-700">
            {{ numberWithCommas(val) }} &euro;
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-800 mt-4 px-2">
      {{ $t('Expense Categories') }}
    </h2>

    <div class="md:flex flex-wrap">
      <div
        v-for="(val, title) in $store.state.report.expense"
        class="md:w-1/2 lg:w-1/4 p-2"
      >
        <div class="bg-gray-200 rounded p-4">
          <div class="text-small text-gray-600">{{ title }}</div>
          <div class="text-5xl font-bold text-gray-700">
            {{ numberWithCommas(val) }} &euro;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',

  head() {
    return {
      title: this.$t('{year}-{month} Reports', this.$route.params)
    }
  },

  computed: {
    totalLeft() {
      return (
        this.$store.state.report.total.income -
        this.$store.state.report.total.expense
      )
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('report', params)
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>
