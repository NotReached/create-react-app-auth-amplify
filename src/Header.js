import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="logo"
        src="https://holidaybookflood.com/hbf-logo.png"
        padding={tokens.space.medium}
        
      />
    </Flex>
  );
}
