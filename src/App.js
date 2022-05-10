import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  Spacer,
  SkeletonCircle,
  SkeletonText,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={[0, 10, 20]}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
              <Heading size="2xl">Your Details</Heading>
              <Text>If you already have an account, click here to log in.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="John"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Doe"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder="H-41 Taxashila Tower"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input placeholder="Ahmedabad"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select>
                    <option value="IND">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="AUS">Australia</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Checkbox defaultChecked>Ship to billing Address</Checkbox>
              </GridItem>
              <GridItem colSpan={2}>
                <Button colorScheme="teal" size="lg" w="full">
                  Place Order
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>

          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            bg="gray.500"
          >
            <VStack spacing={3} alignItems="flex-start">
              <Heading size="2xl">Your Cart</Heading>
              <Text>
                If price is too hard on your eyes, try changing the theme.
              </Text>
            </VStack>

            <Flex flexDirection="row" w="full" justifyContent="space-between">
              <Box fontSize="sm">Subtotal</Box>
              <Box fontSize="sm" fontWeight="bold">
                $199.00
              </Box>
            </Flex>
            <Flex flexDirection="row" w="full" justifyContent="space-between">
              <Box fontSize="sm">Shipping</Box>
              <Box fontSize="sm" fontWeight="bold">
                $19.99
              </Box>
            </Flex>
            <Flex flexDirection="row" w="full" justifyContent="space-between">
              <Box fontSize="sm">Taxes(estimated)</Box>
              <Box fontSize="sm" fontWeight="bold">
                $23.80
              </Box>
            </Flex>
            <Divider></Divider>
            <Flex flexDirection="row" w="full" justifyContent="space-between">
              <Box fontSize="sm">Total</Box>
              <Box fontSize="2xl" fontWeight="bold">
                $162.79
              </Box>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
