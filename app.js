/* ==========================================================================
   SummitConnect - Interactive Application Engine (JS)
   ========================================================================== */

// Sample Dataset for Climb Stories
const initialStories = [
    {
        id: 'story-1',
        title: 'Traversing Mt. Kenya via Sirimon to Chogoria at Sunrise',
        mountainKey: 'mt-kenya',
        mountainName: 'Mount Kenya',
        climbType: 'guided',
        climbTypeLabel: 'Guided Trek',
        route: 'Sirimon - Chogoria Traverse',
        authorName: 'Amina K.',
        authorInitial: 'A',
        guideUsed: 'Joseph Njuguna (Super Guide)',
        durationDays: 5,
        elevationGain: '4,985m (Pt. Lenana)',
        summitStatus: 'Successful Summit 🎉',
        date: 'Sept 2026',
        likes: 142,
        image: 'assets/mt_kenya_hero_1790676045026.png',
        snippet: 'Standing on Point Lenana at 5:45 AM as the sun illuminated Lake Michaelson below was a spiritual experience. The acclimatization pace set by Super Guide Joseph was flawless.',
        fullStory: `
            <h3>The Journey to Point Lenana (4,985m)</h3>
            <p>Mount Kenya has always been on my bucket list, but doing the <strong>Sirimon to Chogoria traverse</strong> exceeded all expectations. We started from Sirimon Gate, gradually building altitude through the bamboo forest up to Judmaier Camp (3,300m).</p>
            
            <h4>Day-by-Day Experience Highlights:</h4>
            <ul>
                <li><strong>Day 1 & 2:</strong> Gentle trekking through Moorland. The views of Teleki Valley and the twin main peaks (Batian & Nelion) appearing through the afternoon mist were breathtaking.</li>
                <li><strong>Day 3 (Shipton's Camp 4,200m):</strong> Essential acclimatization day. We did a short steep climb to Kami Hut for acclimatization and returned to Shipton for carb-loading and early rest.</li>
                <li><strong>Day 4 (Summit Night):</strong> Woke up at 2:30 AM under a freeze-clear sky. The climb up the scree slope to Austrian Hut was intense, but our Super Guide Joseph maintained a steady <em>pole pole</em> (slow & steady) rhythm that saved our energy.</li>
                <li><strong>Summit Moment:</strong> Reached Point Lenana at 5:45 AM just as the horizon ignited with golden orange hues. From the top, we could see Mount Kilimanjaro shimmering over 200km to the south!</li>
            </ul>

            <div style="background: var(--primary-light); border-left: 4px solid var(--primary); padding: 16px; margin: 20px 0; border-radius: 8px;">
                <strong>Pro Tip from Climber Amina:</strong> "Invest in heavy thermal layers for summit night. Temperature dropped to -8°C with wind chill at Lenana peak!"
            </div>
        `
    },
    {
        id: 'story-2',
        title: 'Solo Climber: Navigating Mt. Kenya’s Gorges Valley Alone',
        mountainKey: 'mt-kenya',
        mountainName: 'Mount Kenya',
        climbType: 'solo',
        climbTypeLabel: 'Solo Hike 🧗‍♀️',
        route: 'Chogoria Route',
        authorName: 'Faith W.',
        authorInitial: 'F',
        guideUsed: 'Self-Guided Solo Trekker',
        durationDays: 4,
        elevationGain: '4,985m (Pt. Lenana)',
        summitStatus: 'Successful Solo Summit 🎉',
        date: 'Aug 2026',
        likes: 245,
        image: 'assets/mt_kenya_hero_1790676045026.png',
        snippet: 'As a solo female mountain hiker, silence on the Chogoria trail was empowering. Pre-registering with KWS park rangers and carrying a Decathlon Quechua GPS messenger kept me safe.',
        fullStory: `
            <h3>Solo Alpine Independence</h3>
            <p>Solo hiking high peaks demands 100% self-reliance. I carried my lightweight tent, Quechua stove, GPS tracker, and heavy thermal gear. Camping beside Lake Michaelson in total solitude under starry skies was unforgettable.</p>
        `
    },
    {
        id: 'story-3',
        title: 'Nairobi Trekkers Club: 28 Hikers Conquering Elephant Hill',
        mountainKey: 'aberdare',
        mountainName: 'Aberdares',
        climbType: 'group',
        climbTypeLabel: 'Group Trek 👥',
        route: 'Njabini Gate Trail',
        authorName: 'Nairobi Trekkers',
        authorInitial: 'N',
        guideUsed: 'Community Group Lead',
        durationDays: 1,
        elevationGain: '3,657m (Summit)',
        summitStatus: '28/28 Group Summit 🎉',
        date: 'Sept 2026',
        likes: 310,
        image: 'assets/kilimanjaro_camp_1790676173285.png',
        snippet: 'Our community group trip from Nairobi! 28 passionate hikers bonding through the bamboo zone and pushing each other up Despair Hill to the summit.',
        fullStory: `
            <h3>Power of Group Energy</h3>
            <p>Hiking in a community group makes tough climbs fun. With shared transport from Nairobi, group safety marshals, and team cheering, all 28 members made it to the peak!</p>
        `
    }
];

// Sample Dataset for Super Guides (Private Treks)
const defaultGuides = [
    {
        id: 'guide-joseph',
        name: 'Joseph Njuguna',
        tagline: 'Lead Alpine & Altitude Specialist',
        locationKey: 'nanyuki',
        locationName: 'Nanyuki / Mt. Kenya Base',
        summitsCount: 48,
        rating: 5.0,
        reviewCount: 142,
        mountains: ['Mt. Kenya (Lenana & Batian)', 'Mt. Kilimanjaro'],
        specialtyKey: 'mt-kenya-lenana',
        image: 'assets/super_guide_joseph_1790676078336.png',
        certifications: ['Wilderness First Responder (WFR)', 'KIFGA Senior Alpine Guide', 'Leave No Trace Master'],
        bio: 'Over 12 years of high-altitude leadership. Summited Mount Kenya 48 times and Kilimanjaro 22 times. Focuses on safe acclimatization pace and private custom treks.',
        dailyRate: '$180 / day',
        isWomenGuide: false,
        phone: '+254 712 345 678'
    },
    {
        id: 'guide-faith',
        name: 'Faith Wanjiku',
        tagline: 'Lead Female Alpine Guide & Founder of Girls on Summits',
        locationKey: 'nanyuki',
        locationName: 'Nanyuki & Mt. Kenya Gates',
        summitsCount: 65,
        rating: 5.0,
        reviewCount: 178,
        mountains: ['Mt. Kenya Point Lenana', 'Batian North Face', 'Kilimanjaro Lemosho'],
        specialtyKey: 'mt-kenya-lenana',
        image: 'assets/guide_sarah_1790676128232.png',
        certifications: ['KWS Licensed Mountain Guide', 'Wilderness First Responder (WFR)', 'Leave No Trace Trainer'],
        bio: 'Over 8 years guiding solo female climbers, international groups, and women-only summit expeditions. Passionate about empowering women on Africa’s highest peaks with careful hydration and acclimatization pace.',
        dailyRate: '$190 / day',
        isWomenGuide: true,
        phone: '+254 722 987 654'
    },
    {
        id: 'guide-sarah',
        name: 'Sarah Akello',
        tagline: 'Technical Rock & Glacier Expedition Master',
        locationKey: 'nairobi',
        locationName: 'Based in Nairobi',
        summitsCount: 35,
        rating: 4.98,
        reviewCount: 98,
        mountains: ['Rwenzori Margherita Glacier', 'Mt. Kenya Batian Technical'],
        specialtyKey: 'rwenzori-glacier',
        image: 'assets/guide_sarah_1790676128232.png',
        certifications: ['UIAA Technical Rock Instructor', 'Glacier Rescue Certified', 'WFR'],
        bio: 'Specializing in technical alpine routes. Pitching traditional rock climbs up Batian or navigating ice crevasses on Rwenzori with maximum safety.',
        dailyRate: '$210 / day',
        isWomenGuide: true,
        phone: '+254 733 456 789'
    },
    {
        id: 'guide-amina',
        name: 'Amina K. Omar',
        tagline: 'High-Altitude Expedition Leader & Female Porter Advocate',
        locationKey: 'moshi',
        locationName: 'Moshi / Kilimanjaro Base',
        summitsCount: 112,
        rating: 5.0,
        reviewCount: 224,
        mountains: ['Kilimanjaro Uhuru Peak', 'Mount Meru', 'Mt. Kenya'],
        specialtyKey: 'kilimanjaro-machame',
        image: 'assets/super_guide_joseph_1790676078336.png',
        certifications: ['Kilimanjaro National Park Lead Guide', 'Wilderness First Responder', 'AIARE 1'],
        bio: 'Over 11 years leading high-altitude summit pushes on Kilimanjaro and Mt. Meru. Champions fair wages and professional training for East African female porters and guides.',
        dailyRate: '$220 / day',
        isWomenGuide: true,
        phone: '+255 754 123 456'
    }
];

// Load persisted guides or fallback
const savedGuides = localStorage.getItem('summit_guides');
const initialGuides = savedGuides ? JSON.parse(savedGuides) : defaultGuides;

// Sample Dataset for Local Hiking Groups
const initialGroups = [
    {
        id: 'group-she-climbs',
        name: 'She Climbs Kenya (All-Women Treks)',
        tagline: 'Empowering Women-Only Summit Expeditions & Day Hikes',
        locationKey: 'nairobi',
        locationName: 'Nairobi & East Africa',
        rating: 5.0,
        reviewCount: 184,
        nextTrip: 'Mt. Kenya All-Women Summit Traverse (Oct 24)',
        image: 'assets/mt_kenya_hero_1790676045026.png',
        pricePerPerson: 'KSh 26,500 / person (All-Inclusive)',
        tags: ['100% Female Guides & Crew', 'Safe Space for Solo Women', 'Acclimatization Pace', 'Sanitary Care Support'],
        description: 'Safe, supportive, and empowering mountain community connecting women hikers of all fitness levels. Guided by certified Kenyan female mountain leaders with all-female crew.',
        womenOnly: true
    },
    {
        id: 'group-nairobi-trekkers',
        name: 'Nairobi Alpine Trekkers Club',
        tagline: 'Premier Weekend Hiking Community in Nairobi',
        locationKey: 'nairobi',
        locationName: 'Nairobi Hub (1,450+ Members)',
        rating: 4.9,
        reviewCount: 210,
        nextTrip: 'Aberdares Satima Peak (This Saturday)',
        image: 'assets/kilimanjaro_camp_1790676173285.png',
        pricePerPerson: 'KSh 3,500 / person (Bus + Park Fees)',
        tags: ['Group Transport Included', 'Nairobi Pickup', 'Acclimatization Warmups'],
        description: 'Friendly community group organizing weekly weekend hikes across Aberdares, Rift Valley, and monthly Mt. Kenya summit expeditions.',
        womenOnly: false
    },
    {
        id: 'group-nanyuki-explorers',
        name: 'Nanyuki High Altitude Explorers',
        tagline: 'Mt. Kenya Footprint Trekking Group',
        locationKey: 'nanyuki',
        locationName: 'Nanyuki Base',
        rating: 5.0,
        reviewCount: 165,
        nextTrip: 'Mt. Kenya Chogoria 5-Day Traverse (Oct 12)',
        image: 'assets/mt_kenya_hero_1790676045026.png',
        pricePerPerson: 'KSh 28,000 / person (Full Package)',
        tags: ['Mt. Kenya Specialists', 'Shared Guides & Porters', 'Gear Discounts'],
        description: 'Local Nanyuki-based hiking community connecting climbers for shared group budget treks up Point Lenana & Kamweti routes.',
        womenOnly: false
    }
];

