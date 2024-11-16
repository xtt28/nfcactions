import { exec } from "child_process";
import { NFC } from "nfc-pcsc";
import storage from "node-persist";
import open from "open";
import { initStorage } from "./data.js";

initStorage();
const nfc = new NFC();

nfc.on("reader", async reader => {
	reader.on("card", card => {
		storage.getItem(card.uid).then(data => {
			if (!data)
				return;

			switch (data.action) {
				case "command":
					exec(data.subject);
					break;
				case "url":
					open(data.subject);
					break;
			}
		});
	});
});