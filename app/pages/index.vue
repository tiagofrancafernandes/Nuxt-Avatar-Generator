<template>
    <div class="w-full">
        <navigation class="mb-6" />

        <div class="flex flex-col w-full gap-4 mb-3 mt-4">
            <h5 class="text-3xl text-center text-green-500 font-bold mb-4">Create Your Avatar URL</h5>

            <div
                class="flex w-6/12 mx-auto gap-4 border border-gray-200 justify-center items-start p-8 rounded-xl bg-white"
            >
                <form class="flex flex-col gap-4 max-w-md">
                    <div class="flex flex-col">
                        <label for="name" class="mb-1 font-medium">Name</label>
                        <input v-model="formData.name" id="name" type="text" class="border p-2 rounded" />
                    </div>

                    <div class="flex md:flex-row justify-between gap-4">
                        <div class="flex flex-col">
                            <label for="background" class="mb-1 font-medium">Background Color</label>
                            <input
                                v-model="formData.background"
                                id="background"
                                type="color"
                                class="p-1 h-10 w-14 block bg-white border-0 border-transparent rounded-full cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                            />
                        </div>

                        <div class="flex flex-col">
                            <label for="color" class="mb-1 font-medium">Text Color</label>
                            <input
                                v-model="formData.color"
                                id="color"
                                type="color"
                                class="p-1 h-10 w-14 block bg-white border-0 border-transparent rounded-full cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                            />
                        </div>
                    </div>

                    <div class="flex md:flex-row justify-between gap-4">
                        <div class="flex flex-col">
                            <label class="mb-1 font-medium">Color presets</label>
                            <div class="flex gap-2 flex-wrap">
                                <template v-for="(preset, index) in presets" :key="index">
                                    <button
                                        type="button"
                                        @click.prevent.stop="
                                            formData.background = preset.background;
                                            formData.color = preset.color;
                                        "
                                        class="w-8 h-8 rounded cursor-pointer"
                                        :style="{ backgroundColor: preset.background }"
                                    ></button>
                                </template>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <label for="size" class="mb-1 font-medium">Size (px)</label>
                        <select v-model.number="formData.size" id="size" class="border p-2 rounded">
                            <option :value="32">32</option>
                            <option :value="48">48</option>
                            <option :value="64">64</option>
                            <option :value="96">96</option>
                            <option :value="128">128</option>
                        </select>
                    </div>
                    <div class="flex items-baseline-last gap-2">
                        <input v-model="formData.rounded" id="rounded" type="checkbox" class="border p-2 rounded" />
                        <label for="rounded" class="font-medium">Rounded</label>
                    </div>

                    <div class="mt-4">
                        <label class="font-medium mb-1 block">Generated URL:</label>
                        <code class="break-all bg-gray-100 p-2 rounded block mb-2 select-all">
                            {{ finalUrl }}
                        </code>
                        <div class="flex w-full gap-4">
                            <button
                                type="button"
                                @click.prevent.stop="copyUrlToClipboard"
                                class="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Copy
                            </button>

                            <button
                                type="button"
                                @click.prevent.stop="copySvgToClipboard"
                                class="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Copy SVG
                            </button>
                            <a
                                :href="finalUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="ml-2 text-blue-500 hover:text-blue-700 hover:underline px-4 py-2 rounded inline-flex items-center gap-2 border border-blue-500"
                            >
                                Open URL
                                <svg
                                    class="w-3.5 h-3.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </form>

                <div class="w-100 h-72 mt-6 flex flex-col items-center justify-center">
                    <div
                        ref="avatarPreviewContainerRef"
                        class="w-full h-72 border border-gray-300 flex items-center justify-center rounded-lg bg-gray-50"
                    >
                        <AvatarInitials
                            v-if="formData.background && formData.color"
                            :name="formData.name"
                            :size="formData.size"
                            :background="formData.background"
                            :color="formData.color"
                            :rounded="formData.rounded"
                            :font-size="Math.floor(formData.size / 3)"
                            :font-weight="700"
                        />
                    </div>

                    <div class="w-full my-2 flex flex-col gap-4 justify-center items-center">
                        <a
                            :href="finalUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="ml-2 text-blue-500 hover:text-blue-700 hover:underline px-4 py-2 rounded inline-flex items-center gap-2"
                        >
                            Open URL
                            <svg
                                class="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                ></path>
                            </svg>
                        </a>

                        <button
                            type="button"
                            @click.stop.prevent="generateRandomPreset"
                            class="bg-gray-200 px-4 py-2 rounded cursor-pointer"
                        >
                            Random preset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const publicRuntimeConfig = useRuntimeConfig()?.public || {};