// Sample Dataset for Cabins & Campsites
const initialAccommodations = [
    {
        id: 'stay-mackinders',
        name: "Mackinder's Camp Alpine Cabins",
        mountain: 'Mount Kenya',
        mountainKey: 'mt-kenya',
        type: 'cabin',
        typeLabel: 'Alpine Cabin & Huts',
        altitude: '4,300m',
        route: 'Naro Moru Route (Teleki Valley)',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        description: 'Iconic stone alpine cabins in Teleki Valley facing Batian and Nelion. Features communal heated dining hall, bunk beds with foam mattresses, kitchen shelters, and running glacial stream water.',
        amenities: ['Bunk Beds & Foam Mattresses', 'Heated Dining Hall', 'Glacial Stream Water', 'Cook Shelter', 'KWS Ranger Station'],
        price: 'KSh 2,500',
        priceSub: 'per climber / night'
    },
    {
        id: 'stay-shiptons',
        name: "Shipton's Camp High-Altitude Cabins",
        mountain: 'Mount Kenya',
        mountainKey: 'mt-kenya',
        type: 'cabin',
        typeLabel: 'Alpine Cabin & Huts',
        altitude: '4,200m',
        route: 'Sirimon Route (Northern Summit Base)',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
        description: 'Spectacular alpine huts situated directly beneath the sheer North Face of Batian and Nelion. Features large dining room, dorm bunks, solar lighting, and breathtaking peak views.',
        amenities: ['Dorm Bunks', 'Solar Lighting', 'Dining Mess', 'Fresh Mountain Water', 'Batian Views'],
        price: 'KSh 2,800',
        priceSub: 'per climber / night'
    },
    {
        id: 'stay-michaelson',
        name: 'Lake Michaelson Wilderness Campsite',
        mountain: 'Mount Kenya',
        mountainKey: 'mt-kenya',
        type: 'campsite',
        typeLabel: 'Wild Campsite (Tent Sites)',
        altitude: '3,980m',
        route: 'Chogoria Route (Gorges Valley)',
        image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
        description: 'Widely considered Kenya’s most scenic alpine campsite. Pitch your tent along the emerald waters of Lake Michaelson framed by dramatic 300m cliffs and waterfall cascades.',
        amenities: ['Tent Pitching Ground', 'Pristine Lake Water', 'Rock Shelter Area', 'Unmatched Stargazing', 'Trout Stream'],
        price: 'KSh 1,200',
        priceSub: 'camping permit / night'
    },
    {
        id: 'stay-old-moses',
        name: 'Judmaier (Old Moses) Bunkhouse & Camp',
        mountain: 'Mount Kenya',
        mountainKey: 'mt-kenya',
        type: 'cabin',
        typeLabel: 'Bunkhouse & Meadow Camp',
        altitude: '3,300m',
        route: 'Sirimon Gate to Moorland',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        description: 'First night acclimatization shelter on Sirimon route. Comfortable 48-bed bunk dormitories with cedar dining tables and surrounding moorland campsite meadow with water taps.',
        amenities: ['48 Bunk Dorms', 'Piped Mountain Water', 'Kitchen Fireplace', 'Camping Lawn', 'Mobile Network'],
        price: 'KSh 2,000',
        priceSub: 'bunk / night (Camping KSh 1,000)'
    },
    {
        id: 'stay-chogoria-bandas',
        name: 'Chogoria Bandas & Meru Log Cabins',
        mountain: 'Mount Kenya',
        mountainKey: 'mt-kenya',
        type: 'cabin',
        typeLabel: 'Forest Log Cabins',
        altitude: '2,950m',
        route: 'Chogoria Forest Edge',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        description: 'Charming timber log cabins nestled in bamboo and indigenous cedar forests. Features crackling indoor wood fireplaces, private bedrooms, hot water showers, and self-catering kitchen.',
        amenities: ['Wood Fireplaces', 'Hot Showers', 'Private Rooms', 'Self-Catering Kitchen', 'Veranda Views'],
        price: 'KSh 4,500',
        priceSub: 'per banda cabin / night'
    },
    {
        id: 'stay-horombo',
        name: 'Horombo Huts & Alpine Campsite',
        mountain: 'Mount Kilimanjaro',
        mountainKey: 'kilimanjaro',
        type: 'cabin',
        typeLabel: 'Kilimanjaro A-Frame Cabins',
        altitude: '3,720m',
        route: 'Marangu Route',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Iconic Kilimanjaro A-frame timber huts accommodating up to 120 climbers, complete with separate dining halls, washrooms with running water, and dedicated tent platforms above the clouds.',
        amenities: ['A-Frame Cabins', 'Mattresses & Pillows', 'Spacious Mess Halls', 'Running Tap Water', 'Tent Platforms'],
        price: '$35',
        priceSub: 'per night (Park Hut Permit)'
    }
];

// Smart Affiliate Stores & Locations Engine
const affiliateGearData = {
    thermal: {
        stores: [
            {
                name: 'Decathlon Kenya',
                type: 'local',
                price: 'KSh 3,800',
                delivery: {
                    nairobi: 'Same-Day Pickup (2 hrs)',
                    nanyuki: 'Next-Day Courier (24h)',
                    mombasa: 'Next-Day Courier',
                    eldoret: 'Next-Day Courier',
                    kampala: '2-3 Days Regional',
                    international: '5-7 Days'
                },
                link: 'https://www.decathlon.co.ke/search?query=merino+wool+thermal',
                badge: '⚡ Local Pickup Available'
            },
            {
                name: 'Amazon Global Store',
                type: 'amazon',
                price: '$28 (KSh ~3,600)',
                delivery: {
                    nairobi: '3-5 Days Expedited',
                    nanyuki: '4-6 Days Delivery',
                    mombasa: '4-6 Days Delivery',
                    eldoret: '4-6 Days Delivery',
                    kampala: '5-7 Days Delivery',
                    international: '2-4 Days Prime'
                },
                link: 'https://www.amazon.com/s?k=merino+wool+base+layer+hiking&tag=summitkenya-20',
                badge: '🌐 Global Shipping'
            }
        ]
    },
    jacket: {
        stores: [
            {
                name: 'Decathlon Kenya (Sarit)',
                type: 'local',
                price: 'KSh 12,000',
                delivery: {
                    nairobi: 'Instant Pickup / 2 hrs',
                    nanyuki: 'Next-Day Courier',
                    mombasa: 'Next-Day Courier',
                    eldoret: 'Next-Day Courier',
                    kampala: '2-3 Days Regional',
                    international: '5-7 Days'
                },
                link: 'https://www.decathlon.co.ke/search?query=trekking+down+jacket',
                badge: '⭐ Official Partner'
            },
            {
                name: 'Nanyuki Gate Outfitter',
                type: 'local',
                price: 'Rent: KSh 1,200/day',
                delivery: {
                    nairobi: '1 Day Courier',
                    nanyuki: 'Instant Gate Pickup (1 hr)',
                    mombasa: '2 Days Delivery',
                    eldoret: '2 Days Delivery',
                    kampala: '3 Days Delivery',
                    international: 'Rent on Arrival'
                },
                link: 'https://summitconnect.co.ke/#gear',
                badge: '📍 Park Gate Pickup'
            }
        ]
    },
    shell: {
        stores: [
            {
                name: 'Decathlon Kenya',
                type: 'local',
                price: 'KSh 9,500',
                delivery: {
                    nairobi: 'Same-Day (2-3 hrs)',
                    nanyuki: 'Next-Day Courier',
                    mombasa: 'Next-Day Courier',
                    eldoret: 'Next-Day Courier',
                    kampala: '2-3 Days',
                    international: '5-7 Days'
                },
                link: 'https://www.decathlon.co.ke/search?query=waterproof+jacket+mh500',
                badge: '⚡ In Stock'
            },
            {
                name: 'Amazon Outdoor Store',
                type: 'amazon',
                price: '$79 (KSh ~10,200)',
                delivery: {
                    nairobi: '3-5 Days Expedited',
                    nanyuki: '4-6 Days Delivery',
                    mombasa: '4-6 Days Delivery',
                    eldoret: '4-6 Days Delivery',
                    kampala: '5-7 Days Delivery',
                    international: '2-3 Days Prime'
                },
                link: 'https://www.amazon.com/s?k=waterproof+hiking+rain+jacket+packable&tag=summitkenya-20',
                badge: '🌐 Global Shipping'
            }
        ]
    },
    boots: {
        stores: [
            {
                name: 'Decathlon Kenya (Two Rivers)',
                type: 'local',
                price: 'KSh 8,500',
                delivery: {
                    nairobi: 'Same-Day Pickup (2 hrs)',
                    nanyuki: 'Next-Day Delivery',
                    mombasa: 'Next-Day Delivery',
                    eldoret: 'Next-Day Delivery',
                    kampala: '2-3 Days',
                    international: '5-7 Days'
                },
                link: 'https://www.decathlon.co.ke/search?query=quechua+mh500+hiking+boots',
                badge: '⚡ Top Seller'
            },
            {
                name: 'Amazon Salomon/Columbia',
                type: 'amazon',
                price: '$95 (KSh ~12,300)',
                delivery: {
                    nairobi: '3-5 Days Expedited',
                    nanyuki: '4-6 Days Delivery',
                    mombasa: '4-6 Days Delivery',
                    eldoret: '4-6 Days Delivery',
                    kampala: '5-7 Days Delivery',
                    international: '2-3 Days Prime'
                },
                link: 'https://www.amazon.com/s?k=waterproof+hiking+boots+ankle+support&tag=summitkenya-20',
                badge: '🌐 International Brands'
            }
        ]
    },
    headlamp: {
        stores: [
            {
                name: 'Decathlon Kenya',
                type: 'local',
                price: 'KSh 2,500',
                delivery: {
                    nairobi: 'Same-Day (2-3 hrs)',
                    nanyuki: 'Next-Day Delivery',
                    mombasa: 'Next-Day Delivery',
                    eldoret: 'Next-Day Delivery',
                    kampala: '2-3 Days',
                    international: '5-7 Days'
                },
                link: 'https://www.decathlon.co.ke/search?query=forclaz+headlamp+trek',
                badge: '⚡ Same-Day'
            },
            {
                name: 'Amazon Petzl/Black Diamond',
                type: 'amazon',
                price: '$24 (KSh ~3,100)',
                delivery: {
                    nairobi: '3-5 Days Expedited',
                    nanyuki: '4-6 Days Delivery',
                    mombasa: '4-6 Days Delivery',
                    eldoret: '4-6 Days Delivery',
                    kampala: '5-7 Days Delivery',
                    international: '1-2 Days Prime'
                },
                link: 'https://www.amazon.com/s?k=petzl+headlamp+300+lumens&tag=summitkenya-20',
                badge: '🌐 Amazon Choice'
            }
        ]
    }
};

