// All content in this module is sourced from website-content-sources.md, the
// summary of the June 2026 draft "planBTV New North End" (219-page PDF).
// `cite` fields are page numbers in that document.

export interface Stat {
  value: string;
  label: string;
  detail: string;
  cite: string;
}

export const headlineStats: Stat[] = [
  {
    value: '7,000',
    label: 'new homes Burlington needs by 2050',
    detail:
      "About 280 per year, per the Mayor's 2026 Housing Strategy. “Additional housing in the New North End is not a question of 'whether,' but 'how.'”",
    cite: 'pp. 2, 8, 22–23',
  },
  {
    value: '835',
    label: 'homes across five focus areas',
    detail:
      'Full buildout of the five focus areas adds 835 dwelling units plus 279,000 SF of commercial space.',
    cite: 'p. 15',
  },
  {
    value: '~10,500',
    label: 'New North End residents today',
    detail:
      'Bounded by Lake Champlain and the Winooski River. Population grew just 2% from 2000–2020 while the rest of the city grew 20%.',
    cite: 'pp. 8, 56',
  },
  {
    value: '~350 acres',
    label: 'of parkland across 10+ parks',
    detail:
      'More open space than any other Burlington neighborhood — but mostly “destination” parks, with few integrated plazas and squares.',
    cite: 'pp. 33, 54–55',
  },
];

export interface Comparison {
  label: string;
  nne: number;
  city: number;
  unit: string;
  note: string;
  cite: string;
}

// Small comparison chart: NNE vs the rest of Burlington.
export const comparisons: Comparison[] = [
  {
    label: 'Population growth, 2000–2020',
    nne: 2,
    city: 20,
    unit: '%',
    note: 'The NNE grew 2% over two decades while the rest of the city grew 20%.',
    cite: 'p. 56',
  },
  {
    label: 'Residents over age 65',
    nne: 21,
    city: 10,
    unit: '%',
    note: 'More than double the citywide share — the largest percentage of older adults in Burlington. Median age is 43 vs. 27 in the rest of the city.',
    cite: 'pp. 28, 56',
  },
  {
    label: 'Drive alone to work',
    nne: 61,
    city: 42,
    unit: '%',
    note: '~70% of NNE residents drive to work, 61% alone — nearly 20 points higher than the rest of the city.',
    cite: 'p. 46',
  },
];

export const visionStatement =
  'New North End residents envision their neighborhood growing to become a well-connected, inclusive, and vibrant community that balances growth with affordability, sustainability, and fosters a strong sense of place.';

export const guidingPrinciples = [
  'An inclusive community',
  'Housing choice and affordability',
  'Safer, connected transportation',
  'Walkable mixed-use neighborhood centers',
  'Protected natural spaces',
  'Sustainability and green infrastructure',
];

export interface Framework {
  name: string;
  summary: string;
}

export const frameworks: Framework[] = [
  {
    name: 'Transportation',
    summary:
      'Safe walking, biking, and transit — so growth doesn’t just add cars to a street network that funnels nearly every trip onto North Avenue.',
  },
  {
    name: 'Urban Design',
    summary:
      'Cluster housing and mixed uses at key North Avenue locations, with buildings no taller than four stories and gentle transitions to existing homes.',
  },
  {
    name: 'Placemaking',
    summary:
      'Squares, plazas, and gathering spaces — the everyday public places the neighborhood currently lacks.',
  },
];

export interface Feedback {
  support: string[];
  concerns: string[];
}

