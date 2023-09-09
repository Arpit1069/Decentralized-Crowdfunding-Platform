import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      // domain="dev-scclare7nwbcg2r7.us.auth0.com"
      domain="dev-scd0kvgjigay1g1p.us.auth0.com" //new
      // clientId="ftRsGJr6tTsbVH2EmyWkWbdzM11qqVIL"
      clientId="LdZ7wJFsn6Dwyu2BvI6lKv6X7mX83Zic" //new
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
