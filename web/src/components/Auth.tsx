import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Heading,
  Button,
  VStack,
  Link as StyledLink,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMatch, Link } from "react-router-dom";
import { FormField } from "./FormField";
import { AnimatePresence,  motion } from "framer-motion";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string }>();

  let submitForm = (values: any) => {
    let { email, password } = values;
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Heading size="md" mt={4} mb={8}>
        Login
      </Heading>
      <VStack spacing={4} alignItems="stretch" mb={4}>
        <FormField
          label="Email"
          type="email"
          placeholder="johndoe@gmail.com"
          error={errors?.email?.message}
          {...register("email")}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Password"
          error={errors?.password?.message}
          {...register("password")}
        />
        <Button type="submit" colorScheme="purple">
          Login
        </Button>
      </VStack>
      <Box textAlign="center" mb={2}>
        Not yet registered?{" "}
        <StyledLink as={Link} textDecoration="underline" to="/signup">
          Signup
        </StyledLink>
      </Box>
    </form>
  );
};

const SignupForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string; fullname: string }>();

  let submitForm = (values: any) => {
    let { email, password, fullname } = values;
    console.log({ email, password, fullname });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Heading size="md" mt={4} mb={8}>
        Signup
      </Heading>
      <VStack spacing={4} alignItems="stretch" mb={4}>
        <FormField
          label="Full name"
          placeholder="john doe"
          error={errors?.fullname?.message}
          {...register("fullname")}
        />
        <FormField
          label="Email"
          type="email"
          placeholder="johndoe@gmail.com"
          error={errors?.email?.message}
          {...register("email")}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Password"
          error={errors?.password?.message}
          {...register("password")}
        />
        <Button type="submit" colorScheme="purple">
          Signup
        </Button>
      </VStack>
      <Box textAlign="center" mb={2}>
        Aready a member?{" "}
        <StyledLink as={Link} textDecoration="underline" to="/login">
          Login
        </StyledLink>
      </Box>
    </form>
  );
};

export const Auth = () => {
  let isLogin = useMatch("/login") !== null;
  return (
    <Modal isOpen={true} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                layout
                key={isLogin.toString()}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                  },
                }}
                initial={{
                  opacity: 0,
                }}
                style={{
                  height: isLogin ? "340px" : "420px",
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
              >
                {isLogin ? <LoginForm /> : <SignupForm />}
              </motion.div>
            </AnimatePresence>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
