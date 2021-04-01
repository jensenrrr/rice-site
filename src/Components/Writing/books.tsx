import deus from "../../Assets/writing/DeusIcon.svg";
import rose from "../../Assets/writing/rose.svg";
import wand from "../../Assets/writing/wand.svg";
import trail from "../../Assets/writing/trail.svg";

import deusOne from "./Books/Deus/one";
import trailOne from "./Books/Trail/one";
import worldOne from "./Books/World/one";
import worldTwo from "./Books/World/two";
import worldThree from "./Books/World/three";
import worldFour from "./Books/World/four";
import roseOne from "./Books/Rose/one";
import roseTwo from "./Books/Rose/two";
import { FC } from "react";

import { DeusIcon, RoseIcon, WandIcon, TrailIcon } from "./BookIcons";

export interface BookInfo {
  name: string;
  title: string;
  themeColor: string;
  titleClasses?: string;
  genre: string;
  icon: string;
  iconRender: FC;
  status: string;
  chapters: JSX.Element[];
  summary: string;
}

export const books: Record<string, BookInfo> = {
  Deus: {
    name: "Deus",
    title: "Deus Ex Machina",
    themeColor: "#dedee0",
    titleClasses: "font-mono",
    genre: "Science Fiction",
    icon: deus,
    iconRender: DeusIcon,
    status: "In Progress",
    chapters: [deusOne],
    summary:
      "For hundreds of years the caretaker has worked the Deus, centuries without seeing another face and without hearing another voice. It is not hope that keeps him going, but resignation. When he activates the Deus for the third time in his life, he has no faith that his life's work will finally function. Nothing appears to happen, but the after effects of activating the Deus will lead him on a strange and human journey through the star sized Deus.",
  },
  Rose: {
    name: "Rose",
    title: "Rose Thorns",
    themeColor: "#fce7fa",
    genre: "Western Fantasy",
    icon: rose,
    iconRender: RoseIcon,
    status: "In Progress",
    chapters: [roseOne, roseTwo],
    summary:
      "Billy, a boy at the edge of manhood, helps his mother pay the bills and her debt by shining shoes on the streets of late nineteenth century New York. He and his brother, Jaeger, often hear heroic tales of the West from their Uncle, but when they're violently thrown into the world of their daydreams they'll discover the frontier is a harsh land. The Desert Rose a legend and myth of the American West. Stories often paint her as a ghost, a shade of death come to collect from the land of the living, and it is said that every story holds a kernel of truth. But who is the woman behind the tales and underneath the scars?",
  },
  World: {
    name: "World",
    title: "The World Outside",
    themeColor: "#F2D8FE",
    genre: "Harry Potter Fan Fiction",
    icon: wand,
    iconRender: WandIcon,
    status: "In Progress",
    chapters: [worldOne, worldTwo, worldThree, worldFour],
    summary:
      "Myles has never seen the world outside of the Orphanage, none of the orphans had. He has been there nearly 11 years now, though, and he's due to graduate soon. But he doesn't trust the caretaker or the unknown destination graduates are taken. Myles's escape leads him through a world of danger, but one in which he finds family, friends, and magic. (Next Gen / Hogwarts Fic)",
  },
  Trail: {
    name: "Trail",
    title: "Trail of Names",
    genre: "Heroic Fantasy",
    themeColor: "#E5FED8",
    icon: trail,
    iconRender: TrailIcon,
    status: "In Progress",
    chapters: [trailOne],
    summary:
      "Nameless, hurting, and without a clue to who he is or where he's from, a boy wakes in an eerie forest. Chased by hallucinations of delirium and aided by his only clue to his identity, a wooden figurine that he could've sworn had talked to him in the forest, he is rescued by local farmers after passing out from exhaustion and dehydration. Taken in by, and eventually named by, the local wise woman, Aulidirn settles in as her apprentice, learning the ways of the Mai, the Tribal wise men and women. His time with her, however, is only the first step of a meandering journey that will help him figure out who he is even as he searches for who he was.",
  },
};
