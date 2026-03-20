import type { Theme } from "../types";

/**
 * Canopy Dark theme - Forest-inspired dark theme with green accents
 * Ported from the Zed Canopy theme
 */
export const canopyDarkTheme: Theme = {
	id: "canopy-dark",
	name: "Canopy Dark",
	author: "Superset",
	type: "dark",
	isBuiltIn: true,

	ui: {
		// Core - deep forest greens
		background: "#282e2b",
		foreground: "#dce2df",
		card: "#2f3633",
		cardForeground: "#dce2df",
		popover: "#2f3633",
		popoverForeground: "#dce2df",

		// Primary - fresh green accent
		primary: "#6dbe8c",
		primaryForeground: "#282e2b",

		// Secondary - muted forest tones
		secondary: "#363d3a",
		secondaryForeground: "#dce2df",

		// Muted - subtle dark tones
		muted: "#363d3a",
		mutedForeground: "#a9b5b0",

		// Accent - dark hover surface
		accent: "#363d3a",
		accentForeground: "#dce2df",

		// Tertiary - panel backgrounds
		tertiary: "#2e3532",
		tertiaryActive: "#454d4a",

		// Destructive - warm red
		destructive: "#d07277",
		destructiveForeground: "#ffd0d2",

		// Borders
		border: "#464d4a",
		input: "#363d3a",
		ring: "#4a8a6e",

		// Sidebar
		sidebar: "#2f3633",
		sidebarForeground: "#dce2df",
		sidebarPrimary: "#6dbe8c",
		sidebarPrimaryForeground: "#282e2b",
		sidebarAccent: "#363d3a",
		sidebarAccentForeground: "#dce2df",
		sidebarBorder: "#464d4a",
		sidebarRing: "#4a8a6e",

		// Charts - canopy palette
		chart1: "#6dbe8c",
		chart2: "#56c2a8",
		chart3: "#dfc184",
		chart4: "#b477cf",
		chart5: "#d07277",

		// Search highlights
		highlightMatch: "rgba(109, 190, 140, 0.4)",
		highlightActive: "rgba(232, 175, 116, 0.5)",
	},

	terminal: {
		background: "#282e2b",
		foreground: "#abb8b2",
		cursor: "#6dbe8c",
		cursorAccent: "#282e2b",
		selectionBackground: "rgba(109, 190, 140, 0.24)",

		// Standard ANSI colors
		black: "#282e2b",
		red: "#e06c75",
		green: "#8cc379",
		yellow: "#e5c07b",
		blue: "#61afef",
		magenta: "#c678dd",
		cyan: "#56c2a8",
		white: "#abb8b2",

		// Bright ANSI colors
		brightBlack: "#637068",
		brightRed: "#ea858b",
		brightGreen: "#a0d589",
		brightYellow: "#ffd885",
		brightBlue: "#85c1ff",
		brightMagenta: "#d398eb",
		brightCyan: "#6ed5c0",
		brightWhite: "#fafafa",
	},

	editor: {
		syntax: {
			comment: "#5d6b64",
		},
	},
};
