import { PANDABASE_USER_ID } from "../../defaults";
import { GetUserResponse } from "user-interfaces";

export default function handleGetUser() {
  const response = {
    id: parseInt(PANDABASE_USER_ID),
    image_hash: "0bf0c0124e831d27db47970ea8c8328081e3440c5c9555c953acbbeebd3bbdd3",
    first_name: "Joe",
    last_name: "Doe",
    username: "joe",
    email: "joe@pandabase.io",
    country: "US",
    balance: 100,
    metadata: [],
    verified: true,
    limit: 1,
    role: "User",
    created_at: "2021-11-23T17:41:59+11:00",
    updated_at: "2021-11-23T17:41:59+11:00",
  } as GetUserResponse;

  return response;
}
