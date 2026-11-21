// All content in this module is sourced from website-content-sources.md, the
// summary of the updated draft "planBTV New North End" (updated 9/18/2026,
// published October 2026, 209-page PDF). `cite` fields are page numbers in
// that document. See docs/plan-diff-2026-06-22-to-2026-10-20.md for what
// changed from the June 2026 draft.

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
    cite: 'pp. 2–3, 8, 22–23',
  },
  {
    value: '599',
    label: 'homes across three focus areas',
    detail:
      'Full buildout of the three focus areas adds 599 dwelling units plus 264,000 SF of commercial space. The June draft’s two park sites (835 homes total) were dropped.',
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
    city: 43,
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
      'Masterplan (UD5) is an Immediate-term Quick Win',
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
];

export interface SecondarySite {
  name: string;
  summary: string;
  cite: string;
}

// The plan names three focus areas; these are secondary/supporting locations
// drawn from the corridor and transportation chapters.
export const secondarySites: SecondarySite[] = [
  {
    name: 'City-owned land generally',
    summary:
      'A Citywide (Civic) Asset Study would inventory all City property and evaluate it for housing and community uses — parks and permanently conserved open spaces are documented but “would not be evaluated for potential housing development” (UD1). UD2 explores public land, again excluding parks, for housing in planBTV 2050 (both Immediate Quick Wins). Using City land can cut housing costs by as much as 20% and generate perpetual revenue via ground leases.',
    cite: 'pp. 166–168, 176–177, 206–207',
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
    description:
      'Three floors of homes above a ground floor that can hold retail, commercial, or community space.',
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
      'The plan says this “is not the end of zoning reform in the NNE” — North Avenue design guidelines (P1) and follow-up zoning analysis for major focus area sites come next.',
      'Nothing proposed anywhere is taller than four stories, and “gentle transition” building types go next to single-family homes.',
    ],
    cite: 'pp. 17, 32, 39–40, 65, 141–143',
  },
  {
    id: 'traffic',
    title: 'Driving, traffic, and parking',
    points: [
      'North Avenue keeps its existing 2–3 vehicle travel lanes under the preferred redesign, and adds on-street parking and loading on the northeast side.',
      'The updated trip table estimates about 570 net new daily vehicle trips from the three focus areas (the accompanying text still cites the June draft’s “less than 3,000”) — North Ave carries just over 10,000 vehicles/day today, and the plan notes that roads with one lane each way commonly handle about 10,000–15,000/day; it concludes the new trips “should be able to be accommodated,” though that discussion uses the older, larger development assumptions and peak-period intersection pressure is possible.',
      'Roundabouts are proposed or studied: preferred at the VT 127 interchange, still under study at Ethan Allen Parkway, explored at Institute Rd.',
      'Side-street changes are proposed or explored at Tracy Dr/Loaldo Dr (one-way pair), Saratoga Ave (one-way in), and Gazo Ave (strategic closures); driveways along North Ave get consolidated as redevelopment occurs.',
      'Traffic calming — chicanes, speed humps, raised intersections, neighborhood traffic circles — is proposed for designated quiet streets, with community participation in design.',
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
      'Aging in place (AARP study): 68% of older adults say rising property taxes affect their ability to stay “a lot”; 57% rate senior housing options fair or poor; 64% worry about when they can no longer drive. Residents asked for senior-friendly, stair-free units (Plattsburg), and the transit/walkability agenda responds directly.',
      'Displacement concerns are on the record at Plattsburg (single-family homes) and Ethan Allen Plaza (small businesses) — Plaza Option 2 was created specifically to keep more existing businesses.',
    ],
    cite: 'pp. 8–9, 28–29, 154–168',
  },
  {
    id: 'services',
    title: 'Services, utilities, and daily life',
    points: [
      'Route 7 bus: the plan calls restoring Sunday service (there is none today) a near-term priority, though its implementation table lists the related lobbying action (M13) as long-term (10+ years), with more frequency as the neighborhood grows and shelters and benches at warranted stops.',
      'Water mains along North Ave — some from the 1920s — must be replaced as a prerequisite for development, protecting service for new and existing residents alike.',
      'Wastewater has headroom: the North Plant is at ~40% of capacity now and would reach only ~45% after full buildout of the three focus areas, “well within design limits.”',
      'City parks were screened out: “those are not and will not be considered as housing sites.”',
      'Resident voice going forward: an NNE mobility advisory committee, an annual mode-share survey, and a Neighborhood Placemaking Committee.',
    ],
    cite: 'pp. 13–14, 17, 52, 69, 120–121, 165, 176–178, 202, 208',
  },
  {
    id: 'first',
    title: 'What actually happens first',
    points: [
      'Six of the seven Urban Design actions (UD1–UD6) are Immediate-term (1–2 year) studies and plans — not construction. The seventh (UD7, the North Ave water main) is long-term.',
      'Construction of the North Avenue corridor phases is Short- to Long-term (2 to 10+ years), each phase starting with its own scoping study.',
      'The plan is explicit: “Implementation is not guaranteed” — it depends on resident participation, political will, and funding.',
    ],
    cite: 'pp. 197–209',
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
      'The updated draft drops housing on the park’s front lawn: the “Bend” option now pairs the realignment with possible park programming or ecological landscaping, and new housing only on adjacent private property.',
    ],
    cite: 'PDF pp. 72, 104–111',
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
    'A citywide mobility hub plan (M7); the focus-area concepts show hubs that could combine transit, car share, secure bike parking, micromobility, and potentially bike repair or a café.',
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
    'Lobby the State Legislature for sustainable transit funding, and explore a transportation fund supported by contributions from new development (M13–M14).',
  ],
  cite: 'pp. 13, 120–121, 200–201',
};

