import React from "react";
import SandBook from "../../../Assets/HomeComputerCropped.jpg";
import { BlogPreviewInfo } from "../BlogRegistry";
import beachFace from "../../../Assets/mdFace.png";

export const CreatingPersonalWebsiteOneDetails: BlogPreviewInfo = {
  img: beachFace,
  alt: "Jensen Rice (Author) at the Beach",
  title: "From Sand Scultping To TypeScript: Making a Personal Website",
  category: "TECHNICAL / FUN",
  summary:
    "Making a personal website (and hoping to make it stand out) is a lot of work, but it can also be a lot of fun!",
  routeName: "creating-personal-website-one",
  date: "2/19/2021",
};

const CreatingPersonalWebsiteOne = () => {
  return (
    <div>
      <h2>Creating a Personal Website</h2>
      <img src={SandBook} />
      <h2>Idea</h2>
      <div>
        Once I decided on a personal website I knew I wanted the homepage to be
        aesthetic. It's the landing point for anyone coming to the website and
        the best chance to impress visitors. These the rational reasons for it,
        but mostly I just didn't want a lame homepage.
      </div>
      <div>
        I'm not particularly talented artistically - if I set my mind to
        something I can usually learn it and do an okay job with it, but I
        certainly wasn't going to be wowing anyone with my own art. With this in
        mind, I was set on using a photo for my homepage.
      </div>
      <div>
        The first idea to take root in my head was a photo of me diving off a
        cliff and having the navigation buttons hoverinig around me in an
        animated semi circle. The below picture isn't quite what I had in mind,
        but it's close enough that you get the idea.
      </div>
      <img alt="Man diving off cliff" />
      <div>
        I took my idea over to Discord, where Rocket League was on the docket
        for night, and brainstormed with my friend Trey, a conversation which
        resulted in a stunning transformation for the diving man above.
      </div>
      <img alt="Clone army diving off cliff" />
      <div>
        We talked about the diving off the cliff idea, but ran into the issues
        of: * It's cold out. (December) * We need a cliff. (Florida) * We have
        work. (It would require at least a day trip to make it to a cliff) Trey,
        however, had been looking at sandsculpting lately, and once that idea
        came up we quickly arrive at a sand sculpted computer. You can see a
        couple of the images we searched up online.
      </div>
      <img alt="Digital Sand Computer" />
      <img alt="You've got mail sand computer" />
      <div>
        We live in Clearwater, so access to the beach wasn't a problem, though
        our lack of sand sculpting expertise and tools were. Trey, however,
        acquired a couple of buckets, a spatula for flipping hamburgers, and a
        set of cheap clay sculpting utensils. I brought along a cardboard box I
        had recently used to move with and we had the tools needed to craft a
        masterpiece.
        <br />
        <br />
        Our solution to expertise was even simpler, a couple of YouTube videos
        later and we were ready to take on the Sugar Sand festival that
        Clearwater Beach holds every year.
      </div>
      <img alt="Very impressive sand sculpture" />
      <div>
        Our day at the beach proceeded as planned. We had actually practiced a
        little on an earlier afternoon so we had some idea of how things would
        pan out. We had realized that one of the most important parts of sand
        sculpting is making sure that water sinks properly into the sand you're
        sculpting. To sufficently saturate the water and make it sturdy enough
        to sculpt and hold shape you need to pour water on top of the open
        bucket (or cardboard box) that holds the sand in, wait for it to settle,
        and then repeat several times.
        <br />
        <br />
      </div>
    </div>
  );
};

export default CreatingPersonalWebsiteOne;
