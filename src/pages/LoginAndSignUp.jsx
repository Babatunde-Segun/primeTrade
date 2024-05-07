import React from "react";
import classes from "./LoginAndSignUp.module.css";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { useState } from "react";

export default function LoginAndSignUp() {
  const [selected, setSelected] = React.useState("login");
  const [shown, setShown] = useState("false");

  return (
    <div className={classes.LSContainer}>
      <div className="flex flex-col w-full">
        <Card className="max-w-full w-[30rem]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="lg"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <form className="flex flex-col gap-4">
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Need to create an account?{" "}
                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                      Sign up
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary">
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input
                    isRequired
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link size="sm" onPress={() => setSelected("login")}>
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary">
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
