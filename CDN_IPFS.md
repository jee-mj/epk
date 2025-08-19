# Asset Delivery via IPFS (Decentralized CDN)

This document explains how we host and serve static assets (images, video) via IPFS for global, cost-effective distribution.

## Why IPFS?

- Distributed, CDN-like performance.  
- Content addressing (immutability, integrity).  
- Cheap/free via pinning services.  
- Resilience.

## Providers

- **NFT.storage / Web3.storage**: Free, Filecoin-backed.  
- **Pinata**: Free 1GB, paid beyond.  
- **Filebase**: S3-compatible.

Chosen default: **NFT.storage** (ledger-backed, free).

## Upload Workflow

1. Optimize assets.  
2. Upload to provider (UI/API).  
3. Get CID.  
4. Verify via gateway (`https://ipfs.io/ipfs/<CID>`).  
5. Record CID.

## Integration in Site

Use IPFS gateway URLs in HTML/MD:  
```html
<img src="https://ipfs.io/ipfs/<CID>" alt="...">
````

During dev, local files can be used. Production replaces with CIDs.

## Updating Assets

* Upload new file → new CID.
* Update links in site code.
* Unpin old if unused.

## Benefits & Trade-offs

**Pros:** free hosting, offload Pages, verified content.
**Cons:** gateway reliance, slower first load, immutability, preview quirks.

## Future

* Custom domain gateway.
* CI automation to pin and update CIDs.
* Explore Arweave or similar.
* NFT is not appealing to main stakeholder, alternative (cheaper) services can be considered.