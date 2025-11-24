<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  search: [filters: { title: string; type: string; city: string }]
}>()

const searchTitle = ref('')
const searchType = ref('')
const searchCity = ref('')

const adTypes = [
  { value: '', label: 'Wszystkie typy' },
  { value: 'billboard', label: 'Billboard' },
  { value: 'citylight', label: 'Citylight' },
  { value: 'led_screen', label: 'Ekran LED' },
  { value: 'digital', label: 'Digital' },
  { value: 'banner', label: 'Banner' },
  { value: 'poster', label: 'Plakat' }
]

const handleSearch = () => {
  emit('search', {
    title: searchTitle.value,
    type: searchType.value,
    city: searchCity.value
  })
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="gradient-overlay"></div>
      <img
        src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Advertising surfaces"
        class="hero-image"
      />
    </div>

    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Znajdź idealną powierzchnię reklamową</h1>
        <p class="hero-subtitle">Tysiące ofert w całej Polsce. Sprawdź dostępność w Twojej okolicy!</p>
      </div>

      <div class="search-card">
        <form @submit.prevent="handleSearch" class="search-form">
          <div class="search-row">
            <div class="input-group">
              <label for="search-title" class="input-label">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="6" stroke="#4F46E5" stroke-width="1.5"/>
                  <path d="M12.5 12.5L16 16" stroke="#4F46E5" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                Nazwa lub słowo kluczowe
              </label>
              <input
                id="search-title"
                v-model="searchTitle"
                type="text"
                placeholder="np. billboard centrum"
                class="search-input"
              />
            </div>

            <div class="input-group">
              <label for="search-type" class="input-label">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="#4F46E5" stroke-width="1.5"/>
                  <path d="M2 7H16M7 2V16" stroke="#4F46E5" stroke-width="1.5"/>
                </svg>
                Typ powierzchni
              </label>
              <select id="search-type" v-model="searchType" class="search-select">
                <option v-for="type in adTypes" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
            </div>

            <div class="input-group">
              <label for="search-city" class="input-label">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9Z" stroke="#4F46E5" stroke-width="1.5"/>
                  <path d="M9 16C9 16 14 11.5 14 7C14 4.23858 11.7614 2 9 2C6.23858 2 4 4.23858 4 7C4 11.5 9 16 9 16Z" stroke="#4F46E5" stroke-width="1.5"/>
                </svg>
                Lokalizacja
              </label>
              <input
                id="search-city"
                v-model="searchCity"
                type="text"
                placeholder="np. Warszawa"
                class="search-input"
              />
            </div>
          </div>

          <button type="submit" class="search-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="6" stroke="white" stroke-width="2"/>
              <path d="M13.5 13.5L17 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Szukaj
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 580px;
  overflow: visible;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 1.35rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  font-weight: 400;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
}

.search-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1100px;
  transform: translateY(60px);
}

.search-form {
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
}

.search-row {
  display: flex;
  gap: 1.5rem;
  flex: 1;
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4B5563;
}

.search-input,
.search-select {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  background: white;
}

.search-input:focus,
.search-select:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.search-select {
  cursor: pointer;
}

.search-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.875rem 2.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
}

.search-button:active {
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.75rem;
  }

  .hero-subtitle {
    font-size: 1.15rem;
  }

  .search-form {
    flex-direction: column;
  }

  .search-row {
    flex-direction: column;
  }

  .search-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-section {
    height: 700px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .search-card {
    padding: 1.5rem;
    transform: translateY(40px);
  }
}
</style>
