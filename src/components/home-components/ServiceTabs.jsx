import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function ServiceTab() {
  const [selected, setSelected] = React.useState("about");

  const variant = "underlined";
  return (
    <div className="flex w-full flex-col">
      <Tabs
        key={variant}
        variant={variant}
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="about" title="ABOUT US">
          <Card>
            <CardBody>
              Coinwave is a leading cryptocurrency investment company affiliated
              with Coinbase, specializing in utilizing Artificial Intelligence
              (AI) to trade on behalf of investors. With a focus on generating
              automatic profits through AI-driven trading strategies, Coinwave
              offers a seamless investment experience in the volatile world of
              cryptocurrencies. Investors can benefit from innovative
              technology, expert analysis, and personalized trading solutions
              tailored to their financial goals. As a bonus, Coinwave offers a
              $200 signup bonus to new investors, enhancing the appeal of their
              investment platform.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="mission" title="MISSION">
          <Card>
            <CardBody>
              At Coinwave, our mission is to empower investors with cutting-edge
              AI technology to navigate the dynamic world of cryptocurrency
              trading efficiently and profitably. We strive to provide
              innovative solutions that automate trading processes, enhance
              investment outcomes, and deliver sustainable returns for our
              clients.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="vision" title="VISION">
          <Card>
            <CardBody>
              Our vision at Coinwave is to revolutionize the cryptocurrency
              investment landscape by leveraging advanced Artificial
              Intelligence to offer seamless, secure, and rewarding trading
              experiences. We aim to be the trusted partner for investors
              seeking automated profit generation, personalized strategies, and
              unparalleled expertise in the crypto market. Through continuous
              innovation and a client-centric approach, we aspire to set new
              standards in cryptocurrency investment management.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
