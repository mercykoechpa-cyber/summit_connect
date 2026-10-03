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
const initialGuides = [
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
        dailyRate: '$180 / day'
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
        dailyRate: '$210 / day'
    }
];

// Sample Dataset for Local Hiking Groups
const initialGroups = [
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
        description: 'Friendly community group organizing weekly weekend hikes across Aberdares, Rift Valley, and monthly Mt. Kenya summit expeditions.'
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
        description: 'Local Nanyuki-based hiking community connecting climbers for shared group budget treks up Point Lenana & Kamweti routes.'
    }
];

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
    activeStoryFilter: 'all',
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
    renderLocalShops();
    renderRouteDetails(state.activeRouteKey);
    initEventListeners();

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
function renderDirectory(filterText = '', filterLoc = 'all') {
    const grid = document.getElementById('directoryGrid');
    if (!grid) return;

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

    // Mode Switcher
    document.getElementById('showGuidesTab')?.addEventListener('click', () => {
        state.directoryMode = 'guides';
        document.getElementById('showGuidesTab').classList.add('active');
        document.getElementById('showGroupsTab').classList.remove('active');
        renderDirectory();
    });

    document.getElementById('showGroupsTab')?.addEventListener('click', () => {
        state.directoryMode = 'groups';
        document.getElementById('showGroupsTab').classList.add('active');
        document.getElementById('showGuidesTab').classList.remove('active');
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

    // Search Input
    const guideSearchInput = document.getElementById('guideSearchInput');
    const guideSpecialtyFilter = document.getElementById('guideSpecialtyFilter');
    if (guideSearchInput && guideSpecialtyFilter) {
        const filterHandler = () => renderDirectory(guideSearchInput.value, guideSpecialtyFilter.value);
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
