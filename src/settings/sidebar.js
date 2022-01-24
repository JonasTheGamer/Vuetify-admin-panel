module.exports = {
    title: 'BlokPass',
    logo: 'branding_blue_icon.png',
    background: 'branding_navbar_small.png',
    navLinks: [{
            to: '/',
            icon: 'mdi-home-variant-outline',
            text: 'Dashboard',
        },
        {
            icon: 'mdi-account-supervisor-circle',
            text: 'Gebruikers',
            subLinks: [{
                    text: 'Leerlingen',
                    to: '/users/pupils',
                    icon: 'mdi-baby-face-outline'
                },
                {
                    text: 'Leerkrachten',
                    to: '/users/teachers',
                    icon: 'mdi-human-male-board'
                },
            ]
        },
        {
            to: '/credentials',
            icon: 'mdi-lock',
            text: 'Inloggegevens',
        },
        {
            icon: 'mdi-application-cog-outline',
            text: 'Instellingen',
            subLinks: [{
                    text: 'Voorbeeldbestanden',
                    to: '/settings/example_files',
                    icon: 'mdi-file-document-multiple'
                },
                {
                    text: 'Functies beheren',
                    to: '/settings/feature_flags',
                    icon: 'mdi-toggle-switch'
                },
                {
                    text: 'Licenties',
                    to: '/settings/licenses',
                    icon: 'mdi-credit-card-check',
                },
            ]
        },

    ],
    staticLinks: [{
        to: '/logout',
        icon: 'mdi-logout',
        text: 'Uitloggen',
    }, ],
};