<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <Hero />
  <HomeCard />
  <JobListings :limit="3" :showMoreButton="true" />
</template>
