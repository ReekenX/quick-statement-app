<template>
  <div>
    <button
      @click="onClickAuthorizeBtn"
      class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded md:w-auto items-center text-xl justify-center m-1 align-items cursor-pointer"
    >
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
        class="inline-block -mt-1"
      >
        <path
          d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10s10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"
          fill="currentColor"
        />
      </svg>

      {{ $t('Authorize') }}
    </button>

    <token-dialog v-if="dialogVisible" @close="onClose" @save="onClose" />
  </div>
</template>

<script>
import TokenDialog from '@/components/token-dialog'

export default {
  components: {
    TokenDialog
  },

  data() {
    return {
      dialogVisible: false
    }
  },

  mounted() {
    this.$store.dispatch('checkInMemoryToken')
  },

  methods: {
    // Show user dialog to enter API token
    onClickAuthorizeBtn(file) {
      this.dialogVisible = true
    },

    onClose() {
      this.dialogVisible = false
    }
  }
}
</script>
