import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "starknet";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";

const connectors = [
  new InjectedConnector({ options: { id: "argentX" } }),
  new InjectedConnector({ options: { id: "braavos" } }),
];
const provider = new Provider({
  sequencer: {
    baseUrl: "https://alpha4.starknet.io",
    feederGatewayUrl: "https://alpha4.starknet.io/feeder_gateway",
    chainId: "0x534e5f474f45524c49",
    gatewayUrl: "https://alpha4.starknet.io/gateway",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StarknetConfig defaultProvider={provider} connectors={connectors}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StarknetConfig>
);
