<script setup lang="ts">
import type { Advertisement } from '../lib/supabase'

defineProps<{
  ad: Advertisement
}>()

const typeColors: Record<string, string> = {
  billboard: '#EF4444',
  citylight: '#F59E0B',
  led_screen: '#10B981',
  digital: '#3B82F6',
  banner: '#8B5CF6',
  poster: '#EC4899'
}

const typeLabels: Record<string, string> = {
  billboard: 'Billboard',
  citylight: 'Citylight',
  led_screen: 'Ekran LED',
  digital: 'Digital',
  banner: 'Banner',
  poster: 'Plakat'
}
</script>

<template>
  <div class="ad-card">
    <div class="card-image">
      <img
        :src="ad.image_url || 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=800'"
        :alt="ad.title"
      />
      <div class="card-badge" :style="{ background: typeColors[ad.type] || '#6B7280' }">
        {{ typeLabels[ad.type] || ad.type }}
      </div>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ ad.title }}</h3>

      <div class="card-location">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8C9.1 8 10 7.1 10 6C10 4.9 9.1 4 8 4C6.9 4 6 4.9 6 6C6 7.1 6.9 8 8 8Z" stroke="#6B7280" stroke-width="1.3"/>
          <path d="M8 14C8 14 12 10.5 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 10.5 8 14 8 14Z" stroke="#6B7280" stroke-width="1.3"/>
        </svg>
        <span>{{ ad.location }}, {{ ad.city }}</span>
      </div>

      <div v-if="ad.dimensions" class="card-dimensions">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="12" height="12" rx="1" stroke="#6B7280" stroke-width="1.3"/>
          <path d="M2 6H14M6 2V14" stroke="#6B7280" stroke-width="1.3"/>
        </svg>
        <span>{{ ad.dimensions }}</span>
      </div>

      <div v-if="ad.description" class="card-description">
        {{ ad.description }}
      </div>

      <div class="card-footer">
        <div class="card-price">
          <span class="price-amount">{{ ad.price.toLocaleString('pl-PL') }} zł</span>
          <span class="price-period">/miesiąc</span>
        </div>

        <button class="card-button">
          Zobacz szczegóły
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ad-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.ad-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.ad-card:hover .card-image img {
  transform: scale(1.05);
}

.card-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  padding: 0.375rem 0.875rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1F2937;
  margin: 0;
  line-height: 1.3;
}

.card-location,
.card-dimensions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B7280;
  font-size: 0.9rem;
}

.card-description {
  color: #6B7280;
  font-size: 0.9rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #F3F4F6;
}

.card-price {
  display: flex;
  flex-direction: column;
}

.price-amount {
  font-size: 1.5rem;
  font-weight: 800;
  color: #4F46E5;
}

.price-period {
  font-size: 0.8rem;
  color: #9CA3AF;
}

.card-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: all 0.3s ease;
}

.card-button:hover {
  transform: translateX(2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

@media (max-width: 640px) {
  .card-image {
    height: 180px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .card-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
