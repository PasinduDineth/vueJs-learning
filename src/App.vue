<template> 
    <div id="app">
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
              <router-view/>                
            </fade-transition>
        </main>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
export default {
  name: 'app',
  components: {
    FadeTransition
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
