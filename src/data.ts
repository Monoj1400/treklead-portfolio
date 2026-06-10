import { Trek, TimelineEvent, LeadershipStory, Testimonial, FitnessRoutine, FutureGoal } from './types';

export const PERSONAL_INFO = {
  name: "Monoj Kumar B K",
  title: "Professional Trek Leader & Outdoor Facilitator",
  shortTitle: "Trek Leader • Facilitator • Coordinator",
  tagline: "Karnataka Trails Today. Himalayan Trails Tomorrow.",
  bio: "I am a passionate Trek Leader and Outdoor Facilitator based in Bengaluru, Karnataka. Combining my engineering background with my love for the wild, I lead expeditions that prioritize physical safety, environmental stewardship, and community bonding. My leadership philosophy is centered around resilience, inclusive coordination, and ecological awareness. I help tech-bound city dwellers rediscover raw wilderness with a safety-first approach, preparing myself to conquer Himalayan expedition heights in the very near future.",
  email: "monojkuamar0@gmail.com",
  location: "Bengaluru, Karnataka, India",
  instagram: "@monoj_kumar_b_k",
  linkedin: "monoj-kumar-b-k",
  phone: "+91 98765 43210", // Placeholder but look professional
  stats: {
    treksLed: 90,
    participantsGuided: 1500,
    yearsExp: 2,
    peaksExplored: 20,
    safetyRecord: "100%"
  }
};

export const DASHBOARD_METRICS = [
  { id: '1', label: 'Total Treks Led', value: '90+', icon: 'Compass', color: 'text-emerald-500' },
  { id: '2', label: 'Participants Guided', value: '150+', icon: 'Users', color: 'text-amber-500' },
  { id: '3', label: 'Sunrise Treks', value: '18', icon: 'SunDim', color: 'text-orange-500' },
  { id: '4', label: 'Overnight Treks', value: '12', icon: 'Moon', color: 'text-indigo-400' },
  { id: '5', label: 'Longest Trek', value: '22 km', icon: 'TrendingUp', color: 'text-sky-500' },
  { id: '6', label: 'Max Altitude Reached', value: '1,892 m', icon: 'Mountain', color: 'text-rose-500' },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "Early 2023",
    title: "The First Ascent",
    trekName: "Skandagiri & Makalidurga",
    description: "Began journey as an apprentice trek leader to study South Indian trail architectures, managing batches of 30+ trekkers under the supervision of state-certified guides.",
    imageUrl: "src/images/WhatsApp Image 2026-06-10 at 12.10.17 PM.jpeg",
    category: "Milestone"
  },
  {
    year: "Mid 2023",
    title: "Caving & Midnight Operations",
    trekName: "Antharagange & Kaiwara Betta",
    description: "Led complex technical night treks. Developed mastery in coordinating volcanic cave crawling, headlamp navigation, and midnight medical logistics.",
    imageUrl: "src/images/kaiwara.jpg",
    category: "Trek"
  },
  {
    year: "Late 2023",
    title: "Steep Rocky Slabs Coordination",
    trekName: "Savandurga & Shivagange",
    description: "Conquered extreme steep-gradient coordination. Guided massive batches of corporate employees across Asia's largest monoliths, managing slip hazards and hydration cycles.",
    imageUrl: "src/images/Shivagange.jpeg",
    category: "Trek"
  },
  {
    year: "Early 2024",
    title: "Transition to Western Ghats High Peaks",
    trekName: "Nethravathi Peak & Kurinjal",
    description: "Elevated leading credentials to technical forest reserves. Handled Karnataka forest department permits, severe monsoon mudflows, and pristine high-altitude ridge navigation.",
    imageUrl: "src/images/Nethravathi peak.jpg",
    category: "Milestone"
  },
  {
    year: "Late 2024",
    title: "Epic Grassland Leadership",
    trekName: "Kudremukha & Bandaje Falls",
    description: "Led multiple high-difficulty multi-day monsoon expeditions. Managed leech infestations, severe downpours, river crossings, and peak summit time windows.",
    imageUrl: "src/images/Kudremukha.jpg",
    category: "Trek"
  },
  {
    year: "Present Day",
    title: "Senior Outdoor Specialist",
    trekName: "Himalayan Training prep",
    description: "Currently structuring elite high-elevation training. Merging outdoor leadership protocols with software-based logistics models for advanced expedition planning.",
    imageUrl: "src/images/himalayan.png",
    category: "Certification"
  }
];

