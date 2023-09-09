import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  //issuerBaseURL: "https://dev-scclare7nwbcg2r7.us.auth0.com",
  issuerBaseURL: "https://dev-scd0kvgjigay1g1p.us.auth0.com",
  tokenSigningAlg: "RS256"
});

export default jwtCheck;