export interface FocusArea {
  id: string;
  name: string;
  ownership: string;
  tagline: string;
  homes: string;
  commercial: string | null;
  features: string[];
  phasing: string | null;
  feedback: Feedback;
  cite: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: 'ethan-allen-plaza',
    name: 'Ethan Allen Plaza',
    ownership: 'Privately owned',
    tagline: 'The NNE’s “Town Center” — the largest site',
    homes: '323 homes (Option 1) or 177 + 265 phased (Option 2)',
    commercial: '~249,000 SF commercial',
    features: [
      'Keeps the Hannaford grocery store',
      'Linear multi-use plaza from North Ave to Leddy Park',
      'Mixed-use 4-story parking garage with ground-floor retail',
      'New bus stops and protected bike lanes',
      'Masterplan (UD6) is an Immediate-term Quick Win',
    ],
    phasing:
      'Option 2, created in response to community feedback, phases the work and keeps more existing businesses: Key Bank, the Post Office, and Ace Hardware stay in Phase 1 (177 homes); the plaza and Leddy Park link come in Phase 2 (265 homes).',
    feedback: {
      support: [
        'Broad support — the site is underutilized surface parking',
        'Avoids sensitive parkland',
      ],
      concerns: [
        'Skepticism about the parking garage',
        'Displacement of small businesses',
        'Affordability of the new homes',
      ],
    },
    cite: 'pp. 150–159',
  },
  {
    id: 'plattsburg-north',
    name: 'Plattsburg Ave at North Ave',
    ownership: 'Privately owned',
    tagline: 'Neighborhood main street and village square',
    homes: '139 homes',
    commercial: '~16,400 SF retail',
    features: [
      'Mobility hub and café at Franklin Square',
      'Civic plazas on both sides of North Ave',
      'Raised intersection and a new park',
      'Housing steps down from 4-story multifamily to townhomes and quads',
    ],
    phasing: null,
    feedback: {
      support: [
        'Support for the housing, plazas, and “parkification” of Mount Calvary Cemetery',
        'Requests for senior-friendly, stair-free units',
      ],
      concerns: [
        'Displacement of existing single-family homes',
        'Impacts on views and neighborhood character',
      ],
    },
    cite: 'pp. 160–164',
  },
  {
    id: 'alliance-church',
    name: 'North Ave Alliance Church',
    ownership: 'Privately owned',
    tagline: 'Neighborhood gateway at the VT 127 interchange',
    homes: '138 homes',
    commercial: null,
    features: [
      'Modern roundabout at the interchange',
      '3-over-1 multifamily facing North Ave; townhomes on a shared-use street',
      'Mobility hub and civic plaza with café, bike shop, and visitor center',
      'Two new pedestrian paths into Arms Forest',
    ],
    phasing: null,
    feedback: {
      support: ['Support for the gateway concept, roundabout, and bike design'],
      concerns: [
        'Traffic congestion',
        'Recreation pressure on Arms Forest',
        'Density',
      ],
    },
    cite: 'pp. 146–149',
  },
  {
    id: 'ethan-allen-parkway',
    name: 'Ethan Allen Parkway',
    ownership: 'City-owned park land',
    tagline: 'New neighborhood center via a 90° bend of the Parkway',
    homes: '123 homes',
    commercial: '~14,800 SF — “restaurants, breweries, and cultural venues”',
    features: [
      'Bends the Parkway 90° at North Ave to create the site',
      'Ethan Allen Gateway Plaza linking park to street',
      'Community garden and community center; playground preserved',
      'Zoning study (UD7) is an Immediate-term Quick Win',
    ],
    phasing:
      'The plan urges “a cautious and deliberate approach” to housing in parks, and the realignment can proceed without any change to Ethan Allen Park if that is not politically feasible.',
    feedback: {
      support: [
        'Interest in a neighborhood center with restaurants and venues',
      ],
      concerns: [
        'Strongest opposition of any site',
        'Historic park entrance and grass front lawn',
        'Habitat and ephemeral plants',
        'Residents “generally not in favor of using the front lawn of Ethan Allen Park for housing”',
      ],
    },
    cite: 'pp. 107, 174–179',
  },
  {
    id: 'starr-farm-west',
    name: 'Starr Farm West (Starr Farm Park)',
    ownership: 'City-owned park land',
    tagline: 'Enhanced park gateway with senior housing',
    homes:
      '111–113 homes, multigenerational/senior with accessible entries and elevators',
    commercial: 'Café with bike repair at a Greenway mobility hub',
    features: [
      'New bike path from the Greenway to North Ave',
      'Splash pad, ice rink, community gardens',
      'Soccer field upgrades and a concession stand',
      'Playground, field, and dog park/community garden retained',
    ],
    phasing: null,
    feedback: {
      support: ['Housing diversity and the added retail'],
      concerns: [
        'Tree canopy and habitat loss — “rare and possibly threatened bird and plant species” along Starr Farm Rd',
        'Stormwater',
        'Distance from services',
      ],
    },
    cite: 'pp. 180–184',
  },
];