// Local Kenya Gear Shops & Catalogs
const initialShops = [
    {
        id: 'shop-decathlon',
        name: 'Decathlon Kenya (Official Gear Partner)',
        location: 'Two Rivers Mall & The Hub Karen, Nairobi',
        deliveryTag: '⭐ Official Partner • Express Delivery in Kenya',
        itemHighlights: 'Quechua MH500 Waterproof Boots, Forclaz Down Jackets (-10°C), Hydration Bladders',
        linkText: 'View Decathlon Catalog',
        catalog: [
            { name: 'Decathlon Quechua MH500 Waterproof Hiking Boots', price: 'KSh 8,500', tag: 'Top Rated Boot', type: 'Buy' },
            { name: 'Forclaz MT500 Trekking Down Jacket (-10°C)', price: 'KSh 12,000', tag: 'Summit Essential', type: 'Buy' },
            { name: 'Quechua 2L Hydration Bladder Pack', price: 'KSh 2,800', tag: 'Best Seller', type: 'Buy' },
            { name: 'Quechua Anti-Shock Trekking Poles (Pair)', price: 'KSh 3,200', tag: 'Joint Support', type: 'Buy' }
        ]
    },
    {
        id: 'shop-1',
        name: 'Nairobi Alpine Gear & Rental Hub',
        location: 'Nairobi CBD / Westlands',
        deliveryTag: '⚡ Same-Day Delivery in Nairobi',
        itemHighlights: 'Down Jackets (Rent KSh 1,500/day), High-Ankle Boots, Headlamps',
        linkText: 'View Rental Catalog',
        catalog: [
            { name: 'Heavy High-Altitude Down Jacket (-15°C)', price: 'KSh 1,500 / day', tag: 'Rental Item', type: 'Rent' },
            { name: 'High-Ankle Waterproof Boots (Sizes 37-46)', price: 'KSh 1,000 / day', tag: 'Rental Item', type: 'Rent' },
            { name: '300+ Lumens Headlamp + Batteries', price: 'KSh 500 / day', tag: 'Rental Item', type: 'Rent' }
        ]
    },
    {
        id: 'shop-2',
        name: 'Nanyuki Summit Outfitters',
        location: 'Nanyuki Town (Mt. Kenya Park Gate)',
        deliveryTag: '📍 Park Gate Pickup Available',
        itemHighlights: 'Rental Crampons, Ice Axes, Sleeping Bags (-15°C), Gaiters',
        linkText: 'View Gate Pickup Catalog',
        catalog: [
            { name: '4-Season Alpine Sleeping Bag (-15°C)', price: 'KSh 1,200 / day', tag: 'Park Gate Pickup', type: 'Rent' },
            { name: 'Technical Climbing Crampons & Ice Axe Set', price: 'KSh 1,800 / day', tag: 'Batian Technical', type: 'Rent' }
        ]
    }
];

// Route Elevations Dataset
const routeProfiles = {
    'sirimon-chogoria': {
        title: 'Mount Kenya: Sirimon - Chogoria Traverse',
        elevation: '4,985m (Pt. Lenana)',
        days: '5 Days',
        difficulty: 'Moderate - High',
        bestSeason: 'Jan-Mar & Jul-Oct',
        points: [
            { day: 'Day 1', camp: 'Sirimon Gate (2,440m)', alt: 2440 },
            { day: 'Day 1', camp: 'Judmaier (3,300m)', alt: 3300 },
            { day: 'Day 2', camp: 'Old Moses (3,300m)', alt: 3300 },
            { day: 'Day 3', camp: 'Shipton Camp (4,200m)', alt: 4200 },
            { day: 'Day 4', camp: 'Pt. Lenana Summit (4,985m)', alt: 4985 },
            { day: 'Day 4', camp: 'Mintos Camp (4,250m)', alt: 4250 },
            { day: 'Day 5', camp: 'Chogoria Gate (2,950m)', alt: 2950 }
        ]
    },
    'batian-nelion': {
        title: 'Mount Kenya: Batian Peak Technical Rock Climb',
        elevation: '5,199m (True Summit)',
        days: '6 Days (Grade IV, 5.9)',
        difficulty: 'Strenuous / Technical',
        bestSeason: 'Jul-Sep (North Face) & Dec-Mar (South)',
        points: [
            { day: 'Day 1', camp: 'Base Gate (2,400m)', alt: 2400 },
            { day: 'Day 2', camp: 'Shipton Camp (4,200m)', alt: 4200 },
            { day: 'Day 3', camp: 'Kami Hut Base (4,439m)', alt: 4439 },
            { day: 'Day 4', camp: 'Firmin Tower (4,800m)', alt: 4800 },
            { day: 'Day 5', camp: 'Batian Summit (5,199m)', alt: 5199 },
            { day: 'Day 6', camp: 'Descent Base (2,400m)', alt: 2400 }
        ]
    },
    'kilimanjaro-machame': {
        title: 'Mount Kilimanjaro: 7-Day Machame Route',
        elevation: '5,895m (Uhuru Peak)',
        days: '7 Days',
        difficulty: 'Challenging',
        bestSeason: 'Jan-Mar & Jun-Oct',
        points: [
            { day: 'Day 1', camp: 'Machame Gate (1,800m)', alt: 1800 },
            { day: 'Day 2', camp: 'Shira Camp (3,840m)', alt: 3840 },
            { day: 'Day 3', camp: 'Lava Tower (4,630m)', alt: 4630 },
            { day: 'Day 4', camp: 'Barranco Camp (3,950m)', alt: 3950 },
            { day: 'Day 5', camp: 'Barafu Camp (4,673m)', alt: 4673 },
            { day: 'Day 6', camp: 'Uhuru Summit (5,895m)', alt: 5895 },
            { day: 'Day 7', camp: 'Mweka Gate (1,640m)', alt: 1640 }
        ]
    },
    'rwenzori-margherita': {
        title: 'Rwenzori Mountains: Central Circuit & Margherita Peak',
        elevation: '5,109m (Margherita Peak)',
        days: '8 Days',
        difficulty: 'High / Alpine Glacier',
        bestSeason: 'Jun-Aug & Dec-Feb',
        points: [
            { day: 'Day 1', camp: 'Nyakakalengija (1,615m)', alt: 1615 },
            { day: 'Day 2', camp: 'John Matte (3,505m)', alt: 3505 },
            { day: 'Day 3', camp: 'Bujuku Camp (3,962m)', alt: 3962 },
            { day: 'Day 4', camp: 'Elena Camp (4,541m)', alt: 4541 },
            { day: 'Day 5', camp: 'Margherita Peak (5,109m)', alt: 5109 },
            { day: 'Day 6', camp: 'Kitandara (4,023m)', alt: 4023 },
            { day: 'Day 7', camp: 'Guy Yeoman (3,505m)', alt: 3505 },
            { day: 'Day 8', camp: 'Base Park (1,615m)', alt: 1615 }
        ]
    }
};

// Application State
let state = {
    stories: [...initialStories],
    guides: [...initialGuides],
    groups: [...initialGroups],
    shops: [...initialShops],
    accommodations: [...initialAccommodations],
    activeStoryFilter: 'all',
    activeAccomFilter: 'all',
    directoryMode: 'guides',
    activeRouteKey: 'sirimon-chogoria',
    darkMode: false
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileNav();
    renderStories();
    renderDirectory();
    renderAccommodations();
    renderLocalShops();
    renderRouteDetails(state.activeRouteKey);
    updateAllAffiliateLinks();
    initEventListeners();
    initAccommodationsListeners();
    initGuideDashboard();

    if (window.location.hash.startsWith('#store=')) {
        const shopId = window.location.hash.split('=')[1];
        openStoreCatalog(shopId);
    }
});

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });
}

function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
    }
}

