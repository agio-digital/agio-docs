<template>
  <a class="VPNavBarTitle" href="/">
    <slot name="navbar-title">
      <svg width="24" height="24" class="logo" viewBox="0 0 197 197" fill="var(--color-logo)" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_9)">
          <path
            d="M105.035 112.046V52.0824L133.037 103.606L105.035 112.046ZM143.88 108.064C144.399 106.802 144.321 105.373 143.669 104.173L104.484 32.074C103.494 30.251 101.396 29.334 99.382 29.844C97.372 30.355 95.964 32.165 95.964 34.239V114.78L71.942 122.02L81.741 96.104C82.628 93.761 81.446 91.144 79.104 90.258C76.759 89.372 74.144 90.553 73.257 92.896L60.207 127.413C59.597 129.027 59.956 130.849 61.134 132.111C62.312 133.374 64.103 133.857 65.759 133.359L95.964 124.254V163.5C95.964 166.004 97.995 168.035 100.499 168.035C103.005 168.035 105.035 166.004 105.035 163.5V121.52L140.993 110.682C142.3 110.288 143.36 109.327 143.88 108.064ZM98.5 0C152.9 0 197 44.1 197 98.5C197 152.9 152.9 197 98.5 197C44.1 197 0 152.9 0 98.5C0 44.1 44.1 0 98.5 0Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9">
            <rect width="197" height="197" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <span class="text">Agio SDK</span>
    </slot>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
