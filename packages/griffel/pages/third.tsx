import React from "react";
import Badge from "../components/Badge";
import Heading from "../components/Heading";
import Button, { ButtonCustomColors } from "../components/Button";

import { makeStyles, mergeClasses, shorthands } from "@griffel/react";

const useClasses = makeStyles({
  wrapper: {
    marginTop: "8px",
    display: "inline-flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  gap: {
    ...shorthands.gap("12px"),
  },
});

const ComponentSet = () => {
  const classes = useClasses();

  return (
    <div className={mergeClasses(classes.wrapper, classes.gap)}>
      <Heading type="title3">Headings</Heading>
      <div className={classes.wrapper}>
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
      <Heading type="title3">Badges</Heading>
      <div className={mergeClasses(classes.wrapper, classes.gap)}>
        <Badge>primary</Badge>
        <Badge type="secondary">secondary</Badge>
        <Badge type="success">success</Badge>
        <Badge type="warning">warning</Badge>
        <Badge type="alert">alert</Badge>
      </div>
      <Heading type="title3">Buttons</Heading>
      <div className={mergeClasses(classes.wrapper, classes.gap)}>
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
  const classes = useClasses();

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

  const timer = setTimeout(function () {
    if (forceRerender >= buttonColors.length - 1) clearTimeout(timer);
    else setForceRerender(forceRerender + 1);
  }, 1000);

  return (
    <div className={mergeClasses(classes.wrapper, classes.gap)}>
      <ComponentSet />
      {buttonColors.map(color => (
        <Button key={color} customBackground={buttonColors[forceRerender]}>
          Custom color
        </Button>
      ))}
    </div>
  );
}
