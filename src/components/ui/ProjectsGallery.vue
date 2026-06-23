<template>
  <section class="gallery-section">
    <div class="gallery-header">
      <div class="slider-controls">
        <button class="ctrl-btn prev-btn" aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span class="slide-counter">
          <span class="current-num">{{ paddedCurrent }}</span>
          <span class="sep">/</span>
          <span class="total-num">{{ paddedTotal }}</span>
        </span>
        <button class="ctrl-btn next-btn" aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Main Swiper -->
    <Swiper
      class="main-swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :navigation="{ prevEl: '.prev-btn', nextEl: '.next-btn' }"
      :pagination="{ clickable: true, el: '.custom-pagination' }"
      :thumbs="{ swiper: thumbsSwiper }"
      :keyboard="{ enabled: true }"
      :a11y="true"
      :loop="true"
      :speed="600"
      :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      @swiper="onMainSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide v-for="(item, i) in slides" :key="i" class="main-slide">
        <div class="slide-inner">
          <img :src="item.image" :alt="item.alt || item.title" class="slide-image" loading="lazy" />
          <div class="slide-caption" v-if="item.title || item.description">
            <span class="caption-tag" v-if="item.tag">{{ item.tag }}</span>
            <h3 class="caption-title">{{ item.title }}</h3>
            <p class="caption-desc" v-if="item.description">{{ item.description }}</p>
            <a
              v-if="item.link"
              :href="item.link"
              class="caption-link"
              target="_blank"
              rel="noopener"
              >View Project →</a
            >
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Custom pagination dots -->
    <div class="custom-pagination"></div>

    <!-- Thumbnails Swiper -->
    <Swiper
      v-if="showThumbs"
      class="thumbs-swiper"
      :modules="thumbModules"
      :slides-per-view="thumbsPerView"
      :space-between="thumbGap"
      :free-mode="true"
      :watch-slides-progress="true"
      @swiper="onThumbsSwiper"
    >
      <SwiperSlide v-for="(item, i) in slides" :key="'thumb-' + i" class="thumb-slide">
        <img
          :src="item.thumb || item.image"
          :alt="'Thumbnail ' + (i + 1)"
          class="thumb-image"
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Thumbs, FreeMode, Keyboard, A11y, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

// ─── Props ────────────────────────────────────────────────────────────────────
const props = defineProps({
  /**
   * Array of slide objects:
   * { image, thumb?, title?, description?, tag?, link?, alt? }
   */
  slides: {
    type: Array,
    required: true,
  },
  /** Show the thumbnails strip below the main slider */
  showThumbs: {
    type: Boolean,
    default: true,
  },
  /** Number of thumbnails visible at once */
  thumbsPerView: {
    type: Number,
    default: 4,
  },
  /** Gap between thumbnails in px */
  thumbGap: {
    type: Number,
    default: 10,
  },
})

// ─── State ────────────────────────────────────────────────────────────────────
const thumbsSwiper = ref(null)
const currentIndex = ref(1)

const modules = [Navigation, Pagination, Thumbs, Keyboard, A11y, Autoplay]
const thumbModules = [FreeMode, Thumbs]

// ─── Computed ─────────────────────────────────────────────────────────────────
const paddedCurrent = computed(() => String(currentIndex.value).padStart(2, '0'))
const paddedTotal = computed(() => String(props.slides.length).padStart(2, '0'))

// ─── Handlers ─────────────────────────────────────────────────────────────────
function onMainSwiper() {}

function onThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper
}

function onSlideChange(swiper) {
  // swiper.realIndex handles loop mode correctly
  currentIndex.value = swiper.realIndex + 1
}
</script>

<style scoped>
/* ── Layout ───────────────────────────────────────────────────────────────── */
.gallery-section {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  font-family: inherit;
}

.gallery-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.25rem;
}

.gallery-title {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
}

/* ── Controls ─────────────────────────────────────────────────────────────── */
.slider-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.ctrl-btn {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 2px solid currentColor;
  border-radius: 50%;
  background: transparent;
  color: rgb(255, 175, 41);
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity 0.2s,
    background 0.2s;
}

.ctrl-btn:hover {
  opacity: 1;
  background: rgba(128, 128, 128, 0.12);
}

.ctrl-btn svg {
  width: 1rem;
  height: 1rem;
}

.slide-counter {
  font-size: 1rem;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  opacity: 0.6;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: rgb(255, 175, 41);
}

.current-num {
  opacity: 1;
  font-weight: 600;
}

/* ── Main Slider ──────────────────────────────────────────────────────────── */
.main-swiper {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.main-slide {
  height: auto;
}

.slide-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(128, 128, 128, 0.08);
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.main-swiper .swiper-slide-active .slide-image {
  transform: scale(1.02);
}

/* ── Caption ──────────────────────────────────────────────────────────────── */
.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.75rem 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, transparent 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.caption-tag {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
}

.caption-title {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.01em;
}

.caption-desc {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.8;
  line-height: 1.5;
  max-width: 60ch;
}

.caption-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #fff;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.caption-link:hover {
  opacity: 1;
  text-decoration: underline;
}

/* ── Pagination dots ──────────────────────────────────────────────────────── */
.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.9rem;
}

/* Swiper injects .swiper-pagination-bullet into .custom-pagination */
.custom-pagination :deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: currentColor;
  opacity: 0.25;
  transition:
    width 0.25s ease,
    opacity 0.25s;
  cursor: pointer;
}

.custom-pagination :deep(.swiper-pagination-bullet-active) {
  width: 22px;
  opacity: 0.85;
}

/* ── Thumbnails ───────────────────────────────────────────────────────────── */
.thumbs-swiper {
  margin-top: 0.75rem;
}

.thumb-slide {
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  opacity: 0.45;
  transition: opacity 0.2s;
  aspect-ratio: 16 / 9;
  background: rgba(128, 128, 128, 0.08);
}

.thumb-slide:hover,
.thumb-slide.swiper-slide-thumb-active {
  opacity: 1;
}

.thumb-slide.swiper-slide-thumb-active {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.thumb-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

/* ── Responsive ───────────────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .gallery-section {
    padding: 0 1rem;
  }

  .slide-caption {
    padding: 1.25rem 1rem 1rem;
  }

  .caption-desc {
    display: none;
  }

  .thumbs-swiper {
    display: none; /* hide thumbs on very small screens */
  }
}

/* ── Reduced motion ───────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .slide-image,
  .ctrl-btn,
  .thumb-slide,
  .custom-pagination :deep(.swiper-pagination-bullet) {
    transition: none;
  }
}
</style>
