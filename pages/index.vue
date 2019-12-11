<template>
  <div
    class="flex flex-1 flex-col items-center justify-center text-center bg-white"
  >
    <div class="-mt-5">
      <div class="mb-4">
        <img src="~assets/img/logo.png" class="mx-auto px-4" />
      </div>

      <div class="mb-4 px-4">
        <h1 class="text-2xl font-bold text-gray-800 leading-snug mb-2">
          {{ $t('Quick Statement') }}
        </h1>

        <h2
          v-if="$store.state.authorized"
          class="text-1xl font-semibold text-gray-800 mt-2"
        >
          {{
            $t(
              'Upload your bank statement for this or previous month to start analysis.'
            )
          }}
        </h2>
      </div>

      <div class="mt-4">
        <div v-if="$store.state.authorized">
          <upload-button
            class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded md:w-auto items-center text-xl justify-center m-1"
          />

          <button
            @click="$router.push({ name: 'reports' })"
            class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded md:w-auto items-center text-xl justify-center m-1"
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
            {{ $t('Reports') }}
          </button>
        </div>
        <div v-else>
          <AuthorizeButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadButton from '@/components/upload-button'
import AuthorizeButton from '@/components/authorize-button'

export default {
  components: {
    UploadButton,
    AuthorizeButton
  },

  head() {
    return {
      titleTemplate: this.$t('Quick Statement')
    }
  }
}
</script>
