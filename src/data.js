import { join } from "path";
import storage from "node-persist";

/**
 * Returns the path for the application to store persistent data.
 * @returns {string} The path to the data folder.
 */
function getDataFolder() {
	const parent = process.platform === "win32" ? process.env.APPDATA : process.env.HOME;
	return join(parent, ".nfcactions");
}

/**
 * Initializes storage with the node-persist package in the application data folder.
 * @returns {void}
 */
export function initStorage() {
	storage.init({
		dir: getDataFolder()
	});
}