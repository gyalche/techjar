import React from "react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack>
      {[1, 2, 3].map((data) => (
        <Skeleton
          key={data}
          height="20px"
          startColor="silver.500"
          endColor="gray.500"
        />
      ))}
    </Stack>
  );
};

export default Loading;
