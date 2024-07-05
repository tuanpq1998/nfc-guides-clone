import {
  Container,
  Heading,
  Center,
  Text,
  Select,
  HStack,
  Button,
  Image,
  Spinner,
  Divider,
} from "@chakra-ui/react";
import { getBrand } from "../api/getBrand";
import { useQuery } from "@tanstack/react-query";
import { getModel } from "../api/getModel";
import { useState } from "react";
import { getNfcImage } from "../api/getNfcImage";

const STRING_DEFAULT = "";
const DELAY_ACTION_MS = 200;

export default function Check() {
  // const [device, setDevice] = useState<IDevice | null>(null);

  const [deviceBrand, setDeviceBrand] = useState<string>(STRING_DEFAULT);
  const [deviceModel, setDeviceModel] = useState<string>(STRING_DEFAULT);
  // const [hasSubmit, setHasSubmit] = useState<boolean>(false);

  const { data: brands } = useQuery({
    queryKey: ["getBrand"],
    queryFn: () => getBrand(),
    staleTime: Infinity,
  });

  const { data: models, isFetching: isModelsFetching } = useQuery({
    queryKey: ["getModels", { brand: deviceBrand }],
    queryFn: () => getModel(deviceBrand, DELAY_ACTION_MS),
    enabled: deviceBrand != "",
    staleTime: Infinity,
  });

  const {
    data: deviceNfcImage,
    isFetching: isImageFetching,
    refetch: fetchNfcImage,
  } = useQuery({
    queryKey: ["getDevice", { brand: deviceBrand, model: deviceModel }],
    queryFn: () => getNfcImage(deviceBrand, deviceModel, DELAY_ACTION_MS),
    enabled: false,
    staleTime: Infinity,
    select: (resp) => resp.image,
  });

  const handleSelectBrandChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setDeviceBrand(value);
  };

  const handleSelectModelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setDeviceModel(value);
  };

  const handleBtnSubmitClick = () => {
    deviceBrand != STRING_DEFAULT &&
      deviceModel != STRING_DEFAULT &&
      fetchNfcImage();
  };

  return (
    <>
      <Container maxW={"100%"} my={10}>
        <Heading size="md">
          <Center textAlign={"center"} px={5}>
            KIỂM TRA VỊ TRÍ QUÉT NFC TRÊN THIẾT BỊ CỦA BẠN
          </Center>
        </Heading>
        <Center pt={5} textAlign={"center"}>
          <Text as={"i"}>Github</Text>
        </Center>
      </Container>
      <Container my={5}>
        <HStack>
          <Text>Hãng: </Text>
          <Select
            placeholder={"Select option"}
            onChange={handleSelectBrandChange}
          >
            {brands &&
              brands.map((brand, index) => (
                <option key={`brand-${brand}-index-${index}`} value={brand}>
                  {brand}
                </option>
              ))}
          </Select>
        </HStack>
        <HStack mt={5}>
          <Text>Dòng: </Text>
          <Select
            placeholder={isModelsFetching ? "Loading..." : "Select option"}
            onChange={handleSelectModelChange}
          >
            {models &&
              models.map((model, index) => (
                <option key={`model-${model}-index-${index}`} value={model}>
                  {model}
                </option>
              ))}
          </Select>
        </HStack>
        <Center mt={5}>
          <HStack>
            <Button
              isLoading={isImageFetching}
              onClick={handleBtnSubmitClick}
              colorScheme="blue"
            >
              Tra cứu
            </Button>
          </HStack>
        </Center>
      </Container>
      <Divider />
      <Container my={5} minH={"50vh"}>
        <Heading size="sm">
          <Center>Kết quả</Center>
        </Heading>
        {isImageFetching && (
          <Center mt={5}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}
        {!isImageFetching && deviceNfcImage && (
          <Center>
            <Image
              src={`data:image/png;base64,${deviceNfcImage}`}
              maxH={"50vh"}
              alt={`${deviceBrand}-${deviceModel}`}
            />
          </Center>
        )}
        {!isImageFetching && !deviceNfcImage && (
          <Center mt={5}>
            <Text>Hãy chọn hãng & dòng máy!</Text>
          </Center>
        )}
      </Container>
    </>
  );
}
