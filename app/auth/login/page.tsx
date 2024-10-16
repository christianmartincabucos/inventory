"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleFormSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginData = { email: username, password };
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      return;
    }
    console.log(response);
    
    // router.push("/");
  };

  return (
    <section className="h-dvh flex justify-center items-center">
      <div className="w-2/6">
        <h1 className="lg:text-5xl font-bold text-center mb-5">Sign In</h1>
        <Card>
          <CardHeader></CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmission}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <CardFooter className="flex justify-between">
                <Button type="submit" className="w-full">Sign In</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;