export const TREKS_DATA: Trek[] = [
  {
    id: 'nethravathi',
    name: "Nethravathi Peak",
    difficulty: "Moderate",
    distance: "16 km",
    duration: "1 Day (6-7 hours)",
    altitude: "1,520 m (4,986 ft)",
    elevationGain: "620 m",
    bestSeason: "June to November",
    myRole: "Lead Trek Coordinator for Western Ghats Forest Reserve batch",
    challengesFaced: "Encountered dense, zero-visibility fog at the ridge and high wind drafts pushing trekkers off-path. Soil was highly slippery due to recent unseasonal drizzles.",
    leadershipResponsibilities: [
      "Secured forest entry permits from Kudremukha Wildlife division.",
      "Formed a buddy system among the 27 participants to ensure nobody wandered into reserve zones.",
      "Synchronized walking paces by positioning weaker stamina hikers directly behind the lead, eliminating gaps."
    ],
    lessonsLearned: "Patience and constant check-ins build extreme confidence. In high-wind zones, keeping the group low and moving in a single compact file reduces wind drag and panic.",
    description: "Featuring rolling green meadows reminiscent of Swiss Alps, Nethravathi Peak is a conserved botanical heaven with absolute vertical ridge drops.",
    imageUrl: "src/images/IMG-20251130-WA0012.jpg",
    gallery: [
      "src/images/IMG-20250825-WA0132.jpg",
      "src/images/IMG-20250810-WA0162.jpg",
      "src/images/1000053087.jpeg"
    ],
    experienceStory: "Reaching the Nethravathi ridge was the highlight. The valleys on either side were submerged under an ocean of moving white clouds. My challenge was to keep participants focused on their step coordination while they were completely overwhelmed by the mesmerizing visuals."
  },
  {
    id: 'kudremukha',
    name: "Kudremukha Peak",
    difficulty: "Difficult",
    distance: "20-22 km",
    duration: "1 Day (9-10 hours)",
    altitude: "1,892 m (6,207 ft)",
    elevationGain: "880 m",
    bestSeason: "June to October (Monsoon specialty)",
    myRole: "Head Expedition Leader & Wilderness Safety Manager",
    challengesFaced: "Constant tropical downpours, dozens of active leech zones, and high river crossings where the water level rose 1.5 feet during our ascent.",
    leadershipResponsibilities: [
      "Conducted mandatory fitness checkups and gear inspection before setting off.",
      "Administered anti-leech safety procedures and carried specialized salt-spray solution.",
      "Engineered secure human-chain handholds to guide the team safely across swollen streams."
    ],
    lessonsLearned: "Always respect the local guidelines. If the river swells beyond absolute safety thresholds, a leader must be ready to abort immediately. Fortunately, our timed ascent avoided the flash floods.",
    description: "Named after its horseshoe-shaped peak, Kudremukha is a biodiversity hotspot with deep shola forests and majestic mist-laden green slope patterns.",
    imageUrl: "src/images/Kudremukha.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
    ],
    experienceStory: "The steep final 75-degree climb named 'Hombale' was brutal under heavy monsoon wind. Two female trekkers were about to give up due to muscle fatigue. By distributing their heavy packs among lead guides and chanting rhythm rhythmic breathing counts, we summitted successfully."
  },
  {
    id: 'bandaje',
    name: "Bandaje Falls",
    difficulty: "Difficult",
    distance: "18 km",
    duration: "2 Days (with hill-top camping)",
    altitude: "1,150 m (3,772 ft)",
    elevationGain: "700 m",
    bestSeason: "September to January",
    myRole: "Expedition Logistics & Basecamp Commander",
    challengesFaced: "Remote trail requiring thick jungle navigation. Cooking supplies and tentage weight had to be hauled uphill. Sensation of dehydration was high due to humidity.",
    leadershipResponsibilities: [
      "Divided the logistics load equally among assistant guides and set up rotating watch schedules.",
      "Drafted emergency evacuation map utilizing local trails in case of sudden animal encounters or falls.",
      "Administered strictly no-trace camp protocols on the falls headland."
    ],
    lessonsLearned: "Weight management is the difference between peak exhaustion and a successful multi-day. We transitioned to high-calorie lightweight dehydrated rations to save 8kg.",
    description: "An unbelievable trek passing through deep shade forest leading to a 200ft vertical waterfall edge overlooking the vast Dakshina Kannada hills.",
    imageUrl: "src/images/Bandaje2.jpg",
    gallery: [
      "src/images/Bandaje1.jpg",
      "src/images/Bandaje.jpg"
    ],
    experienceStory: "Sleeping beside the crashing roar of the Bandaje waterfall on Top and watching the sunset ignite the Arabian sea horizon in the far distance was mystical. Camp organization required absolute precision to keep campers away from the dangerous cliff edge."
  },
  {
id: 'tadiandamol',
name: "Tadiandamol Peak",
difficulty: "Moderate",
distance: "15 km",
duration: "1 Day (6-8 hours)",
altitude: "1,748 m (5,735 ft)",
elevationGain: "650 m",
bestSeason: "October to February",
myRole: "Trek Lead & Safety Coordinator",
challengesFaced: "Rapid weather changes near the summit, slippery grasslands during monsoon remnants, and maintaining group pacing across long exposed ridge sections required constant monitoring and communication.",
leadershipResponsibilities: [
"Conducted pre-trek safety briefings and fitness assessments.",
"Managed group pacing across forest trails and open grasslands.",
"Monitored weather conditions and adjusted movement plans accordingly.",
"Ensured hydration breaks and participant well-being throughout the trek.",
"Coordinated emergency response readiness and route navigation."
],
lessonsLearned: "Tadiandamol reinforced the importance of weather awareness, pace management, and maintaining team cohesion on long mountain routes. Leadership is not just about reaching the summit but ensuring every participant enjoys a safe and memorable journey.",
description: "The highest peak in Coorg and the third-highest peak in Karnataka, offering breathtaking panoramic views of the Western Ghats, rolling grasslands, dense shola forests, and mist-covered mountain ridges.",
imageUrl: "src/images/Tadiandamol2.jpeg",
gallery: [
"src/images/Tadiandamol.jpeg",
"src/images/tadiandamol1.jpeg"
],
experienceStory: "As our group approached the final ridge section, dense clouds rapidly engulfed the trail and visibility dropped significantly. Using predefined regrouping protocols, I gathered the team, reassessed conditions, and guided everyone safely to the summit. When the clouds briefly parted, the trekkers were rewarded with spectacular views of the Western Ghats stretching endlessly into the horizon. The experience highlighted how preparation and calm decision-making can transform uncertainty into an unforgettable mountain memory."
},
  {
    id: 'skandagiri',
    name: "Skandagiri Peak",
    difficulty: "Moderate",
    distance: "10 km",
    duration: "Night Trek (5-6 hours)",
    altitude: "1,450 m (4,757 ft)",
    elevationGain: "550 m",
    bestSeason: "Year-Round (Best on winters)",
    myRole: "Night Operations Specialist & Lead Planner",
    challengesFaced: "Leading in complete darkness with 40+ people with varying flashlight capacities. Steep, eroded rock faces that are highly prone to ankle twists.",
    leadershipResponsibilities: [
      "Checked headlamps and spare battery systems for all 42 attendees.",
      "Created 3 sub-batches led by experienced sweeps to ensure zero straying.",
      "Coordinated medical gear and heat packs for cold summit winds."
    ],
    lessonsLearned: "Night navigation requires a different spatial perspective. Leaders must overestimate trek duration and check up on physical fatigue levels twice as frequently.",
    description: "Also known as Kalavara Durga, it's famous for its dramatic sunrise above a thick sea of early morning low-altitude clouds.",
    imageUrl: "src/images/WhatsApp Image 2026-06-10 at 12.10.17 PM.jpeg",
    gallery: [
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80"
    ],
    experienceStory: "At 3:30 AM, a climber started exhibiting symptoms of mild vertigo on the narrow stair section. I took her to the inner safe wall, administered hot tea, guided her vision down her own boots, and escorted her carefully to the top to see the sunrise."
  },
  {
    id: 'makalidurga',
    name: "Makalidurga Hill",
    difficulty: "Moderate",
    distance: "8 km",
    duration: "1 Day (4-5 hours)",
    altitude: "1,117 m (3,665 ft)",
    elevationGain: "320 m",
    bestSeason: "September to February",
    myRole: "Trek Organizer & History Docent",
    challengesFaced: "The trail intersects a major active railway track. Hikers had to cross carefully. The route has minimal shaded spots making mid-day heat intense.",
    leadershipResponsibilities: [
      "Negotiated safe crossing patterns across the rail tracks with timed delays.",
      "Managed strict hydration intervals and carried oral-rehydration salt setups.",
      "Presented stories about the historical Vijayanagara fort ruins to engage trekkers."
    ],
    lessonsLearned: "A trek leader is also an educator. When trekkers are mentally engaged in historical stories, their metabolic exhaustion drops significantly.",
    description: "A scenic hill trek passing by a gorgeous lake and leading to ancient fort ruins sitting atop giant granite boulder faces.",
    imageUrl: "src/images/Makalidurga0.jpeg",
    gallery: [
      "src/images/Mkl01.jpeg",
      "src/images/mkl02.jpeg"
    ],
    experienceStory: "The fort gate was framed by an incredible view of the gun-shaped Gundamagere lake below. Watching the train chug along the tracks from the fortress viewport felt like looking at a miniature living model."
  },
 {
id: 'ettina-bhuja',
name: "Ettina Bhuja Peak",
difficulty: "Moderate",
distance: "10 km",
duration: "1 Day (5-6 hours)",
altitude: "1,300 m (4,265 ft)",
elevationGain: "450 m",
bestSeason: "June to February",
myRole: "Trek Lead & Ridge Safety Coordinator",
challengesFaced: "The final ridge section is steep and highly exposed to strong winds. During monsoon and post-monsoon months, the grass-covered trail becomes extremely slippery, requiring constant supervision of participant movement.",
leadershipResponsibilities: [
"Conducted pre-trek safety briefings and trail awareness sessions.",
"Managed group pacing through forest sections and steep ridge climbs.",
"Monitored weather conditions and adjusted movement based on visibility and wind intensity.",
"Ensured participants maintained safe distances on exposed sections of the trail.",
"Provided guidance and motivation to first-time trekkers during challenging ascents."
],
lessonsLearned: "Ettina Bhuja taught me that mountain leadership is about balancing adventure with safety. Proper pacing, clear communication, and situational awareness are critical when leading groups through exposed terrain.",
description: "A spectacular peak in the Western Ghats known for its distinctive ox-shoulder shape, rolling green ridges, panoramic valley views, and dramatic cloud formations. The summit offers breathtaking views of surrounding peaks including Kudremukha and Netravathi ranges.",
imageUrl: "src/images/et3.jpeg",
gallery: [
"src/images/et1.jpeg",
"src/images/et2.jpeg"
],
experienceStory: "As we approached the final summit ridge, dense mist rolled in and visibility dropped significantly. Several participants became hesitant due to the steep drop-offs on either side of the trail. I regrouped the team, reinforced safety instructions, and guided everyone steadily across the ridge. When the clouds eventually cleared, the entire group witnessed a stunning panorama of the Western Ghats, making the challenging climb one of the most memorable experiences of the trek."
}
,
  {
    id: 'kaiwara',
    name: "Kaiwara Betta",
    difficulty: "Moderate",
    distance: "9 km",
    duration: "1 Day (5 hours)",
    altitude: "1,114 m (3,654 ft)",
    elevationGain: "350 m",
    bestSeason: "October to March",
    myRole: "Tactical Navigation Lead",
    challengesFaced: "The trail gets overgrown frequently during the post-monsoon period, making off-trail confusion highly likely.",
    leadershipResponsibilities: [
      "Utilized offline satellite GPX trackers to maintain path precision.",
      "Set trail markers for trailing parties and clearing safety corridors.",
      "Coordinated with the local forest protection committee on monkey-aggression drills."
    ],
    lessonsLearned: "Never over-rely on memory for dynamic trails. Checking satellite GPX data ensures zero backtracking, reducing group frustration.",
    description: "Rich with dynamic boulder landscapes and spectacular bird-watching viewpoints, Kaiwara provides a gorgeous wilderness climb.",
    imageUrl: "src/images/kaiwara.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
    ],
    experienceStory: "At the summit plateaus, the wind was pushing clouds straight over the boulder faces. The feeling of loneliness and isolation from the chaotic city life below was extremely cathartic for our tech-worker clients."
  },
  {
    id: 'savandurga',
    name: "Savandurga Monolith",
    difficulty: "Difficult",
    distance: "6 km (Steep rock slab)",
    duration: "1 Day (4-5 hours)",
    altitude: "1,226 m (4,022 ft)",
    elevationGain: "400 m (Almost vertical)",
    bestSeason: "November to February (Strictly dry)",
    myRole: "Senior Safety Officer & Boulder Specialist",
    challengesFaced: "Savandurga is the largest monolith in Asia. Its 60-degree granite incline turns extremely slippery on minimal moisture, and there are no handholds or vegetative support.",
    leadershipResponsibilities: [
      "Enforced a strict restriction on poor grip footwear during early screening.",
      "Administered emergency safety ropes to assist tired trekkers on the monolith face.",
      "Maintained constant observation of the sky to abort instantly if rain clouds formed."
    ],
    lessonsLearned: "On steep monoliths, shoe-sole choice is the boundary of life and safety. I now send automated guidelines detailing sole friction profiles before this trek.",
    description: "An behemoth block of black granite rise that presents a high-octane horizontal scaling challenge for hikers.",
    imageUrl: "src/images/svd.jpg",
    gallery: [
      "src/images/svd1.jpgs"
    ],
    experienceStory: "A participant's shoe sole peeled off completely mid-slab in a steep section. I used high-tensile duct tape other tactical wraps from my backpack to bind the shoe securely to his foot, restoring total grip so he could climb down safely."
  },
  {
    id: 'shivagange',
    name: "Shivagange Hill",
    difficulty: "Moderate",
    distance: "7 km (Vertical rails)",
    duration: "1 Day (4 hours)",
    altitude: "1,368 m (4,488 ft)",
    elevationGain: "450 m",
    bestSeason: "October to February",
    myRole: "Group Dynamics & Monkey Drill Lead",
    challengesFaced: "Unbelievably aggressive monkeys along the safety railing stealing water bottles and bags, leading to panic on top of steep, narrow metal steps.",
    leadershipResponsibilities: [
      "Briefed trekkers on non-confrontational body language toward wildlife.",
      "Advised on stowing away food items inside bags and secured loose water carriers.",
      "Handled the bottlenecks on vertical metal ladders to avoid over-congestion."
    ],
    lessonsLearned: "Wildlife conflicts are easily avoided through strict operational discipline. By ensuring no transparent items or food bags were visible, the monkeys completely ignored our group.",
    description: "A prominent hill shaped like a Shiva Linga, featuring steep rock faces with steel railings on ladders lead to the top temple.",
    imageUrl: "src/images/Shivagange.jpeg",
    gallery: [
      "src/images/Antharagange.jpeg"
    ],
    experienceStory: "Near the summit, a crowd of pilgrims panicked due to a monkey fight on the steel ladder. I stepped onto the outer safety rail, calmed my climbers, created a physical safety block, and moved our trekking team out of the bottleneck in quiet, disciplined intervals."
  },
  {
    id: 'kuntibetta',
    name: "Kunti Betta",
    difficulty: "Moderate",
    distance: "6 km",
    duration: "Night Trek (4-5 hours)",
    altitude: "950 m (3,116 ft)",
    elevationGain: "280 m",
    bestSeason: "September to March",
    myRole: "Night Expedition Commander",
    challengesFaced: "Unmarked rocky sections requiring minor bouldering on dark granite slabs. Guiding nocturnal batches safely alongside agricultural lake boundaries.",
    leadershipResponsibilities: [
      "Illuminated treacherous bouldering points with fixed orientation lights.",
      "Maintained constant group counts across dense agricultural plains pre-ascent.",
      "Coordinated with Pandavapura local support teams for lakeside campfire safety."
    ],
    lessonsLearned: "Night treks need slow movement. Rushing raises fatigue and missteps. Small 2-minute dynamic breaks at rock plateaus keep stamina steady.",
    description: "Beautiful twin rocky hills overlooking agricultural fields in Pandavapura, famous for night climbing and lake-side camping.",
    imageUrl: "src/images/kunti1.jpg",
    gallery: [
      "src/images/KuntiBetta.jpg"
    ],
    experienceStory: "Summitting Kudremukha, Skandagiri, and Kunti Betta at night are completely distinct experiences. Kunti Betta rewards you with the view of Pandavapura lake shimmering like liquid silver in the full moonlight."
  }
];

