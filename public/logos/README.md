# Client Logos

Place your client logo files in this directory.

## File Naming Convention

The logo filenames should match what's defined in `src/config/translations.ts`:

- `hubspot.png`
- `kering.png`
- `auchan.png`
- `linagora.png`
- `aws.png`
- `microsoft.png`
- `mongodb.png`
- `postgresql.png`

## Recommended Specifications

- **Format**: PNG with transparent background (preferred) or SVG
- **Size**: 200-400px width for optimal quality
- **Background**: Transparent for best results
- **Color**: Full color (grayscale effect is applied automatically)

## Adding New Clients

1. Add the logo file to this folder (e.g., `newclient.png`)
2. Update `src/config/translations.ts` in both `en` and `fr` sections:

```typescript
{ name: 'New Client', url: 'https://www.newclient.com', logo: 'newclient.png' }
```

## Supported Formats

- `.png` (recommended)
- `.svg`
- `.jpg`/`.jpeg`
- `.webp`

The component will automatically fallback to displaying the company name if the logo file is not found.

