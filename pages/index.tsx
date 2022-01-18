import { Box, Center, Container } from "@chakra-ui/react";

export default function IndexPage() {
  return (
    <Container
      maxW="xl"
      height="100vh"
      centerContent
      display="flex"
      justifyContent="center"
    >
      <Center bg="tomato" w="xl" h="100px" color="white">
        This is the Center
      </Center>
    </Container>
  );
}
