<template>
  <div id="app">
    <Demo />
    <m-card imgSrc="tp.jpg" summary="沉浸式体验世界首条沙漠铁路环线">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级·526人报名</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
