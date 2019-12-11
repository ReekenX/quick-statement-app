<template>
  <div class="relative">
    <select
      @change="onChange"
      class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-800"
    >
      <option :selected="value === ''"></option>
      <template v-for="category in $store.state.categories">
        <option :selected="value === category">{{ category }}</option>
      </template>
      <option :selected="value === addNewLabel">{{ addNewLabel }}</option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>

    <category-dialog
      v-if="dialogVisible"
      :id="id"
      @close="onClose"
      @save="onClose"
    />
  </div>
</template>

<script>
import CategoryDialog from '@/components/category-dialog'

export default {
  components: {
    CategoryDialog
  },

  props: {
    id: {
      type: String,
      required: true
    },

    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      dialogVisible: false,
      addNewLabel: this.$t('Add New...')
    }
  },

  methods: {
    showCategoryDialog() {
      this.dialogVisible = true
    },

    onChange(event) {
      const category = event.target.value
      if (category === this.addNewLabel) {
        this.showCategoryDialog()
      } else {
        this.$store.commit('setStatementCategory', {
          statementId: this.id,
          categoryTitle: category
        })
      }
    },

    onClose() {
      this.dialogVisible = false
    }
  }
}
</script>