export interface SecondarySite {
  name: string;
  summary: string;
  cite: string;
}

// The plan names five focus areas; these are secondary/supporting locations
// drawn from the corridor and transportation chapters.
export const secondarySites: SecondarySite[] = [
  {
    name: 'City-owned land generally',
    summary:
      'UD1 studies the development feasibility of every City asset; UD2 explores public land for housing in planBTV 2050 (both Immediate Quick Wins). Using City land can cut housing costs by as much as 20% and generate perpetual revenue via ground leases.',
    cite: 'pp. 166–168, 216–217',
  },
  {
    name: '1024, 1014 & 996 North Ave',
    summary:
      'Parcels tied to the “Bend Ethan Allen” intersection concept — City right-of-way could be combined with these parcels to incentivize redevelopment.',
    cite: 'PDF pp. 106–108',
  },
  {
    name: 'North Avenue Residential Corridor (RC) zone',
    summary:
      'The corridor spine itself: RC zoning enables multifamily up to 4 stories with ground-floor retail along much of North Ave.',
    cite: 'pp. 39, 65, 160',
  },
  {
    name: 'Trail-oriented development along the Burlington Greenway',
    summary:
      'Homes near the path with cafés, bike shops, and repair stations serving path users.',
    cite: 'PDF p. 130',
  },
  {
    name: 'Cambrian Rise / Burlington High School area',
    summary:
      'The existing growth precedent (2017–), served by the North Ave Phase 5 reconstruction (Neighborhood Connector Zone).',
    cite: 'pp. 23, 37; PDF p. 119',
  },
];

export interface BuildingType {
  name: string;
  description: string;
}

// The "Kit of Parts" — six typologies, max four stories (pp. 141–145).
export const kitOfParts: BuildingType[] = [
  {
    name: '3-over-1 multifamily',
    description: 'Retail below, three floors of homes above.',
  },
  {
    name: 'Single-stair multifamily',
    description: 'Up to 12 units around one stair.',
  },
  {
    name: 'Sixplex',
    description:
      '“Missing middle” — a gentle transition next to existing single-family homes.',
  },
  { name: 'Neighborhood multifamily', description: '2–4 units.' },
  { name: 'Townhouse', description: 'Attached homes in short rows.' },
  {
    name: 'Community facility',
    description:
      'Flexible civic buildings, modeled on the Niagara Falls Exchange.',
  },
];

export interface ImpactTopic {
  id: string;
  title: string;
  points: string[];
  cite: string;
}

