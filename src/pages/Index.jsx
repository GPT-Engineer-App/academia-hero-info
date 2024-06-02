import { Container, Text, VStack, Heading, Box, Image, IconButton, HStack, Link } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          My Hero Academia
        </Heading>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteSUyMGhlcm8lMjBhY2FkZW1pYXxlbnwwfHx8fDE3MTczNjcyMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="My Hero Academia" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. The story follows Izuku Midoriya, a boy born without superpowers (called Quirks) in a world where they have become commonplace, but who still dreams of becoming a superhero himself. He is scouted by All Might, Japan's greatest hero, who shares his Quirk with Midoriya after recognizing his potential, and later helps to enroll him in a prestigious high school for heroes in training.
        </Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com/MHAOfficial" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
          <Link href="https://www.instagram.com/mhaofficial/" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </Link>
          <Link href="https://www.facebook.com/MHAOfficial" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
