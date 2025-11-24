<script setup lang="ts">
import AdCard from './AdCard.vue'
import type { Advertisement } from '../lib/supabase'

defineProps<{
  advertisements: Advertisement[]
  isLoading?: boolean
}>()
</script>

<template>
  <section class="ads-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Dostępne ogłoszenia</h2>
        <p class="section-subtitle">
          Znaleziono {{ advertisements.length }}
          {{ advertisements.length === 1 ? 'ogłoszenie' : advertisements.length < 5 ? 'ogłoszenia' : 'ogłoszeń' }}
        </p>
      </div>

      <div v-if="isLoading" class="loading-state">
        <div class="spinner"></div>
        <p>Ładowanie ogłoszeń...</p>
      </div>

      <div v-else-if="advertisements.length === 0" class="empty-state">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#F3F4F6"/>
          <path d="M40 50C45.5228 50 50 45.5228 50 40C50 34.4772 45.5228 30 40 30C34.4772 30 30 34.4772 30 40C30 45.5228 34.4772 50 40 50Z" stroke="#9CA3AF" stroke-width="2"/>
          <path d="M48 48L58 58" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <h3>Nie znaleziono ogłoszeń</h3>
        <p>Spróbuj zmienić kryteria wyszukiwania</p>
      </div>

      <div v-else class="ads-grid">
        <AdCard v-for="ad in advertisements" :key="ad.id" :ad="ad" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ads-section {
  padding: 4rem 0;
  background: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1F2937;
  margin: 0 0 0.5rem 0;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6B7280;
  margin: 0;
}

.ads-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.loading-state p,
.empty-state p {
  color: #6B7280;
  font-size: 1.1rem;
  margin: 1rem 0 0 0;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1F2937;
  margin: 1.5rem 0 0.5rem 0;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #F3F4F6;
  border-top-color: #4F46E5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .ads-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .ads-section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .ads-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
