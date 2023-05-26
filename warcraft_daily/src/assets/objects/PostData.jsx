import fyrak from "../../assets/media/fyrakk-bg.jpg";
import dragonriding from "../../assets/media/dragonriding-bg.jpg";
import augmentationevoker from "../../assets/media/augmentationevoker-bg.jpg";
import gearupgrade from "../../assets/media/gearupgrade-bg.jpg";
import greatvault from "../../assets/media/greatvault-bg.jpg";
import catalyst from "../../assets/media/catalyst-bg.jpg";
import blooddk from "../../assets/media/death-knight-blood.jpg";
import frostdk from "../../assets/media/death-knight-frost.jpg";
import unholydk from "../../assets/media/death-knight-unholy.jpg";
import frostmage from "../../assets/media/mage-frost.jpg";
import retributionpaladin from "../../assets/media/paladin-retribution.jpg";
import restorationshaman from "../../assets/media/shaman-restoration.jpg";
import synthaxisicon from "../../assets/media/synthaxisicon.jpg";
import alexaicon from "../../assets/media/alexaicon.jpg";
import xristiasicon from "../../assets/media/xristiasicon.jpg";
import perkypugicon from "../../assets/media/perkypugicon.jpg";

const allPosts = [
  {
    id: 1,
    image: fyrak,
    category: "Events",
    title: "Fyrakk Assaults",
    author: "Synthaxis",
    authorPhoto: synthaxisicon,
    position: "Co-CEO",
    date: "May 1, 2023",
    description:
      "Fyrakk Assaults are one way of obtaining gear for alts in Patch 10.1, Embers of Neltharion, as well as a way to obtain Drake's Shadowflame Crest to upgrade lower gear to ilvl424.",
    subTitle1: "Why Should I Participate in Fyrakk Assaults?",
    subText1:
      "Fyrakk Assaults are one way of obtaining gear for alts in Patch 10.1, Embers of Neltharion, as well as a way to obtain Drake's Shadowflame Crest to upgrade lower gear to ilvl424.",
    subTitle2: "Unlocking Fyrakk Assaults",
    subText2:
      "Fyrakk Assaults are first unlocked once you complete Chapter 3 of the Patch 10.1 campaign questline, The Ancient Bargain. Once this chapter is done and Fyrakk leaves Zaralek Cavern, a Kalecgos Mirror Image offers the quest Fyrakk's Forces, which serves as a breadcrumb directing you to an assault area, called a Suffusion Camp.    After you unlock Fyrakk Assaults, the Dragon Isles world map will have a new Fyrakk-themed icon, showing which zone the Primal Incarnate is attacking. Additionally, Fyrakk Assaults are an account-wide unlock, which means you only need to unlock them once for your entire account to gain access to them.",
    subTitle3: "Fyrakk Assault Basics",
    subText3:
      "Once you approach the area assaulted by Fyrakk, the atmosphere will change dramatically, with the skies turning fiery orange and the area surrounded by Primalist forces. It is a striking change, especially when compared to more cool-colored areas like the snowy plains of the Azure Span.",
  },
  {
    id: 2,
    image: dragonriding,
    category: "Guides",
    title: "Dragon Riding",
    author: "Jahel",
    authorPhoto: alexaicon,
    position: "Community Manager",
    date: "May 7, 2023",
    description:
      "In this guide, we delve through the very basics of Dragonriding, so you can learn the ins and outs of the system and become a better rider!",
    subTitle1: "How To Ride Your Dragon - Dragonriding Basics in Dragonflight",
    subText1:
      "Dragonriding is one of the new systems coming in Dragonflight, a new flying system that allows you to fly much faster than usual. Although players go through a tutorial when first learning how to Dragonride, you might still be left with questions on how the system works. In this guide, we delve through the very basics of Dragonriding, so you can learn the ins and outs of the system and become a better rider!",
    subTitle2: "Learning your Dragonriding Mounts",
    subText2:
      "Players will receive their Dragonriding mounts from completing main storyline quests in the Dragon Isles. There are five Dragonriding mounts, and there are no differences between them besides appearance. Like most mounts, Dragonriding mounts are account-wide, and once learned alts on your character can immediately Dragonride in the Dragon Isles. You currently can only use Dragonriding mounts in the Dragon Isles - Attempting to mount a Dragonriding mount outside the Dragon Isles will give you an error message.",
    subTitle3: "Dragonriding Basics",
    subText3:
      "There are physics involved into Dragonriding: You will gain more speed when propelling yourself downwards, and lose speed when moving upwards. Using Vigor abilities will help you gain momentum. If you spend too long in the air without attempting to gain momentum, your mount will lose speed and eventually run out of steam. When this happens, your mount will slowly land to the ground. Because of this, AFKing in the air while Dragonriding is not possible.",
  },

  {
    id: 3,
    image: augmentationevoker,
    category: "Classes",
    title: "Augmentation Evoker",
    author: "Elethriel",
    authorPhoto: xristiasicon,
    position: "Creative Director",
    date: "May 12, 2023",
    description:
      "Augmentation Evokers deliver their damage in a wholly unique way. They act as force multipliers, increasing their group's capabilities (and damage output) significantly.",
    subTitle1:
      "First Impressions of Augmentation Evoker - A Healer Perspective",
    subText1:
      "The 3rd Evoker specialization Augmentation has finally arrived with the first build of the 10.1.5 PTR. We asked our Evoker guide writers for a hands-on first impression of Augmentation to really break down what this new support DPS class has to offer and how it differs from Devastation and Preservation. ",
    subTitle2: "Introduction to Key Spells & Mechanics",
    subText2:
      "As an Augmentation Evoker you'll spend most of your rotation putting up group buffs and then trying to extend them for as long as possible. There's also Symbiotic Bloom, Motes of Possibility, Inferno's Blessing, Bestow Weyrnstone and all of Evokers regular utility like Time Spiral, Zephyr, Blessing of the Bronze and more. The Augmentation spec tree is filled to the brim with utility to the point where it can be tough to find many personal damage increases.",
    subTitle3: "A Simple Rotation",
    subText3:
      "You're basically playing a slightly easier version of the Devastation rotation but without some of the flair. You run out of your big buttons quite quickly and spend quite a lot of your rotation casting filler. We don't need every spec to be ultra complex, but Augmentation is maybe a little too simple right now. There's a chance that they feel being a support spec is already sufficient complexity but as we'll discuss below, Augmentations DPS-support abilities feel very passive. There's maybe room to expand the gameplay loop a little bit, or maybe to include more core support abilities that require active use like Prescience.",
  },
  {
    id: 4,
    image: gearupgrade,
    category: "Seasons",
    title: "Item Level & Gear Upgrades",
    author: "Perky, The Pug",
    authorPhoto: perkypugicon,
    position: "Dog",
    date: "May 17, 2023",
    description:
      "You can upgrade any current season piece of gear when you obtain it as long as you have the required materials; no unlock is required. However, while completing the first chapter of the Patch 10.1 campaign, you'll have a brief tutorial about the upgrade system, which provides a couple of free materials.",
    subTitle1: "How to Unlock Gear Upgrades",
    subText1:
      "You can upgrade any current season piece of gear when you obtain it as long as you have the required materials; no unlock is required. However, while completing the first chapter of the Patch 10.1 campaign, you'll have a brief tutorial about the upgrade system, which provides a couple of free materials.",
    subTitle2: "Upgrade Requirements",
    subText2:
      "When upgrading an item, you must spend Flightstones and a certain crest to increase its item level. Each step will cost you one crest and a number of Flightstones. The number of Flightstones depends on the item level of the item and item slot, with weapons costing more Flightstones to be upgraded than bracers or gloves, for instance. There are discounts that reduce the number of Flightstones and crests required to upgrade items.",
    subTitle3: "Flightstones Discounts",
    subText3:
      "For a given slot, once you obtain gear of a certain item level, either from upgrading or from drops, all future upgrades will have a 60% discount on their Flightstone cost. This discount is account-wide. Rings and Trinkets require two of a certain item level to unlock the discount.",
  },
  {
    id: 5,
    image: greatvault,
    category: "Seasons",
    title: "The Great Vault",
    author: "Jahel",
    authorPhoto: alexaicon,
    position: "Community Manager",
    date: "May 2, 2023",
    description:
      "The Great Vault is a weekly reward chest, providing players with an extra piece of gear for completing activities in Raids, Mythic+, and PvP. In this guide, we will explain the objectives you must complete to unlock Great Vault rewards, how to improve the iLevel of your Great Vault rewards, and what your options are if you don't like your choices.",
    subTitle1: "The Great Vault: Dragonflight Weekly Reward Chest",
    subText1:
      "Completing Raid, Mythic+, and PvP objectives each week adds an item to your Great Vault. Once a week, after the weekly reset, you will be able to open the Great Vault and select one item from the items that were added to your Vault the previous week. These items are random selections from the loot tables of the content that you have completed. Note that any earned loot slot has a chance to drop a Tier Piece. This means that if you earn a piece of M+ or PvP loot, that piece has a chance to be Tier Gear even if you have not completed a raid. Once you complete a Great Vault objective, you will not be able to choose you reward until the next weekly reset.",
    subTitle2: "The Great Vault: Raid Objectives in Dragonflight",
    subText2:
      "There are three Great Vault objectives for raiding. These require defeating Aberrus bosses each week. You can defeat bosses on any difficulty level; the rewards that are added to your Vault are from the loot tables of the difficulty that you complete. If you complete an objective in Raid Finder, expect Raid Finder loot. If you complete an objective in Mythic, expect Mythic loot.",
    subTitle3: "The Great Vault: PvP Objectives in Dragonflight",
    subText3:
      "Once again, keeping in mind that you will be able to choose only one item and that completing objectives increases the number items from which you get to choose, completing PvP objectives adds Rated PvP options to your Great Vault. The item level of your reward depends on the highest rating you achieved that week.",
  },
  {
    id: 6,
    image: catalyst,
    category: "Classes",
    title: "Revival Catalyst Guide",
    author: "Synthaxis",
    authorPhoto: synthaxisicon,
    position: "Co-CEO",
    date: "May 16, 2023",
    description:
      "The Revival Catalyst allows players to turn in a non-set piece gear item and receive a set piece of the same item level in return. This guide covers all you need to know about the Catalyst, including what it is, where it is, what you need to use it, and what it can do for you.",
    subTitle1: "What is the Revival Catalyst in Dragonflight?",
    subText1:
      "The Revival Catalyst allows you to convert non-tier gear into an equivalent item level and gear slot Tier piece. Tier slots cannot be made from crafted gear. The Catalyst requires Renascent Shadowflame charges to use. Renascent Shadowflame charges are gained passively each week, account-wide, up to a maximum of 6.",
    subTitle2: "Unlocking the Revival Catalyst",
    subText2:
      "In order to unlock the Revival Catalyst, you must pick up the quest Reviving the Machine from Watcher Koranos in Valdrakken.",
    subTitle3: "How to Use the Revival Catalyst in Dragonflight",
    subText3:
      "The Revival Catalyst uses Renascent Shadowflame charges which are capped at 6. Each week, you will passively gain a charge for all of your characters. The Revival Catalyst interface is very simple. Drag your item to the slot in the interface, or select your item by clicking the slot and selecting from the eligible options. Crafted gear is not eligible to be turned into tier. Assuming you have an available charge: Click Transform. Confirm. Profit.",
  },
  {
    id: 7,
    image: blooddk,
    category: "Classes",
    title: "Blood Death Knight",
    author: "Synthaxis",
    authorPhoto: synthaxisicon,
    position: "Co-CEO",
    date: "May 23, 2023",
    description:
      "As one of the six tank specializations in the game, our design as Blood Death Knights involves a reactive, optimization-driven playstyle: generating as much Runic Power as possible through spells and abilities.",
    subTitle1: "Blood Death Knight Overview",
    subText1:
      "Blood Death Knights are designed to excel in fights where damage is very high but not lethal; a large portion of our kit scales off damage taken, allowing us to heal for more and more as the damage taken gets higher. Obviously, this has a limit (when you die), but in the hands of a skilled player, this specialization is a force to be reckoned with. Overall, we are the jack-of-all-trades tank. We have answers to everything, although they may not be the most powerful answers individually. We bring a temporary immunity to magic debuffs and curses, a combat ress, and hands-down the best slow in the game ( Grip of the Dead).",
    subTitle2: "How to Play Blood Death Knight",
    subText2:
      "Blood Death Knight is the perfect introduction to microeconomics: you have a resource in very limited supply (Runes), and need to maintain a cost-inefficient but necessary maintenance buff with it ( Bone Shield) at a certain level; every other Rune you can spare, you can spend more effectively on Heart Strike to generate more Runic Power, which allows you to heal yourself and deal heavy single-target damage. If you manage to do this properly, you are rewarded with a cost reduction on Death Strike, and 10% haste!",
    subTitle3: "Best Races for Blood Death Knights",
    subText3:
      "Alliance Death Knights should strongly consider being a Night Elf, Dwarf (either regular or Dark Iron) or Human, although these are just slightly ahead due to their utility: Night Elves can proactively use Shadowmeld to avoid certain mechanics (within reason) and gain 2% passive additive dodge, Dwarves can cleanse all debuffs on themselves every 2min, and Humans can use Will to Survive as a second way to remove stuns while also gaining 2% more secondary stats. Horde Death Knights can be any race, but we have a slight preference towards Goblin the multiplicative passive haste buff is great, and Rocket Jump comes in handy to reposition and avoid mechanics that feature unavoidable knockbacks.",
  },
  {
    id: 8,
    image: frostdk,
    category: "Classes",
    title: "Frost Death Knight",
    author: "Jahel",
    authorPhoto: alexaicon,
    position: "Community Manager",
    date: "April 16, 2023",
    description:
      "Frost Death Knight is a 2-hand/dual-wield, plate wearer DPS specialisation focusing on physical and magical damage. We can pump out huge hits with our beefed up Obliterates, breathe ice on our enemies with Breath of Sindragosa and Frostwyrm's Fury.",
    subTitle1: "Frost Death Knight Overview",
    subText1:
      "Frost Death Knight is a 2-hand/dual-wield, plate wearer DPS specialisation focusing on physical and magical damage. We can pump out huge hits with our beefed up Obliterates, breathe ice on our enemies with Breath of Sindragosa and Frostwyrm's Fury, and engulf our enemies in a blizzard with Remorseless Winter. We focus heavily on cleave damage, excelling in 2 target cleave.",
    subTitle2: "Basic Frost Death Knight Gameplay",
    subText2:
      "Looking to start playing your Frost Death Knight? Our starting guide provides all the information you're looking for, including the best talent builds, how to execute the proper rotation, and the best companion tools for your class with Macros, Addons, and Weak Auras.",
    subTitle3: "How to Gear a Frost Death Knight",
    subText3:
      "Gearing a Frost Death Knight can be fairly involved in Dragonflight, especially when optimizing for a wide variety of content. From Dungeons, to Raids, to Mythic+, there are many different ways you can gear, but, ultimately, you are looking for specific items or combination of them. Below you'll find information on how to gear a Frost Death Knight in Patch 10.1 including Best in Slot recommendations and Tier Set analysis.",
  },
  {
    id: 9,
    image: unholydk,
    category: "Classes",
    title: "Unholy Death Knight",
    author: "Perky, the Pug",
    authorPhoto: perkypugicon,
    position: "Dog",
    date: "January 3, 2023",
    description:
      "Unholy Death Knight is a 2-hand, plate wearer dps specialisation that focuses on diseases, pets and shadow damage. We summon armies of undead minions, infect our enemies with multiple different plagues and blow up packs of enemies in shadow damage.",
    subTitle1: "Unholy Death Knight Overview",
    subText1:
      "Unholy Death Knight is a 2-hand, plate wearer dps specialisation that focuses on diseases, pets and shadow damage. We summon armies of undead minions, infect our enemies with multiple different plagues and blow up packs of enemies in shadow damage. We are generally a very bursty spec both in Single Target and AoE.",
    subTitle2: "How to Play Unholy Death Knight",
    subText2:
      "Unholy spends Runes on Festering Strike and Scourge Strike to build and spend Festering Wounds on our targets. We spend our Runic Power on Death Coil and Epidemic and apply our Virulent Plague with Outbreak. We use cooldowns such as Army of the Dead, Apocalypse, Summon Gargoyle and Dark Transformation to summon and empower our minions.",
    subTitle3: "Basic Unholy Death Knight Gameplay",
    subText3:
      "Looking to start playing your Unholy Death Knight? Our starting guide provides all the information you're looking for, including the best talent builds, how to execute the proper rotation, and the best companion tools for your class with Macros, Addons, and Weak Auras.",
  },
  {
    id: 10,
    image: frostmage,
    category: "Classes",
    title: "Frost Mage",
    author: "Synthaxis",
    authorPhoto: synthaxisicon,
    position: "Co-CEO",
    date: "May 10, 2023",
    description:
      "Frost Mage is a cloth wearing ranged damage dealer that excels at dealing sustained damage against any number of stacked targets. It is designed around dealing frequent small bursts of damage with Shatter.",
    subTitle1: "Frost Mage Overview",
    subText1:
      "Frost Mage is a cloth wearing ranged damage dealer that excels at dealing sustained damage against any number of stacked targets. It is designed around dealing frequent small bursts of damage with Shatter, which are frequent enough that the specialization ends up having relatively sustained damage compared to most casters. In addition, Mage as a class has some of the most personal utility in the game, which gives them exceptional ability to survive dangerous situations that would either kill other classes thanks to mobility spells like Blink and defensive cooldowns like Ice Block.",
    subTitle2: "How to Play Frost Mage",
    subText2:
      "Although all Mage specs have some tools for mob management, Frost is still the one most able to control large numbers of enemies. Spells like Blizzard, Cone of Cold and Frozen Orb make slowing large numbers a simple task, with more crowd control available in Frost Nova and Freeze. However, we do lack hard control like stuns or disorients.",
    subTitle3: "Best Races for Frost Mage",
    subText3:
      "All races other than Dracthyr can be Mages. The race choice, outside of cutting-edge content, is mostly a cosmetic one. However, bonuses to critical strike damage are often quite strong for Frost Mages thanks to Shatter, which can make Tauren and Dwarf powerful options. Not sure what race to play? Below is a breakdown of each race for this spec among players with updated Wowhead Profiles. Data is updated once per week.",
  },
  {
    id: 11,
    image: retributionpaladin,
    category: "Classes",
    title: "Retribution Paladin",
    author: "Elethriel",
    authorPhoto: xristiasicon,
    position: "Creative Director",
    date: "May 24, 2023",
    description:
      "Retribution Paladins are holy crusaders, who use a two-handed weapon to turn the power of the light into powerful damaging abilities and bring justice and vengeance to their enemies.",
    subTitle1: "Retribution Paladin Overview",
    subText1:
      "The core of our rotation is centered around using abilities like Blade of Justice and Judgment to generate Holy Power, which is consumed to deal devastating damage with abilities like Templar's Verdict or Divine Storm. Although Paladin's mobility options are somewhat limited, you will have access to a large array of buffs for yourself and your party to help you throughout a fight, as well as strong defensive and healing capabilities for your role.",
    subTitle2: "Retribution Paladin Patch 10.0.7 Rework",
    subText2:
      "The recent rework to Retribution has had a pretty big impact on the spec. The talent tree has been completely reworked with most talents being replaced, and the gameplay has changed quite a bit too. Survivability is much, much stronger than before, with Divine Protection being a baseline ability along with Sanctified Plates as a very strong passive ability, buffing Ret's survivability from one of the worst among DPS specs to one of the best. Ret has changed quite a bit rotationally too, with the removal of Seraphim and the addition of a ton of new talents, making your burst windows require less setup and removing the less impactful buttons from your regular rotation.",
    subTitle3: "How to Play Retribution Paladin",
    subText3:
      "The core Ret gameplay is based around building and spending Holy Power, and doing it efficiently so that you don't end up with any gaps in your rotation. On top of that, there's many cooldowns that amplify your damage significantly that you can use to great effect.",
  },
  {
    id: 12,
    image: restorationshaman,
    category: "Classes",
    title: "Restoration Shaman",
    author: "Jahel",
    authorPhoto: alexaicon,
    position: "Community Manager",
    date: "February 14, 2023",
    description:
      "Restoration Shaman call upon the healing properties of water and their iconic totems to keep their group members alive using Mana as the primary resource. We can see far into the distance with Far Sight and have our own separate Hearthstone with Astral Recall.",
    subTitle1: "Restoration Shaman Overview",
    subText1:
      "Restoration Shaman call upon the healing properties of water and their iconic totems to keep their group members alive using Mana as the primary resource. We can see far into the distance with Far Sight and have our own separate Hearthstone with Astral Recall. We have a wide range of spells and tools to do our job, most of them being more effective when the group stacks closely together. We have some supportive Healing over Time spells, and decent single target heals. This is accompanied by strong cooldowns which can get you out of dangerous situations easily, quite a bit of utility, and the ability to restore Mana to ourselves and allies.",
    subTitle2: "Restoration Shaman Talent Trees in Dragonflight Season 2",
    subText2:
      "Dragonflight brought with it huge changes to talents, bringing new talent trees to life and allowing vast customization with them. We prepared dedicated guides with the best information about Talents, Talent Trees, and the best Talent Builds to use during Dragonflight Season 2.",
    subTitle3: "How to Gear a Restoration Shaman",
    subText3:
      "Gearing a Restoration Shaman can be fairly involved in Dragonflight, especially when optimizing for a wide variety of content. From Dungeons, to Raids, to Mythic+, there are many different ways you can gear, but, ultimately, you are looking for specific items or combination of them. Below you'll find information on how to gear a Restoration Shaman in Patch 10.1 including Best in Slot recommendations and Tier Set analysis.",
  },
];

export default allPosts;
