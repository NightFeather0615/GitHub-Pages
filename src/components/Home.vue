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
    <body style="background-color: rgb(21, 24, 29);" class="">
      <div class="flex items-center justify-center h-screen">
        <div class="columns-3 flex md:flex-row gap-x-4 gap-y-4 flex-col-reverse">
            <img class="rounded-full scale-50" src="https://yt3.ggpht.com/ytc/AKedOLTNqe_YfIPRXautwOlASmqomp320hByntdX5-bEAQ=s512-c-k-c0x00ffffff-no-rj" loading="lazy"></img>
            <p class="sm:pt-44 text-9xl tracking-wide font-sans text-transparent bg-clip-text text-gray-300" style="text-align: center;">×</p>
            <img class="rounded-full scale-50" src="https://cdn.discordapp.com/avatars/866699115299864586/2c24f68fb0fd58cc7555ec0ff2f8eac8.webp?size=512" loading="lazy"></img>
        </div>
      </div>
    </body>
  </html>
</template>

<style>
</style>