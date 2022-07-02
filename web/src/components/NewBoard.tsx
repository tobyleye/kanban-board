import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const NewBoard = () => {
  let close = () => navigate("/");
  const navigate = useNavigate();
  return (
    <Modal isOpen={true} onClose={close} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quos
          placeat inventore libero similique, eos cum sapiente a debitis, minima
          necessitatibus beatae vero sed, quo delectus quas excepturi! Quod,
          dolorem!
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={close}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
