<template>
  <div class="container mx-auto py-4 px-2 bg-white">
    <h1 class="text-2xl font-bold px-2 mb-4 text-gray-800">
      {{ $t('Statement Analysis') }}
    </h1>
    <analysis-table />
  </div>
</template>

<script>
import AnalysisTable from '@/components/analysis-table'

export default {
  middleware: 'authenticated',

  components: {
    AnalysisTable
  },

  head() {
    return {
      title: `${
        (this.$store.state.statement || []).length
      } statements to analyze`
    }
  },

  created() {
    if (!this.$store.state.statement) {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
