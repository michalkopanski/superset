import type { Theme } from "../types";

/**
 * Canopy Light theme - Forest-inspired light theme with green accents
 * Ported from the Zed Canopy theme
 */
export const canopyLightTheme: Theme = {
	id: "canopy-light",
	name: "Canopy Light",
	author: "Superset",
	type: "light",
	isBuiltIn: true,

	ui: {
		// Core - soft forest greens
		background: "#eef5f0",
		foreground: "#1a2b20",
		card: "#e2ece5",
		cardForeground: "#1a2b20",
		popover: "#e2ece5",
		popoverForeground: "#1a2b20",

		// Primary - forest green accent
		primary: "#22804a",
		primaryForeground: "#eef5f0",

		// Secondary - light sage
		secondary: "#d5e2d9",
		secondaryForeground: "#1a2b20",

		// Muted - soft sage tones
		muted: "#d5e2d9",
		mutedForeground: "#3e5446",

		// Accent - subtle green-gray
		accent: "#cddbd2",
		accentForeground: "#1a2b20",

		// Tertiary - panel backgrounds
		tertiary: "#e2ece5",
		tertiaryActive: "#bfcec4",

		// Destructive - warm red
		destructive: "#d36151",
		destructiveForeground: "#fff0ee",

		// Borders
		border: "#b3c7b8",
		input: "#cddbd2",
		ring: "#3a9060",

		// Sidebar
		sidebar: "#e2ece5",
		sidebarForeground: "#1a2b20",
		sidebarPrimary: "#22804a",
		sidebarPrimaryForeground: "#eef5f0",
		sidebarAccent: "#d5e2d9",
		sidebarAccentForeground: "#1a2b20",
		sidebarBorder: "#b3c7b8",
		sidebarRing: "#3a9060",

		// Charts - canopy palette
		chart1: "#22804a",
		chart2: "#0e7a68",
		chart3: "#c18401",
		chart4: "#a449ab",
		chart5: "#d3604f",

		// Search highlights
		highlightMatch: "rgba(34, 128, 74, 0.35)",
		highlightActive: "rgba(208, 169, 35, 0.5)",
	},

	terminal: {
		background: "#eef5f0",
		foreground: "#1a2b20",
		cursor: "#22804a",
		cursorAccent: "#eef5f0",
		selectionBackground: "rgba(34, 128, 74, 0.24)",

		// Standard ANSI colors
		black: "#000000",
		red: "#de3e35",
		green: "#22804a",
		yellow: "#d2b67c",
		blue: "#2f5af3",
		magenta: "#950095",
		cyan: "#0997b3",
		white: "#97b0a0",

		// Bright ANSI colors
		brightBlack: "#000000",
		brightRed: "#de3e35",
		brightGreen: "#2e9a58",
		brightYellow: "#d2b67c",
		brightBlue: "#2f5af3",
		brightMagenta: "#a00095",
		brightCyan: "#0bbcd6",
		brightWhite: "#ffffff",
	},

	editor: {
		syntax: {
			comment: "#88a496",
		},
	},
};
