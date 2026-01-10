<script setup lang="ts">
import { computed, ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

const auth0 = useAuth0();
const user = computed(() => auth0.user.value);
const isAuthenticated = computed(() => auth0.isAuthenticated.value);
const showMenu = ref(false);

const userInitials = computed(() => {
  if (!user.value?.name) return "?";
  return user.value.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});

const handleLogout = () => {
  showMenu.value = false;
  auth0.logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// Close menu when clicking outside
const closeMenu = () => {
  showMenu.value = false;
};
</script>

<template>
  <div v-if="isAuthenticated" class="user-menu" @mouseleave="closeMenu">
    <button class="user-avatar" @click="toggleMenu" :title="user?.email">
      <img v-if="user?.picture" :src="user.picture" :alt="user?.name || 'User'" class="avatar-image" />
      <span v-else class="avatar-initials">{{ userInitials }}</span>
    </button>

    <div v-if="showMenu" class="menu-dropdown">
      <div class="menu-header">
        <div class="menu-user-name">{{ user?.name }}</div>
        <div class="menu-user-email">{{ user?.email }}</div>
      </div>
      <div class="menu-divider"></div>
      <button class="menu-item" @click="handleLogout">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Logout
      </button>
    </div>
  </div>
</template>

<style scoped>
.user-menu {
  position: relative;
  display: flex;
  align-items: center;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s;
}

.user-avatar:hover {
  border-color: var(--vp-c-brand-1);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-initials {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.menu-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 200px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
}

.menu-header {
  padding: 12px 16px;
}

.menu-user-name {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
}

.menu-user-email {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin-top: 2px;
}

.menu-divider {
  height: 1px;
  background: var(--vp-c-divider);
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background: var(--vp-c-bg-soft);
}

.menu-item svg {
  color: var(--vp-c-text-2);
}
</style>
