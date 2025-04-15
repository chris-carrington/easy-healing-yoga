import './About.css'
import { svg_lotus } from '@src/lib/svgs'


export function About () {
  return <>
    <div class="about bg">
      {svg_lotus()}
      <div class="title">Your Practice Begins Here with Easy Healing Yoga</div>

      <div class="description">
        <p>The pages and information on my website are expanding as I figure out how to create a greater presence Online and with my evolving newsletter! Keep checking as there are many new and exciting developments and collaborations with a variety of different themes (Cosmic Astrology, Rhythm and Drumming, Creative Writing....) in my upcoming Yoga Programs and Pilgrimages to Peru, Bolivia, and Nicaragua..</p>
        <p>Also watch for the latest updates on our Program of bringing Native American Andean Shaman and Interpreters to the North State in the late summer/early fall of 2015! Working doing our part bringing in the full realization of the Prophecy of the Eagle (North America, the Path of Technology) and the Condor (South America- Ancestral Path of the Heart). We will be offering Despacho Ceremonies and hikes up in the mountains, cultural exchange presentations, Andean textiles, healing sessions and more.</p>
        <p>Check out my Yoga Schedule page to find out when and where I will be teaching in Redding, California for the summer and early Fall months of July, August and September, 2015.</p>
        <p>Namaste! Enjoy!</p>
      </div>

      <button class="btn white" type="button">More About Us</button>
    </div>
  </>
}
