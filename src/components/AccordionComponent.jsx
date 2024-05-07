import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent() {
  const defaultContent1 =
    "Offering clients the chance to invest in nascent cryptocurrency ventures, thereby positioning them to potentially reap rewards from the future expansion and triumph of these projects.";
  const defaultContent2 =
    "Counseling clients to acquire and retain their cryptocurrency assets for the extended duration, grounded in the conviction that their value will appreciate over time.";
  const defaultContent3 =
    "Promoting the practice of clients consistently investing a predetermined sum into cryptocurrencies at regular intervals, irrespective of the asset's current price, thereby potentially mitigating the influence of market volatility on their overall investment.";
  const defaultContent4 =
    "Encouraging clients to regularly invest a set amount of money in cryptocurrencies, regardless of the current price of the asset, with the aim of potentially lessening the impact of market volatility on their overall investment.";
  const defaultContent5 =
    "Utilizing variances in cryptocurrency exchange prices to purchase at lower rates and sell at higher rates, thereby capitalizing on market inefficiencies to generate profit.";
  const defaultContent6 =
    "Deploying automated trading strategies driven by predetermined criteria, capable of swiftly and frequently executing trades to leverage market opportunities with greater efficiency.";

  return (
    <Accordion variant="splitted" className="group">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="ICO(initial Coin Offering) Investments"
        className="text-[orange] text-center active:bg-[green]  "
      >
        {defaultContent1}
      </AccordionItem>
      <AccordionItem
        key="2"
        classNames=" text-center"
        aria-label="Accordion 2"
        title="HODLing"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Dollar-Cost Avaraging"
      >
        {defaultContent3}
      </AccordionItem>
      <AccordionItem
        key="4"
        classNames="text-center"
        aria-label="Accordion 4"
        title="Staking"
      >
        {defaultContent4}
      </AccordionItem>
      <AccordionItem
        key="5"
        classNames="text-center"
        aria-label="Accordion 5"
        title="Arbitrage trading"
      >
        {defaultContent5}
      </AccordionItem>
      <AccordionItem
        classNames="text-center"
        key="6"
        aria-label="Accordion 6"
        title="Algorithmic Trading"
      >
        {defaultContent6}
      </AccordionItem>
    </Accordion>
  );
}