export const GALLERY_IMAGES = [
  { url: "src/images/Bandaje.jpg", category: "Mountain Peaks", title: "Valley of Green Shadows", desc: "Mist Water fall" },
  { url: "src/images/Kudremukha.jpg", category: "Mountain Peaks", title: "Kudremukha Dawn", desc: "Climbers silhouetted against the emerging orange cosmic horizon" },
  { url: "src/images/IMG-20251130-WA0012.jpg", category: "Group Photos", title: "Peak Union", desc: "Monoj guiding the 27-member corporate squad at Nethravathi summit" },
  { url: "src/images/camping.jpg", category: "Camping", title: "Alpine Outpost", desc: "Setup under the milky-way canopy near Bandaje Falls campground" },
  { url: "src/images/abbefalls.jpg", category: "Nature Photography", title: "Beautiful falls", desc: "An amazing water falls soaked in coorg the Scotland of India" },
  { url: "src/images/Nethravathi peak.jpg", category: "Nature Photography", title: "Dew on Moss", desc: "Stunning forest floor macro details off Nethravathi trails" },
  { url: "src/images/tadiandamol1.jpeg", category: "Mountain Peaks", title: "Western Ghats Spine", desc: "Rolling grasslands reaching towards the cloud beds" },
  { url: "src/images/sunrise.jpg", category: "Sunrise", title: "Mystic Cloud Seas", desc: "First light striking the puffy cloud sea at high-altitude Nandi Hills" },
  { url: "src/images/WhatsApp Image 2026-06-10 at 12.10.17 PM.jpeg", category: "Sunrise", title: "Altitude isn't scary", desc: "4000+ ft is cool" },
  { url: "src/images/g1.jpg", category: "Group Photos", title: "Peak Union", desc: "Monoj guiding the 25-member corporate squad at Uttaribetta Peak" },
  { url: "src/images/KuntiBetta.jpg", category: "Group Photos", title: "Peak Union", desc: "Chilling with troop of 20 trekking enthusiasts at Skandagiri" },
  { url: "src/images/leader.jpg", category: "Leadership Moments", title: "Instruction Time", desc: "Manoj Explaining troop the complete intinerary for two days" },
  { url: "src/images/nf.jpg", category: "Nature Photography", title: "kalsa Hanging Bridge", desc: "One of the most Beautiful hanging bridge in Kudremukha range" },

];

