import { Box, Button, Heading } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Box borderBottom=".5px solid" borderColor="grey.light" display="flex" width="full" h="full" px={6} alignItems="center" bg="grey.2xdark" color="white">
            <Heading size="md">Platform Launch</Heading>

            <Box ml="auto">
                <Button colorScheme="purple" size="sm">Add New Task</Button>
            </Box>

        </Box>
    )
}