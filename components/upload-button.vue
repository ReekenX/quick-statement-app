<template>
  <button @click="$refs.file.click()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="inline-block mr-2"
    >
      <path
        d="M10 16h4a1 1 0 0 0 1-1v-5h1.586a1 1 0 0 0 .707-1.707l-4.586-4.586a1 1 0 0 0-1.414 0L6.707 8.293A1 1 0 0 0 7.414 10H9v5a1 1 0 0 0 1 1zm-4 2h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"
        fill="currentColor"
      />
    </svg>

    {{ $t('Upload Statement') }}

    <input
      ref="file"
      @change="onFileAdd($event.target.files[0])"
      type="file"
      class="hidden"
    />
  </button>
</template>

<script>
export default {
  methods: {
    // Read user uploaded file
    onFileAdd(file) {
      const reader = new FileReader()
      reader.onload = (e) => this.onFileRead(e.target.result)
      reader.readAsText(file)
    },

    // When statement file is read - load to store and redirect user to analysis page
    onFileRead(csvData) {
      this.$store.dispatch('load', csvData)
      this.$router.push({ name: 'analysis' })
    }
  }
}
</script>
