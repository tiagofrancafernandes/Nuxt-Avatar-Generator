<script setup lang="ts">
import { computed } from 'vue';

type Props = {
    name: string;
    size?: number;
    color?: string;
    background?: string;
    fontSize?: number;
    fontWeight?: number;
    rounded?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    size: 64,
    color: '#FFFFFF',
    background: '#111827',
    fontSize: 28,
    fontWeight: 400,
    rounded: true,
});

function normalizeText(value: string): string {
    return value
        .trim()
        .replace(/\s+/g, ' ')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function getInitials(name: string): string {
    const clean = normalizeText(name);
    if (!clean) return '??';

    const parts: any[] = (clean || '')?.split(' ')?.filter(Boolean) || [];

    // 2+ palavras: pega primeira letra da primeira e da última
    if (parts.length >= 2) {
        const first = parts[0][0] ?? '';
        const last = parts[parts.length - 1][0] ?? '';
        return (first + last).toUpperCase().slice(0, 2);
    }

    // 1 palavra: pega 2 primeiras letras
    return clean.slice(0, 2).toUpperCase();
}

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function normalizeColor(value: string): string {
    const v = value.trim();

    // aceita "#fff", "#ffffff", "oklch(...)", "rgb(...)", etc.
    // se for hex sem "#", adiciona
    if (/^[0-9a-fA-F]{3}$/.test(v) || /^[0-9a-fA-F]{6}$/.test(v)) {
        return `#${v}`;
    }

    return v;
}

const initials = computed(() => getInitials(props.name));

const svg = computed(() => {
    const size = Number(props.size) || 64;
    const bg = escapeXml(normalizeColor(props.background));
    const fg = escapeXml(normalizeColor(props.color));
    const fontSize = Number(props.fontSize) || 28;
    const fontWeight = Number(props.fontWeight) || 400;

    const rect = props.rounded
        ? `<rect width="${size}" height="${size}" rx="${size / 2}" ry="${size / 2}" fill="${bg}" />`
        : `<rect width="${size}" height="${size}" fill="${bg}" />`;

    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}" version="1.1" role="img" aria-label="${escapeXml(initials.value)}">
  ${rect}
  <text
    x="50%"
    y="50%"
    alignment-baseline="middle"
    dominant-baseline="middle"
    text-anchor="middle"
    dy=".1em"
    font-size="${fontSize}"
    font-weight="${fontWeight}"
    fill="${fg}"
    style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
  >${escapeXml(initials.value)}</text>
</svg>`.trim();
});
</script>

<template>
    <div
        class="inline-flex items-center justify-center"
        :style="{ width: `${size}px`, height: `${size}px` }"
        v-html="svg"
    />
</template>
