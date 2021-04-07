import flower from './Item_Heart_of_Frost.png'
import plume from './Item_Plume_of_Snow.png'
import sands from './Item_Glacial_Sand.png'
import goblet from './Item_Goblet_of_Aquilo.png'
import circlet from './Item_Crown_of_Glacier.png'
let artifact = {
  name: "Glacier And Snowfield", rarity: [4, 5],
  pieces: {
    flower: "Heart of Frost",
    plume: "Plume of Snow",
    sands: "Glacial Sand",
    goblet: "Goblet of Aquilo",
    circlet: "Crown of Glacier"
  },
  icons: {
    flower,
    plume,
    sands,
    goblet,
    circlet
  },
  setEffects: {
    2: {
      text: <span><span className="text-cryo">Cryo DMG Bonus</span> +15%</span>,
      stats: { cryo_dmg_: 15 }
    },
    4: {
      text: "Increases Superconduct DMG by 100%. Increases Melt DMG by 15%. Using an Elemental Burst increases Cryo DMG Bonus by 30% for 10s.",
      stats: {
        superconduct_dmg_: 100,
        melt_dmg_: 15,
      },
      conditional: {
        type: "artifact",
        sourceKey: "GlacialAndSnowfield_4",
        maxStack: 1,
        stats: {
          cryo_dmg_: 30
        }
      }
    }
  }
}
export default artifact