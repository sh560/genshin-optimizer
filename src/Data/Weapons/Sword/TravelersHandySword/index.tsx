import { IWeaponSheet } from '../../../../Types/weapon'
import icon from './Icon.png'
import iconAwaken from './AwakenIcon.png'
import { TransWrapper } from "../../../../Components/Translate"
import formula, { data } from './data'
import Stat from '../../../../Stat'

import data_gen from './data_gen.json'
import { WeaponData } from 'pipeline'
const weapon: IWeaponSheet = {
  ...data_gen as WeaponData,
  icon,
  iconAwaken,
  document: [{
    fields: [{
      text: <TransWrapper ns="sheet_gen" key18="healing" />,
      formulaText: stats => <span>{data.heal[stats.weapon.refineIndex]}% {Stat.printStat("finalHP", stats)} * {Stat.printStat("heal_multi", stats)}</span>,
      formula: formula.heal,
      variant: "success"
    }]
  }]
}
export default weapon