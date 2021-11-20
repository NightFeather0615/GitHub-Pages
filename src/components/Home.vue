<script setup>
import { ref } from 'vue'

function close_window() {
  window.close();
}

function return_home_page() {
  alert("這就是主頁了，想不到吧！");
}
</script>

<template>
  <html>
    <body style="" class="">
      <div class="flex items-center justify-center h-screen">
        <div class="">
          <div class="">
            <p class="text-9xl tracking-wide inline font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-600">404</p>
            <p class="text-9xl tracking-wide inline font-sans text-transparent bg-clip-text text-gray-300"> | </p>
            <p class="text-9xl tracking-wide inline font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-600">Test</p>
          </div>
          <div class="col-start-1 row-start-2 space-x-20 space-y-16 px-10">
            <button type="button" @click="close_window()" class="inline hover:from-gray-400 hover:to-gray-500 hover:text-gray-900 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-200 text-2xl font-sans font-bold px-20 py-5 rounded-lg">關閉分頁</button>
            <button type="button" @click="return_home_page()" class="inline hover:from-gray-400 hover:to-gray-500 hover:text-gray-900 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-200 text-2xl font-sans font-bold px-20 py-5 rounded-lg">返回主頁</button>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<style>
</style>