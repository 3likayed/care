import {
    mdiAccountStarOutline,
    mdiBilliards,
    mdiCalendar,
    mdiCashCheck,
    mdiCogOutline, mdiFormatListBulleted, mdiFormatListBulletedType, mdiInformationVariantCircle, mdiInformationVariantCircleOutline, mdiListBox, mdiListBoxOutline,
    mdiLockAlertOutline,
    mdiMagicStaff,
    mdiMonitor,
    mdiNaturePeople,
    mdiTable,
    mdiTruckDelivery,
    mdiViewList, mdiViewListOutline, mdiWarehouse,
} from "@mdi/js";

export default [
    {
        route: 'dashboard.index',
        icon: mdiMonitor,
        label: "home",
    },
    {
        label: "management",
        icon: mdiViewList,
        menu: [
            {
                route: "dashboard.employees.index",
                label: "employees",
                permission: "employees.show",
                components: ['Employees/Index'],
                icon: mdiAccountStarOutline,
            },
            {
                route: "dashboard.roles.index",
                label: "roles",
                permission: "roles.show",
                components: ['Roles/Index'],
                icon: mdiLockAlertOutline,
            },

            {
                route: "dashboard.settings.edit",
                label: "settings",
                permission: "settings.edit",
                components: ['Settings/Index'],
                icon: mdiCogOutline,
            },
        ],
    },
    {
        label: "reservations",
        icon: mdiCalendar,
        menu: [
            {
                route: "dashboard.reservation-types.index",
                label: "reservation-types",
                permission: "reservation-types.show",
                components: ['ReservationTypes/Index', 'ReservationTypes/Show'],
                icon: mdiListBoxOutline,
            },
            {
                route: "dashboard.reservations.index",
                label: "reservations",
                permission: "reservations.show",
                components: ['Reservations/Index', 'Reservations/Show'],
                icon: mdiFormatListBulletedType,
            },
        ],
    },
    {
        route: "dashboard.patients.index",
        label: "patients",
        permission: "patients.show",
        components: ['Patients/Index'],
        icon: mdiNaturePeople,
    },
    {
        route: "dashboard.profile.edit",
        label: "profile",
        components: ['Auth/Profile'],
        icon: mdiTable,
    },
    {
        label: "inventory",
        icon: mdiWarehouse,
        menu: [
            {
                route: "dashboard.products.index",
                label: "products",
                permission: "products.show",
                components: ['Products/Index', 'Products/Show'],
                icon:mdiMagicStaff,
            },
            {
                route: "dashboard.purchaseBills.index",
                label: "purchaseBills",
                permission: "purchase-bills.show",
                components: ['PurchaseBills/Index', 'PurchaseBills/Show'],
                icon: mdiCashCheck,
            },
        ],
    },
    {
        route: "dashboard.suppliers.index",
        permission: "suppliers.show",
        label: "suppliers",
        components: ['Suppliers/Index'],
        icon: mdiTruckDelivery,
    },
];
