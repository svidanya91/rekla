<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import EmailModal from './components/EmailModal.vue'
import HeroBanner from './components/HeroBanner.vue'
import PolandMap from './components/PolandMap.vue'
import AdGrid from './components/AdGrid.vue'
import { supabase } from './lib/supabase'
import type { Advertisement } from './lib/supabase'

const isModalOpen = ref(false)
const advertisements = ref<Advertisement[]>([])
const isLoading = ref(true)
const searchFilters = ref({
  title: '',
  type: '',
  city: ''
})

const filteredAdvertisements = computed(() => {
  let filtered = advertisements.value

  if (searchFilters.value.title) {
    filtered = filtered.filter(ad =>
      ad.title.toLowerCase().includes(searchFilters.value.title.toLowerCase()) ||
      ad.description.toLowerCase().includes(searchFilters.value.title.toLowerCase())
    )
  }

  if (searchFilters.value.type) {
    filtered = filtered.filter(ad => ad.type === searchFilters.value.type)
  }

  if (searchFilters.value.city) {
    filtered = filtered.filter(ad =>
      ad.city.toLowerCase().includes(searchFilters.value.city.toLowerCase()) ||
      ad.location.toLowerCase().includes(searchFilters.value.city.toLowerCase())
    )
  }

  return filtered
})

const handleSearch = (filters: { title: string; type: string; city: string }) => {
  searchFilters.value = filters

  const adsSection = document.querySelector('.ads-section')
  if (adsSection) {
    adsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const loadAdvertisements = async () => {
  try {
    isLoading.value = true
    const { data, error } = await supabase
      .from('advertisements')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false })

    if (error) throw error
    advertisements.value = data || []
  } catch (error) {
    console.error('Error loading advertisements:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadAdvertisements()
})
</script>

<template>
  <div class="app">
    <AppHeader @open-management-modal="isModalOpen = true" />
    <EmailModal :is-open="isModalOpen" @close="isModalOpen = false" />
    <HeroBanner @search="handleSearch" />
    <PolandMap :advertisements="filteredAdvertisements" />
    <AdGrid :advertisements="filteredAdvertisements" :is-loading="isLoading" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
}
</style>
