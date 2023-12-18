import {
    mdiAccountStarOutline,
    mdiCalendar,
    mdiCalendarMonth,
    mdiCalendarToday,
    mdiCart,
    mdiCartVariant,
    mdiCash,
    mdiCashCheck,
    mdiCashMinus,
    mdiCashPlus,
    mdiCheck,
    mdiClipboardPulse,
    mdiClock,
    mdiClose,
    mdiCogOutline,
    mdiDoctor,
    mdiFormatListBulletedType,
    mdiListBoxOutline,
    mdiListStatus,
    mdiLockAlertOutline,
    mdiMinus,
    mdiMonitor,
    mdiNaturePeople,
    mdiSafe,
    mdiTab,
    mdiTable,
    mdiTruckDelivery,
    mdiViewList,
    mdiWarehouse,
} from "@mdi/js";
import {Search} from "./Utils/index.js";
import moment from "moment";

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
                label: "appointments",
                permission: "appointments.show",
                components: ['Appointments/Index', 'Appointments/Show'],
                route: "dashboard.appointments.index",
                icon: mdiFormatListBulletedType,
                menu: [
                    {
                        route: "dashboard.appointments.index",
                        label: ["all_field", {field: 'appointments'}],
                        permission: "appointments.show",
                        icon: mdiListBoxOutline,
                    },
                    {
                        label: ['by_field', {field: 'date'}],
                        icon: mdiCalendar,
                        menu: [
                            {
                                route: ["dashboard.appointments.index", {
                                    filter: Search.dateInterval({interval: 0})
                                }],
                                label: ["this_field", {field: 'day'}],
                                permission: "appointments.show",
                                icon: mdiCalendarToday,
                            },
                            {
                                route: ["dashboard.appointments.index", {
                                    filter: Search.dateInterval({interval: 30})
                                }],
                                label: ["this_field", {field: 'month'}],
                                permission: "appointments.show",
                                icon: mdiCalendarMonth,
                            },
                        ]
                    },
                    {
                        label: ['by_field', {field: 'status'}],
                        icon: mdiListStatus,
                        menu: [
                            {
                                route: ["dashboard.appointments.index", {filter: {status: 'completed'}}],
                                label: "completed",
                                permission: "appointments.show",
                                icon: mdiCheck,
                            },
                            {
                                route: ["dashboard.appointments.index", {filter: {status: 'not_completed'}}],
                                label: "not_completed",
                                permission: "appointments.show",
                                icon: mdiMinus,
                            },
                            {
                                route: ["dashboard.appointments.index", {filter: {status: 'pending'}}],
                                label: "pending",
                                permission: "appointments.show",
                                icon: mdiClock,
                            },
                            {
                                route: ["dashboard.appointments.index", {filter: {status: 'canceled'}}],
                                label: "canceled",
                                permission: "appointments.show",
                                icon: mdiClose,
                            },
                        ]
                    },

                ]
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
            },
            {
                route: "dashboard.doctor-products.index",
                label: "doctor-products",
                permission: "doctor-products.show",
                components: ['DoctorProducts/Index'],
                icon: mdiCartVariant,
            },
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
                components: ['Suppliers/Index', 'Suppliers/Show'],
                icon: mdiTruckDelivery,
            },
        ],

    },
    {
        label: "transactions",
        icon: mdiSafe,
        menu: [
            {
                route: "dashboard.transactions.index",
                label: "all",
                permission: "transactions.show",
                components: ['Transaction/Index'],
                icon: mdiCash,
            },
            {
                route: ["dashboard.transactions.index", {
                    filter: {
                        type: 'deposit'
                    }
                }],
                label: "deposit",
                permission: "transactions.show",
                components: ['Transaction/Index'],
                icon: mdiCashPlus,
            },
            {
                route: ["dashboard.transactions.index", {
                    filter: {
                        type: 'withdraw'
                    }
                }],
                label: "withdraw",
                permission: "transactions.show",
                components: ['Transaction/Index'],
                icon: mdiCashMinus,
            },
            {
                label: ['this_field', {field: 'day'}],
                components: ['Transaction/Index'],
                icon: mdiCalendarToday,
                menu: [
                    {
                        route: ["dashboard.transactions.index", {
                            filter: Search.dateInterval({
                                interval: 0,
                                key: 'created_at'
                            }),
                        }],
                        label: "all",
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCash,
                    },
                    {
                        route: ["dashboard.transactions.index", {
                            filter: Search.dateInterval({
                                interval: 0,
                                key: 'created_at'
                            }),
                            type: 'deposit'
                        }],
                        label: 'deposit',
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCashPlus,
                    },
                    {
                        route: ["dashboard.transactions.index", {
                            filter: Search.dateInterval({
                                interval: 0,
                                key: 'created_at'
                            }),
                            type: 'withdraw'
                        }],
                        label: 'withdraw',
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCashMinus,
                    },

                ]
            },
            {
                label: ['this_field', {field: 'month'}],
                components: ['Transaction/Index'],
                icon: mdiCalendarMonth,
                menu: [
                    {
                        route: ["dashboard.transactions.index", {
                            filter: {
                                created_at: `${moment().startOf('M').format('YYYY-MM-DD')}|${moment().format('YYYY-MM-DD')}`,

                            },
                        }],
                        label: "all",
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCash,
                    },
                    {
                        route: ["dashboard.transactions.index", {
                            filter: {
                                created_at: `${moment().startOf('M').format('YYYY-MM-DD')}|${moment().format('YYYY-MM-DD')}`,
                                type: 'deposit',
                            },
                        }],
                        label: 'deposit',
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCashPlus,
                    },
                    {
                        route: ["dashboard.transactions.index", {
                            filter: {
                                created_at: `${moment().startOf('M').format('YYYY-MM-DD')}|${moment().format('YYYY-MM-DD')}`,
                                type: 'withdraw',

                            }
                        }],
                        label: 'withdraw',
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCashMinus,
                    },

                ]
            },
            {
                label: ['this_field', {field: 'year'}],
                components: ['Transaction/Index'],
                icon: mdiCalendarMonth,
                menu: [
                    {
                        route: ["dashboard.transactions.index", {
                            filter: {
                                created_at: `${moment().startOf('Y').format('YYYY-MM-DD')}|${moment().format('YYYY-MM-DD')}`,

                            },
                        }],
                        label: "all",
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCash,
                    },
                    {
                        route: ["dashboard.transactions.index", {
                            filter: {
                                created_at: `${moment().startOf('Y').format('YYYY-MM-DD')}|${moment().format('YYYY-MM-DD')}`,
                                type: 'deposit',
                            },
                        }],
                        label: 'deposit',
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCashPlus,
                    },
                    {
                        route: ["dashboard.transactions.index", {
                            filter: {
                                created_at: `${moment().startOf('Y').format('YYYY-MM-DD')}|${moment().format('YYYY-MM-DD')}`,
                                type: 'withdraw',

                            }
                        }],
                        label: 'withdraw',
                        permission: "transactions.show",
                        components: ['Transaction/Index'],
                        icon: mdiCashMinus,
                    },

                ]
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
