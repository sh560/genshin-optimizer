import ICalculatedStats from "./ICalculatedStats";
import { IConditionals } from "./IConditional";

export type IWeaponSheets = Dict<string, IWeaponSheet>

export interface IWeaponSheet {
  name: string;
  weaponType: WeaponTypeKey;
  img: string;
  rarity: number;
  passiveName: string;
  passiveDescription: string | ((stats: ICalculatedStats) => Displayable)
  description: string;
  baseStats: {
    main: number[],
    substatKey: string,
    sub?: number[]
  },
  stats?: object | ((stats: ICalculatedStats) => object)
  conditionals?: IConditionals
}