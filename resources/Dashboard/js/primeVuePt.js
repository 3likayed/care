export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    calendar: {
        root: ({props}) => ({
            class: [
                'cursor-pointer inline-flex relative select-none',
                'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
                'dark:bg-gray-900 dark:border-slate-900/40 dark:hover:border-slate-300',
                'w-full md:w-56 ',
                'hover:border-slate-500  focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {'opacity-60 select-none pointer-events-none cursor-default': props.disabled}
            ]
        }),
        input: ({props}) => ({
            class: [
                'cursor-pointer block flex flex-auto overflow-hidden text-ellipsis py-1 whitespace-nowrap relative',
                'bg-transparent border-0 text-gray-800',
                'dark:text-white/80 p-0',
                'transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
                'focus:outline-none focus:shadow-none',
                {'pe-7': props.showClear}
            ]
        }),
        panel: ({props}) => ({
            dir: 'rtl',
            class: [
                'bg-white dark:bg-gray-900 rounded-xl ',
                {
                    'shadow-md absolute': !props.inline,
                    'inline-block overflow-x-auto border border-gray-300 dark:border-slate-900/40 p-2 rounded-lg my-2 lg:my-4': props.inline
                }
            ]
        }),
        header: {
            class: ['flex items-center justify-between', 'p-2 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold m-0 border-b border-gray-300 dark:border-slate-900/40 rounded-t-lg']
        },
        previousbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative rtl:-scale-x-100',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        title: 'leading-8 mx-auto',
        monthTitle: {
            class: ['text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'me-2', 'hover:text-slate-500']
        },
        yearTitle: {
            class: ['text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'hover:text-slate-500']
        },
        nextbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative rtl:-scale-x-100',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        table: {
            class: ['border-collapse w-full', 'my-2']
        },
        tableheadercell: 'p-2',
        weekday: 'text-gray-600 dark:text-white/70',
        day: 'p-0 lg:p-2',
        daylabel: ({context}) => ({
            class: [
                'w-6 h-6 md:w-10 md:h-10 rounded-full transition-shadow duration-200 border-transparent border',
                'flex items-center justify-center mx-auto overflow-hidden relative',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'opacity-60 cursor-default': context.disabled,
                    'cursor-pointer': !context.disabled
                },
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-slate-700 bg-slate-100 hover:bg-slate-200': context.selected && !context.disabled
                }
            ]
        }),
        monthpicker: 'my-2',
        month: ({context}) => ({
            class: [
                'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-slate-700 bg-slate-100 hover:bg-slate-200': context.selected && !context.disabled
                }
            ]
        }),
        yearpicker: {
            class: ['my-2']
        },
        year: ({context}) => ({
            class: [
                'w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-slate-700 bg-slate-100 hover:bg-slate-200': context.selected && !context.disabled
                }
            ]
        }),
        timepicker: {
            dir: 'ltr',
            class: ['flex justify-center items-center', 'border-t-1 border-solid border-gray-300 p-2 text-gray-600 dark:text-white/70 ']
        },
        buttonbar : 'p-2 lg:p-3' ,
        todayButton: {
           label: {class: ['text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-slate-400 p-1 ']}
        },
        clearButton: {
            label: {class: ['text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-slate-400 p-1 ']}
        },
        separatorcontainer: 'flex items-center flex-col px-2',
        separator: 'text-xl',
        hourpicker: 'flex items-center flex-col px-2',
        minutepicker: 'flex items-center flex-col px-2',
        ampmpicker: 'flex items-center flex-col px-2',
        incrementbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        decrementbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        groupcontainer: 'flex',
        group: {
            class: ['flex-1', 'border-gray-300 pe-0.5 ps-0.5 pt-0 pb-0', 'first:ps-0 first:border-s-0']
        },
        transition: TRANSITIONS.overlay
    },
    dropdown: {
        root: ({props}) => ({
            class: [
                'cursor-pointer inline-flex relative select-none',
                'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
                'dark:bg-gray-900 dark:border-slate-900/40 dark:hover:border-slate-300',
                'w-full md:w-56',
                'hover:border-slate-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {'opacity-60 select-none pointer-events-none cursor-default': props.disabled}
            ]
        }),
        input: ({props}) => ({
            class: [
                'cursor-pointer block flex flex-auto overflow-hidden text-ellipsis whitespace-nowrap relative',
                'bg-transparent border-0 text-gray-800',
                'dark:text-white/80',
                'last:pe-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
                'focus:outline-none focus:shadow-none',
                {'pe-7': props.showClear}
            ]
        }),
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg']
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: {
            class: 'py-3 list-none m-0'
        },
        item: ({context}) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                {
                    'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                    'bg-slate-100 text-slate-700 dark:bg-slate-400 dark:text-white/80': context.focused && context.selected,
                    'bg-slate-50 text-slate-700 dark:bg-slate-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        header: {
            class: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-slate-900/40']
        },
        filtercontainer: {
            class: 'relative'
        },
        filterinput: {
            class: [
                'pe-7 -me-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-slate-900/40 dark:hover:border-slate-300 dark:text-white/80',
                'hover:border-slate-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: {
            class: '-mt-2 absolute top-1/2'
        },
        clearicon: {
            class: 'text-gray-500 end-12 -mt-2 absolute top-1/2'
        },
        transition: TRANSITIONS.overlay
    },
    multiselect: {
        root: ({props}) => ({
            class: [
                'inline-flex cursor-pointer select-none',
                'bg-white dark:bg-gray-900 border border-gray-400 dark:border-slate-900/40  transition-colors duration-200 ease-in-out rounded-md',
                'w-full md:w-80',
                {'opacity-60 select-none pointer-events-none cursor-default': props?.disabled}
            ]
        }),
        labelContainer: {
            class: 'overflow-hidden flex flex-auto cursor-pointer'
        },
        label: ({props}) => ({
            class: [
                'block overflow-hidden whitespace-nowrap cursor-pointer text-ellipsis',
                'text-gray-800 dark:text-white/80',
                'p-3 transition duration-200',
                {
                    '!p-3': props.display !== 'chip' && (props?.modelValue == null || false),
                    '!py-1.5 px-3': props.display === 'chip' && props?.modelValue !== null,

                }
            ]
        }),
        token: {
            class: ['py-1 px-2 me-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: {
            class: 'ms-2'
        },
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            class: ['bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        header: {
            class: ['p-3 border-b border-gray-300 dark:border-slate-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-800 rounded-t-lg', 'flex items-center justify-between']
        },
        headerCheckboxContainer: {
            class: ['inline-flex cursor-pointer select-none align-bottom relative', 'me-2', 'w-6 h-6']
        },
        headerCheckbox: ({context}) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/70 rounded-lg transition-colors duration-200',
                'hover:border-slate-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-slate-900/40 bg-white dark:bg-gray-900': !context?.selected,
                    'border-slate-500 bg-slate-500': context?.selected
                }
            ]
        }),
        headercheckboxicon: {
            class: 'w-4 h-4 transition-all duration-200 text-white text-base'
        },
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 dark:text-white/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out me-2 last:me-0',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: {
            class: 'w-4 h-4 inline-block'
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: {
            class: 'py-3 list-none m-0'
        },
        item: ({context}) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                {
                    'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                    'bg-slate-100 text-slate-700 dark:bg-slate-400 dark:text-white/80': context.focused && context.selected,
                    'bg-slate-50 text-slate-700 dark:bg-slate-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        checkboxContainer: {
            class: ['inline-flex cursor-pointer select-none align-bottom relative', 'me-2', 'w-6 h-6']
        },
        checkbox: ({context}) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/80 rounded-lg transition-colors duration-200',
                'hover:border-slate-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-slate-900/40  bg-white dark:bg-gray-900': !context?.selected,
                    'border-slate-500 bg-slate-500': context?.selected
                }
            ]
        }),
        checkboxicon: {
            class: 'w-4 h-4 transition-all duration-200 text-white text-base'
        },
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        filtercontainer: {
            class: 'relative'
        },
        filterinput: {
            class: [
                'pe-7 -me-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-slate-900/40 dark:hover:border-slate-300 dark:text-white/80',
                'hover:border-slate-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: {
            class: '-mt-2 absolute top-1/2'
        },
        clearicon: {
            class: 'text-gray-500 end-12 -mt-2 absolute top-1/2'
        },
        transition: TRANSITIONS.overlay
    },
    datatable: {
        root: ({props}) => ({
            class: []
        }),
        column: {
            headercell: ({context, props}) => ({
                class: 'text-center ',
                headercontent: 'flex items-center',
            }),
        },

    },


}
