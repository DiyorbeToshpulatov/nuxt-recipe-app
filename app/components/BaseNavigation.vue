<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg
          width="56px"
          class="w-14"
          src="/icon-green.png"
          alt=""
          densities="x1"
          format="webp"
        />
        <span class="text-3xl font-bold">Nuxtcipes</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink class="router-link-active" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="router-link-active" to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active:hover {
  @apply bg-gray-100;
}

.router-link-active {
  @apply font-bold;
}
</style>