export const residentImpacts: ImpactTopic[] = [
  {
    id: 'zoning',
    title: 'Zoning: what already changed, and what’s next',
    points: [
      'The Neighborhood Code (adopted early 2024) already rezoned all NNE residential areas: duplexes, triplexes, quadplexes, and cottage courts are now allowed on residential streets, and the Residential Corridor zone along North Ave allows up to 4-story multifamily with ground-floor shops.',
      'The plan says this “is not the end of zoning reform in the NNE” — design guidelines and further zoning analysis for the Ethan Allen Parkway and Starr Farm sites come next.',
      'Nothing proposed anywhere is taller than four stories, and “gentle transition” building types go next to single-family homes.',
    ],
    cite: 'pp. 39–40, 65, 141–143, 186',
  },
  {
    id: 'traffic',
    title: 'Driving, traffic, and parking',
    points: [
      'North Avenue keeps its existing 2–3 vehicle travel lanes under the preferred redesign, and adds on-street parking and loading on the northeast side.',
      'New development generates under 3,000 net new daily vehicle trips — about a 30% increase over North Ave’s current ~10,000 vehicles/day, within the corridor’s 10,000–15,000/day capacity, though peak-period intersection pressure is possible.',
      'Drivers will encounter roundabouts: preferred at the VT 127 interchange, possible at Ethan Allen Parkway, explored at Institute Rd.',
      'Side-street changes are proposed or explored at Tracy Dr/Loaldo Dr (one-way pair), Saratoga Ave (one-way in), and Gazo Ave (strategic closures); driveways along North Ave get consolidated as redevelopment occurs.',
      'Traffic calming — chicanes, speed humps, raised intersections, neighborhood traffic circles — comes to designated quiet streets, with community participation in design.',
      'The rejected Plattsburg roundabout would have required taking land from two private parcels and demolishing a Burlington Housing Authority house — a key reason “Bend North Ave” was preferred instead.',
    ],
    cite: 'pp. 11, 92, 97; PDF pp. 76–125',
  },
  {
    id: 'affordability',
    title: 'Affordability and staying in the neighborhood',
    points: [
      'The housing-choice principle: affordable and mixed-income options so the NNE “remains accessible to families, older adults, and lower-income residents.” Residents emphasized homeownership for young families over high-rent apartments.',
      'Because land is 10–20% of project cost, building on City-owned land can cut costs by as much as 20% — and the City can require affordability, prioritize land trusts, co-ops, and nonprofits, and keep the land forever through ground leases.',
      'Aging in place (AARP study): 68% of older adults say rising property taxes affect their ability to stay “a lot”; 57% rate senior housing options fair or poor; 64% worry about when they can no longer drive. Starr Farm West’s senior housing and the transit/walkability agenda respond directly.',
      'Displacement concerns are on the record at Plattsburg (single-family homes) and Ethan Allen Plaza (small businesses) — Plaza Option 2 was created specifically to keep more existing businesses.',
    ],
    cite: 'pp. 8–9, 28–29, 154–168',
  },
  {
    id: 'services',
    title: 'Services, utilities, and daily life',
    points: [
      'Route 7 bus: restoring Sunday service (there is none today) is a near-term priority, with more frequency as the neighborhood grows and shelters and benches at warranted stops.',
      'Water mains along North Ave — some from the 1920s — must be replaced as a prerequisite for development, protecting service for new and existing residents alike.',
      'Wastewater has headroom: the North Plant is at ~40% of capacity now and would reach only ~47% after full buildout, “well within design limits.”',
      'If public open space is developed for housing, the City must replace commensurate acreage and programming elsewhere (UD3, an Immediate Quick Win).',
      'Resident voice going forward: an NNE mobility advisory committee, an annual mode-share survey, and a Neighborhood Placemaking Committee.',
    ],
    cite: 'pp. 13–14, 17, 52, 120–121, 185–188, 212, 218',
  },
  {
    id: 'first',
    title: 'What actually happens first',
    points: [
      'Nearly all Urban Design actions (UD1–UD7) are Immediate-term (1–2 year) studies and plans — not construction.',
      'Construction of the North Avenue corridor phases is Short- to Long-term (2 to 10+ years), each phase starting with its own scoping study.',
      'The plan is explicit: “Implementation is not guaranteed” — it depends on resident participation, political will, and funding.',
    ],
    cite: 'pp. 207–219',
  },
];

export interface CorridorPhase {
  phase: number;
  name: string;
  extent: string;
  timeframe: string;
}

