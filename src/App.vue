<script setup>
import MainNav from './components/ui/MainNav.vue'
import MobileNav from './components/ui/MobileNav.vue'
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<template>
  <div class="hidden md:block">
    <MainNav />
  </div>
  <div class="md:hidden">
    <MobileNav @blurMain="isMenuOpen = $event" />
  </div>
  <main :class="{ 'blur-[4px]': isMenuOpen }">
    Praesent nonummy mi in odio. In turpis. Praesent ut ligula non mi varius sagittis. Nullam nulla
    eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Aliquam eu nunc. Praesent ut
    ligula non mi varius sagittis. Morbi ac felis. In enim justo, rhoncus ut, imperdiet a, venenatis
    vitae, justo. Nullam cursus lacinia erat. Phasellus volutpat, metus eget egestas mollis, lacus
    lacus blandit dui, id egestas quam mauris ut lacus. Praesent metus tellus, elementum eu, semper
    a, adipiscing nec, purus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
    Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis
    lacus elit id tortor. Praesent congue erat at massa. Nam adipiscing. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer
    lacinia. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Phasellus ullamcorper
    ipsum rutrum nunc. Praesent blandit laoreet nibh. Aenean tellus metus, bibendum sed, posuere ac,
    mattis non, nunc. Ut a nisl id ante tempus hendrerit. Maecenas nec odio et ante tincidunt
    tempus. Curabitur blandit mollis lacus. Curabitur nisi. Phasellus viverra nulla ut metus varius
    laoreet.
  </main>
</template>

<style scoped></style>
