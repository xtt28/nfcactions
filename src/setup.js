import { input, select, Separator } from "@inquirer/prompts";
import { NFC } from "nfc-pcsc";
import { initStorage } from "./data.js";
import storage from "node-persist";

initStorage();
const nfc = new NFC();

nfc.on("reader", async reader => {
	console.log(`Detected NFC/smartcard device: ${reader.reader.name}`);

	const action = await select({
		message: "What do you want to do?",
		choices: [
			{
				name: "Register a new tag",
				value: "register",
				description: "Register a new NFC tag to perform an action when scanned",
			},
			{
				name: "Delete tag data",
				value: "delete",
				description: "Delete the action associated with an NFC tag",
			},
		],
	});


	if (action === "register") {
		const scanAction = await select({
			message: "Select an action to run upon scanning this tag",
			choices: [
				{
					name: "Run a command",
					value: "command",
					description: "Run a shell command when this tag is scanned",
				},
				{
					name: "Open a URL",
					value: "url",
					description: "Open a URL in your browser when this tag is scanned",
				},
			],
		});

		const subject = await input({
			message: "Enter the command or URL to run/open",
		});

		console.log("Please scan the tag to create its data");

		reader.on("card", card => {
			storage.setItem(card.uid, { action: scanAction, subject }).then(() => {
				console.log(`Created data for the card with UID ${card.uid}`);
				process.exit(0);
			});
		});
	} else {
		console.log("Please scan the tag to delete its data");
		reader.on("card", card => {
			storage.removeItem(card.uid);
			console.log(`Deleted data for the card with UID ${card.uid}`);
			process.exit(0);
		});
	}
});