export const corridorPhases: CorridorPhase[] = [
  {
    phase: 1,
    name: 'Parkway Zone',
    extent: 'Institute Rd → Killarney Dr',
    timeframe: 'Short-term (2–5 yr)',
  },
  {
    phase: 2,
    name: 'Main Street Zone',
    extent: 'Killarney Dr → Gosse Ct',
    timeframe: 'Medium-term (5–10 yr)',
  },
  {
    phase: 3,
    name: 'Neighborhood Main Street',
    extent: 'Gosse Ct → Plattsburg Ave',
    timeframe: 'Medium-term (5–10 yr)',
  },
  {
    phase: 4,
    name: 'Neighborhood Slow Street',
    extent: 'Plattsburg Ave → Northview Dr',
    timeframe: 'Long-term (10+ yr)',
  },
  {
    phase: 5,
    name: 'Neighborhood Connector',
    extent: 'Institute Rd → Washington St',
    timeframe: 'Long-term (10+ yr)',
  },
];

export interface Improvement {
  title: string;
  points: string[];
  cite: string;
}

export const northAveRedesign: Improvement = {
  title: 'The North Avenue redesign',
  points: [
    'The preferred design scored 23 out of 24 against alternatives (bus lanes scored 12/24).',
    'Two-way separated bike lane / shared-use path on the southwest side, with crossing-free access to the Greenway.',
    'Widened sidewalks (10–15 feet) and in-lane bus stops.',
    'On-street parking and loading on the northeast side.',
    '6-foot-plus green buffers with rain gardens and trees — which also fix existing flooding.',
    'Dedicated bike signals and raised crossings.',
    'Existing 2–3 vehicle travel lanes are kept.',
  ],
  cite: 'pp. 11, 92–97',
};

export const intersections: Improvement[] = [
  {
    title: 'North Ave / VT 127 interchange',
    points: [
      'Dutch-style modern roundabout with a continuous bike path and raised crossings (scored 23/24).',
      'Gateway landscaping and public art; leftover highway space returned to native ecology.',
    ],
    cite: 'PDF pp. 98–103',
  },
  {
    title: 'North Ave / Ethan Allen Parkway',
    points: [
      'Roundabout vs. a “Bend Ethan Allen” 90° realignment — no preferred option yet, pending more engagement.',
      'A 2020 study ended “no build” after resident opposition.',
    ],
    cite: 'PDF pp. 72, 104–109',
  },
  {
    title: 'North Ave / Plattsburg Ave',
    points: [
      'Preferred: “Bend North Ave” 90° realignment (scored 22/24).',
      'Raised Franklin Square intersection, new public plaza, and a mobility hub.',
    ],
    cite: 'PDF pp. 110–113',
  },
];

export const bikeWalkNetwork: Improvement = {
  title: 'Biking and walking',
  points: [
    'Three family-friendly facility types: separated bike lanes, shared-use paths, and neighborhood greenways on quiet streets.',
    'Neighborhood Greenway Loop (M1): Shore Rd/Gosse Ct/Hope St east–west plus Gazo Ave/Northview Dr/Fairfield Dr north, linking the VT 127 Path and Burlington Greenway through Schifilliti Park.',
    'A High School → Greenway connection via Institute Rd through North Beach Campground, timed to the high school reopening (M2).',
    'Ethan Allen Parkway path (M3) and Plattsburg Ave side path (M4), including removal of the highway-style slip lanes at 127/Plattsburg.',
    'Mobility hubs at every focus area: transit, car share, secure bike parking, micromobility, bike repair, and cafés (M7).',
    'The neighborhood is only 2 mi × 1.5 mi — nearly all of it is a 5-minute bike ride from North Ave.',
  ],
  cite: 'pp. 13, 46, 50, 77, 85; PDF pp. 74–83',
};

export const transit: Improvement = {
  title: 'Transit',
  points: [
    'Restore Route 7 Sunday service — there is currently none.',
    'Increase frequency as the neighborhood grows.',
    'Shelters and benches at every warranted stop.',
    'Dedicated transit funding tied to new development, plus legislative lobbying (M13–M14).',
  ],
  cite: 'pp. 13, 120–121, 210–211',
};