// Render Climb Stories
function renderStories() {
    const grid = document.getElementById('storiesGrid');
    if (!grid) return;

    const filtered = state.stories.filter(story => {
        if (state.activeStoryFilter === 'all') return true;
        if (state.activeStoryFilter === 'solo') return story.climbType === 'solo';
        if (state.activeStoryFilter === 'group') return story.climbType === 'group';
        return story.mountainKey === state.activeStoryFilter;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No stories found for this filter.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(story => `
        <div class="story-card" onclick="openStoryModal('${story.id}')">
            <div class="story-image-wrap">
                <img src="${story.image}" alt="${story.title}" class="story-image">
                <span class="story-mountain-badge"><i class="fa-solid fa-mountain"></i> ${story.mountainName}</span>
                <span class="story-type-badge">${story.climbTypeLabel}</span>
                <span class="story-summit-status">${story.summitStatus}</span>
            </div>
            <div class="story-content">
                <div class="story-meta">
                    <div class="story-author">
                        <div class="author-avatar">${story.authorInitial}</div>
                        <span>${story.authorName}</span>
                    </div>
                    <span>•</span>
                    <span><i class="fa-regular fa-clock"></i> ${story.durationDays} Days</span>
                </div>
                <h3 class="story-title">${story.title}</h3>
                <p class="story-snippet">${story.snippet}</p>
                <div class="story-footer">
                    <span><i class="fa-solid fa-route"></i> ${story.route}</span>
                    <div class="story-stats-row">
                        <span><i class="fa-regular fa-heart"></i> ${story.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Directory (Super Guides OR Hiking Groups)
// Render Directory (Super Guides, Hiking Groups, OR Women-Led Treks)
function renderDirectory(filterText = '', filterLoc = 'all') {
    const grid = document.getElementById('directoryGrid');
    if (!grid) return;

    if (state.directoryMode === 'women' || filterLoc === 'women-only') {
        const filteredGuides = state.guides.filter(g => {
            const matchesText = g.name.toLowerCase().includes(filterText.toLowerCase()) || g.bio.toLowerCase().includes(filterText.toLowerCase());
            return g.isWomenGuide && matchesText;
        });

        const filteredGroups = state.groups.filter(grp => {
            const matchesText = grp.name.toLowerCase().includes(filterText.toLowerCase()) || grp.description.toLowerCase().includes(filterText.toLowerCase());
            return grp.womenOnly && matchesText;
        });

        let html = '';

        if (filteredGuides.length > 0) {
            html += filteredGuides.map(guide => `
                <div class="guide-card" style="border-color: rgba(236, 72, 153, 0.4);">
                    <div class="women-guide-badge">
                        <i class="fa-solid fa-venus"></i> 🌸 Verified Female Alpine Guide
                    </div>
                    <div class="guide-header-row">
                        <div class="guide-avatar-wrap">
                            <img src="${guide.image}" alt="${guide.name}" class="guide-avatar">
                            <div class="super-badge" style="background:#ec4899;"><i class="fa-solid fa-check"></i></div>
                        </div>
                        <div class="guide-info-main">
                            <h3>${guide.name} <i class="fa-solid fa-circle-check guide-verified-icon" style="color:#ec4899;"></i></h3>
                            <div class="guide-tagline">${guide.tagline}</div>
                            <div class="guide-rating-row">
                                <span class="stars"><i class="fa-solid fa-star"></i> ${guide.rating}</span>
                                <span style="color: var(--text-muted);">(${guide.reviewCount} reviews)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="guide-summit-pill" style="background: rgba(236,72,153,0.08); color: #be185d; border-color: rgba(236,72,153,0.2);">
                        <i class="fa-solid fa-award"></i> ${guide.summitsCount} Verified Summits • Female Expedition Leader
                    </div>

                    <p style="font-size:0.88rem; color:var(--text-body); margin-bottom:12px;">${guide.bio}</p>

                    <div class="guide-tags">
                        <span class="guide-tag women-guide-tag"><i class="fa-solid fa-shield-heart"></i> Solo Female Friendly</span>
                        <span class="guide-tag"><i class="fa-solid fa-location-dot"></i> ${guide.locationName}</span>
                        ${guide.mountains.map(m => `<span class="guide-tag">${m}</span>`).join('')}
                    </div>

                    <div class="guide-action-row">
                        <button class="btn btn-outline" onclick="openGuideModal('${guide.id}')">View Profile</button>
                        <button class="btn btn-primary" style="background:linear-gradient(135deg,#ec4899,#be185d); border:none;" onclick="openGuideModal('${guide.id}', true)">Book Female Guide</button>
                    </div>
                </div>
            `).join('');
        }

        if (filteredGroups.length > 0) {
            html += filteredGroups.map(grp => `
                <div class="guide-card" style="border-color: rgba(236, 72, 153, 0.4);">
                    <div class="women-guide-badge" style="background:linear-gradient(135deg,rgba(236,72,153,0.15),rgba(190,24,93,0.15));">
                        <i class="fa-solid fa-people-roof"></i> 🌸 All-Women Group Trek & Sisterhood
                    </div>
                    <div class="guide-header-row">
                        <div class="guide-avatar-wrap">
                            <img src="${grp.image}" alt="${grp.name}" class="guide-avatar">
                            <div class="super-badge" style="background: #ec4899;"><i class="fa-solid fa-users"></i></div>
                        </div>
                        <div class="guide-info-main">
                            <h3>${grp.name}</h3>
                            <div class="guide-tagline">${grp.tagline}</div>
                            <div class="guide-rating-row">
                                <span class="stars"><i class="fa-solid fa-star"></i> ${grp.rating}</span>
                                <span style="color: var(--text-muted);">(${grp.reviewCount} reviews)</span>
                            </div>
                        </div>
                    </div>

                    <div class="guide-summit-pill" style="background: rgba(236,72,153,0.08); color: #be185d; border-color: rgba(236,72,153,0.2);">
                        <i class="fa-solid fa-calendar-day"></i> Next Trek: ${grp.nextTrip}
                    </div>

                    <p style="font-size: 0.88rem; color: var(--text-body); margin-bottom: 14px;">${grp.description}</p>

                    <div class="guide-tags">
                        ${grp.tags.map(t => `<span class="guide-tag women-guide-tag"><i class="fa-solid fa-check"></i> ${t}</span>`).join('')}
                    </div>

                    <div class="guide-action-row">
                        <button class="btn btn-outline" onclick="openGroupModal('${grp.id}')">Group Info</button>
                        <button class="btn btn-primary" style="background:linear-gradient(135deg,#ec4899,#be185d); border:none;" onclick="openGroupModal('${grp.id}', true)">Join All-Women Trek</button>
                    </div>
                </div>
            `).join('');
        }

        grid.innerHTML = html || '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted);">No women-only treks matching your search.</div>';
        return;
    }

    if (state.directoryMode === 'guides') {
        const filtered = state.guides.filter(g => {
            const matchesText = g.name.toLowerCase().includes(filterText.toLowerCase()) || g.bio.toLowerCase().includes(filterText.toLowerCase());
            const matchesLoc = (filterLoc === 'all') || (g.locationKey === filterLoc) || (g.specialtyKey === filterLoc);
            return matchesText && matchesLoc;
        });

        grid.innerHTML = filtered.map(guide => `
            <div class="guide-card">
                <div class="guide-header-row">
                    <div class="guide-avatar-wrap">
                        <img src="${guide.image}" alt="${guide.name}" class="guide-avatar">
                        <div class="super-badge"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <div class="guide-info-main">
                        <h3>${guide.name} <i class="fa-solid fa-circle-check guide-verified-icon"></i></h3>
                        <div class="guide-tagline">${guide.tagline}</div>
                        <div class="guide-rating-row">
                            <span class="stars"><i class="fa-solid fa-star"></i> ${guide.rating}</span>
                            <span style="color: var(--text-muted);">(${guide.reviewCount} reviews)</span>
                        </div>
                    </div>
                </div>
                
                <div class="guide-summit-pill">
                    <i class="fa-solid fa-award"></i> ${guide.summitsCount} Verified Summits Logged
                </div>

                <div class="guide-tags">
                    ${guide.isWomenGuide ? '<span class="guide-tag women-guide-tag"><i class="fa-solid fa-venus"></i> 🌸 Female Guide</span>' : ''}
                    <span class="guide-tag"><i class="fa-solid fa-location-dot"></i> ${guide.locationName}</span>
                    ${guide.mountains.map(m => `<span class="guide-tag">${m}</span>`).join('')}
                </div>

                <div class="guide-action-row">
                    <button class="btn btn-outline" onclick="openGuideModal('${guide.id}')">View Profile</button>
                    <button class="btn btn-primary" onclick="openGuideModal('${guide.id}', true)">Book Private Guide</button>
                </div>
            </div>
        `).join('');

    } else {
        const filtered = state.groups.filter(g => {
            const matchesText = g.name.toLowerCase().includes(filterText.toLowerCase()) || g.description.toLowerCase().includes(filterText.toLowerCase());
            const matchesLoc = (filterLoc === 'all') || (g.locationKey === filterLoc);
            return matchesText && matchesLoc;
        });

        grid.innerHTML = filtered.map(grp => `
            <div class="guide-card">
                <div class="guide-header-row">
                    <div class="guide-avatar-wrap">
                        <img src="${grp.image}" alt="${grp.name}" class="guide-avatar">
                        <div class="super-badge" style="background: var(--primary);"><i class="fa-solid fa-users"></i></div>
                    </div>
                    <div class="guide-info-main">
                        <h3>${grp.name}</h3>
                        <div class="guide-tagline">${grp.tagline}</div>
                        <div class="guide-rating-row">
                            <span class="stars"><i class="fa-solid fa-star"></i> ${grp.rating}</span>
                            <span style="color: var(--text-muted);">(${grp.reviewCount} reviews)</span>
                        </div>
                    </div>
                </div>

                <div class="guide-summit-pill">
                    <i class="fa-solid fa-calendar-day"></i> Next Trek: ${grp.nextTrip}
                </div>

                <p style="font-size: 0.88rem; color: var(--text-body); margin-bottom: 14px;">${grp.description}</p>

                <div class="guide-tags">
                    ${grp.womenOnly ? '<span class="guide-tag women-guide-tag"><i class="fa-solid fa-venus"></i> 🌸 All-Women Group</span>' : ''}
                    ${grp.tags.map(t => `<span class="guide-tag"><i class="fa-solid fa-check" style="color: var(--primary);"></i> ${t}</span>`).join('')}
                </div>

                <div class="guide-action-row">
                    <button class="btn btn-outline" onclick="openGroupModal('${grp.id}')">Group Info</button>
                    <button class="btn btn-primary" onclick="openGroupModal('${grp.id}', true)">Join Upcoming Trek</button>
                </div>
            </div>
        `).join('');
    }
}

// Render Local Gear Shops
function renderLocalShops() {
    const grid = document.getElementById('shopsGrid');
    if (!grid) return;

    grid.innerHTML = state.shops.map(shop => `
        <div class="shop-card-item">
            <div class="shop-info">
                <h4>${shop.name}</h4>
                <div class="shop-location"><i class="fa-solid fa-location-dot"></i> ${shop.location}</div>
                <div class="shop-tags-row">
                    <span style="color: var(--primary); font-weight: 700;">${shop.deliveryTag}</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">${shop.itemHighlights}</p>
            </div>
            <button class="btn ${shop.id === 'shop-decathlon' ? 'btn-primary' : 'btn-outline'}" style="padding: 8px 14px; font-size: 0.85rem;" onclick="openStoreCatalog('${shop.id}')">
                ${shop.linkText} <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}

// Open Store Catalog Modal (Addressing User Audio Request)
function openStoreCatalog(shopId) {
    const shop = state.shops.find(s => s.id === shopId) || state.shops[0];
    const modalBody = document.getElementById('storeCatalogModalBody');
    if (!modalBody) return;

    window.history.pushState(null, null, '#store=' + shop.id);
    const shareUrl = window.location.origin + window.location.pathname + window.location.search + '#store=' + shop.id;

    modalBody.innerHTML = `
        <div style="margin-bottom: 24px; text-align: center; position: relative;">
            <button onclick="navigator.clipboard.writeText('${shareUrl}').then(() => showToast('Share link copied!'))" class="btn btn-outline" style="position: absolute; right: 0; top: 0; padding: 6px 10px; font-size: 0.8rem;" title="Copy shareable link">
                <i class="fa-solid fa-link"></i> Copy Link
            </button>
            <div style="width: 50px; height: 50px; background: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 12px;">
                <i class="fa-solid fa-store"></i>
            </div>
            <h2 style="font-size: 1.8rem; margin-bottom: 4px;">${shop.name}</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem;">${shop.location} • ${shop.deliveryTag}</p>
        </div>

        <h3 style="margin-bottom: 16px; font-size: 1.15rem; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">Active Store Catalog & Rental Inventory</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; margin-bottom: 24px;">
            ${shop.catalog.map(item => `
                <div style="background: var(--bg-main); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <span style="background: var(--primary-light); color: var(--primary); font-size: 0.72rem; font-weight: 700; padding: 3px 8px; border-radius: 10px; display: inline-block; margin-bottom: 8px;">${item.tag}</span>
                        <h4 style="font-size: 0.98rem; margin-bottom: 6px;">${item.name}</h4>
                        <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary); margin-bottom: 12px;">${item.price}</div>
                    </div>
                    <button class="btn btn-primary" style="width: 100%; padding: 8px; font-size: 0.85rem;" onclick="orderCatalogItem('${item.name}', '${shop.name}')">
                        ${item.type === 'Rent' ? 'Rent Equipment' : 'Order Now'}
                    </button>
                </div>
            `).join('')}
        </div>

        <div style="text-align: center; background: var(--bg-main); border: 1px solid var(--border-color); padding: 16px; border-radius: 12px;">
            <p style="font-size: 0.88rem; color: var(--text-muted);">Need instant support or custom equipment sizing? Contact ${shop.name} WhatsApp line.</p>
        </div>
    `;

    document.getElementById('storeCatalogModal').classList.add('active');
}

function orderCatalogItem(itemName, shopName) {
    document.getElementById('storeCatalogModal').classList.remove('active');
    if (window.location.hash.startsWith('#store=')) {
        window.history.pushState(null, null, window.location.pathname + window.location.search);
    }
    showToast(`Success! Your order for "${itemName}" has been sent to ${shopName}.`);
}

// Gear Calculator Update
function updateGearCalculator() {
    const checked = document.querySelectorAll('#checklistContainer input[type="checkbox"]:checked');
    const total = document.querySelectorAll('#checklistContainer input[type="checkbox"]');
    const percent = Math.round((checked.length / total.length) * 100);

    const badge = document.getElementById('gearProgressBadge');
    const weightText = document.getElementById('gearWeightText');

    if (badge) badge.innerText = `${percent}% Packed`;
    if (weightText) {
        const weight = (checked.length * 0.6).toFixed(1);
        weightText.innerHTML = `Packed Weight: <strong>${weight} kg</strong> (${total.length - checked.length} items missing)`;
    }
}

// Render Route Details & Canvas Elevation
function renderRouteDetails(routeKey) {
    state.activeRouteKey = routeKey;
    const route = routeProfiles[routeKey];
    const container = document.getElementById('routeDetailCard');
    if (!container || !route) return;

    document.querySelectorAll('.route-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.route === routeKey);
    });

    container.innerHTML = `
        <div class="route-detail-grid">
            <div class="route-info-col">
                <h3>${route.title}</h3>
                <p>Comprehensive elevation breakdown and acclimatization checkpoint map for alpine planning.</p>

                <div class="route-specs-grid">
                    <div class="spec-box">
                        <span>Max Elevation</span>
                        <strong>${route.elevation}</strong>
                    </div>
                    <div class="spec-box">
                        <span>Recommended Duration</span>
                        <strong>${route.days}</strong>
                    </div>
                    <div class="spec-box">
                        <span>Technical Level</span>
                        <strong>${route.difficulty}</strong>
                    </div>
                    <div class="spec-box">
                        <span>Optimal Season</span>
                        <strong>${route.bestSeason}</strong>
                    </div>
                </div>

                <div style="margin-top: 20px;">
                    <a href="#guides" class="btn btn-primary"><i class="fa-solid fa-compass"></i> Find Guide or Group for this Route</a>
                </div>
            </div>

            <div class="elevation-canvas-wrap">
                <div class="canvas-header">
                    <span><i class="fa-solid fa-chart-line" style="color: #34d399;"></i> Altitude Profile (Meters)</span>
                    <span style="color: #94a3b8;">${route.points.length} Checkpoints</span>
                </div>
                <canvas id="routeElevationCanvas"></canvas>
            </div>
        </div>
    `;

    setTimeout(() => drawElevationCanvas(route.points), 50);
}

function drawElevationCanvas(points) {
    const canvas = document.getElementById('routeElevationCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width * 2;
    canvas.height = height * 2;
    ctx.scale(2, 2);

    ctx.clearRect(0, 0, width, height);

    const minAlt = Math.min(...points.map(p => p.alt)) * 0.9;
    const maxAlt = Math.max(...points.map(p => p.alt)) * 1.05;

    const padding = 30;
    const graphWidth = width - (padding * 2);
    const graphHeight = height - (padding * 2);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (graphHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }

    const coords = points.map((p, idx) => {
        const x = padding + (graphWidth / (points.length - 1)) * idx;
        const y = height - padding - ((p.alt - minAlt) / (maxAlt - minAlt)) * graphHeight;
        return { x, y, alt: p.alt };
    });

    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(52, 211, 153, 0.3)');
    gradient.addColorStop(1, 'rgba(52, 211, 153, 0.0)');

    ctx.beginPath();
    ctx.moveTo(coords[0].x, height - padding);
    coords.forEach(c => ctx.lineTo(c.x, c.y));
    ctx.lineTo(coords[coords.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    coords.forEach((c, idx) => {
        if (idx === 0) ctx.moveTo(c.x, c.y);
        else ctx.lineTo(c.x, c.y);
    });
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.stroke();

    coords.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '10px "Plus Jakarta Sans"';
        ctx.textAlign = 'center';
        ctx.fillText(`${c.alt}m`, c.x, c.y - 10);
    });
}

// Modal Handlers
function openStoryModal(storyId) {
    const story = state.stories.find(s => s.id === storyId);
    if (!story) return;

    const modalBody = document.getElementById('storyModalBody');
    modalBody.innerHTML = `
        <div style="margin-bottom: 24px;">
            <span class="story-mountain-badge" style="position: static; display: inline-block; margin-bottom: 12px;">${story.mountainName}</span>
            <h2 style="font-size: 2rem; margin-bottom: 10px;">${story.title}</h2>
            <div style="display: flex; gap: 20px; color: var(--text-muted); font-size: 0.9rem;">
                <span><i class="fa-solid fa-user"></i> Climber: <strong>${story.authorName}</strong></span>
                <span><i class="fa-solid fa-tag"></i> Type: <strong>${story.climbTypeLabel}</strong></span>
                <span><i class="fa-solid fa-calendar"></i> ${story.date}</span>
            </div>
        </div>

        <img src="${story.image}" style="width: 100%; height: 350px; object-fit: cover; border-radius: 16px; margin-bottom: 24px;" alt="Climb photo">

        <div class="story-full-text" style="line-height: 1.8; font-size: 1.05rem;">
            ${story.fullStory}
        </div>
    `;

    document.getElementById('storyModal').classList.add('active');
}

function openGuideModal(guideId, directBook = false) {
    const guide = state.guides.find(g => g.id === guideId);
    if (!guide) return;

    const modalBody = document.getElementById('guideModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 24px;">
            <img src="${guide.image}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid var(--border-accent); margin-bottom: 12px;" alt="${guide.name}">
            <h2 style="font-size: 1.8rem;">${guide.name} <i class="fa-solid fa-circle-check" style="color: var(--primary); font-size: 1.2rem;"></i></h2>
            <p style="color: var(--primary); font-weight: 600;">${guide.tagline}</p>
        </div>

        <div style="background: var(--bg-main); border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid var(--border-color);">
            <h4 style="margin-bottom: 8px;"><i class="fa-solid fa-award" style="color: var(--primary);"></i> Super Guide Profile & Credentials</h4>
            <p style="font-size: 0.95rem; color: var(--text-body);">${guide.bio}</p>
            <div style="margin-top: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
                ${guide.certifications.map(c => `<span style="background: var(--primary-light); color: var(--primary); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${c}</span>`).join('')}
            </div>
        </div>

        <h3 style="margin-bottom: 16px;">Send Expedition Inquiry to ${guide.name}</h3>
        <form onsubmit="handleInquirySubmit(event, '${guide.name}')">
            <div style="display: flex; flex-direction: column; gap: 14px;">
                <input type="text" placeholder="Your Full Name" required class="guide-input">
                <input type="email" placeholder="Your Email Address" required class="guide-input">
                <select class="guide-select" style="width: 100%;" required>
                    <option value="">Select Target Peak & Route</option>
                    <option value="mt-kenya-lenana">Mt. Kenya - Point Lenana Trek</option>
                    <option value="mt-kenya-batian">Mt. Kenya - Batian Technical Rock Climb</option>
                    <option value="kilimanjaro">Mount Kilimanjaro Summit</option>
                </select>
                <textarea rows="3" placeholder="Planned dates, group size, and special requirements..." class="guide-input" required></textarea>
                <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px;"><i class="fa-solid fa-paper-plane"></i> Send Booking Inquiry</button>
            </div>
        </form>
    `;

    document.getElementById('guideModal').classList.add('active');
}

function openGroupModal(groupId, directJoin = false) {
    const group = state.groups.find(g => g.id === groupId);
    if (!group) return;

    const modalBody = document.getElementById('guideModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 24px;">
            <img src="${group.image}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid var(--primary); margin-bottom: 12px;" alt="${group.name}">
            <h2 style="font-size: 1.8rem;">${group.name}</h2>
            <p style="color: var(--primary); font-weight: 600;">${group.tagline}</p>
        </div>

        <div style="background: var(--primary-light); border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid var(--border-color);">
            <h4 style="margin-bottom: 8px;"><i class="fa-solid fa-users" style="color: var(--primary);"></i> Next Community Trek</h4>
            <p style="font-size: 1.1rem; font-weight: 700; color: var(--primary);">${group.nextTrip}</p>
            <p style="font-size: 0.9rem; color: var(--text-body); margin-top: 4px;">Price: <strong>${group.pricePerPerson}</strong></p>
        </div>

        <h3 style="margin-bottom: 16px;">Reserve Seat for ${group.name} Trek</h3>
        <form onsubmit="handleInquirySubmit(event, '${group.name}')">
            <div style="display: flex; flex-direction: column; gap: 14px;">
                <input type="text" placeholder="Your Full Name" required class="guide-input">
                <input type="tel" placeholder="M-Pesa / Phone Number" required class="guide-input">
                <select class="guide-select" style="width: 100%;" required>
                    <option value="">Select Pickup Location</option>
                    <option value="nairobi-cbd">Nairobi CBD (Kencom Bus Station)</option>
                    <option value="westlands">Westlands (Museum Hill)</option>
                    <option value="nanyuki">Nanyuki Junction</option>
                </select>
                <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px;"><i class="fa-solid fa-check-circle"></i> Confirm Seat & Join Group</button>
            </div>
        </form>
    `;

    document.getElementById('guideModal').classList.add('active');
}

function handleInquirySubmit(e, targetName) {
    e.preventDefault();
    document.getElementById('guideModal').classList.remove('active');
    showToast(`Request sent to ${targetName}! Confirmation details sent to your phone/email.`);
}

function initEventListeners() {
    // Theme Toggle Listener
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
        state.darkMode = !state.darkMode;
        document.body.classList.toggle('dark-mode', state.darkMode);
        document.getElementById('themeToggleText').innerText = state.darkMode ? 'Light Mode' : 'Dark Mode';
        document.querySelector('#themeToggleBtn i').className = state.darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        showToast(state.darkMode ? 'Switched to Dark Mode' : 'Switched to Clean Light Mode');
    });

    // Mode Switcher (Guides vs Groups vs Women-Only)
    const updateDirectoryTabStyles = (mode) => {
        document.getElementById('showGuidesTab')?.classList.toggle('active', mode === 'guides');
        document.getElementById('showGroupsTab')?.classList.toggle('active', mode === 'groups');
        document.getElementById('showWomenTab')?.classList.toggle('active', mode === 'women');
    };

    document.getElementById('showGuidesTab')?.addEventListener('click', () => {
        state.directoryMode = 'guides';
        updateDirectoryTabStyles('guides');
        renderDirectory();
    });

    document.getElementById('showGroupsTab')?.addEventListener('click', () => {
        state.directoryMode = 'groups';
        updateDirectoryTabStyles('groups');
        renderDirectory();
    });

    document.getElementById('showWomenTab')?.addEventListener('click', () => {
        state.directoryMode = 'women';
        updateDirectoryTabStyles('women');
        renderDirectory();
    });

    // Story Filter Pills
    document.querySelectorAll('#storyFilters .pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('#storyFilters .pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.activeStoryFilter = pill.dataset.filter;
            renderStories();
        });
    });

    // Search Input & Filter
    const guideSearchInput = document.getElementById('guideSearchInput');
    const guideSpecialtyFilter = document.getElementById('guideSpecialtyFilter');
    if (guideSearchInput && guideSpecialtyFilter) {
        const filterHandler = () => {
            if (guideSpecialtyFilter.value === 'women-only') {
                state.directoryMode = 'women';
                updateDirectoryTabStyles('women');
            }
            renderDirectory(guideSearchInput.value, guideSpecialtyFilter.value);
        };
        guideSearchInput.addEventListener('input', filterHandler);
        guideSpecialtyFilter.addEventListener('change', filterHandler);
    }

    // Hero Search Button
    document.getElementById('searchBtn')?.addEventListener('click', () => {
        const mountainSelect = document.getElementById('mountainSelect').value;
        const filterTypeSelect = document.getElementById('filterTypeSelect').value;

        if (filterTypeSelect === 'groups') {
            state.directoryMode = 'groups';
            document.getElementById('showGroupsTab')?.click();
            document.getElementById('guides').scrollIntoView({ behavior: 'smooth' });
        } else if (filterTypeSelect === 'gear') {
            document.getElementById('gear').scrollIntoView({ behavior: 'smooth' });
        } else {
            if (mountainSelect !== 'all') state.activeStoryFilter = mountainSelect;
            renderStories();
            document.getElementById('stories').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Route Tabs Switcher
    document.querySelectorAll('.route-tab').forEach(tab => {
        tab.addEventListener('click', () => renderRouteDetails(tab.dataset.route));
    });

    // Modal Close Listeners
    document.getElementById('closeStoreCatalogModal')?.addEventListener('click', () => {
        document.getElementById('storeCatalogModal').classList.remove('active');
        if (window.location.hash.startsWith('#store=')) {
            window.history.pushState(null, null, window.location.pathname + window.location.search);
        }
    });

    document.getElementById('closeStoryModal')?.addEventListener('click', () => {
        document.getElementById('storyModal').classList.remove('active');
    });

    document.getElementById('closeGuideModal')?.addEventListener('click', () => {
        document.getElementById('guideModal').classList.remove('active');
    });

    document.getElementById('openStoryModalBtn')?.addEventListener('click', () => {
        document.getElementById('submitStoryModal').classList.add('active');
    });

    document.getElementById('closeSubmitStoryModal')?.addEventListener('click', () => {
        document.getElementById('submitStoryModal').classList.remove('active');
    });

    document.getElementById('cancelSubmitStory')?.addEventListener('click', () => {
        document.getElementById('submitStoryModal').classList.remove('active');
    });

    // Submit New Story Form
    document.getElementById('newStoryForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('storyTitleInput').value;
        const climbType = document.getElementById('storyTypeSelect').value;
        const mountainName = document.getElementById('storyMountainSelect').value;
        const route = document.getElementById('storyRouteInput').value || 'Standard Route';
        const authorName = document.getElementById('storyAuthorInput').value;
        const durationDays = document.getElementById('storyDaysInput').value || 5;
        const content = document.getElementById('storyContentInput').value;

        const newStory = {
            id: 'story-' + Date.now(),
            title: title,
            mountainKey: mountainName.toLowerCase().includes('kenya') ? 'mt-kenya' : mountainName.toLowerCase().includes('kilimanjaro') ? 'kilimanjaro' : 'rwenzori',
            mountainName: mountainName,
            climbType: climbType,
            climbTypeLabel: climbType === 'solo' ? 'Solo Hike 🧗‍♀️' : climbType === 'group' ? 'Group Trek 👥' : 'Guided Trek',
            route: route,
            authorName: authorName,
            authorInitial: authorName.charAt(0).toUpperCase(),
            durationDays: durationDays,
            summitStatus: 'Successful Summit 🎉',
            date: 'Today',
            likes: 1,
            image: 'assets/mt_kenya_hero_1790676045026.png',
            snippet: content.substring(0, 120) + '...',
            fullStory: `<h3>${title}</h3><p>${content}</p>`
        };

        state.stories.unshift(newStory);
        renderStories();

        document.getElementById('submitStoryModal').classList.remove('active');
        document.getElementById('newStoryForm').reset();
        showToast('Your climb story has been published live!');
    });

    // Fix Calculate Quiz Score Button Handler
    document.getElementById('calculateQuizBtn')?.addEventListener('click', calculateQuizScore);
}

function goToStep(stepNum) {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`quizStep${stepNum}`);
    if (target) target.classList.add('active');
}

