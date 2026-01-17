<template>
    <div class="container mx-auto p-8">
        <navigation />
        <h1 class="text-3xl font-bold mb-8 text-center">Documentation</h1>

        <div class="space-y-12">
            <!-- API Documentation -->
            <section class="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:text-white">
                <h2 class="text-2xl font-semibold mb-4 text-green-500">API Route: <span class="text-orange-500">/avatar</span></h2>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    Generates an SVG avatar image based on initials.
                </p>

                <h3 class="text-xl font-medium mb-2">Query Parameters</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-sm mb-6">
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th class="p-3 font-semibold">Parameter</th>
                                <th class="p-3 font-semibold">Type</th>
                                <th class="p-3 font-semibold">Default</th>
                                <th class="p-3 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">name</td>
                                <td class="p-3">string</td>
                                <td class="p-3 text-gray-500">-</td>
                                <td class="p-3">The name to generate initials from.</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">size</td>
                                <td class="p-3">number</td>
                                <td class="p-3 font-mono">64</td>
                                <td class="p-3">Size of the image in pixels (clamped between 16 and 512).</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">color</td>
                                <td class="p-3">string</td>
                                <td class="p-3 font-mono">#FFFFFF</td>
                                <td class="p-3">Text color (hex, rgb, etc.).</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">background</td>
                                <td class="p-3">string</td>
                                <td class="p-3 font-mono">#111827</td>
                                <td class="p-3">Background color (hex, rgb, etc.).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-xl font-medium mb-2">Examples</h3>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto mb-4">
                    <p class="mb-2"># Basic usage</p>
                    <p class="mb-4 text-green-400">GET /avatar?name=John+Doe</p>

                    <p class="mb-2"># Custom colors and size</p>
                    <p class="text-green-400">GET /avatar?name=Alice&size=128&color=000000&background=f0f0f0</p>
                </div>
            </section>

            <!-- Component Documentation -->
            <section class="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:text-white">
                <h2 class="text-2xl font-semibold mb-4 text-green-500">Component: <span class="text-orange-500">&lt;AvatarInitials /&gt;</span></h2>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    A Vue component that renders the avatar directly using SVG.
                </p>

                <h3 class="text-xl font-medium mb-2">Props</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-sm mb-6">
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th class="p-3 font-semibold">Prop</th>
                                <th class="p-3 font-semibold">Type</th>
                                <th class="p-3 font-semibold">Default</th>
                                <th class="p-3 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">name</td>
                                <td class="p-3">string</td>
                                <td class="p-3 font-mono text-red-500">Required</td>
                                <td class="p-3">The name to generate initials from.</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">size</td>
                                <td class="p-3">number</td>
                                <td class="p-3 font-mono">64</td>
                                <td class="p-3">Size of the avatar in pixels.</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">color</td>
                                <td class="p-3">string</td>
                                <td class="p-3 font-mono">#FFFFFF</td>
                                <td class="p-3">Text color.</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">background</td>
                                <td class="p-3">string</td>
                                <td class="p-3 font-mono">#111827</td>
                                <td class="p-3">Background color.</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">fontSize</td>
                                <td class="p-3">number</td>
                                <td class="p-3 font-mono">28</td>
                                <td class="p-3">Font size in pixels.</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">fontWeight</td>
                                <td class="p-3">number</td>
                                <td class="p-3 font-mono">400</td>
                                <td class="p-3">Font weight (e.g. 400, 700).</td>
                            </tr>
                            <tr class="border-b dark:border-gray-700">
                                <td class="p-3 font-mono text-green-600">rounded</td>
                                <td class="p-3">boolean</td>
                                <td class="p-3 font-mono">true</td>
                                <td class="p-3">Whether the avatar should be circular.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-xl font-medium mb-2">Usage Example</h3>
                <div class="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
<pre>&lt;AvatarInitials
  name="John Doe"
  :size="100"
  background="#3498db"
  color="#ffffff"
  :rounded="true"
  :font-size="40"
  :font-weight="600"
/&gt;</pre>
                </div>
            </section>
        </div>
    </div>
</template>
