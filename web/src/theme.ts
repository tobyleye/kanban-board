import { extendTheme  } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        grey: {
            'dark':    '#3e3f4e',
            '2xdark':  '#2b2c37',
            '3xdark':  '#20212c',
            '4xdark':  '#000112',
            'light':   '#828fa3',
            '2xlight': '#e4ebfa',
            '3xlight': '#f4f7fd',
        },
        purple: {
            dark:      '#635fc7',
            light:     '#a8a4ff',
        },
        red: {
            dark:       '#ea5555',
            light:      '#ff9898',
        }
    }
})

export { theme }