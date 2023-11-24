<?php

return [
    'available' => [
        'default' => [
            'name' => 'default',
            'engine' => 'blade',
            'section_types' => [
                'services', 'service_details', 'team', 'partners', 'navigation', 'choosing_us',
            ],
            'navigation_types' => [
                'header', 'footer', 'header_footer',
            ],

        ],
        'arsha' => [
            'name' => 'arsha',
            'engine' => 'blade',
            'section_types' => [
                'services', 'about', 'portfolio', 'team', 'partenrs', 'contact us', 'choosing_us', 'navigation',
            ],
            'navigation_types' => [
                'header', 'footer', 'header_footer',
            ],

        ],

    ],
    'selected' => 'arsha',
];