export const tdmPrograms: Improvement = {
  title: 'Transportation demand management (all launch Short-term)',
  points: [
    'CarShare Vermont expansion (TDM1).',
    'Outreach and education: bike workshops, e-bike test events at Ethan Allen Plaza, multilingual materials (TDM2).',
    'Walk-to-shop trolley libraries (TDM3).',
    'Safe Routes to School at Flynn, CP Smith, Hunt, and Burlington HS (TDM4).',
    'NNE mobility advisory committee (TDM5) and an annual mode survey (TDM6).',
    'Volunteer microtransit for seniors (TDM7).',
  ],
  cite: 'p. 17; PDF pp. 122–129',
};

export interface ParkImpact {
  name: string;
  status: 'enhanced' | 'contested' | 'protected' | 'new';
  summary: string;
  cite: string;
}

export const parkImpacts: ParkImpact[] = [
  {
    name: 'Burlington Greenway',
    status: 'enhanced',
    summary:
      'The waterfront spine gets its own framework (GW1–GW9): a safety audit (Immediate Quick Win), wayfinding, year-round surface materials, better winter maintenance (the path can’t be salted — runoff enters the lake), wildlife-conscious lighting, recreation-waypoint mobility hubs, environmental education, adopt-a-path stewardship, and possible widening of crowded segments.',
    cite: 'pp. 13, 130–135, 214–215',
  },
  {
    name: 'Leddy Park',
    status: 'enhanced',
    summary:
      'Gains a linear multi-use plaza connecting its 75 acres to North Ave through the Ethan Allen Plaza redevelopment — “a welcoming gateway.” Adjacent development “must complement — not compete with” the park, guided by the 2024 Leddy Park Comprehensive Plan.',
    cite: 'pp. 33, 63, 66, 150–159, 198–199',
  },
  {
    name: 'Ethan Allen Park',
    status: 'contested',
    summary:
      'The most contested site: housing, a gateway plaza, community garden, and parking proposed on or near park land. Residents opposed housing on the front lawn; the road realignment “does not require any change to Ethan Allen Park if that is not politically feasible.” Some trees would be removed at the roundabout with replacement planting, and the historic 1905/1937 stone gateway could move to the roundabout island. The front lawn is also a pollinator-meadow candidate.',
    cite: 'pp. 104–108, 174–179, 203',
  },
  {
    name: 'Starr Farm Park',
    status: 'contested',
    summary:
      'Partially developed under the Starr Farm West concept: senior housing plus a new splash pad, ice rink, community gardens, soccer field upgrades, and a Greenway mobility hub. Playground, field, and dog park/community garden retained. Concerns center on tree canopy and habitat loss, including possibly threatened species along Starr Farm Rd.',
    cite: 'pp. 180–184',
  },
  {
    name: 'Arms Forest & Rock Point',
    status: 'protected',
    summary:
      'Explicitly preserved and protected. New pedestrian paths from North Ave through the Alliance Church site improve access; the community worries about recreational pressure.',
    cite: 'pp. 28, 31, 33, 146–149, 201',
  },
  {
    name: 'VT 127 interchange',
    status: 'new',
    summary:
      'Reimagined as “a park-like space” with regenerated native ecosystems, strengthening the ecological connection from Arms Forest to the Winooski Valley.',
    cite: 'PDF p. 102; p. 201',
  },
  {
    name: 'Franklin Square',
    status: 'new',
    summary:
      'Activated as a public plaza with a mobility hub, shelter, and seating — also a plaza-activation and gateway-art site.',
    cite: 'pp. 196, 203',
  },
  {
    name: 'Schifilliti Park',
    status: 'enhanced',
    summary:
      'The Greenway Loop uses its recently completed path; a double row of shade trees and benches is proposed.',
    cite: 'PDF p. 80',
  },
  {
    name: 'Mount Calvary Cemetery',
    status: 'enhanced',
    summary:
      'Community feedback supported its “parkification”; it borders the proposed Plattsburg Ave path.',
    cite: 'p. 164; PDF p. 83',
  },
];

