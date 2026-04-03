import { existsSync } from "node:fs";
import { join } from "node:path";
import { app, nativeImage } from "electron";
import { env } from "main/env.main";
import { prerelease } from "semver";

/**
 * Returns true if this is a canary (prerelease) build, e.g. "0.0.53-canary".
 */
function isCanaryBuild(): boolean {
	const components = prerelease(app.getVersion());
	return components !== null && components.length > 0;
}

/**
 * Returns the icons directory path.
 */
function getIconsDir(): string {
	if (app.isPackaged) {
		return join(process.resourcesPath, "app.asar/resources/build/icons");
	}
	if (env.NODE_ENV === "development") {
		return join(app.getAppPath(), "src/resources/build/icons");
	}
	return join(__dirname, "../resources/build/icons");
}

/**
 * Resolves the dock icon path for the current build type.
 * Resolution order (first existing file wins):
 *   - dev:    icon-dev.png → icon.png
 *   - canary: icon-canary.png → icon.png
 *   - stable: icon.png
 */
function getIconPath(): string {
	const dir = getIconsDir();

	if (env.NODE_ENV === "development") {
		const devIcon = join(dir, "icon-dev.png");
		if (existsSync(devIcon)) return devIcon;
	} else if (isCanaryBuild()) {
		const canaryIcon = join(dir, "icon-canary.png");
		if (existsSync(canaryIcon)) return canaryIcon;
	}

	return join(dir, "icon.png");
}

/**
 * Sets the macOS dock icon based on the current build type and macOS version.
 * No-op on non-macOS platforms.
 */
export function setWorkspaceDockIcon(): void {
	if (process.platform !== "darwin") return;

	try {
		const iconPath = getIconPath();
		const icon = nativeImage.createFromPath(iconPath);
		if (icon.isEmpty()) {
			console.warn("[dock-icon] Failed to load icon from:", iconPath);
			return;
		}

		app.dock?.setIcon(icon);
		console.log(`[dock-icon] Set dock icon from: ${iconPath}`);
	} catch (error) {
		console.error("[dock-icon] Failed to set dock icon:", error);
	}
}
