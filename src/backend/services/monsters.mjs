import Monster from "../models/monster.mjs";
import Climate from "../enums/climate.mjs";
import fs from 'fs';

export default class MonsterService
{
	constructor()
	{
		this.data_path = "./data/monsters.json";
		this.monsters = null;
	}

	async load()
	{
		let data = fs.readFileSync(this.data_path);
		
		this.monsters = JSON.parse(data);
		return (true);
	}

	async save()
	{
		let data = JSON.stringify(this.monsters);
		
		try
		{
			fs.writeFileSync(this.data_path, data, 'utf8', (err) => { console.log("-- ERROR -- Writing monsters.json."); return err; });
			return true;
		} catch (err)
		{
			return err;
		}
	}
}
