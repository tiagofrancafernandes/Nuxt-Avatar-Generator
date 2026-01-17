<script setup lang="ts">
const { appSettings } = useAppConfig();
const { theme } = appSettings || {};

useHead({
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
        lang: 'pt-BR',
    },
    bodyAttrs: {
        class: computed(() => `body-computed-class theme-color-${theme.color}`),
    },
});

const title = 'Nuxt Avatar Generator';
const description =
    'A simple avatar generator built with Nuxt.js';

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: 'summary',
});

const router = useRouter();
</script>

<template>
    <div class="overscroll-none antialiased bg-background text-foreground">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