export const LEADERSHIP_STORIES: LeadershipStory[] = [
  {
    id: "story-1",
    title: "Managing Difficult Terrain on Savandurga Monolith",
    problem: "A trekker wore standard running shoes and lost complete friction on a 55-degree granite slope during our descent. She froze out of fear, holding up the group as early dry wind changed into high-altitude gusts.",
    action: "I anchored my boots securely, comforted her breathing to slow her pulse, and used my safety rope to secure her posture. I sat beside her, took a roll of professional traction duct-wrap, and bound her footwear to create an immediate textured rubber grip.",
    result: "She stood with newly acquired confidence, felt the grip hold, and walked down with me under one-on-one guide shadowing.",
    lesson: "A leader's calm presence is as important as the physical tool backpack. Pre-trek gear checks must be completely uncompromising."
  },
  {
    id: "story-2",
    title: "Leading Large Groups Across Kudremukha National Reserve",
    problem: "Managing a massive corporate block of 45 trekkers with highly uneven cardio endurance rates. Slower hikers were falling behind, stretching the line to a risky 1.5 km across critical tiger reserve trail lines.",
    action: "I restructured the walking grid immediately into 3 distinct paced subdivisions. I placed the lowest stamina trekkers in the 'Engine Room' right behind my lead pace, while my active sweeps secured the rear. We implemented a slow but uninterrupted 'Diesel engine' pacing cycle.",
    result: "We completed the dense reserve segment 40 minutes ahead of schedule with zero group stretching, maintaining close communication with wildlife guard checkposts.",
    lesson: "Pace synchronization is better than frequent breaks. The speed of the group is determined by its slowest link; place them in front."
  },
  {
    id: "story-3",
    title: "Severe Weather Challenges during Bandaje Monsoon Climb",
    problem: "A cloudburst hit our team atop the Bandaje grasslands, raising river exit levels. Our base camp path was blocked, and heavy rain compromised tent stability at 4:30 PM.",
    action: "We aborted the waterfall campsite immediately and relocated to an elevated forest-buffer slope. My co-captains and I secured double-layered tarp walls using strong paracords, dug water drainage trenches around active tents, and served high-salt warm bouillon soup.",
    result: "The entire team remained warm, and our dry gear was protected. We executed a systematic morning descent when the river subsided.",
    lesson: "Never fight nature. If weather challenges rise, relocate from water paths immediately and maintain high core-heat routines."
  },
  {
    id: "story-4",
    title: "Motivating Exhausted Trekkers on Kudremukha Ascent",
    problem: "Three trekkers faced heavy psychological failure at the 18th kilometer, collapsing in exhaustion during the return stretch.",
    action: "Instead of talking about the hours of hiking left, I divided the remainder into short 500-meter physical milestones. I offloaded their packs onto our guides and used rhythmic vocal step counts. I had them focus strictly on my boot heels, using marching songs to keep moral distraction high.",
    result: "The psychological strain dissolved. The walkers reached the final outpost in a rhythmic, chanting high state, feeling incredibly proud.",
    lesson: "Physical fatigue is often a mental barrier. Zoom in the target to the next 5 minutes and utilize group rhythm to carry them through."
  },
  {
    id: "story-5",
    title: "Emergency Decision-Making on Skandagiri Night Ascent",
    problem: "A trekker suffered from exercise-induced asthma at 3:00 AM on a narrow rock ledge. He forgot his personal inhaler in his base luggage.",
    action: "I stopped the group on a secure ledge, had assistant sweeps keep the line stable, and positioned the patient in a tripod posture to optimize oxygen flow. I checked my medical kit, which contained an emergency generic bronchodilator, verified his medical profile, and administered the doses.",
    result: "His breathing stabilized in 6 minutes. I delegated a sweep to slowly guide him back down to base camp while I led the rest of the group to the summit.",
    lesson: "Always carry redundant medical solutions. A leader must have backup inhalers, active emergency communication channels, and clear split-team protocols."
  }
];