export const parkSafeguard =
  'If public open space is developed for housing, the City must replace commensurate acreage and programming elsewhere — UD3, an Immediate-term Quick Win (pp. 17, 187, 216).';

export const newGreenSpaces = [
  'New park and plazas at Plattsburg/Franklin Square',
  'Civic plazas at the Alliance Church site and Ethan Allen Parkway',
  'Linear plaza at Ethan Allen Plaza',
  'Community gardens at multiple sites',
  'Slip-lane land at 127/Plattsburg restored to native ecosystems',
  'Pocket parks and rain gardens along the realigned Ethan Allen median',
  'Pollinator-habitat conversions at school lawns, the 127 ramp lawn, and Ethan Allen Park’s front lawn',
];

export type ActionCategory =
  | 'Mobility'
  | 'TDM'
  | 'Greenway'
  | 'Urban Design'
  | 'Placemaking';

export type Timeframe =
  | 'Immediate (1–2 yr)'
  | 'Short (2–5 yr)'
  | 'Medium (5–10 yr)'
  | 'Long (10+ yr)'
  | 'See draft';

export interface PlanAction {
  code: string;
  category: ActionCategory;
  title: string;
  timeframe: Timeframe;
  quickWin: boolean;
}

// The full draft lists 44 actions (pp. 17–18, 207–219). These are the ones
// identifiable from the summary; timeframes marked "See draft" are not
// stated in the source summary.
export const actions: PlanAction[] = [
  {
    code: 'M1',
    category: 'Mobility',
    title:
      'Neighborhood Greenway Loop linking the VT 127 Path and Burlington Greenway',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'M2',
    category: 'Mobility',
    title:
      'High School → Greenway connection via Institute Rd, timed to the school reopening',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'M3',
    category: 'Mobility',
    title: 'Ethan Allen Parkway path',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'M4',
    category: 'Mobility',
    title:
      'Plattsburg Ave side path, removing highway-style slip lanes at 127/Plattsburg',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'M7',
    category: 'Mobility',
    title: 'Citywide Mobility Hub Plan with a likely NNE pilot',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'M13–M14',
    category: 'Mobility',
    title:
      'Route 7: Sunday service, frequency, shelters, dedicated funding, legislative lobbying',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'TDM1',
    category: 'TDM',
    title: 'CarShare Vermont expansion',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'TDM2',
    category: 'TDM',
    title:
      'Outreach and education: bike workshops, e-bike test events, multilingual materials',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'TDM3',
    category: 'TDM',
    title: 'Walk-to-shop trolley libraries',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'TDM4',
    category: 'TDM',
    title: 'Safe Routes to School at Flynn, CP Smith, Hunt, and Burlington HS',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'TDM5',
    category: 'TDM',
    title: 'NNE mobility advisory committee',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'TDM6',
    category: 'TDM',
    title: 'Annual mode-share survey',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'TDM7',
    category: 'TDM',
    title: 'Volunteer microtransit for seniors',
    timeframe: 'Short (2–5 yr)',
    quickWin: false,
  },
  {
    code: 'GW1',
    category: 'Greenway',
    title: 'Greenway safety audit',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'GW2',
    category: 'Greenway',
    title: 'Wayfinding',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'GW3',
    category: 'Greenway',
    title: 'Year-round surface materials',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'GW4',
    category: 'Greenway',
    title: 'Better winter maintenance (no salt — runoff enters the lake)',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'GW5',
    category: 'Greenway',
    title: 'Eco-friendly, wildlife-conscious lighting',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'GW6',
    category: 'Greenway',
    title: 'Recreation-waypoint mobility hubs',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'GW7',
    category: 'Greenway',
    title: 'Environmental education',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'GW8',
    category: 'Greenway',
    title: 'Adopt-a-path stewardship',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'GW9',
    category: 'Greenway',
    title: 'Possible widening of crowded segments',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'UD1',
    category: 'Urban Design',
    title: 'Public Asset Study of every City asset’s development feasibility',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD2',
    category: 'Urban Design',
    title: 'Explore public land for housing in planBTV 2050',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD3',
    category: 'Urban Design',
    title:
      'Replace any developed public open space with commensurate acreage and programming',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD4',
    category: 'Urban Design',
    title: 'CHIP financing pathway',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: false,
  },
  {
    code: 'UD5',
    category: 'Urban Design',
    title: 'Public-private partnership template',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: false,
  },
  {
    code: 'UD6',
    category: 'Urban Design',
    title: 'Ethan Allen Plaza masterplan',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD7',
    category: 'Urban Design',
    title: 'Ethan Allen Parkway zoning/feasibility study',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD8',
    category: 'Urban Design',
    title:
      'North Ave water main replacement — a prerequisite for development ($$$)',
    timeframe: 'Long (10+ yr)',
    quickWin: false,
  },
  {
    code: 'P1',
    category: 'Placemaking',
    title: 'North Ave design guidelines',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'P2',
    category: 'Placemaking',
    title: 'Neighborhood Placemaking Committee',
    timeframe: 'See draft',
    quickWin: true,
  },
  {
    code: 'P3',
    category: 'Placemaking',
    title: 'More community gardens',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'P4',
    category: 'Placemaking',
    title: 'Pollinator and native-plant habitat network',
    timeframe: 'See draft',
    quickWin: true,
  },
  {
    code: 'P5',
    category: 'Placemaking',
    title:
      'Plaza Activation Program: food trucks, concerts, art at Ethan Allen Plaza, Franklin Square, Ethan Allen Park',
    timeframe: 'See draft',
    quickWin: false,
  },
  {
    code: 'P6',
    category: 'Placemaking',
    title:
      'Gateway Arts Program: public art at the 127 ramps, Ethan Allen Tower, Franklin Square, Greenway access points, bus stops',
    timeframe: 'See draft',
    quickWin: false,
  },
];

