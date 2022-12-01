import React from "react";
import Badge from "../components/Badge";
import Heading from "../components/Heading";
import Button, { ButtonCustomColors } from "../components/Button";

const ComponentSet = () => {
  return (
    <div className="flex flex-col gap-4">
      <Heading type="title1">Headings</Heading>
      <div className="flex flex-col items-start">
        <Heading type="display" as="h1">
          Display
        </Heading>
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
      </div>
      <Heading type="title1">Badges</Heading>
      <div className="flex flex-col gap-4 items-start">
        <Badge>primary</Badge>
        <Badge type="secondary">secondary</Badge>
        <Badge type="success">success</Badge>
        <Badge type="warning">warning</Badge>
        <Badge type="alert">alert</Badge>
      </div>
      <Heading type="title1">Buttons</Heading>
      <div className="flex flex-col gap-4 items-start">
        <Button>Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="alert">Alert</Button>
        <Button type="warning">Warning</Button>
      </div>
    </div>
  );
};

export default function ThirdPage() {
  const [forceRerender, setForceRerender] = React.useState(0);
  const buttonColors: ButtonCustomColors[] = [
    "Brown",
    "CornflowerBlue",
    "DarkGoldenRod",
    "DarkOliveGreen",
    "DarkSalmon",
    "DarkSlateGray",
    "IndianRed",
    "MidnightBlue",
    "Sienna",
    "Teal",
    "YellowGreen",
  ];

  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    timer.current = setTimeout(() => {
      if (forceRerender >= buttonColors.length - 1) clearTimeout(timer.current);
      else setForceRerender(forceRerender + 1);
    }, 1000);

    return () => clearTimeout(timer.current);
  }, [forceRerender]);

  return (
    <div className="flex flex-col gap-8 items-start">
      <ComponentSet />
      <div className="flex flex-col gap-4 items-start">
        {buttonColors.map(color => (
          <Button key={color} customBackground={buttonColors[forceRerender]}>
            Custom color
          </Button>
        ))}
      </div>
    </div>
  );
}
