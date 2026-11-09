# Channel Bookmarks

A standalone Buzz plugin. Adds a bookmark icon to the channel header; clicking
it opens a shared bookmarks panel. No changes to Buzz or Channels are required.

## Install

In Settings → Plugins → Manage plugins, add the `channel-bookmarks` folder, then enable
**Channel Bookmarks**. The icon has the tooltip **Bookmarks**.

The built plugin is `manifest.json` plus `plugin.js`. It uses the
existing `react`, `panels`, and `relay` capabilities, with no computer or network
grants of its own. React is supplied by Buzz, not bundled with the plugin.

## Use

Choose **Add bookmark** to open the name and HTTP(S) URL form. Each compact row
shows the bookmark title and domain; its **⋯** menu offers **Edit** and **Remove**.
Cancel closes the form without saving. Drag its handle onto another bookmark to reorder; Escape
cancels a drag. You can also focus the handle and press Arrow Up or Arrow Down.
Links reload automatically whenever the panel opens. Failed loads offer
**Retry loading bookmarks**. Each URL appears once per channel.

Links are stored under `## Channel bookmarks` in the shared Canvas. Other Canvas
sections are preserved. Canvas permissions, its size limit, and its restriction
to one save per second apply. Conflicts reload the latest links and preserve typed
input for review before resubmitting. Disabling the plugin hides the button/panel
and keeps saved links.

## Build and test

With Node 24+ and pnpm 11.8.0, run from this folder:

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm test
```

The checked-in `plugin.js` is ready to install without build tools.
Rebuild it after changing the source.
The Vite configuration verifies that the artifact is one self-contained module.
The icon uses the Tabler bookmark outline.

## License

Apache-2.0, carried over from the original buzz-app contribution.
