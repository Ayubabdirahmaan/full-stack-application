import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../input";
import { Button } from "../button";

import { useNavigate } from "react-router";
import { Loader } from "lucide-react";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState("");

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Card className="w-full border-border">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl text-center">Signin</CardTitle>
        <CardDescription className="text-center">
          Enter your credentails to access your accont
        </CardDescription>
        <form>
          <CardContent>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">Eamil</div>
              <Input
                name="email"
                placeholder="email@gmail.com"
                required
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">password</div>
              <Input
                name="password"
                placeholder="******"
                required
                value={formValues.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="py-4">
              <Button type="submit" className={"w-full cursor-pointer"}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    {" "}
                    <Loader /> login account..{" "}
                  </span>
                ) : (
                  "Loggin Account"
                )}
              </Button>
            </div>
          </CardContent>
          <div>
            <CardFooter className={"flex justify-center pt-0"}>
              <div className="text-center text-sm">
                {" "}
                Don't have an account ?{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="text-primary hover:underline cursor-pointer"
                >
                  Sign up
                </a>
              </div>
            </CardFooter>
          </div>
        </form>
      </CardHeader>
    </Card>
  );
};
