<!-- pages/index.vue -->
<template>
    <v-app>
        <v-main>
            <nav>
                <nuxt-link to="/board/list">게시글 목록</nuxt-link>
            </nav>
            <NuxtPage /> <!-- NuxtPage를 사용하여 현재 페이지를 표시 -->
        </v-main>
    </v-app>
</template>

<script setup>
</script>

<style scoped>
</style>