// Calculate Quiz Score & Render Result Step (Fixed as requested in audio!)
function calculateQuizScore() {
    const peak = document.querySelector('input[name="targetPeak"]:checked')?.value;
    const fitness = document.querySelector('input[name="fitnessLevel"]:checked')?.value;
    const altitude = document.querySelector('input[name="altitudeExp"]:checked')?.value;

    let score = 50;
    if (fitness === 'advanced') score += 30;
    else if (fitness === 'moderate') score += 20;
    else score += 5;

    if (altitude === 'high') score += 20;
    else if (altitude === 'moderate') score += 10;

    if (peak === 'batian' && fitness !== 'advanced') score -= 15;

    score = Math.min(99, Math.max(40, score));

    const resultStep = document.getElementById('quizResultStep');
    resultStep.innerHTML = `
        <div class="quiz-result-box">
            <div class="score-circle">
                <div class="score-num">${score}%</div>
                <div class="score-label">Peak Readiness</div>
            </div>

            <h2 style="margin-bottom: 10px;">${score >= 80 ? 'High Summit Preparedness!' : 'Acclimatization Prep Recommended'}</h2>
            <p style="color: var(--text-muted); margin-bottom: 24px; font-size: 0.95rem;">
                ${score >= 80 
                    ? 'Your aerobic base makes you a strong candidate for a successful peak expedition. We recommend pairing with a Super Guide or joining a community hiking group.' 
                    : 'To maximize summit safety, complete our 5-hike Aberdares Acclimatization Prep Program before attempting Mount Kenya or Kilimanjaro.'}
            </p>

            <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
                <button class="btn btn-outline" onclick="goToStep(1)"><i class="fa-solid fa-rotate-left"></i> Retake Quiz</button>
                <a href="#acclimatization" class="btn btn-primary"><i class="fa-solid fa-stairs"></i> View Acclimatization Program</a>
            </div>
        </div>
    `;

    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    resultStep.classList.add('active');
    resultStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast(`Calculated Peak Readiness Score: ${score}%`);
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary);"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/* ==========================================================================
   MONETIZATION FEATURES: List Your Services, Paystack, WhatsApp
   ========================================================================== */

