
import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader"

import * as ExternalPlugin from "./.quartz/plugins"

// Only show actual notes in Recent Activity
ExternalPlugin.RecentNotes({
  filter: (page) => {
    const slug = String(page.slug ?? "")
    const title = String(page.frontmatter?.title ?? "")

    // Exclude homepage
    if (slug === "index" || slug === "") return false

    // Exclude 404 page by slug or title
    if (slug === "404" || title === "Not Found") return false

    // Exclude generated tag pages
    if (slug === "tags" || slug.startsWith("tags/")) {
      return false
    }

    return true
  },
})

const config = await loadQuartzConfig()

export default config

export const layout = await loadQuartzLayout()
