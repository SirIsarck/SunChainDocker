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
Each node earns SCH (SunChain Tokens) based on:
- Node Uptime: Continuous operation time.
- Data Accuracy: Correct and verified energy readings.
- Energy Contribution: Amount of simulated energy reported to the Solana network.

Rewards are calculated and distributed through a smart-contract logic that can be adapted to Solana Mainnet in future versions.

** This demo illustrates how decentralized energy nodes can earn tokenized incentives for powering real-world infrastructure in the DePIN economy.


## Contribution

PRs welcome — this is an open DePIN SOL energy model.


## How we want the Meter feature to work

SunChain Smart Hub Meter, Technical & Functional Specification

Project: SunChain – Decentralized Solar Energy Network
Objective: Develop a smart hub meter capable of managing multiple users in a community microgrid with AI integration, pay-as-you-go energy distribution, and blockchain-enabled transparency.


- 1. Core Objectives

The meter must:

Track energy usage for multiple users (100–1000 users per hub).

Allow users to connect instantly without owning individual inverters, batteries, or panels.

Provide operators full control over electricity distribution.

Optimize battery lifespan and efficiency through intelligent management.

Support offline and online operations for rural areas with intermittent internet.

- 2. User Management & Tracking

Unique user IDs assigned upon joining (1, 2, 3…).

Track active users, newly joined users, and total energy usage per user.

AI Agent to calculate individual usage and billing, even with a single hub meter.

Real-time dashboard or local screen to display:

Total users connected

New users joined

Energy consumption per user

Notifications or alerts (overload, battery low)

- 3. Energy & Load Management

Smart hub meter must handle aggregate load from all connected users.

Peak load management: prevent overload and manage distribution efficiently.

Battery management:

Avoid deep discharge

Optimize charging cycles

Predictive load control to maximize battery lifespan

- 4. AI Integration

AI Agent embedded or connected to meter to:

Collect, process, and store energy data offline if no internet

Perform anomaly detection, predictive maintenance, and billing calculations

Decide when to supply or pause electricity based on usage and battery status

Generate summary proofs for blockchain upload

AI Agent must sync with blockchain automatically when connectivity is available.

- 5. Connectivity & Data Handling

Support internet connectivity options: Wi-Fi, NB-IoT, 4G/5G, or LoRa.

Store raw readings locally until AI Agent uploads aggregated summaries to blockchain.

Minimize bandwidth usage: only summary/proof sent on-chain.

Must support offline operation: users still receive electricity while data is buffered.

- 6. Billing & Blockchain Compatibility

Integrate with SunChain smart contracts for automated billing.

AI Agent calculates per-user usage → generates proof → uploads to blockchain.

Supports payments via SunChain token or stablecoin.

Revenue automatically split among:

Hub operator

Maintenance team

Investors

- 7. Display / Dashboard

Local screen or web dashboard shows:

Active users

Newly joined users

Energy usage per user / hub

Battery status and alerts

Billing summary


Optional: allow remote monitoring for operators.

- 8. Hardware Requirements

Voltage & load capacity: must handle aggregate peak load from all users.

High storage capacity for buffering 24-hour readings of hundreds of users.

Processing capability for AI calculations locally (edge device or embedded).

Power backup: maintain data logging during mains outages.

Robust IoT module for connectivity.

Physical durability: heat, dust, and environmental protection for outdoor hubs.

- 9. Scalability

Single hub meter can manage hundreds to thousands of users.

For very large deployments, hubs can be split into sub-hubs, each with a meter + AI Agent.

Must support inter-hub communication and synchronization if needed.

- 10. Key Features Summary

Feature	  -    Description

Multi-user tracking - Track 100–1000 users per hub with unique IDs

Pay-as-you-go - Integration with token/stablecoin payments

AI-assisted management -	Load balancing, anomaly detection, predictive maintenance

Battery protection -	Deep discharge prevention, charging cycle optimization

Offline operation -	AI Agent collects and buffers data without internet

Blockchain integration -	Daily summary/proof uploads for transparency & revenue split

Display/dashboard -	Real-time user count, energy usage, billing, battery status

Peak load management -	Prevent overload & distribute electricity efficiently

Scalability -	Supports additional hubs or sub-hubs as users grow

Connectivity -	Wi-Fi, LoRa, NB-IoT, 4G/5G

- 11. Notes for Manufacturers

Design firmware to communicate seamlessly with AI Agent.

Ensure secure, reliable, and accurate measurements.

Ensure robust power electronics for hub-level energy aggregation.

Allow for future upgrades: more users, sensors, or blockchain features.


- Conclusion

The SunChain Smart Hub Meter will be a centralized hub with decentralized control, powered by AI for intelligent energy management, and fully integrated with blockchain for transparency, pay-as-you-go billing, and investor trust.


## Call to Action

If you're building in Solana DePIN, reach out, let's collaborate on:

Real solar device integration

Solana eco-partnerships

Anchor reward logic

Real-world pilot grid


 **SunChain is creating the future of community-powered energy.


## Contact

Built by Isarck
Twitter: @SirIsarck
Project Type: Solana DePIN / Energy Micro-Payment MVP

