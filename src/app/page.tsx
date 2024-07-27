"use client";
import React from "react";
import { Button, Checkbox, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import "../app/styles/styles.scss";
import Image from "next/image";
import Next from "../../public/VarthaLoginIconSVG.svg";
import VarthaLogo from "../../public/VarthaLogo.svg";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSignIn = (e: any) => {
    e.preventDefault();
    // Perform any sign-in logic here
    router.push("/home"); // Navigate to the dashboard or any other route
  };
  return (
    <div className="page">
      <header className="header">
        <Image priority src={VarthaLogo} alt="Follow us on Twitter" />
      </header>
      <div className="login">
        <div className="holder">
          <div className="loginBg">
            <Image priority src={Next} alt="Follow us on Twitter" />
          </div>
          <form onSubmit={handleSignIn} className="form">
            <span className="welcome">
              <Image priority src={VarthaLogo} alt="Follow us on Twitter" />
              <p>Welcome To Vartha</p>
            </span>
            <div className="fields">
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                className="input"
              />
              <TextInput
                withAsterisk
                label="Password"
                placeholder="*******"
                className="input"
              />
              <div className="options">
                <Checkbox mt="md" label="Keep me logged in" />
              </div>
              <Button type="submit" className="submit">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
