import card from './Traveler_Female_Card.jpg'
import thumb from './Character_Traveler_Thumb.png'
import c1 from './Constellation_Raging_Vortex.png'
import c2 from './Constellation_Uprising_Whirlwind.png'
import c3 from './Constellation_Sweeping_Gust.png'
import c4 from './Constellation_Cherishing_Breezes.png'
import c5 from './Constellation_Vortex_Stellaris.png'
import c6 from './Constellation_Interwinded_Winds.png'
import normal from './Talent_Foreign_Ironwind.png'
import skill from './Talent_Palm_Vortex.png'
import burst from './Talent_Gust_Surge.png'
import passive3 from './Talent_Slitting_Wind.png'
import passive2 from './Talent_Second_Wind.png'
import ElementalData from '../../ElementalData'
import Stat from '../../../Stat'
import formula, { data } from './data'
import { getTalentStatKey, getTalentStatKeyVariant } from "../../../Build/Build"

const char = {
  name: "Traveler (Anemo)",
  cardImg: card,
  thumbImg: thumb,
  star: 5,
  elementKey: "anemo",
  weaponTypeKey: "sword",
  gender: "F/M",
  constellationName: "Viatrix",//female const
  titles: ["Outlander", "Honorary Knight"],
  baseStat: data.baseStat,
  specializeStat: data.specializeStat,
  formula,
  talent: {
    auto: {
      name: "Foreign Ironwind",
      img: normal,
      infusable: false,
      document: [{
        text: <span><strong>Normal Attack</strong> Perform up to 5 rapid strikes.</span>,
        fields: data.normal.hitArr.map((percentArr, i) =>
        ({
          text: `${i + 1}-Hit DMG`,
          formulaText: (tlvl, stats) => <span>{percentArr[tlvl]}% {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
          formula: formula.normal[i],
          variant: (tlvl, stats) => getTalentStatKeyVariant("normal", stats),
        }))
      }, {
        text: <span><strong>Charged Attack</strong> Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</span>,
        fields: [{
          text: "Charged 1-Hit DMG",
          formulaText: (tlvl, stats) => <span>{data.charged.hit1[tlvl]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
          formula: formula.charged.hit1,
          variant: (tlvl, stats) => getTalentStatKeyVariant("charged", stats),
        }, {
          text: "Charged 2-Hit DMG",
          formulaText: (tlvl, stats) => <span>{data.charged.hit2[tlvl]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
          formula: formula.charged.hit2,
          variant: (tlvl, stats) => getTalentStatKeyVariant("charged", stats),
        }, {
          text: "Stamina Cost",
          value: "20",
        }]
      }, {
        text: <span><strong>Plunging Attack</strong> Plugnes from mid-air to strike the ground below, damaing enemies along the path and ealing AoE DMG upon impact.</span>,
        fields: [{
          text: "Plunge DMG",
          formulaText: (tlvl, stats) => <span>{data.plunging.dmg[tlvl]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
          formula: formula.plunging.dmg,
          variant: (tlvl, stats) => getTalentStatKeyVariant("plunging", stats),
        }, {
          text: "Low Plunge DMG",
          formulaText: (tlvl, stats) => <span>{data.plunging.low[tlvl]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
          formula: formula.plunging.low,
          variant: (tlvl, stats) => getTalentStatKeyVariant("plunging", stats),
        }, {
          text: "High Plunge DMG",
          formulaText: (tlvl, stats) => <span>{data.plunging.high[tlvl]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
          formula: formula.plunging.high,
          variant: (tlvl, stats) => getTalentStatKeyVariant("plunging", stats),
        }]
      }]
    },
    skill: {
      name: "Palm Vortex",
      img: skill,
      document: [{
        text: <span>
          <p className="mb-2">
            Grasping the wind's might, you form a vortext of vacuum in your palm, causing continous <span className="text-anemo">Anemo DMG</span> to enemies in front of you. The vacuum vortext explodes when the skill duration ends, causing a greater amount of Anemo DMG over a larger area.
          </p>
          <p className="mb-2">
            <strong>Hold:</strong> DMG and AoE will gradually increase.
          </p>
          <p>
            <strong>Elemental Absorption:</strong> If the votext comes into contact with <span className="text-hydro">Hydro</span>/<span className="text-pyro">Pyro</span>/<span className="text-cryo">Cryo</span>/<span className="text-electro">Electro</span> elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use.
          </p>
        </span>,
        fields: [{
          text: "Initial Cutting DMG",
          formulaText: (tlvl, stats) => <span>{data.skill.initial_dmg[tlvl]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.initial_dmg,
          variant: (tlvl, stats) => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "Max Cutting DMG",
          formulaText: (tlvl, stats) => <span>{data.skill.initial_max[tlvl]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.initial_max,
          variant: (tlvl, stats) => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "Initial Storm DMG",
          formulaText: (tlvl, stats) => <span>{data.skill.storm_dmg[tlvl]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.storm_dmg,
          variant: (tlvl, stats) => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "Max Storm DMG",
          formulaText: (tlvl, stats) => <span>{data.skill.storm_max[tlvl]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
          formula: formula.skill.storm_max,
          variant: (tlvl, stats) => getTalentStatKeyVariant("skill", stats),
        }, {
          text: "Base CD",
          value: "5s",
        }, {
          text: "Max Charging CD",
          value: "8s",
        }, (c, a) => a >= 3 && {
          text: "Reduce DMG taken while casting",
          value: "10%",
        }],
      }],
    },
    burst: {
      name: "Gust Surge",
      img: burst,
      document: [{
        text: <span>
          <p className="mb-2">
            Guiding the path of the wind currents, you summon a forward-moving tornado that pulls objects and opponents towards itself, dealing continous <span className="text-anemo">Anemo DMG</span>.
          </p>
          <p className="mb-2">
            <strong>Elemental Absorption:</strong> If the tornado comes into contact with <span className="text-hydro">Hydro</span>/<span className="text-pyro">Pyro</span>/<span className="text-cryo">Cryo</span>/<span className="text-electro">Electro</span> elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use.
          </p>
        </span>,
        fields: [{
          text: "Tornado DMG",
          formulaText: (tlvl, stats) => <span>{data.burst.dmg[tlvl]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
          formula: formula.burst.dmg,
          variant: (tlvl, stats) => getTalentStatKeyVariant("burst", stats),
        }, {
          text: "Duration",
          value: "6s",
        }, {
          text: "CD",
          value: "15s",
        }, {
          text: "Energy Cost",
          value: 60,
        }, (c, a) => c >= 6 && {
          text: <span>Enemy <span className="text-anemo">Anemo RES</span> decrease</span>,
          value: "20%"
        }],
        conditional: (["hydro", "pyro", "cryo", "electro"]).map(eleKey => ({
          type: "character",
          conditionalKey: "Absorption",
          condition: <span><span className={`text-${eleKey}`}><b>{ElementalData[eleKey].name}</b></span> Absorption</span>,
          sourceKey: "Traveler (Anemo)",
          maxStack: 1,
          fields: [{
            text: "Absorbtion DMG",
            formulaText: (tlvl, stats) => <span>{data.burst.ele_dmg[tlvl]}% {Stat.printStat(`${eleKey}_burst_${stats.hitMode}`, stats)}</span>,
            formula: formula.burst[`${eleKey}_dmg_bonus`],
            variant: eleKey
          }, (c, a) => c >= 6 && {
            text: <span>Enemy <span className={`text-${eleKey}`}>{ElementalData[eleKey].name} RES</span> decrease</span>,
            value: "20%"
          }]
        }))
      }],
    },
    passive2: {
      name: "Second Wind",
      img: passive2,
      document: [{
        text: <span>Palm Vortext kills regenerate 2% HP for 5s. This effect can only occur once every 5s</span>,
        fields: [{
          text: "Heal per second",
          formulaText: (tlvl, stats) => <span>2% * {Stat.printStat("finalHP", stats)} * {Stat.printStat("heal_multi", stats)}</span>,
          formula: formula.passive2.heal,
          variant: "success",
        }]
      }]
    },
    passive3: {
      name: "Slitting Wind",
      img: passive3,
      document: [{
        text: <span>The last hit of a Normal Attack combo unleases a wind blade, dealing 60% of ATK as <span className="text-anemo">Anemo DMG</span> to all opponents in its path.</span>,
        fields: [{
          text: "Anemo Auto",
          formulaText: (tlvl, stats) => <span>60% * {Stat.printStat("finalATK", stats)}</span>,
          formula: formula.passive3.windAuto,
          variant: (tlvl, stats) => getTalentStatKeyVariant("normal", stats, true),
        }]
      }]
    },
    constellation1: {
      name: "Raging Vortext",
      img: c1,
      document: [{ text: <span>Palm Vortex pulls in enemies within a 5m radius.</span> }]
    },
    constellation2: {
      name: "Uprising Whirlwind",
      img: c2,
      document: [{
        text: <span>Increases Energy Recharge by 16%.</span>
      },
      (con) => con >= 2 && {
        type: "character",
        sourceKey: "Traveler (Anemo)",
        maxStack: 1,
        stats: {
          enerRech_: 16,
        }
      }
      ]
    },
    constellation3: {
      name: "Sweeping Gust",
      img: c3,
      document: [{ text: <span>Increases the Level of <b>Gust Surge</b> by 3. Maximum upgrade level is 15.</span> }],
      talentBoost: { burst: 3 }
    },
    constellation4: {
      name: "Cherishing Breeze",
      img: c4,
      document: [{ text: <span>Reduces DMG taken while casting <b>Palm Vortex</b> by 10%.</span> }]
    },
    constellation5: {
      name: "Vortext Stellaris",
      img: c5,
      document: [{ text: <span>Increases the Level of <b>Palm Vortex</b> by 3. Maximum upgrade level is 15.</span> }],
      talentBoost: { skill: 3 }
    },
    constellation6: {
      name: "Intertwined Winds",
      img: c6,
      document: [{ text: <span>Targets who take DMG from <b>Gust Surge</b> have their <span className="text-anemo">Anemo RES</span> decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.</span> }]
    },
  }
};
export default char;
