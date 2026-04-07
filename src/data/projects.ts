import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "ghost-yantra",
    title: "Ghost Yantra",
    category: "2D Action Hack-and-Slash",
    description: "Lead programmer. Designed core gameplay systems including player controls, combo combat, parry logic, hit detection, and enemy AI.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2872630/capsule_616x353.jpg",
    tags: ["Gameplay Systems", "Enemy AI", "Editor Tools", "Event-Driven Architecture"],
    links: [
      { url: "https://store.steampowered.com/app/2872630/Ghost_Yantra/", text: "Steam" }
    ],
    imageOrder: "md:order-1",
    textOrder: "md:order-2"
  },
  {
    id: "time-master",
    title: "Time Master",
    category: "PC / Mobile",
    description: "Implemented systems for time rewind, puzzle sequencing, trial management, and cinematic flow. Optimized game flow and visuals using Unity tools.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1486080/capsule_616x353.jpg",
    tags: ["Puzzle Sequencing", "Time Rewind Mechanics", "Cinematic Flow", "Optimization"],
    links: [
      { url: "https://store.steampowered.com/app/1486080/Time_Master/", text: "Steam" },
      { url: "https://apps.apple.com/us/app/time-master-pocket-edition/id1663921844", text: "App Store" }
    ],
    imageOrder: "md:order-2",
    textOrder: "md:order-1"
  },
  {
    id: "flowrecall",
    title: "FlowRecall Pro",
    category: "Unity Editor Tool",
    description: "A Unity Editor tool for selection history, favorites, and scene navigation. Built a custom UI with drag-and-drop support and persistent tracking.",
    image: "https://assetstorev1-prd-cdn.unity3d.com/key-image/4ace0a03-c4ee-447a-82d7-724d963fd5a4.png",
    tags: ["Editor Scripting", "UI/UX", "Custom Serialization", "Tooling"],
    isAsset: true,
    links: [
      { url: "https://assetstore.unity.com/packages/tools/utilities/flowrecall-pro-selection-history-favorites-324610", text: "View on Asset Store" }
    ],
    imageOrder: "md:order-1",
    textOrder: "md:order-2"
  },
  {
    id: "the-rule-of-2",
    title: "The Rule of 2",
    category: "48-Hour Game Jam",
    description: "Pleasure for your eyes, suffering for your brain. A puzzle game developed entirely from scratch within a strict 48-hour game jam timeframe.",
    image: "https://img.itch.zone/aW1nLzcyODY1NDguanBlZw==/original/ihrGJ5.jpeg",
    tags: ["Rapid Prototyping", "Puzzle Design", "C#"],
    links: [
      { url: "https://rekaalgames.itch.io/the-rule-of-2", text: "Play on itch.io" }
    ],
    imageOrder: "md:order-2",
    textOrder: "md:order-1"
  },
  {
    id: "pong-redux",
    title: "PONG REDUX",
    category: "PC Game",
    description: "A remake of the classic 1975 game PONG. Features local multiplayer, CPU opponents, and fully physics-based ball movement for dynamic gameplay.",
    image: "https://img.itch.zone/aW1hZ2UvMjg3NjI5LzE0MDQwMDAuanBn/original/KdVlfQ.jpg",
    tags: ["Local Multiplayer", "Physics", "C#"],
    links: [
      { url: "https://faisalazizi.itch.io/pong-redux", text: "View on itch.io" }
    ],
    imageOrder: "md:order-1",
    textOrder: "md:order-2"
  }
];
