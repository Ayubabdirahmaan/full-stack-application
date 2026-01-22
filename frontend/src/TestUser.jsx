import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

async function CreateUser(newUser) {
  const response = await fetch("http://localhost:2000/api/user/", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: Json.stringfy(newUser),
  });
  if (!response.ok) throw new Error("failed to create new user");
  return response.json();
}

export const TestUser = () => {
  const [user, setUser] = useState("");
  const queryCleint = useQueryClient();

  const mutation = useMutation({
    mutationFn: CreateUser,
    onSuccess: () => {},
  });
  return (
    <div>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button>Add New User</button>
    </div>
  );
};