// -- Paystack config (replace with your real public key after signing up at paystack.com/ke) --
const PAYSTACK_PUBLIC_KEY = 'pk_test_summitconnect_replace_with_real_key';

// Plan metadata
const PLANS = {
    free:  { label: 'Free Listing',  amount: 0,    description: 'Basic profile listing — no payment needed.' },
    pro:   { label: 'Pro Guide',     amount: 2500,  description: 'Verified badge + top placement. KSh 2,500/month.' },
    elite: { label: 'Elite / Group', amount: 5000,  description: 'Full spotlight + trek event listings. KSh 5,000/month.' }
};

let currentPaystackPlan = 'free';
let currentPaystackEmail = '';
let currentPaystackName = '';

// Open List Your Services modal
function openListServicesModal() {
    document.getElementById('listServicesModal').classList.add('active');
}

// Initialize all monetization event listeners
function initMonetizationListeners() {

    // Nav + CTA banner buttons open the modal
    document.getElementById('listServicesNavBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        openListServicesModal();
    });
    document.getElementById('openListServicesBtn')?.addEventListener('click', openListServicesModal);

    // Close List Services modal
    document.getElementById('closeListServicesModal')?.addEventListener('click', () => {
        document.getElementById('listServicesModal').classList.remove('active');
    });
    document.getElementById('cancelListServices')?.addEventListener('click', () => {
        document.getElementById('listServicesModal').classList.remove('active');
    });

    // Close Paystack modal
    document.getElementById('closePaystackModal')?.addEventListener('click', () => {
        document.getElementById('paystackModal').classList.remove('active');
    });

    // Pricing plan select buttons
    document.querySelectorAll('.plan-select-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const plan = btn.dataset.plan;
            const amount = parseInt(btn.dataset.amount);

            // Highlight selected plan
            document.querySelectorAll('.plan-select-btn').forEach(b => b.classList.remove('active-plan'));
            btn.classList.add('active-plan');

            // Store the selection in hidden inputs
            document.getElementById('ls_selectedPlan').value = plan;
            document.getElementById('ls_selectedAmount').value = amount;
            currentPaystackPlan = plan;

            // If free plan, just confirm — no payment
            if (amount === 0) {
                showToast('✅ Free plan selected. Fill in your details and submit below!');
            } else {
                showToast(`💳 ${PLANS[plan].label} selected — KSh ${amount.toLocaleString()}/month. Fill your details & submit to pay.`);
            }
        });
    });

    // Submit application form
    document.getElementById('listServicesForm')?.addEventListener('submit', (e) => {
        e.preventDefault();

        const name    = document.getElementById('ls_name').value.trim();
        const phone   = document.getElementById('ls_phone').value.trim();
        const email   = document.getElementById('ls_email').value.trim();
        const type    = document.getElementById('ls_type').value;
        const plan    = document.getElementById('ls_selectedPlan').value || 'free';
        const amount  = parseInt(document.getElementById('ls_selectedAmount').value) || 0;

        if (!name || !phone || !email || !type) {
            showToast('⚠️ Please fill in all required fields.');
            return;
        }

        currentPaystackEmail = email;
        currentPaystackName  = name;
        currentPaystackPlan  = plan;

        document.getElementById('listServicesModal').classList.remove('active');

        if (amount === 0) {
            // Free plan — show success toast, no payment
            showToast(`🎉 Application received! We'll review and verify your listing within 24 hours, ${name}.`);
        } else {
            // Paid plan — open the Paystack payment modal
            const planData = PLANS[plan];
            document.getElementById('paystackPlanSummary').innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                    <span style="font-weight:700; font-size:1.05rem;">${planData.label}</span>
                    <span style="font-size:1.2rem; font-weight:800; color:var(--primary);">KSh ${amount.toLocaleString()}</span>
                </div>
                <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:8px;">${planData.description}</p>
                <div style="font-size:0.85rem; color:var(--text-muted);">
                    <i class="fa-solid fa-user"></i> ${name} &nbsp;•&nbsp;
                    <i class="fa-solid fa-envelope"></i> ${email} &nbsp;•&nbsp;
                    <i class="fa-solid fa-mobile-screen"></i> ${phone}
                </div>
            `;
            document.getElementById('paystackModal').classList.add('active');
        }
    });

    // Launch Paystack payment
    document.getElementById('launchPaystackBtn')?.addEventListener('click', () => {
        const amount = parseInt(document.getElementById('ls_selectedAmount').value) || 0;
        const plan   = PLANS[currentPaystackPlan];

        // Paystack amounts are in kobo (KSh × 100)
        const handler = PaystackPop.setup({
            key:       PAYSTACK_PUBLIC_KEY,
            email:     currentPaystackEmail,
            amount:    amount * 100,
            currency:  'KES',
            ref:       'SC-' + Date.now(),
            metadata: {
                custom_fields: [
                    { display_name: 'Name',  variable_name: 'name',  value: currentPaystackName },
                    { display_name: 'Plan',  variable_name: 'plan',  value: plan.label }
                ]
            },
            channels: ['card', 'mobile_money'],
            callback: function(response) {
                document.getElementById('paystackModal').classList.remove('active');
                showToast(`🎉 Payment successful! Reference: ${response.reference}. Your verified listing will be live within 2 hours.`);
            },
            onClose: function() {
                showToast('Payment cancelled. Your application is saved — complete payment anytime.');
            }
        });
        handler.openIframe();
    });
}

// Initialize monetization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initMonetizationListeners();
});

/* ==========================================================================
   SMART AFFILIATE STORES & LOCATION DELIVERY CALCULATOR
   ========================================================================== */
function updateAllAffiliateLinks() {
    const locSelect = document.getElementById('userLocationSelect');
    const userLoc = locSelect ? locSelect.value : 'nairobi';

    Object.keys(affiliateGearData).forEach(itemKey => {
        const item = affiliateGearData[itemKey];
        const container = document.getElementById(`aff-${itemKey}`);
        if (!container) return;

        container.innerHTML = item.stores.map((store, idx) => {
            const deliveryTime = store.delivery[userLoc] || store.delivery['nairobi'];
            const isFastest = idx === 0 && (userLoc === 'nairobi' || userLoc === 'nanyuki');
            const isAmazon = store.type === 'amazon';

            return `
                <div class="aff-store-row">
                    <div class="aff-store-info">
                        <i class="${isAmazon ? 'fa-brands fa-amazon' : 'fa-solid fa-store'}" style="color:${isAmazon ? '#ff9900' : 'var(--primary)'};"></i>
                        <span>${store.name}</span>
                        <span class="aff-delivery-badge ${isFastest ? 'fastest' : ''}">
                            <i class="${isFastest ? 'fa-solid fa-bolt' : 'fa-solid fa-truck-fast'}"></i> ${deliveryTime}
                        </span>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-weight:700; font-size:0.85rem; color:var(--text-heading);">${store.price}</span>
                        <a href="${store.link}" target="_blank" rel="noopener noreferrer" class="aff-buy-btn ${isAmazon ? 'amazon' : ''}">
                            Buy <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    });
}

