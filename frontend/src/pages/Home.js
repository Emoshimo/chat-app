import { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Signup from "../components/authentication/Signup";
import Login from "../components/authentication/Login";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p="3"
        bg="whatsapp.300"
        m="40px 0 15px 0"
        w="100%"
        borderRadius="5"
        borderWidth="3px"
        borderColor="whatsapp.900"
      >
        <Text textAlign="center" fontSize="4xl" fontFamily="work-sans">
          Shimo's Chat App
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        p="3"
        bg="whatsapp.300"
        m="40px 0 15px 0"
        w="100%"
        borderRadius="5"
        borderWidth="3px"
        borderColor="whatsapp.900"
      >
        <Tabs align="center" variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