export const tdmPrograms: Improvement = {
  title: 'Transportation demand management (all launch Short-term)',
  points: [
    'CarShare Vermont expansion (TDM1).',
    'Outreach and education: bike workshops, e-bike test events at Ethan Allen Plaza, multilingual materials (TDM2).',
    'Walk-to-shop trolley libraries (TDM3).',
    'Safe Routes to School at Flynn, CP Smith, Hunt, and Burlington HS (TDM4).',
    'NNE mobility advisory committee (TDM5) and an annual mode survey (TDM6).',
    'Explore a volunteer-based microtransit program for older residents (TDM7).',
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
    cite: 'pp. 13, 130–135, 204–205',
  },
  {
    name: 'Leddy Park',
    status: 'enhanced',
    summary:
      'Gains a linear multi-use plaza connecting its 75 acres to North Ave through the Ethan Allen Plaza redevelopment — “a welcoming gateway.” Adjacent development “must complement — not compete with” the park, guided by the 2024 Leddy Park Comprehensive Plan.',
    cite: 'pp. 33, 63, 66, 150–159, 188–189',
  },
  {
    name: 'Ethan Allen Park',
    status: 'protected',
    summary:
      'No longer a housing site. The June draft proposed ~123 homes on the front lawn and drew the strongest opposition of any site; the updated plan drops it and says City parks “are not and will not be considered as housing sites.” The North Ave intersection is still under study: a roundabout would remove some trees (with replacement planting) and could move the historic stone gateway to the center island, while the “Bend” option could add park programming or a more ecological landscape, with any new housing on adjacent private land. The front lawn remains a pollinator-meadow and plaza-activation candidate.',
    cite: 'pp. 14, 69, 104–111, 193',
  },
  {
    name: 'Starr Farm Park',
    status: 'protected',
    summary:
      'No longer a housing site. The June draft’s “Starr Farm West” concept (~111 senior/multigenerational homes plus a splash pad, ice rink, and Greenway mobility hub) drew concerns about tree canopy and possibly threatened species, and the updated plan drops it — parks “are not and will not be considered as housing sites.” Starr Farm Road remains a Greenway gateway-art location.',
    cite: 'pp. 14, 69, 193',
  },
  {
    name: 'Arms Forest & Rock Point',
    status: 'protected',
    summary:
      'Explicitly preserved and protected. New pedestrian paths from North Ave through the Alliance Church site improve access; the community worries about recreational pressure.',
    cite: 'pp. 28, 31, 33, 146–149, 191',
  },
  {
    name: 'VT 127 interchange',
    status: 'new',
    summary:
      'Reimagined as “a park-like space” with regenerated native ecosystems, strengthening the ecological connection from Arms Forest to the Winooski Valley.',
    cite: 'PDF p. 102; p. 191',
  },
  {
    name: 'Franklin Square',
    status: 'new',
    summary:
      'Activated as a public plaza with a mobility hub, shelter, and seating — also a plaza-activation and gateway-art site.',
    cite: 'pp. 186, 193',
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
  'The soft sites analysis identified two City parks, but “those are not and will not be considered as housing sites.” The City’s Public Asset Study (UD1) and planBTV 2050 land review (UD2) now explicitly exclude parks and permanently conserved open spaces (pp. 14, 17, 69, 167, 176–177).';

export const newGreenSpaces = [
  'New park and plazas at Plattsburg/Franklin Square',
  'A civic plaza at the Alliance Church site and a gateway plaza/park entrance at Ethan Allen Parkway',
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

// The full draft lists 43 actions (pp. 17–18, 197–209). These are the ones
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
    title:
      'Public Asset Study of City assets’ development feasibility (excluding parks and permanently conserved open spaces)',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD2',
    category: 'Urban Design',
    title:
      'Explore public land for housing in planBTV 2050 (excluding parks and permanently conserved open spaces)',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD3',
    category: 'Urban Design',
    title: 'CHIP financing pathway',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD4',
    category: 'Urban Design',
    title: 'Public-private partnership template',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD5',
    category: 'Urban Design',
    title: 'Ethan Allen Plaza masterplan',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD6',
    category: 'Urban Design',
    title: 'Ethan Allen Parkway intersection realignment study',
    timeframe: 'Immediate (1–2 yr)',
    quickWin: true,
  },
  {
    code: 'UD7',
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
    text: 'Developed December 2024 – September 2026 by the Office of City Planning with CCRPC; consultants Utile, Nelson/Nygaard, Landwise, Wagner Hodgson, and Engineering Ventures.',
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
  'This site summarizes the updated draft planBTV New North End (updated September 18, 2026; published October 2026; 209 pages). It is an unofficial explainer; page citations refer to that document. Implementation is not guaranteed — it depends on resident participation, political will, and funding (p. 197).';

export interface PlanDocument {
  id: 'current' | 'previous';
  label: string;
  title: string;
  date: string;
  pages: number;
  sizeMb: number;
  // The City of Burlington's own copy of this version.
  href: string;
  note: string;
}

// Both drafts, linked to the City's copies so readers can compare them.
// This site's content and page citations follow the current draft.
// Verified 2026-11-19: each URL serves the exact PDF this site was diffed
// against (sha256 e0888945… current, 8a1f9c16… previous).
export const planDocuments: PlanDocument[] = [
  {
    id: 'current',
    label: 'Current draft',
    title: 'planBTV New North End — updated draft',
    date: 'Updated Sept. 18, 2026 · published Oct. 2026',
    pages: 209,
    sizeMb: 84,
    href: 'https://www.burlingtonvt.gov/DocumentCenter/View/12761/260918-planBTV_NNE_reducedSize?bidId=',
    note: 'Three focus areas, 599 homes. City parks are no longer housing sites. This site is based on this version.',
  },
  {
    id: 'previous',
    label: 'Previous draft',
    title: 'planBTV New North End — draft',
    date: 'June 22, 2026',
    pages: 219,
    sizeMb: 94,
    href: 'https://www.burlingtonvt.gov/DocumentCenter/View/12098/planBTV-New-North-End-Draft?bidId=',
    note: 'Five focus areas, 835 homes, including housing concepts at Ethan Allen Park and Starr Farm Park.',
  },
];

export const planProjectUrl =
  'https://www.burlingtonvt.gov/824/planBTV-New-North-End';

export const whatChanged = [
  'Ethan Allen Park and Starr Farm Park were dropped as housing sites; parks “are not and will not be considered as housing sites.”',
  'Three focus areas instead of five: 599 homes and 264,000 SF of commercial space (was 835 homes and 279,000 SF).',
  'The park-replacement action (old UD3) was removed, and the Urban Design actions were renumbered UD1–UD7 (43 actions total, was 44).',
  'New: a Citywide Asset Study page and a letter from the Mayor.',
];
