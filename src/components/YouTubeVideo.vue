<template>
  <div class="relative pb-[56.25%] h-0">
    <iframe
      :src="`https://www.youtube.com/embed/${videoId}`"
      class="absolute top-0 left-0 w-full h-full"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'YouTubeVideo',
  props: {
    videoId: {
      type: String,
      required: true
    }
  }
}
</script> 