import { buttonType } from "@/@types";
import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {};

const MyButton = ({ type, color, text, onClick }: buttonType) => {
  return (
    <Button type={type} colorScheme={color} onClick={onClick}>
      {text}
    </Button>
  );
};

export default MyButton;
