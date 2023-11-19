import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

interface Props {
  previewInfo: any;
}
const Review = ({ previewInfo }: Props) => {
  console.log(previewInfo);
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Business Loan Request Preview</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                Business Name:
              </Heading>
              <Text fontSize="sm">{previewInfo.name!}</Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                Established Year:
              </Heading>
              <Text fontSize="sm">{previewInfo.establishedYear}</Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                ProfitOrLoss:
              </Heading>
              <Text fontSize="sm">{previewInfo.profitOrLoss}</Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                PreAssessment:
              </Heading>
              <Text fontSize="sm">{previewInfo.preAssessment}</Text>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Review;
