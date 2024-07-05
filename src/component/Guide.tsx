import {
  AspectRatio,
  Center,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Guide() {
  return (
    <>
      <Container maxW={"100%"} my={10}>
        <Heading size="md" color={"orange.500"}>
          <Center textAlign={"center"}>HƯỚNG DẪN CÁCH QUÉT NFC</Center>
        </Heading>
      </Container>
      <Container maxW={"100%"} my={10}>
        <List p={5} bg={"whiteAlpha.300"} rounded={10}>
          <ListItem>
            <ListIcon as={MdCheckCircle} />
            Chạm chip vào vị trí quét NFC trên mặt sau của điện thoại.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} />
            Khi có tín hiệu rung, giữ nguyên thẻ cho đến khi có thông báo thành
            công.
          </ListItem>
        </List>
      </Container>
      <Container maxW={"100%"} my={10}>
        <Text>
          Trong trường hợp bạn chưa thể xác định vị trí quét NFC ở đâu, hãy đặt
          thẻ cố định trên mặt bàn (để mặt sau của thẻ ngửa lên), chạm mặt sau
          của điện thoại vào chip điện tử và di chuyển chậm để dò tìm. Vui lòng
          xem video hướng dẫn bên dưới:
        </Text>
      </Container>
      <Container maxW={"100%"} my={10}>
        <Heading size="sm">TRÊN THIẾT BỊ ANDROID</Heading>
        <AspectRatio maxW="600px">
          <iframe
            src="https://www.youtube.com/embed/qRsog8zf7u4?si=ntjh86hWEMhDSnKf"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </AspectRatio>
      </Container>
      <Container maxW={"100%"} my={10}>
        <Heading size="sm">TRÊN THIẾT BỊ IOS</Heading>
        <AspectRatio maxW="600px">
          <iframe
            src="https://www.youtube.com/embed/qRsog8zf7u4?si=ntjh86hWEMhDSnKf"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </AspectRatio>
      </Container>
    </>
  );
}
