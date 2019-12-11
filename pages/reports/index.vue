<template>
  <div
    class="flex flex-1 flex-col items-center justify-center text-center bg-white"
  >
    <div class="-mt-5">
      <div class="m-4">
        <img src="~assets/img/logo.png" class="mx-auto" />
      </div>

      <div class="mb-4 px-4">
        <h1 class="text-2xl font-bold text-gray-800 leading-snug mb-4">
          {{ $t('Choose Years') }}:
        </h1>

        <div v-for="year in $store.state.years" class="mb-4">
          <button
            @click="
              $router.push({
                name: 'reports-year',
                params: {
                  year: year._id
                }
              })
            "
            class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded md:w-auto items-center text-xl justify-center mx-1"
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
              viewBox="0 0 20 20"
              class="inline-block mr-2"
            >
              <path
                d="M20 2v16H.32c-.318 0-.416-.209-.216-.465l4.469-5.748a.526.526 0 0 1 .789-.062l1.419 1.334a.473.473 0 0 0 .747-.096l3.047-4.74a.466.466 0 0 1 .741-.09l2.171 2.096c.232.225.559.18.724-.1l5.133-7.785C19.51 2.062 19.75 2 20 2z"
                fill="currentColor"
              />
            </svg>
            {{ year._id }}
          </button>
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
      title: this.$t('Reports')
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('years')
  }
}
</script>
