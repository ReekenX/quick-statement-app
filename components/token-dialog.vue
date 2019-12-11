<template>
  <div
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center text-gray-800 z-10"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>
    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content p-6 text-left">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <h1 class="text-lg text-gray-800 font-bold">
            {{ $t('Register Token') }}
          </h1>
          <div
            @click="$emit('close')"
            class="modal-close cursor-pointer z-50 text-sm text-gray-600"
          >
            <svg
              class="fill-current align-top -mt-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>

        <!--Body-->
        <label class="block text-gray-700 text-sm mb-2">
          <input
            v-model="token"
            :placeholder="$t('Enter Token...')"
            class="my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
          <div v-if="showError" class="text-sm text-red-600">
            {{ $t('Invalid API token! Please check your typing.') }}
          </div>
        </label>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button
            @click="onSave"
            class="modal-close px-4 bg-indigo-500 p-2 rounded-lg text-white hover:bg-indigo-400"
          >
            {{ $t('Save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      showError: false
    }
  },

  methods: {
    async onSave() {
      this.showError = false

      await this.$store.dispatch('registerToken', this.token)

      if (this.$store.state.authorized) {
        this.$emit('save')
      } else {
        this.showError = true
      }
    }
  }
}
</script>

<style scoped>
.modal {
  transition: opacity 0.25s ease;
}
</style>
