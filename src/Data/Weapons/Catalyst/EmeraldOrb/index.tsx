import { WeaponData } from 'pipeline'
import { IConditionals } from '../../../../Types/IConditional'
import { IWeaponSheet } from '../../../../Types/weapon'
import data_gen from './data_gen.json'
import icon from './Icon.png'
import iconAwaken from './AwakenIcon.png'

const refinementVals = [20, 25, 30, 35, 40]
const conditionals: IConditionals = {
  r: {
    name: "After Hydro-Related Reactions",
    maxStack: 1,
    stats: stats => ({
      atk_: refinementVals[stats.weapon.refineIndex]
    })
  }
}
const weapon: IWeaponSheet = {
  ...data_gen as WeaponData,
  icon,
  iconAwaken,
  conditionals,
  document: [{
    conditional: conditionals.r
  }],
}
export default weapon