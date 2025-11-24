<script setup lang="ts">
const emit = defineEmits<{
  openManagementModal: []
}>()

const handleManagementClick = () => {
  emit('openManagementModal')
}
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="header-left">
        <div class="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#4F46E5"/>
            <path d="M12 15L20 10L28 15V25L20 30L12 25V15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="3" fill="white"/>
          </svg>
          <span class="logo-text">AdSpace</span>
        </div>
      </div>

      <nav class="header-center">
        <a href="#" class="nav-link">Strona główna</a>
        <a href="#regulamin" class="nav-link">Regulamin</a>
        <a href="#kontakt" class="nav-link">Kontakt</a>
      </nav>

      <div class="header-right">
        <button @click="handleManagementClick" class="manage-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5V15M5 10H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          Zarządzaj ogłoszeniami
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.header-left, .header-right {
  flex: 1;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.5px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  opacity: 0.8;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.header-right {
  display: flex;
  justify-content: flex-end;
}

.manage-btn {
  background: white;
  color: #4F46E5;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.manage-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #f8f8ff;
}

.manage-btn:active {
  transform: translateY(0);
}

@media (max-width: 968px) {
  .container {
    flex-wrap: wrap;
  }

  .header-left {
    order: 1;
  }

  .header-right {
    order: 2;
  }

  .header-center {
    order: 3;
    flex-basis: 100%;
    margin-top: 1rem;
  }
}

@media (max-width: 640px) {
  .nav-link {
    font-size: 0.85rem;
  }

  .manage-btn {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
  }

  .logo-text {
    font-size: 1.25rem;
  }
}
</style>