export const MEMORY_BOOK = [
{
id: 1,
imageUrl: "src/images/feedbacks/t1.jpeg"
},
{
id: 2,
imageUrl: "src/images/feedbacks/t6.jpeg"
},
{
id: 3,
imageUrl: "src/images/feedbacks/t4.jpeg"
},
{
id: 4,
imageUrl: "src/images/feedbacks/t5.jpeg"
},
{
id: 5,
imageUrl: "src/images/feedbacks/t2.jpeg"
},
{
id: 6,
imageUrl: "src/images/feedbacks/t3.jpeg"
}
];


export const FITNESS_ROUTINES: FitnessRoutine[] = [
  {
    id: "f-1",
    title: "High-Altitude Endurance Cardio",
    description: "Intense daily cardiopulmonary conditioning to lock down slow-twitch muscle efficiency. Trains the lungs to handle physical exertion with reduced oxygen availability.",
    duration: "60 mins (5 days/week)",
    intensity: "High",
    benefits: ["Maintracks slow heart rates", "Raises lactic threshold", "Simulates continuous mountain pacing"]
  },
  {
    id: "f-2",
    title: "Martial Arts Practice & Agility",
    description: "Weekly karate and taekwondo style stretches and balance drills. Establishes rapid reflex systems and spatial awareness, critical for moving across loose shale, wet roots, and unstable talus slopes.",
    duration: "45 mins (3 days/week)",
    intensity: "Extreme",
    benefits: ["Core stabilization", "Sudden foot reflex recovery", "Friction balance control"]
  },
  {
    id: "f-3",
    title: "Strength & Heavy-Pack Training",
    description: "Lower body load resistance: Bulgarian split squats, deadlifts, and carrying a 22 kg tactical rucksack up local stadium steps to build shoulder-core stability and quadricep endurance.",
    duration: "50 mins (4 days/week)",
    intensity: "High",
    benefits: ["Shin splint prevention", "Knee shock absorption", "Rucksack endurance"]
  }
];