const avatarPreviewContainerRef = ref();

const formData = ref({
    name: 'Charlie Brown',
    background: '',
    color: '',
    size: 96,
    rounded: true,
});

const finalUrl = computed(() => {
    let appUrl = publicRuntimeConfig?.appUrl || null;

    if (!appUrl && import.meta.client && typeof window !== 'undefined') {
        appUrl = window?.location?.origin;
    }

    let _formData = formData.value;

    return `${appUrl}/avatar?name=${encodeURIComponent(_formData.name)}&color=${encodeURIComponent(_formData.color)}&background=${encodeURIComponent(_formData.background)}&size=${_formData.size}`;
});

function copyUrlToClipboard() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard
            .writeText(finalUrl.value)
            .then(() => {
                alert('URL copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    } else {
        console.warn('Clipboard API not available');
    }
}

function copySvgToClipboard() {
    const svgElement = avatarPreviewContainerRef.value?.querySelector('svg');

    if (!svgElement) {
        console.warn('SVG element not found');
        return;
    }

    const svgString = svgElement.outerHTML || svgElement.innerHTML || '';

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard
            .writeText(svgString)
            .then(() => {
                alert('SVG copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    } else {
        console.warn('Clipboard API not available');
    }
}

type PresetColor = {
    background: string;
    color: string;
};

const presets: PresetColor[] = [
    { background: '#3498db', color: '#FFFFFF' },
    { background: '#e74c3c', color: '#FFFFFF' },
    { background: '#27ae60', color: '#FFFFFF' },
    { background: '#8e44ad', color: '#FFFFFF' },
    { background: '#f39c12', color: '#FFFFFF' },
    { background: '#d35400', color: '#FFFFFF' },
    { background: '#2c3e50', color: '#FFFFFF' },
    { background: '#111827', color: '#FFFFFF' },
    { background: '#16a34a', color: '#FFFFFF' },
    { background: '#db2777', color: '#FFFFFF' },
    { background: '#6b7280', color: '#FFFFFF' },
    { background: '#f87171', color: '#7f1d1d' },
    { background: '#34d399', color: '#064e3b' },
    { background: '#60a5fa', color: '#1e3a8a' },
    { background: '#f3f4f6', color: '#1f2937' },
    { background: '#fde68a', color: '#92400e' },
    { background: '#f9fafb', color: '#374151' },
    { background: '#d1d5db', color: '#1f2937' },
    { background: '#ffedd5', color: '#7c2d12' },
    { background: '#e0f2fe', color: '#0369a1' },
    { background: '#dcfce7', color: '#166534' },
    { background: '#ede9fe', color: '#5b21b6' },
    { background: '#edeff6', color: '#1e3a8a' },
    { background: '#f0fdfa', color: '#134e4a' },
    { background: '#fef3c7', color: '#78350f' },
];

const randomPreset = () => {
    return presets[Math.floor(Math.random() * presets.length)];
};

function generateRandomPreset() {
    const preset: PresetColor = (randomPreset() || presets[0]) as PresetColor;
    formData.value.background = preset.background;
    formData.value.color = preset.color;
}

onMounted(() => {
    generateRandomPreset();
});
</script>
