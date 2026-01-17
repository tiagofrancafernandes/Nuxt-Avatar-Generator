export default defineAppConfig({
    name: 'Nuxt Avatar Generator',
    description: 'A simple avatar generator built with Nuxt.js',
    version: '1.0.0',
    icon: {
        size: '', // default <Icon> size applied
        class: '', // default <Icon> class applied
    },
    appSettings: {
        sidebar: {
            collapsible: 'offcanvas', // 'offcanvas' | 'icon' | 'none'
            side: 'left', // 'left' | 'right'
            variant: 'inset', // 'sidebar' | 'floating' | 'inset'
        },
        theme: {
            color: 'blue', // Default theme color
            type: 'default', // Default theme type
        },
    },
});
