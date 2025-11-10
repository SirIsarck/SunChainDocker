## SunChain

SunChain — Decentralized Solar Micro-Energy Network on Solana

SunChain is a DePIN prototype that tokenizes solar energy units and simulates distributed micro-grid energy sharing.  
Built on **Solana** to enable:

-  Real-time metering simulation
-  Micro-payments using SOL / USDC
- Tokenized ownership of solar nodes (NFT-based)
- Automated revenue distribution
- Transparent energy tracking on Solana

This repo provides a **demo API + Docker container** to run a lightweight simulation of a SunChain node.

- This is an MVP mock-node for proof-of-concept showcasing energy station logic, not a production release.


## Core Vision

SunChain = **Solar Energy DePIN + Solana Payments**

Think "Helium for solar energy," powered by Solana:

| Component | Purpose |
|---|---|
Solar Node | Generates + reports energy data  
Solana Program | Handles micro-payments + rewards  
NFT Ownership | Represents real solar stations  
USDC/SOL Payments | Pay per watt usage  
On-Chain Logs | Tamper-proof energy usage records  

This repo includes a **mock solar node** for hackathon validation.


## Features

- Solar node energy simulation
- REST API demo  
- Express server  
- Solana-aligned energy token model (docs included)  
- Docker-deployable  
- Smart-contract portion in separate repo, this repo = mock compute node demo.


## Installation

### **Local Run**

```bash
npm install
npm start

## Docker Run

docker build -t sunchain-node .
docker run -p 3000:3000 sunchain-node

Open browser:

http://localhost:3000

You should see:
Welcome to SunChain Demo App!


## Energy Simulation

Future update will include:

kWh meter feed

Automated energy credit issuance

RPC send to Solana program


Current version demonstrates:

Local node boot

Micro-service interface

Logging + health check


## Solana Architecture Overview

Layer	Technology

Chain	Solana
Contracts	Anchor Framework
Ownership	Solana NFTs
Payments	Solana Pay (USDC / SOL)
Data Feed	Off-chain simulation → on-chain logs


## Why Solana?

Ultra-low cost micro-transactions

Real-time energy tracking

Perfect fit for IoT + DePIN payments

Fast settlement for energy markets


SunChain = Solar energy network + Solana DePIN rails


## Folder Structure

sunchain/
 ├── index.js
 ├── package.json
 ├── Dockerfile
 └── README.md


## Roadmap

Stage	Goal

- MVP solar node simulation	
- Anchor smart-contract release
- Solana Pay wallet UI	
- NFT station registry	
- IoT firmware (ESP32)

## Reward Mechanism
SunChain introduces a simulated on-chain reward model for DePIN energy nodes.  
Each node earns **SCH (SunChain Tokens)** based on:
- **Node Uptime:** Continuous operation time.
- **Data Accuracy:** Correct and verified energy readings.
- **Energy Contribution:** Amount of simulated energy reported to the Solana network.

Rewards are calculated and distributed through a smart-contract logic that can be adapted to Solana Mainnet in future versions.

- **This demo illustrates how decentralized energy nodes can earn tokenized incentives for powering real-world infrastructure in the DePIN economy.


## Contribution

PRs welcome — this is an open DePIN SOL energy model.


## Call to Action

If you're building in Solana DePIN, reach out — let's collaborate on:

Real solar device integration

Solana eco-partnerships

Anchor reward logic

Real-world pilot grid


> SunChain is creating the future of community-powered energy.


## Contact

Built by Isarck
Twitter: @SirIsarck
Project Type: Solana DePIN / Energy Micro-Payment MVP

