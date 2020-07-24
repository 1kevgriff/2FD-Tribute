<template>
  <div>
    <h2>{{$context.title}}</h2>
    <p v-html="$context.content_encoded" v-if="$context.content_encoded.trim() !== ''"></p>
    <p v-html="$context.content" v-else></p>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>