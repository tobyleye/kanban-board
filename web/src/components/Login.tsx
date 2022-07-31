import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Heading,
} from "@chakra-ui/react";

export const Login = () => {
  return (
    <Modal isOpen={true} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
