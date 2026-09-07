---
'penpot-exporter': patch
---

Fall back to a default font family when a text style (typically a remote library style) has no resolvable `fontName`, so the exported typography passes Penpot's schema validation and the import no longer fails with a missing `font-family`. Also stop registering an undefined family in the missing-fonts list.
