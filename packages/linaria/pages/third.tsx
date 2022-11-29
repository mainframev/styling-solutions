import React from "react";
import Badge from "../components/Badge";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { styled } from "@linaria/react";

const getGap = (spacing: "small" | "medium" | "large") => {
  if (spacing === "small") return 8;
  if (spacing === "large") return 24;

  return 16;
};

const Stack = styled.div<{
  $spacing?: "small" | "medium" | "large";
  $direction?: "column" | "row";
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: flex-start;
  gap: ${({ $spacing }) => `${getGap($spacing || "medium")}px`};
`;

const ComponentSet = () => {
  return (
    <Stack $spacing="large" $direction="column">
      <Stack $direction="column" $spacing="medium">
        <Heading type="title2">Headings</Heading>
        <Stack $spacing="small" $direction="column">
          <Heading as="h1">Display</Heading>
          <Heading type="displaySubtitle" as="h2">
            DisplaySubtitle
          </Heading>
          <Heading type="title1" as="h3">
            title1
          </Heading>
          <Heading type="title2" as="h4">
            title2
          </Heading>
          <Heading type="title3" as="h5">
            title3
          </Heading>
          <Heading type="title4" as="h6">
            title4
          </Heading>
        </Stack>
      </Stack>
      <Stack $direction="column" $spacing="medium">
        <Heading type="title2">Badges</Heading>
        <Stack $spacing="small" $direction="column">
          <Badge>primary</Badge>
          <Badge type="secondary">secondary</Badge>
          <Badge type="success">success</Badge>
          <Badge type="warning">warning</Badge>
          <Badge type="alert">alert</Badge>
        </Stack>
      </Stack>
      <Stack $direction="column" $spacing="medium">
        <Heading type="title2">Buttons</Heading>
        <Stack $spacing="small" $direction="column">
          <Button>Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="alert">Alert</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default function ThirdPage() {
  const [forceRenderer, setForceRenderer] = React.useState(0);
  const buttonColors = ["Brown", "Blue", "Green", "Red", "Yellow", "Purple", "Pink", "Orange", "Gray", "Black", "White", "IndianRed", "MidnightBlue", "Sienna",];

  const timer = setTimeout(function() {
    if (forceRenderer >= buttonColors.length - 1)
      clearTimeout(timer);
    else
      setForceRenderer(forceRenderer + 1)
  }, 1000);

  return (
    <Stack $direction="column">
      <ComponentSet />
      {buttonColors.map(color => <Button key={color} customBackground={buttonColors[forceRenderer]}>Custom Color</Button>)}
    </Stack>
  );
}
