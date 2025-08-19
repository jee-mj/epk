# ADR-002: Asset CDN via IPFS

## Status
Accepted

## Context
Hosting heavy visual assets (high-resolution images, video) directly on GitHub Pages could result in slow loading and exceed GitHub’s soft bandwidth limits. We needed a scalable, cost-effective, and reliable content delivery method.

## Decision
We will host assets on **IPFS** (InterPlanetary File System) through a low-cost or free pinning service (NFT.storage, Web3.storage, or Pinata).

## Rationale
- Global peer-to-peer CDN-like delivery.  
- Content-addressing ensures immutability and integrity.  
- Very low or no cost compared to commercial CDNs.  
- Decentralized, resilient hosting aligns with project ethos.  

## Consequences
- Immutable assets require updating CIDs when content changes.  
- Dependency on public gateways for access (e.g., ipfs.io).  
- Social media preview reliability may vary with IPFS URLs.  
- Requires documentation and discipline for asset updates.