export const actionCategories: ActionCategory[] = [
  'Mobility',
  'TDM',
  'Greenway',
  'Urban Design',
  'Placemaking',
];

export interface ProcessFact {
  label: string;
  text: string;
}

export const processFacts: ProcessFact[] = [
  {
    label: 'Who made it',
    text: 'Developed December 2024 – June 2026 by the Office of City Planning with CCRPC; consultants Utile, Nelson/Nygaard, Landwise, Wagner Hodgson, and Engineering Ventures.',
  },
  {
    label: 'Who was heard',
    text: 'A Project Advisory Committee (4 meetings), 2 public meetings, 2 open houses, 2 online surveys, focus groups, and ~15 pop-up events.',
  },
  {
    label: 'Where it goes',
    text: 'Outcomes feed into the citywide comprehensive plan, planBTV 2050.',
  },
  {
    label: 'What it is not',
    text: 'A framework is “not a project plan or a fixed set of rules” but a menu of strategies. All site visions are “illustrative visions rather than prescriptive plans” requiring further study and outreach.',
  },
];

export const bowlingAlleyQuote =
  '“THE BOWLING ALLEY IS SO SPECIAL. Please don’t LOSE it through this process.”';

export const sourceNote =
  'This site summarizes the draft planBTV New North End (June 2026, 219 pages). It is an unofficial explainer; page citations refer to the draft document. Implementation is not guaranteed — it depends on resident participation, political will, and funding (p. 207).';

export const planPdfUrl =
  'https://www.burlingtonvt.gov/DocumentCenter/View/12098/planBTV-New-North-End-Draft?bidId=';
