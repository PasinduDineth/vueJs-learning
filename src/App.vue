<template> 
   <login/>
</template>

<script>
import Login from './components/Login';
export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  
}
.app {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: blueviolet;
}
</style>
