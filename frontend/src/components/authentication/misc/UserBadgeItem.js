import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1.3}
      borderRadius="10px"
      m="10px"
      mb="2px"
      variant="solid"
      fontSize="12px"
      backgroundColor="purple"
      textColor="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
