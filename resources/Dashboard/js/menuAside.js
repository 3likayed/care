import {
    mdiAccountStarOutline,
    mdiCalendar, mdiCart,
    mdiCashCheck, mdiClipboardPulse,
    mdiCogOutline,
    mdiDoctor,
    mdiFormatListBulletedType,
    mdiListBoxOutline,
    mdiLockAlertOutline,
    mdiMagicStaff,
    mdiMonitor,
    mdiNaturePeople, mdiStocking,
    mdiTab,
    mdiTable, mdiToyBrickSearch,
    mdiTruckDelivery,
    mdiViewList,
    mdiWarehouse,
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
                components: ['Users/Index'],
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
        label: "appointments",
        icon: mdiCalendar,
        menu: [
            {
                route: "dashboard.appointment-types.index",
                label: "appointment-types",
                permission: "appointment-types.show",
                components: ['AppointmentTypes/Index', 'AppointmentTypes/Show'],
                icon: mdiListBoxOutline,
            },
            {
                route: "dashboard.appointments.index",
                label: "appointments",
                permission: "appointments.show",
                components: ['Appointments/Index', 'Appointments/Show'],
                icon: mdiFormatListBulletedType,
            },
        ],
    },
    {
        route: "dashboard.patients.index",
        label: "patients",
        permission: "patients.show",
        components: ['Patients/Index', 'Patients/Show'],
        icon: mdiNaturePeople,
    },
    {
        label: "doctors",
        icon: mdiDoctor,
        menu: [
            {
                route: "dashboard.doctors.index",
                label: "doctors",
                permission: "doctors.show",
                components: ['Doctors/Index', 'Doctors/Show'],
                icon: mdiDoctor,
            },
            {
                route: "dashboard.specializations.index",
                label: "specializations",
                permission: "specializations.show",
                components: ['Specializations/Index', 'Specializations/Show'],
                icon: mdiTab,
            }
        ]
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
                icon: mdiClipboardPulse,
            },
            {
                route: "dashboard.stocks.index",
                label: "stocks",
                permission: "stocks.show",
                components: ['Stocks/Index', 'Stocks/Show'],
                icon: mdiCart,
            },
            {
                route: "dashboard.purchases.index",
                label: "purchases",
                permission: "purchases.show",
                components: ['Purchases/Index', 'Purchases/Show'],
                icon: mdiCashCheck,
            },
            {
                route: "dashboard.suppliers.index",
                permission: "suppliers.show",
                label: "suppliers",
                components: ['Suppliers/Index','Suppliers/Show'],
                icon: mdiTruckDelivery,
            },
        ],

    },

    {
        route: "dashboard.services.index",
        permission: "services.show",
        label: "services",
        components: ['Service/Index'],
        icon: mdiTruckDelivery,
    },
    {
        route: "dashboard.profile.edit",
        label: "profile",
        components: ['Auth/Profile'],
        icon: mdiTable,
    },
];