/* ==========================================================================
   CABINS & WILD CAMPSITES ACCOMMODATIONS
   ========================================================================== */
function renderAccommodations(filter = 'all') {
    const grid = document.getElementById('accommodationsGrid');
    if (!grid) return;

    state.activeAccomFilter = filter;
    document.querySelectorAll('.acc-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    const filtered = state.accommodations.filter(acc => {
        if (filter === 'all') return true;
        if (filter === 'cabin') return acc.type === 'cabin';
        if (filter === 'campsite') return acc.type === 'campsite';
        if (filter === 'mt-kenya') return acc.mountainKey === 'mt-kenya';
        if (filter === 'kilimanjaro') return acc.mountainKey === 'kilimanjaro';
        return true;
    });

    grid.innerHTML = filtered.map(acc => `
        <div class="acc-card">
            <div class="acc-image-wrap">
                <img src="${acc.image}" alt="${acc.name}" class="acc-image">
                <span class="acc-type-badge ${acc.type}">
                    <i class="${acc.type === 'cabin' ? 'fa-solid fa-house-chimney' : 'fa-solid fa-tent'}"></i> ${acc.typeLabel}
                </span>
                <span class="acc-altitude-badge"><i class="fa-solid fa-mountain"></i> ${acc.altitude}</span>
            </div>
            <div class="acc-content">
                <div class="acc-mountain-tag">${acc.mountain} • ${acc.route}</div>
                <h3 class="acc-title">${acc.name}</h3>
                <p class="acc-desc">${acc.description}</p>
                <div class="acc-amenities">
                    ${acc.amenities.map(a => `<span class="acc-amenity-tag"><i class="fa-solid fa-check" style="color:var(--primary);"></i> ${a}</span>`).join('')}
                </div>
                <div class="acc-footer">
                    <div class="acc-price-wrap">
                        <span class="acc-price-amount">${acc.price}</span>
                        <span class="acc-price-sub">${acc.priceSub}</span>
                    </div>
                    <button class="btn btn-primary" onclick="openAccommodationBookingModal('${acc.id}')">
                        <i class="fa-solid fa-bed"></i> Reserve Bunk / Pitch
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function initAccommodationsListeners() {
    document.querySelectorAll('.acc-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            renderAccommodations(btn.dataset.filter);
        });
    });

    // Close Accom modal
    document.getElementById('closeAccomModal')?.addEventListener('click', () => {
        document.getElementById('accommodationBookingModal').classList.remove('active');
    });
    document.getElementById('cancelAccomBooking')?.addEventListener('click', () => {
        document.getElementById('accommodationBookingModal').classList.remove('active');
    });

    // Date change updates summary
    const updateSummary = () => {
        const stayId = document.getElementById('ab_stayId').value;
        const stay = state.accommodations.find(a => a.id === stayId);
        if (!stay) return;

        const nights = parseInt(document.getElementById('ab_nights').value) || 1;
        const guests = parseInt(document.getElementById('ab_guests').value) || 1;
        const summaryBox = document.getElementById('ab_summaryBox');
        if (summaryBox) {
            summaryBox.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                    <span><strong>${stay.name}</strong> (${stay.altitude})</span>
                    <span>${stay.price} ${stay.priceSub}</span>
                </div>
                <div style="display:flex; justify-content:space-between; color:var(--text-muted); font-size:0.85rem;">
                    <span>${guests} Hikers × ${nights} Night(s)</span>
                    <strong style="color:var(--primary); font-size:1rem;">Estimated Total: ${stay.price.startsWith('$') ? '$' + (parseInt(stay.price.replace('$','')) * nights * guests) : 'KSh ' + (parseInt(stay.price.replace(/[^0-9]/g,'')) * nights * guests).toLocaleString()}</strong>
                </div>
            `;
        }
    };

    document.getElementById('ab_nights')?.addEventListener('input', updateSummary);
    document.getElementById('ab_guests')?.addEventListener('input', updateSummary);

    // Form submit
    document.getElementById('accommodationBookingForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const stayId = document.getElementById('ab_stayId').value;
        const stay = state.accommodations.find(a => a.id === stayId);
        const name = document.getElementById('ab_name').value.trim();
        const phone = document.getElementById('ab_phone').value.trim();
        const date = document.getElementById('ab_date').value;
        const nights = document.getElementById('ab_nights').value;
        const guests = document.getElementById('ab_guests').value;

        document.getElementById('accommodationBookingModal').classList.remove('active');
        showToast(`🎉 Reservation confirmed for ${name}! ${guests} hikers at ${stay ? stay.name : 'Cabin'} on ${date}. KWS ranger checkpoint notification sent to ${phone}.`);
    });
}

