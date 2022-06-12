<template>
  <header>
    <div>
      <div @click="toPage('/')">Home</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const toPage = (link: string) => {
      router.push(link)
    }
    
    return { toPage }
  },
})
</script>