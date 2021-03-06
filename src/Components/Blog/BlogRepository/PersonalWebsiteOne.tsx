import React from "react";
import SandBook from "../../../Assets/HomeComputerCropped.jpg";
import { BlogPreviewInfo } from "../BlogRegistry";
import beachFace from "../../../Assets/mdFace.png";
import { Link } from "react-router-dom";

export const CreatingPersonalWebsiteOneDetails: BlogPreviewInfo = {
  img: beachFace,
  alt: "Jensen Rice (Author) at the Beach",
  title: "From Sand Scultping To TypeScript: Making a Personal Website (Pt. 1)",
  category: "FUN",
  summary:
    "Making a personal website (and hoping to make it stand out) is a lot of work, but it can also be a lot of fun!",
  routeName: "creating-personal-website-one",
  date: "2/19/2021",
};

const CreatingPersonalWebsiteOne = () => {
  return (
    <div className="text-lg max-w-3xl mx-4 md:mx-auto">
      <div className="text-3xl text-blue-800 font-semibold mb-8 mt-8 text-center">
        Creating a Personal Website, Part 1
      </div>
      <img src={SandBook} alt="Sandbook" />
      <div className="text-4xl text-blue-700 mb-8 mt-8 text-center">Idea</div>
      <div className="flex flex-col space-y-4">
        <div>
          Once I decided on a personal website I knew I wanted the homepage to
          be aesthetic. It's the landing point for anyone coming to the website
          and the best chance to impress visitors. This is what I'm
          rationalizing in my head, but really I just wanted a cool homepage.
        </div>
        <div>
          I'm not particularly talented artistically - if I set my mind to
          something I can usually learn it and do an okay job with it, but I
          certainly wasn't going to be wowing anyone with my own art. With this
          in mind, I was set on using a photo for my homepage.
        </div>
        <div>
          The first idea to take root in my head was a photo of me diving off a
          cliff and having the navigation buttons hoverinig around me in an
          animated semi circle. The below picture isn't quite what I had in
          mind, but it's close enough that you get the idea.
        </div>
      </div>
      <div className="space-y-4">
        <img
          className="h-80 mx-auto my-8"
          src="/images/blog/website/cliffDive.jpg"
          alt="Man diving off cliff"
        />
        <div>
          I took my idea over to Discord, where Rocket League was on the docket
          for night, and brainstormed with my friend Trey, a conversation which
          resulted in a stunning transformation for the diving man above.
        </div>
        <img
          className="h-80 mx-auto my-8"
          src="/images/blog/website/manyMenCliffDive.jpg"
          alt="Clone army diving off cliff"
        />
        <div>
          We talked about the diving off the cliff idea, but ran into the issues
          of:
          <ul className="list-inside list-disc ml-6">
            <li>It's cold out. (December)</li>
            <li>We need a cliff. (Florida) </li>
            <li>
              We have work. (It would require at least a day trip to make it to
              a cliff)
            </li>
          </ul>
        </div>
        <div>
          Trey, however, had been looking at sandsculpting lately, and once that
          idea came up we quickly arrived at the idea of a sand sculpted
          computer. You can see a couple of the images we searched up online.
        </div>
        <div className="flex my-8 flex-col md:flex-row mx-auto md:space-x-5 h-60">
          <img
            src="/images/blog/website/fakeSandComputer.jpg"
            alt="Digital Sand Computer"
          />
          <img
            src="/images/blog/website/gotMail.jpg"
            alt="You've got mail sand computer"
          />
        </div>
        <div>
          We live in Clearwater, so access to the beach wasn't a problem, though
          our lack of sand sculpting expertise and tools were. Trey, however,
          acquired a couple of buckets, a spatula for flipping hamburgers, and a
          set of cheap clay sculpting utensils. I brought along a cardboard box
          I had recently used to move with and we had the tools needed to craft
          a masterpiece.
          <br />
          <br />
          Our solution to expertise was even simpler, a couple of YouTube videos
          later and we were ready to take on the Sugar Sand festival that
          Clearwater Beach holds every year.
        </div>
        <img
          className="h-80 mx-auto my-8"
          src="/images/blog/website/impressiveSand.jpg"
          alt="Very impressive sand sculpture"
        />
        <div>
          Our day at the beach proceeded as planned. We had actually practiced a
          little on an afternoon earlier that week so we had some idea of how
          things would pan out. We had realized that one of the most important
          parts of sand sculpting is making sure that water sinks properly into
          the sand you're sculpting. To sufficently saturate the water and make
          it sturdy enough to sculpt and hold shape you need to pour water on
          top of the open bucket (or cardboard box) that holds the sand in, wait
          for it to settle, and then repeat several times.
        </div>
        <div>
          The sand was still on the dry side when we finally removed the
          cardboard box, but it was workable. I held much more faith in Trey's
          ability to sculpt and detail than in my own, so he took the lead on
          sculpting the sand computer and etching in the icons on the computer.
          The mailbox on the homepage was actually a last minute throw in, Trey
          and I thought that filling the bucket partially up with sand, putting
          water in, and then filling up another section of the bucket with sand
          and water on top and so on might produce better quality sand faster
          and we were right! The sand was good enough to move it over by the
          computer and remain standing despite it's overhang. It made it into
          the final video and website as a mailbox... thing? Hopefully the
          envelope icon is obvious enough!
        </div>
        <div>
          We waited for the sun to come into a better position for the video on
          the homepage. We took a couple of pictures in the meantime, making
          sure we had a backup in case something happened to the sand computer
          while we were waiting. You can see one of the pictures in the about
          section on the homepage and you can see a side by side comparison of
          Bill Gates and I below. Afterwards, a couple of our friends joined us
          at the beach and we played spikeball to kill time.
        </div>
        <img
          className="h-80 mx-auto my-8"
          src="/images/blog/website/billGates.png"
          alt="Bill Gates"
        />
        <img
          className="h-80 mx-auto my-8"
          src="/images/blog/website/croppedBeachGates.JPG"
          alt="Bill Gates Parody"
        />
        <div>
          When the sun was in just the right spot, we filmed the video on the{" "}
          <Link className="underline hover:text-blue-500" to="/">
            homepage
          </Link>{" "}
          and wrapped up our day at the beach. That's it for this post! On the
          next I'll go into the technical decisions and design of the website.
        </div>
      </div>
    </div>
  );
};

export default CreatingPersonalWebsiteOne;
