# Change Log

## 2026-06-02

### Added Logo Branding

- Added the supplied logo image to `public/images/moe-logo.png`.
- Added `logo` to the shared `site` object in `lib/site.ts`.
- Replaced the temporary navbar lightning mark with the new logo.
- Replaced the temporary footer lightning mark with the new logo.
- Added the logo to metadata as the favicon and Apple icon.
- Added the logo to Open Graph metadata.
- Added the logo to local business structured data.

### Verification

- Ran `npm.cmd run lint`.
- Ran `npm.cmd run build`.
- Verified the rendered logo in the navbar and footer.
- Checked desktop and mobile header layout.

### Notes

- The folder was not recognized as a Git repository during verification, so Git status and Git diff were not available.
- A stale `.next` build folder was removed and rebuilt after `next start` could not find `BUILD_ID`.

