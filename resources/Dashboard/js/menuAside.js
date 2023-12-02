import {
    mdiAccountStarOutline,
    mdiCalendar,
    mdiCogOutline, mdiDoctor,
    mdiFormatListBulletedType,
    mdiListBoxOutline,
    mdiLockAlertOutline,
    mdiMonitor,
    mdiNaturePeople, mdiTab,
    mdiTable,
    mdiViewList,
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
        route: "dashboard.profile.edit",
        label: "profile",
        components: ['Auth/Profile'],
        icon: mdiTable,
    },


];
