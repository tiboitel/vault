import Vault from "./vault.mjs";

async function main()
{
	let vault = new Vault();

	try
	{
		await vault.start().then((resolve) =>
		{
			console.log("-- Vault application started. --");
		});
		await vault.close().then((resolve) =>
		{
			console.log("-- Vault application closed. --");
		});
	} catch (err)
	{
		console.log("-- ERROR -- " + err + " --");
	}
}

main();