export const FUTURE_ROADMAP: FutureGoal[] = [
  {
    year: "Late 2026",
    title: "Join Indiahikes ATL",
    description: "Complete selection as an Assistant Trek Leader (ATL) with Indiahikes, mastering their strict Green Trails environmental framework and outdoor rescue protocols.",
    milestones: ["Wilderness First Aid (WFA) certification", "Complete physical fitness registry", "Indiahikes ATL camp assessments"]
  },
  {
    year: "Mid 2027",
    title: "Lead Himalayan Treks",
    description: "Transition to high-altitude mountain expeditions. Lead batches across classic Himalayan trails like Kedarkantha, Roopkund, and Hampta Pass.",
    milestones: ["Successfully navigate 4,000+ meters altitude", "Lead multi-day snow expeditions", "Himalayan weather modeling studies"]
  },
  {
    year: "2028",
    title: "Wilderness First Responder",
    description: "Sustain advanced rescue education by securing a Wilderness First Responder (WFR) registration from NOLS / Sentinel First Aid.",
    milestones: ["Search & Rescue drills", "Cold injury response specialization", "Inter-guide coordinator credentials"]
  },
  {
    year: "2029",
    title: "Senior Trek Leader",
    description: "Take over as regional expedition head for extreme high Passes, managing base camps, coordinate guides, and local porter networks.",
    milestones: ["Command 10+ junior ATLs", "Standardize new green trails guidelines", "Liaison with local search units"]
  },
  {
    year: "2030",
    title: "Expedition Leader",
    description: "Become a premier Indian expedition commander leading technical climbs above 6,000 m (e.g. Stok Kangri, Friendship Peak) with safety structures and high environmental care.",
    milestones: ["Conquer commercial glacier passes", "Contribute to Indian mountaineering research", "Inspire next-gen outdoor leaders"]
  }
];
