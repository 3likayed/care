import {
    mdiAccountStarOutline,
    mdiCalendar,
    mdiCogOutline, mdiFormatListBulleted, mdiFormatListBulletedType, mdiListBox, mdiListBoxOutline,
    mdiLockAlertOutline,
    mdiMonitor,
    mdiNaturePeople,
    mdiTable,
    mdiViewList, mdiViewListOutline,
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


];
