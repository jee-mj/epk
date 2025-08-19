
# Architecture Decision Records (ADRs)

This folder contains Architecture Decision Records for the EPK project. ADRs are short documents that capture important technical and architectural choices, along with their context and consequences. They provide a historical record of why decisions were made, ensuring future contributors understand the reasoning behind our setup.

## ADR Index

- [ADR-001: Hosting Strategy](./ADR-001-hosting.md)  
  **Decision:** Use GitHub Pages as the production hosting platform.  
  **Rationale:** Free, easy to integrate with repo, sufficient for static sites.  
  **Consequences:** Reliance on GitHub infrastructure, need to offload large assets elsewhere.

- [ADR-002: Asset CDN via IPFS](./ADR-002-cdn-ipfs.md)  
  **Decision:** Deliver media assets via IPFS using a pinning provider.  
  **Rationale:** Decentralized, cost-effective, CDN-like performance, integrity via content addressing.
  **Consequences:** Immutable CIDs require updates, dependency on public gateways, potential preview quirks.

## Process

- Each new architectural or major technical decision should be documented in its own ADR file.  
- ADRs are numbered sequentially and stored in this directory.  
- ADRs are considered **living documents** — decisions may be revisited and superseded with new ADRs if requirements change.

## References

- GitHub Issue [#2: Architecture](https://github.com/jee-mj/epk/issues/2) – tracks ADR workflow and hosting/CDN decisions.  
- ADR best practices: [Michael Nygard’s ADRs](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) (original reference).
