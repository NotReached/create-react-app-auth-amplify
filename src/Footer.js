import { Flex, Text, useTheme } from "@aws-amplify/ui-react";

export function Footer() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={tokens.space.medium}>
      <Text>ScarletBlackout LLC &copy; 2021 All Rights Reserved</Text>
    </Flex>
  );
}