function openAccommodationBookingModal(stayId) {
    const stay = state.accommodations.find(a => a.id === stayId);
    if (!stay) return;

    document.getElementById('ab_stayId').value = stay.id;
    document.getElementById('ab_title').innerText = `Reserve ${stay.name}`;
    document.getElementById('ab_subtitle').innerText = `${stay.mountain} • ${stay.route} (${stay.altitude})`;
    document.getElementById('ab_typeDisplay').value = stay.typeLabel;

    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('ab_date').value = tomorrow.toISOString().split('T')[0];

    const summaryBox = document.getElementById('ab_summaryBox');
    if (summaryBox) {
        summaryBox.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span><strong>${stay.name}</strong> (${stay.altitude})</span>
                <span>${stay.price} ${stay.priceSub}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-muted); font-size:0.85rem;">
                <span>2 Hikers × 1 Night</span>
                <strong style="color:var(--primary); font-size:1rem;">Estimated Total: ${stay.price.startsWith('$') ? '$' + (parseInt(stay.price.replace('$','')) * 2) : 'KSh ' + (parseInt(stay.price.replace(/[^0-9]/g,'')) * 2).toLocaleString()}</strong>
            </div>
        `;
    }

    document.getElementById('accommodationBookingModal').classList.add('active');
}

/* ==========================================================================
   GUIDE DASHBOARD & PROFILE MANAGER
   ========================================================================== */
function initGuideDashboard() {
    const navBtn = document.getElementById('guideDashboardNavBtn');
    const modal = document.getElementById('guideDashboardModal');
    const closeBtn = document.getElementById('closeGuideDashboardModal');
    const cancelBtn = document.getElementById('closeGuideDashboardBtn');
    const selector = document.getElementById('guideProfileSelector');
    const form = document.getElementById('guideDashboardForm');
    const samplePhotoBtn = document.getElementById('gd_useSamplePhotoBtn');

    if (!modal) return;

    // Open/Close
    navBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        populateGuideSelector();
        loadGuideIntoForm(selector.value || state.guides[0].id);
        modal.classList.add('active');
    });

    closeBtn?.addEventListener('click', () => modal.classList.remove('active'));
    cancelBtn?.addEventListener('click', () => modal.classList.remove('active'));

    function populateGuideSelector() {
        if (!selector) return;
        selector.innerHTML = `
            ${state.guides.map(g => `<option value="${g.id}">${g.name} (${g.isWomenGuide ? '🌸 Female Guide' : 'Super Guide'})</option>`).join('')}
            <option value="new">+ Create New Guide Profile</option>
        `;
    }

    selector?.addEventListener('change', () => {
        if (selector.value === 'new') {
            form.reset();
            document.getElementById('gd_name').value = '';
            document.getElementById('gd_tagline').value = '';
            document.getElementById('gd_photoUrl').value = 'assets/guide_sarah_1790676128232.png';
            document.getElementById('gd_yearsExp').value = 5;
            document.getElementById('gd_summits').value = 25;
            document.getElementById('gd_dailyRate').value = '$170 / day';
            document.getElementById('gd_isWomenGuide').checked = false;
            updateLivePreview();
        } else {
            loadGuideIntoForm(selector.value);
        }
    });

    function loadGuideIntoForm(guideId) {
        const guide = state.guides.find(g => g.id === guideId);
        if (!guide) return;

        document.getElementById('gd_name').value = guide.name;
        document.getElementById('gd_tagline').value = guide.tagline;
        document.getElementById('gd_location').value = guide.locationKey || 'nanyuki';
        document.getElementById('gd_dailyRate').value = guide.dailyRate || '$180 / day';
        document.getElementById('gd_yearsExp').value = guide.yearsExp || 8;
        document.getElementById('gd_summits').value = guide.summitsCount || 48;
        document.getElementById('gd_isWomenGuide').checked = !!guide.isWomenGuide;
        document.getElementById('gd_photoUrl').value = guide.image || 'assets/super_guide_joseph_1790676078336.png';
        document.getElementById('gd_bio').value = guide.bio || '';
        document.getElementById('gd_certifications').value = (guide.certifications || []).join(', ');

        updateLivePreview();
    }

    function updateLivePreview() {
        const previewWrap = document.getElementById('gdLiveCardPreview');
        if (!previewWrap) return;

        const name = document.getElementById('gd_name').value || 'Guide Name';
        const tagline = document.getElementById('gd_tagline').value || 'Mountain Specialist';
        const photo = document.getElementById('gd_photoUrl').value || 'assets/super_guide_joseph_1790676078336.png';
        const summits = document.getElementById('gd_summits').value || 48;
        const years = document.getElementById('gd_yearsExp').value || 8;
        const isWomen = document.getElementById('gd_isWomenGuide').checked;
        const locationVal = document.getElementById('gd_location').value;
        const locationText = locationVal === 'nanyuki' ? 'Nanyuki Base' : locationVal === 'nairobi' ? 'Based in Nairobi' : locationVal === 'moshi' ? 'Kilimanjaro Base' : 'Rift Valley';

        previewWrap.innerHTML = `
            <div class="guide-card" style="${isWomen ? 'border-color: rgba(236,72,153,0.4);' : ''}">
                ${isWomen ? '<div class="women-guide-badge"><i class="fa-solid fa-venus"></i> 🌸 Verified Female Alpine Guide</div>' : ''}
                <div class="guide-header-row">
                    <div class="guide-avatar-wrap">
                        <img src="${photo}" alt="${name}" class="guide-avatar" onerror="this.src='assets/super_guide_joseph_1790676078336.png'">
                        <div class="super-badge" style="${isWomen ? 'background:#ec4899;' : ''}"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <div class="guide-info-main">
                        <h3>${name} <i class="fa-solid fa-circle-check guide-verified-icon" style="${isWomen ? 'color:#ec4899;' : ''}"></i></h3>
                        <div class="guide-tagline">${tagline}</div>
                        <div class="guide-rating-row">
                            <span class="stars"><i class="fa-solid fa-star"></i> 5.0</span>
                            <span style="color: var(--text-muted);">(New / Verified)</span>
                        </div>
                    </div>
                </div>
                
                <div class="guide-summit-pill" style="${isWomen ? 'background:rgba(236,72,153,0.08); color:#be185d; border-color:rgba(236,72,153,0.2);' : ''}">
                    <i class="fa-solid fa-award"></i> ${summits} Verified Summits • ${years} Years Experience
                </div>

                <div class="guide-tags">
                    ${isWomen ? '<span class="guide-tag women-guide-tag"><i class="fa-solid fa-shield-heart"></i> Solo Female Friendly</span>' : ''}
                    <span class="guide-tag"><i class="fa-solid fa-location-dot"></i> ${locationText}</span>
                    <span class="guide-tag">Mt. Kenya</span>
                    <span class="guide-tag">Kilimanjaro</span>
                </div>

                <div class="guide-action-row">
                    <button type="button" class="btn btn-outline" style="flex:1;">View Profile</button>
                    <button type="button" class="btn btn-primary" style="${isWomen ? 'background:linear-gradient(135deg,#ec4899,#be185d); border:none;' : ''} flex:1;">Book Guide</button>
                </div>
            </div>
        `;
    }

    // Bind real-time input preview
    ['gd_name', 'gd_tagline', 'gd_photoUrl', 'gd_summits', 'gd_yearsExp', 'gd_location'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', updateLivePreview);
    });
    document.getElementById('gd_isWomenGuide')?.addEventListener('change', updateLivePreview);

    // Sample Photo Toggle Button
    const sampleAvatars = [
        'assets/super_guide_joseph_1790676078336.png',
        'assets/guide_sarah_1790676128232.png',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    ];
    let avatarIdx = 0;
    samplePhotoBtn?.addEventListener('click', () => {
        avatarIdx = (avatarIdx + 1) % sampleAvatars.length;
        document.getElementById('gd_photoUrl').value = sampleAvatars[avatarIdx];
        updateLivePreview();
    });

    // Form Submit (Save & Publish)
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedId = selector.value;
        const name = document.getElementById('gd_name').value.trim();
        const tagline = document.getElementById('gd_tagline').value.trim();
        const locationKey = document.getElementById('gd_location').value;
        const dailyRate = document.getElementById('gd_dailyRate').value.trim();
        const yearsExp = parseInt(document.getElementById('gd_yearsExp').value) || 8;
        const summitsCount = parseInt(document.getElementById('gd_summits').value) || 48;
        const isWomenGuide = document.getElementById('gd_isWomenGuide').checked;
        const image = document.getElementById('gd_photoUrl').value.trim() || 'assets/super_guide_joseph_1790676078336.png';
        const bio = document.getElementById('gd_bio').value.trim();
        const certifications = document.getElementById('gd_certifications').value.split(',').map(c => c.trim()).filter(Boolean);

        const locationName = locationKey === 'nanyuki' ? 'Nanyuki / Mt. Kenya Base' : locationKey === 'nairobi' ? 'Based in Nairobi' : locationKey === 'moshi' ? 'Moshi / Kilimanjaro Base' : 'Rift Valley / Nakuru';

        if (selectedId === 'new') {
            const newGuide = {
                id: 'guide-' + Date.now(),
                name,
                tagline,
                locationKey,
                locationName,
                summitsCount,
                yearsExp,
                rating: 5.0,
                reviewCount: 1,
                mountains: ['Mt. Kenya Point Lenana', 'Kilimanjaro'],
                specialtyKey: 'mt-kenya-lenana',
                image,
                certifications: certifications.length ? certifications : ['KWS Licensed Mountain Guide', 'WFR'],
                bio: bio || `${name} is an active East African mountain leader specializing in safe alpine ascents.`,
                dailyRate,
                isWomenGuide
            };
            state.guides.unshift(newGuide);
        } else {
            const guide = state.guides.find(g => g.id === selectedId);
            if (guide) {
                guide.name = name;
                guide.tagline = tagline;
                guide.locationKey = locationKey;
                guide.locationName = locationName;
                guide.summitsCount = summitsCount;
                guide.yearsExp = yearsExp;
                guide.dailyRate = dailyRate;
                guide.isWomenGuide = isWomenGuide;
                guide.image = image;
                guide.bio = bio;
                if (certifications.length) guide.certifications = certifications;
            }
        }

        // Save to localStorage
        try {
            localStorage.setItem('summit_guides', JSON.stringify(state.guides));
        } catch (err) {
            console.error('Storage error', err);
        }

        renderDirectory();
        modal.classList.remove('active');
        showToast(`🎉 Guide Profile for "${name}" successfully updated & published live!`);
    });
}


