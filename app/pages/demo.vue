<template>
    <div class="w-full">
        <navigation />
        <div class="flex flex-col w-full gap-4 mb-3 mt-4">
            <h5 class="text-3xl text-center text-green-500 font-bold mb-3">Demo Avatars</h5>

            <div class="flex w-full my-8 gap-4 pt-8 flex-wrap justify-center">
                <AvatarInitials
                    name="John Doe"
                    :size="100"
                    background="#3498db"
                    color="#ffffff"
                    :rounded="true"
                    :font-size="40"
                    :font-weight="600"
                />

                <AvatarInitials
                    name="Alice Smith"
                    :size="80"
                    background="oklch(0.7 0.2 120)"
                    color="oklch(0.2 0.1 300)"
                    :rounded="false"
                    :font-size="32"
                    :font-weight="500"
                />

                <AvatarInitials
                    name="Bob"
                    :size="60"
                    background="rgb(200, 100, 50)"
                    color="rgb(255, 255, 255)"
                    :rounded="true"
                    :font-size="24"
                    :font-weight="400"
                />
            </div>
            <div class="flex w-full my-8 gap-4 pt-8 flex-wrap justify-center">
                <AvatarInitials
                    name="Charlie Brown"
                    :size="120"
                    background="#e74c3c"
                    color="#ffffff"
                    :rounded="true"
                    :font-size="48"
                    :font-weight="700"
                />

                <img
                    :src="`/avatar?name=${encodeURIComponent(fullName)}&color=FFFFFF&background=${encodeURIComponent('oklch(0.141 0.005 285.823)')}`"
                    width="64"
                    height="64"
                    alt="Avatar"
                />

                <img
                    :src="`/avatar?name=Tiago+Silva&color=fff&background=%23111827&size=96`"
                    width="64"
                    height="64"
                    alt="Avatar"
                />
            </div>
            <div class="flex w-full my-8 gap-4 pt-8 flex-wrap justify-center">
                <img
                    :src="`/avatar?name=D+U&color=FFFFFF&background=oklch(0.141+0.005+285.823)`"
                    width="64"
                    height="64"
                    alt="Avatar"
                />

                <img
                    :src="`/avatar?name=${encodeURIComponent(fullName)}&color=FFFFFF&background=${encodeURIComponent('oklch(0.141 0.005 285.823)')}`"
                    class="w-20 h-20"
                    alt="Avatar"
                />

                <img
                    :src="`/avatar?name=Tiago+Silva&color=fff&background=%23111827&size=96`"
                    class="w-20 h-20"
                    alt="Avatar"
                />

                <img
                    :src="`/avatar?name=D+U&color=FFFFFF&background=oklch(0.141+0.005+285.823)`"
                    class="w-20 h-20"
                    alt="Avatar"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const fullName = 'Charlie Brown';
</script>
