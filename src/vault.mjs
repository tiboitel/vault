"use strict"

import MonsterService from "./backend/services/monsters.mjs";

export default class Vault
{
	constructor()
	{
		this.monster_service = new MonsterService();
	}

	async start()
	{
		try
		{
			await this.monster_service.load();
		} catch (err)
		{
			throw err;
		}
		return true;
	}

	async close()
	{
		try
		{
			await this.monster_service.save();
		} catch (err)
		{
			throw err;
		}
		return true;
	}

}
