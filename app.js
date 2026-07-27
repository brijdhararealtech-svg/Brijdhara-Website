// Brijdhara Group website app logic

// 1. PROJECTS DATABASE
const projectsData = [
    {
        id: "08",
        name: "Hetvik Plaza & Town",
        type: "Commercial & Plotting",
        status: "Available",
        location: "Opp. Fire Brigade, Near Tehsil, Mant-Vrindavan Road, Mathura",
        shortFeature: "Fastest growing project on Mant-Vrindavan Road. Premium shops and residential plots.",
        fullDesc: "Hetvik Plaza & Town is the fastest-growing commercial and residential project located on the prime Mant-Vrindavan Road, directly opposite the Fire Brigade and near the Tehsil. It offers premium commercial shops and residential plots, perfect for high-visibility business and peaceful living.",
        plotSizes: "Residential Plots 100 sq. yd., 200 sq. yd, Price 20000/-",
        priceLabel: "Shops Price:",
        resPrice: "₹35,00,000/- | ₹25,00,000/- | ₹15,00,000/- | ₹10,00,000/-",
        commPrice: "₹10,00,000 to ₹35,00,000 per shop",
        paymentPlans: "Contact us for customized payment plans and booking details.",
        keyFeatures: [
            "Fastest growing project on Mant-Vrindavan Road",
            "Prime commercial location opposite Fire Brigade, near Tehsil",
            "Shops Price: ₹35,00,000/- | ₹25,00,000/- | ₹15,00,000/- | ₹10,00,000/-",
            "Residential Plots available at ₹20,000 per sq. yd."
        ],
        image: "assets/hetvik_plaza.jpg",
        roi: {
            started: "New Launch",
            now: "Prime Value",
            gain: "High Appreciation"
        }
    },
    {
        id: "01",
        name: "Shree Banshivat Dhaam",
        type: "Plotting",
        status: "Available",
        location: "Opp. Petrol Pump, Near Tehsil, Mant-Raya Road, Mathura",
        shortFeature: "Fastest growing project on Mant-Raya Road. Petrol pump front, near Tehsil.",
        fullDesc: "Shree Banshivat Dhaam is the fastest-growing residential plotted township located directly on the Mant-Raya Road, opposite the petrol pump and near the Mant Tehsil office. Blending high-growth connectivity with affordable pricing, it features attractive Cash & EMI payment options (only 40% advance booking & balance in 24 easy monthly installments).",
        plotSizes: "100 sq. yd., 200 sq. yd. residential plots",
        resPrice: "₹9,000 per sq. yd. (Cash) / ₹10,000 per sq. yd. (EMI)",
        commPrice: "Available on Request",
        paymentPlans: "Cash Plan: ₹9,000/sq. yd. full payment or Easy EMI: ₹10,000/sq. yd. with 40% advance & 24 easy monthly installments.",
        keyFeatures: [
            "Fastest growing project on Mant-Raya Road corridor",
            "Prime location directly opposite petrol pump and near Tehsil office",
            "Easy EMI Plan with 40% advance booking & 24 monthly installments",
            "Wide internal blacktop roads, sweet drinking water & drainage system",
            "100% clear title with immediate registration and mutation (dakhil kharij)"
        ],
        image: "assets/banshivat_dhaam_colony.jpg",
        roi: {
            started: "₹6,800",
            now: "₹9,000",
            gain: "32% Appreciation"
        }
    },
    {
        id: "02",
        name: "Brij Green Highway",
        type: "Plotting",
        status: "Available",
        location: "Near Jawaar Toll Plaza, Mathura-Bareilly Highway, Mathura",
        shortFeature: "Direct highway access. Designed for investors seeking rapid appreciation.",
        fullDesc: "Brij Green Highway is a premier residential and commercial plotted township located directly on the Mathura-Bareilly Highway near the Jawaar Toll Plaza. It is designed to offer exceptional connectivity and commercial visibility, making it the perfect choice for investors looking for rapid property appreciation and immediate construction.",
        plotSizes: "100 sq. yd., 200 sq. yd., & dedicated commercial spaces",
        resPrice: "₹10,000 per sq. yd.",
        commPrice: "₹15,000 per sq. yd.",
        paymentPlans: "Full down-payment discount (5% off) or 2-Year interest-free installment schedule.",
        keyFeatures: [
            "Direct highway entrance and high-visibility front",
            "Wide 30ft and 40ft internal blacktop roads",
            "Underground electricity lines and modern street lighting",
            "Secure gated colony with round-the-clock security guarding",
            "Beautifully landscaped parks and temple area inside"
        ],
        image: "assets/brij_green_highway.jpg",
        roi: {
            started: "₹6,500",
            now: "₹10,000",
            gain: "53% Appreciation"
        }
    },
    {
        id: "02",
        name: "Kanha Kunj",
        type: "Plotting",
        status: "Available",
        location: "Near K.N. International School, Kosi Khurd, Mathura",
        shortFeature: "Monsoon Special 10% Discount! Family-centric development in a peaceful, secure environment.",
        fullDesc: "Kanha Kunj is an ideal, family-focused residential community situated near K.N. International School on Bharatpur Road in Kosi Khurd. Blending Vrindavan's spiritual vibes with modern convenience, it provides a safe, green environment perfect for building your dream home. Limited Time: Get a 10% Monsoon Special Discount on all bookings!",
        plotSizes: "100 sq. yd., 200 sq. yd., & dedicated commercial spaces",
        resPrice: "₹14,000 per sq. yd.",
        commPrice: "₹25,000 per sq. yd.",
        paymentPlans: "Flexible booking amount (11,000/-) followed by 18-month easy installments. Book now for a 10% Monsoon Discount!",
        keyFeatures: [
            "🌧️ Monsoon Special Offer: Get 10% special discount on booking!",
            "Just 2 minutes walk from K.N. International School",
            "Gated colony with 24/7 security CCTV monitoring",
            "Lush green environment and dedicated children's play parks",
            "Rainwater harvesting and robust drainage systems",
            "100% clear and dispute-free registry and immediate mutation (dakhil kharij)"
        ],
        image: "assets/kanha_kunj.jpg",
        roi: {
            started: "₹9,800",
            now: "₹14,000",
            gain: "42% Appreciation"
        }
    },
    {
        id: "03",
        name: "Padma Greens",
        type: "Plotting",
        status: "Limited Units",
        location: "VIP Road (NH-2 to Devi Atas Road), Atas Bangar, Vrindavan, Mathura",
        shortFeature: "VIP Road frontage. Vrindavan spiritual proximity. Green landscaped environment.",
        fullDesc: "Padma Greens is our premium flagship plotted colony situated on the highly sought-after Vrindavan VIP Road. Offering unmatched spiritual proximity to Vrindavan's famous temples, this gated township has witnessed spectacular appreciation, representing a legacy of smart investment and luxury living.",
        plotSizes: "120 sq. yd., 150 sq. yd., 250 sq. yd. residential plots",
        resPrice: "₹19,800 per sq. yd.",
        commPrice: "N/A (Fully Sold)",
        paymentPlans: "Immediate Registry Plan. 50% booking amount, balance within 45 days.",
        keyFeatures: [
            "Premium VIP Road frontage for elite accessibility",
            "Only 22 minutes drive from Prem Mandir & Banke Bihari Temple",
            "Beautiful grand entrance archway with security outpost",
            "Water treatment plant and overhead water storage tank",
            "Lush landscaped jogging tracks and community parklands"
        ],
        image: "assets/padma_greens.jpg",
        roi: {
            started: "₹7,500",
            now: "₹19,800",
            gain: "164% Return"
        }
    },
    {
        id: "04",
        name: "Brij Town",
        type: "Township",
        status: "Limited Units",
        location: "Behind Radha City, Goverdhan-Ganeshara Link Road, Mathura",
        shortFeature: "Investment for tomorrow. Strategically located on Goverdhan Road.",
        fullDesc: "Brij Town is a master-planned township located on the fast-growing Goverdhan Road corridor behind Radha City. It provides a peaceful lifestyle away from city traffic, combined with rapid appreciation potential due to the nearby highway widening and infrastructural push.",
        plotSizes: "100 sq. yd., 150 sq. yd. plots",
        resPrice: "₹17,500 per sq. yd.",
        commPrice: "N/A",
        paymentPlans: "Booking starts at 10%. Balance payable in 6 equal quarterly installments.",
        keyFeatures: [
            "Connected to the main Goverdhan-Ganeshara link highway",
            "Complete boundary walls and secure gated community",
            "Dedicated drinking water pipeline and sewer network",
            "Large designer parks and community space for spiritual gatherings",
            "Approved planning with wide roads and high-voltage electricity transformer"
        ],
        image: "assets/brij_town.jpg",
        roi: {
            started: "₹6,000",
            now: "₹17,500",
            gain: "191% Return"
        }
    },
    {
        id: "05",
        name: "Brijvaas — The Privileged Life",
        type: "Colony",
        status: "Limited Units",
        location: "Opp. Hanuman Vatika, Radhapuram Goverdhan Link Road, Mathura",
        shortFeature: "Premium colony lifestyle near Radhapuram. Gated community.",
        fullDesc: "Brijvaas offers the ultimate privileged lifestyle in Mathura's most premium residential corridor, directly opposite Hanuman Vatika on the Radhapuram-Goverdhan Link Road. This project is tailor-made for those who value privacy, security, and high-status living within a friendly community environment.",
        plotSizes: "150 sq. yd. to 300 sq. yd. premium villa plots",
        resPrice: "₹19,200 per sq. yd.",
        commPrice: "N/A",
        paymentPlans: "Customized payment schedules with leading bank loan approvals.",
        keyFeatures: [
            "Highly upscale neighborhood close to Radhapuram and commercial markets",
            "Beautiful designer entry gate with smart security boom-barrier",
            "Underground sewage system and internal tiled pathways",
            "Equipped with kids play zone, elders garden, and yoga lawn",
            "100% clear registry, prompt mutation, and direct bank finance facility"
        ],
        image: "assets/brijvaas.jpg",
        roi: {
            started: "₹7,000",
            now: "₹19,200",
            gain: "174% Return"
        }
    },
    {
        id: "06",
        name: "Laxmi Town",
        type: "Township",
        status: "Limited Units",
        location: "Dheruaa Railway Fatak, Raya-Vrindavan Road, Laxminagar, Mathura",
        shortFeature: "Excellent transit links. Raya-Vrindavan corridor growth zone.",
        fullDesc: "Laxmi Town is strategically placed on the Raya-Vrindavan Road near Dheruaa. Situated on the vital connection between Raya and Vrindavan, this project offers high potential for future growth, backed by proposed smart city zones and heritage corridor projects.",
        plotSizes: "100 sq. yd., 120 sq. yd. residential plotting",
        resPrice: "₹15,500 per sq. yd.",
        commPrice: "₹22,000 per sq. yd.",
        paymentPlans: "20% down payment, remaining over 18 months in flexible installments.",
        keyFeatures: [
            "Excellent location on the primary Raya-Vrindavan transit highway",
            "Very close to railway station for easy passenger transit",
            "Fastest developing residential and tourist hub corridor",
            "Planned green landscaping with dedicated tree lines",
            "High-capacity electric poles and reliable water lines"
        ],
        image: "assets/laxmi_town.jpg",
        roi: {
            started: "₹5,000",
            now: "₹15,500",
            gain: "210% Return"
        }
    },
    {
        id: "07",
        name: "Baldev City",
        type: "Colony",
        status: "Limited Units",
        location: "Behind Narsi Vihar, Sonkh Road to Goverdhan Road, Mathura",
        shortFeature: "Unique dual road access. Connecting Sonkh Road and Goverdhan Road.",
        fullDesc: "Baldev City stands out due to its unique dual-road access, connecting both Sonkh Road (near Narsi Vihar) and Goverdhan Road. This strategic dual-connectivity provides unmatched travel convenience and ensures steady residential appreciation.",
        plotSizes: "100 sq. yd., 150 sq. yd. plots",
        resPrice: "₹16,800 per sq. yd.",
        commPrice: "N/A",
        paymentPlans: "30% booking amount, balance within 60 days with attractive cash-down discounts.",
        keyFeatures: [
            "Dual entry gates towards Goverdhan Road and Sonkh Road",
            "Surrounded by established residential colonies with active families",
            "Equipped with deep bore-wells for sweet drinking water",
            "Gated security with regular patrols",
            "Proper drainage system connected to the main municipal line"
        ],
        image: "assets/baldev_city.jpg",
        roi: {
            started: "₹5,500",
            now: "₹16,800",
            gain: "205% Return"
        }
    },
    {
        id: "08",
        name: "Kundan Kunj",
        type: "Plotting",
        status: "Limited Units",
        location: "Opp. Tehsil, Goyal Market, Near Shreyash Grameen Bank, Mant",
        shortFeature: "Mant town center location, opposite Tehsil office. Highly convenient.",
        fullDesc: "Kundan Kunj is located right in the heart of Mant Town Center, opposite the local Tehsil government office and Goyal Market. Ideal for local residents and government officials, it puts daily necessities, administrative offices, and banking services at your doorstep.",
        plotSizes: "90 sq. yd., 120 sq. yd. residential plots",
        resPrice: "₹15,200 per sq. yd.",
        commPrice: "₹24,000 per sq. yd.",
        paymentPlans: "Flexible payment timelines. Registry done within 30 days of full payment.",
        keyFeatures: [
            "Prime location directly opposite Mant Tehsil administrative offices",
            "Goyal Market and Shreyash Grameen Bank within walking distance",
            "Excellent location for mixed-use commercial and residential builds",
            "Ready-to-build layout with municipal water connection approval",
            "100% legal clearance and clear documentation"
        ],
        image: "assets/kundan_kunj.jpg",
        roi: {
            started: "₹5,200",
            now: "₹15,200",
            gain: "192% Return"
        }
    },
    {
        id: "09",
        name: "Padma Kunj",
        type: "Plotting",
        status: "Limited Units",
        location: "Mant Jabra Road, Mant, Mathura",
        shortFeature: "Peaceful Mant region. Premium plotting with high future growth potential.",
        fullDesc: "Padma Kunj is situated on the peaceful Mant Jabra Road in the Mant region. It is designed as an affordable premium residential plotting township for families looking for peaceful, pollution-free living with strong future land value appreciation.",
        plotSizes: "100 sq. yd., 150 sq. yd. plots",
        resPrice: "₹15,100 per sq. yd.",
        commPrice: "N/A",
        paymentPlans: "Easy 2-year installment schedule with low down payment requirement.",
        keyFeatures: [
            "Affordable pricing for premium plotted land in high-growth corridor",
            "Peaceful, green, and completely pollution-free environment",
            "Wide internal roads with roadside tree plantation",
            "Dedicated temple site and community center inside",
            "100% clear title with legal guarantee from Brijdhara Group"
        ],
        image: "assets/padma_kunj.jpg",
        roi: {
            started: "₹5,000",
            now: "₹15,100",
            gain: "202% Return"
        }
    },
    {
        id: "10",
        name: "Harshita Town",
        type: "Colony",
        status: "Limited Units",
        location: "In front of Pushpanjali Site, Bhore ka Nagla, Mathura",
        shortFeature: "Growing Mathura corridor near Pushpanjali area. Premium atmosphere.",
        fullDesc: "Harshita Town is a premium residential colony located in front of the famous Pushpanjali Site at Bhore ka Nagla, Mathura. Known for its quiet, highly-civilized neighborhood atmosphere, it is the ideal spot for family settlement within close proximity to schools, hospitals, and temples.",
        plotSizes: "100 sq. yd., 125 sq. yd., 180 sq. yd. plots",
        resPrice: "₹16,500 per sq. yd.",
        commPrice: "N/A",
        paymentPlans: "30% booking amount, remaining in 12 monthly interest-free installments.",
        keyFeatures: [
            "Located opposite the premium Pushpanjali residential zone",
            "High-class neighborhood atmosphere ready for family settlement",
            "Wide paved internal roads with designer street lights",
            "Secure gated enclave with high boundary walls",
            "Immediate registration and dakhil-kharij mutation"
        ],
        image: "assets/harshita_town.png",
        roi: {
            started: "₹5,800",
            now: "₹16,500",
            gain: "184% Return"
        }
    }
];

// 2. CHATBOT KNOWLEDGE BASE (Q&A)
const chatbotQA = [
    {
        keys: ["who are you", "what is your name", "who is chatbot", "kaun ho", "tumhara naam", "identity"],
        answer: "Namaste! 🙏 I am the <b>Brij Assistant (Krishna Seva Assistant)</b>, your virtual sales consultant for Brijdhara Group. I can help you search plots, book free site visits, and download project brochures. How may I guide you today in the holy land of Lord Krishna?"
    },
    {
        keys: ["who is director", "director name", "owner of brijdhara", "director kaun hai", "dheeraj", "dheeraj saini"],
        answer: "The Director of Brijdhara Group is <b style=\"color:var(--color-gold);\">Mr. Dheeraj K. Saini</b>. He has over 11 years of experience in the Mathura-Vrindavan real estate sector and personally ensures that all land transactions are 100% transparent and dispute-free. You can schedule a consultation with him at our office by calling <b>7055505641</b>."
    },
    {
        keys: ["how long", "established", "experience", "business since", "kab se company", "old company", "years of trust", "2014", "11 years"],
        answer: "Brijdhara Group was established in <b>2014</b> and has been operating successfully for over <b>11 years</b>. In this period, we have delivered 8+ successful projects, earning the trust of thousands of happy land buyers in Mathura & Vrindavan."
    },
    {
        keys: ["registered", "legal", "rera", "pvt ltd", "company register", "brijdhara real tech", "brijvaas realtech"],
        answer: "Yes, we are 100% registered. Brijdhara Group operates under two registered legal entities: <b>Brijdhara Real Tech Pvt. Ltd.</b> and <b>Brijvaas Realtech India Pvt. Ltd.</b> All our projects feature clear land registry titles, prompt mutation (dakhil kharij), and verified ownership. We maintain a zero-dispute track record."
    },
    {
        keys: ["office address", "where is office", "office location", "office map", "office kahan hai", "location of office", "sonkh road"],
        answer: "Our corporate office is located at: <b>Opp. Hanuman Mandir, Mandi Gate-2, Sonkh Road, Near Mandi Chauraha, Mathura, Uttar Pradesh</b>. We are open from 10:00 AM to 6:30 PM. Would you like to schedule an in-person meeting or book a free site visit?"
    },
    {
        keys: ["available project", "plots list", "available plots", "konsa project", "projects list", "show projects"],
        answer: "We have several premium projects: <br>1. <b>Hetvik Plaza & Town</b> (Mant-Vrindavan Road) - Shops from ₹10 Lakhs & Plots<br>2. <b>Shree Banshivat Dhaam</b> (Mant-Raya Road) - Starting ₹9k/sq.yd (EMI available)<br>3. <b>Brij Green Highway</b> (Mathura-Bareilly Highway) - Starting ₹10k/sq.yd<br>4. <b>Kanha Kunj</b> (Kosi Khurd) - Starting ₹14k/sq.yd (10% Monsoon Discount!)<br>5. <b>Padma Greens</b> (Vrindavan VIP Road) - Limited plots at ₹19.8k/sq.yd<br>6. <b>Brij Town</b> (Goverdhan Road) - Limited units at ₹17.5k/sq.yd<br>7. <b>Brijvaas</b> (Radhapuram Link Road) - Limited units at ₹19.2k/sq.yd<br>Which project matches your preference? I can share details!"
    },
    {
        keys: ["best investment", "good for investment", "highest roi", "investment plots", "investment kahan karein", "best choice"],
        answer: "For immediate growth, <b>Brij Green Highway</b> on the Mathura-Bareilly Highway is our top pick due to direct highway frontage and commercial scope. For spiritual value, <b>Padma Greens</b> on VIP Road Vrindavan is premium. Land prices here are rising at 20-30% annually. Shall I book a free site tour for you?"
    },
    {
        keys: ["vrindavan plots", "near vrindavan", "plots in vrindavan", "vrindavan kahan hai", "vip road"],
        answer: "Yes, our flagship project <b>Padma Greens</b> is located directly on VIP Road (NH-2 to Devi Atas Road) in Atas Bangar, Vrindavan. It is in extremely close proximity to ISKCON Vrindavan and Banke Bihari Temple (22 mins). Only a few units are left at ₹19,800/sq. yd. Would you like us to send the layout on WhatsApp?"
    },
    {
        keys: ["highway", "near highway", "bareilly highway", "nh-2", "expressway", "jawaar"],
        answer: "Yes, <b>Brij Green Highway</b> is situated right on the Mathura-Bareilly Highway near the Jawaar Toll Plaza. It features direct highway access making it highly suitable for commercial setups as well as residential villas. Starting rate is ₹10,000/sq. yd. Would you like to receive the brochure on WhatsApp?"
    },
    {
        keys: ["plot sizes", "gaj", "sq yd", "size chart", "plot size kya hai"],
        answer: "Our standard plot sizes are <b>100 sq. yd. (900 sq. ft.)</b> and <b>200 sq. yd. (1800 sq. ft.)</b>, with larger commercial spaces also available in select highway projects. We can also custom-join adjacent plots. Shall I check availability for a specific size for you?"
    },
    {
        keys: ["price list", "starting price", "plot price", "cost of plot", "rate kya hai", "sasta plot", "price kya hai"],
        answer: "Our residential plots start from <b>₹10,000 per sq. yd.</b> (in Brij Green Highway) up to <b>₹19,800 per sq. yd.</b> (in Padma Greens Vrindavan). Commercial spaces start at ₹15,000/sq. yd. Kindly share your WhatsApp number and I will have our sales team send the complete price list to you in 5 minutes."
    },
    {
        keys: ["roi", "appreciation", "value increase", "returns", "investment benefit"],
        answer: "Mathura-Vrindavan is one of India's fastest-growing real estate corridors, driven by 50M+ annual tourists, Yamuna Expressway connectivity, and the upcoming Jewar Airport (1:00 Hours away). Land values in our projects have risen 20% to 30% year-on-year. For example, Padma Greens started at ₹7,500/sq.yd and is now valued at ₹19,800/sq.yd!"
    },
    {
        keys: ["is it safe", "security", "dispute", "fraud", "court case", "legal check"],
        answer: "Absolutely safe. We have a <b>11-year spotless record</b> with zero registry disputes. We provide 100% clear titles, instant mutation (dakhil-kharij), and verify all legal documents at our office. We invite you to visit our office on Sonkh Road to inspect all paperwork before booking."
    },
    {
        keys: ["payment plan", "installment", "kisht", "down payment", "loan", "finance"],
        answer: "We offer flexible plans: <br>1. <b>Cash Down Plan</b>: Get an immediate 5% discount on full payment.<br>2. <b>Installment Plan</b>: Pay a booking amount and clear the rest in easy interest-free installments over 12 to 24 months. <br>3. <b>Bank Finance</b>: Selected premium projects have bank finance approvals. Which option suits you?"
    },
    {
        keys: ["nri", "nri invest", "foreign citizen", "nri process"],
        answer: "Yes, NRIs can easily purchase residential land in India. Our sales team has dedicated experience handling NRI documentation, digital property tours, and remote registration. You can reach our NRI helpline on WhatsApp at <b>+917055505641</b>."
    },
    {
        keys: ["site visit free", "book site visit", "visit plot", "site visit kaise karein", "visit charge", "visit free hai"],
        answer: "Yes, <b>site visits are 100% free of charge!</b> We provide complimentary transport within Mathura and Vrindavan to show you our projects in person. Please share your phone number and preferred date, and our travel desk will arrange it for you!"
    },
    {
        keys: ["brochure", "download brochure", "layout map", "map download"],
        answer: "I can instantly send you the PDF brochures and layouts of our projects on WhatsApp. Could you please share your WhatsApp number?"
    },
    {
        keys: ["contact number", "phone", "whatsapp", "call", "mobile", "sales team", "email", "brijdhararealtech"],
        answer: "You can reach us at:<br>• Primary Phone/WhatsApp: <b>7055505641</b><br>• Director Consultant: <b>9719369022</b><br>• Sales Desk: <b>7037907338</b><br>• Email: <b>brijdhararealtech@gmail.com</b><br>Would you like our representative to call you right away?"
    },
    {
        keys: ["hetvik plaza", "hetvik town", "hetvik", "mant-vrindavan road", "fire brigade"],
        answer: "<b>Hetvik Plaza & Town</b> is our newly launched premium commercial and residential project located on <b>Mant-Vrindavan Road</b>, opposite the Fire Brigade and near the Tehsil. <br><br><b>Key Details:</b><br>• <b>Shops Price:</b> ₹35,00,000/- | ₹25,00,000/- | ₹15,00,000/- | ₹10,00,000/-<br>• <b>Plots:</b> ₹20,000 / sq. yd.<br>Would you like to download the layout map or book a free site tour?"
    },
    {
        keys: ["shree banshivat dhaam", "banshivat", "vansibat", "vanshibat", "banshivat dhaam", "banshivat dam", "mant raya road"],
        answer: "<b>Shree Banshivat Dhaam</b> is our newest and fastest-growing plotting project located on the <b>Mant-Raya Road</b>, directly opposite the petrol pump and near the Mant Tehsil office. <br><br><b>Key Details:</b><br>• <b>Plot Sizes:</b> 100 sq. yd. & 200 sq. yd.<br>• <b>Cash Price:</b> ₹9,000 / sq. yd.<br>• <b>EMI Price:</b> ₹10,000 / sq. yd.<br>• <b>Payment Plan:</b> Only 40% advance booking, balance in 24 monthly installments.<br>Would you like to download the layout map or book a free site tour?"
    },
    {
        keys: ["hello", "hi", "namaste", "jai shri krishna", "hey", "radhe radhe", "pranam"],
        answer: "Radhe Radhe! 🙏 Welcome to Brijdhara Group. I am your Krishna Seva Assistant. How can I help you find your dream plot or high-growth investment in Mathura & Vrindavan today?"
    }
];

// 3. SEO BLOG DATABASE
const blogData = [
    {
        id: "b1",
        title: "Top 5 Reasons to Invest in Real Estate in Mathura-Vrindavan in 2025",
        excerpt: "Discover why the sacred land of Lord Krishna is witnessing an unprecedented real estate boom and why investors are flocking to Vrindavan VIP corridors.",
        category: "Appreciation Guides",
        date: "May 15, 2026",
        image: "assets/hero_colony.png",
        content: `
            <p>Investing in Mathura and Vrindavan is no longer just a spiritual decision; it has emerged as one of the most profitable financial moves in northern India. Over the last three years, the corridor has seen real estate appreciation rates touching 20% to 30% annually. Here are the top 5 reasons to invest in 2025/2026:</p>
            <br>
            <h4>1. Unprecedented Religious Tourism</h4>
            <p>With over 50 million pilgrims visiting Mathura-Vrindavan, Goverdhan, and Barsana every year, there is a perpetual demand for tourist accommodations, holiday homes, dharamshalas, and residential housing. Properties near temple corridors enjoy premium valuations and strong commercial viability.</p>
            <br>
            <h4>2. Mega Infrastructure Projects</h4>
            <p>The state government’s Smart City push is rapidly transforming the civic layout. Planned ring roads, railway station expansions, the Vrindavan heritage corridor, and ropeway installations are turning the twin cities into modern, easily navigable urban centers.</p>
            <br>
            <h4>3. Delhi-NCR Proximity via Highways</h4>
            <p>The Yamuna Expressway connects Delhi-NCR to Mathura in under 2 hours, making it the perfect weekend getaway. This accessibility is encouraging elite families to purchase holiday villas and plotted retreats away from metropolitan pollution.</p>
            <br>
            <h4>4. The Upcoming Jewar International Airport</h4>
            <p>Situated just 45 minutes from Mathura, the Noida International Airport at Jewar is the biggest long-term valuation booster for local land. When fully functional, it will bring international pilgrims and business delegates directly to the Braj threshold.</p>
            <br>
            <h4>5. Safe Heritage Value</h4>
            <p>Land near major pilgrimage sites globally has historically shown immense resilience against economic inflation. Investing in gated communities developed by trusted groups like Brijdhara Group protects capital and guarantees long-term inheritance value.</p>
        `
    },
    {
        id: "b2",
        title: "How Yamuna Expressway is Driving Property Prices Near Mathura",
        excerpt: "A deep dive into how 165 km of modern expressway infrastructure is changing land valuations and driving new commercial hubs in the region.",
        category: "Market Trends",
        date: "May 20, 2026",
        image: "assets/investment_plots.png",
        content: `
            <p>Infrastructure creates value, and the Yamuna Expressway is the ultimate proof. Since its commissioning, the 165 km six-lane expressway connecting Greater Noida with Agra has radically redefined transit timelines and real estate prices in western Uttar Pradesh.</p>
            <br>
            <h4>Transit Time Reduced to Half</h4>
            <p>What used to be a tedious 4 to 5-hour drive from Delhi to Mathura has been reduced to a swift 100-minute journey. This seamless connectivity has brought Mathura into the direct investment radius of Delhi-NCR buyers, who buy plots for building retirement bungalows and farmhouses.</p>
            <br>
            <h4>Creation of High-Value Nodes</h4>
            <p>Highways like the Mathura-Bareilly Highway (featuring Brij Green Highway) which intersect or feed directly into the expressway corridor are witnessing the fastest commercial appreciation. These zones serve as primary transport exits and entry gateways, experiencing rapid growth in hotel projects, warehousing hubs, and plotted residential townships.</p>
            <br>
            <h4>Spillover from Industrial Corridors</h4>
            <p>With toy city projects, leather clusters, and the upcoming Film City near Noida, the industrial developments are slowly shifting down the expressway. The land availability near Mathura-Vrindavan offers a competitive price advantage for employees and investors seeking affordable plotting space with rapid future connectivity.</p>
        `
    },
    {
        id: "b3",
        title: "Complete Guide: How to Buy a Plot in Mathura as an NRI",
        excerpt: "An essential legal and regulatory handbook for NRI investors seeking clear-title land investments in the sacred Braj region.",
        category: "NRI Helpdesk",
        date: "May 24, 2026",
        image: "assets/vrindavan_gate.png",
        content: `
            <p>Many Non-Resident Indians (NRIs) dream of owning a piece of land in the sacred regions of Mathura and Vrindavan. However, navigating Indian legal frameworks can feel intimidating. Here is a simplified guide on how NRIs can safely invest in residential plots under FEMA regulations.</p>
            <br>
            <h4>1. Permissible Property Types</h4>
            <p>Under Reserve Bank of India (RBI) guidelines, NRIs and OCI (Overseas Citizens of India) cardholders are permitted to buy residential and commercial properties. They **cannot** buy agricultural land, plantation properties, or farmhouses unless they inherit them or receive special government permissions. All Brijdhara Group plotted colonies are legally non-agricultural residential zones, making them 100% compliant for NRI purchases.</p>
            <br>
            <h4>2. Financial Transactions & Accounts</h4>
            <p>Payment for plot purchase must be routed through inward remittances from abroad or using funds held in NRI accounts (NRE, NRO, or FCNR accounts). Direct payments in foreign currency or cash are strictly prohibited.</p>
            <br>
            <h4>3. Registrations and Power of Attorney (PoA)</h4>
            <p>While an NRI can purchase and register land in person, they can also execute a Power of Attorney (PoA) to delegate registry authority to a trusted local relative. The PoA must be signed and attested at the Indian Embassy in the NRI's country of residence.</p>
            <br>
            <h4>4. Essential Document Checklist</h4>
            <p>To finalize your registry in Mathura, you will need:<br>
            • Valid Indian Passport / OCI card<br>
            • PAN Card (Permanent Account Number)<br>
            • Address proof (Indian and overseas address)<br>
            • NRE/NRO cheque details for transaction trails</p>
            <br>
            <p>At Brijdhara Group, our sales support cell specializes in assisting NRI buyers, offering remote video walkthroughs, documentation checks, and seamless legal assistance. Contact us at <b>info@brijdhararealtech.com</b> for more details.</p>
        `
    }
];

// 4. UI STATE & INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    renderProjects(projectsData);
    renderBlogs(blogData);
    initFilters();
    initModals();
    initDrawers();
    initTestimonials();
    initChatbot();
    initLeadForms();
    initDeveloperDashboard();
});

// Scroll Header effect
function initNavbar() {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

// 5. PROJECTS GRID RENDERER
function renderProjects(projects) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    
    if (projects.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">
                <p>No projects match your current search criteria. Try adjusting your filters.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = projects.map(proj => {
        const isLimited = proj.status.toLowerCase().includes("limited");
        const badgeClass = isLimited ? "limited" : "available";
        
        return `
            <div class="project-card glass-panel" data-id="${proj.id}">
                <div class="project-img-wrapper">
                    <img src="${proj.image}" alt="${proj.name}" class="project-card-img">
                    <span class="status-badge ${badgeClass}">${proj.status}</span>
                </div>
                <div class="project-card-content">
                    <div class="project-location">
                        <i class="fas fa-map-marker-alt"></i> ${proj.location.split(',')[0]}
                    </div>
                    <h3>${proj.name}</h3>
                    <p class="project-desc">${proj.shortFeature}</p>
                    
                    <div class="price-metric">
                        <span class="price-label">Plot Sizes:</span>
                        <span class="price-value" style="font-size:0.85rem">${proj.plotSizes.split('&')[0]}</span>
                    </div>
                    
                    <div class="price-metric">
                        <span class="price-label">${proj.priceLabel || 'Price / Sq. Yd:'}</span>
                        <span class="price-value" style="font-size:0.8rem">${proj.resPrice}</span>
                    </div>

                    ${proj.roi ? `
                    <div class="roi-indicator">
                        <span class="roi-label">Appreciation Rate</span>
                        <span class="roi-value"><i class="fas fa-chart-line"></i> ${proj.roi.gain}</span>
                    </div>
                    ` : ''}
                    
                    <div class="card-actions">
                        <button class="btn btn-primary btn-view-details" data-id="${proj.id}">Details</button>
                        <button class="btn btn-secondary btn-quick-visit" data-project="${proj.name}">Visit Free</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 6. BLOG GRID RENDERER
function renderBlogs(blogs) {
    const grid = document.getElementById("blog-grid");
    if (!grid) return;
    
    grid.innerHTML = blogs.map(post => `
        <div class="project-card glass-panel" style="display:flex; flex-direction:column; height:100%;">
            <div class="project-img-wrapper">
                <img src="${post.image}" alt="${post.title}" class="project-card-img">
                <span class="status-badge available" style="background:var(--color-saffron);">${post.category}</span>
            </div>
            <div class="project-card-content" style="display:flex; flex-direction:column; flex-grow:1;">
                <span style="font-size: 0.75rem; color:var(--color-text-muted); text-transform:uppercase; margin-bottom:8px; display:block;">
                    <i class="far fa-calendar-alt"></i> ${post.date}
                </span>
                <h3 style="font-size:1.15rem; margin-bottom:12px; line-height:1.4;">${post.title}</h3>
                <p class="project-desc" style="font-size:0.85rem; line-height:1.5; margin-bottom:20px; flex-grow:1;">${post.excerpt}</p>
                <button class="btn btn-secondary btn-read-blog" data-id="${post.id}" style="width:100%; padding:10px;">
                    Read Article <i class="fas fa-arrow-right" style="font-size:0.8rem; margin-left:5px;"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Bind click events
    document.querySelectorAll(".btn-read-blog").forEach(btn => {
        btn.addEventListener("click", () => {
            openBlogModal(btn.dataset.id);
        });
    });
}

function openBlogModal(blogId) {
    const post = blogData.find(b => b.id === blogId);
    if (!post) return;
    
    const modal = document.getElementById("blog-modal");
    const titleEl = document.getElementById("blog-modal-title");
    const bodyEl = document.getElementById("blog-modal-body");
    
    if (!modal || !titleEl || !bodyEl) return;
    
    titleEl.innerHTML = post.title;
    bodyEl.innerHTML = `
        <div style="margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:15px; font-size:0.85rem; display:flex; justify-content:space-between;">
            <span>Category: <b style="color:var(--color-gold);">${post.category}</b></span>
            <span>Published: <b>${post.date}</b></span>
        </div>
        <img src="${post.image}" alt="${post.title}" style="width:100%; height:250px; object-fit:cover; border-radius:8px; margin-bottom:25px; border:1px solid rgba(212,175,55,0.15);">
        <div style="font-size:0.95rem; line-height:1.7;">
            ${post.content}
        </div>
    `;
    
    modal.classList.add("active");
}

// 7. SEARCH & FILTER CONTROLS
function initFilters() {
    const searchInput = document.getElementById("project-search");
    const filterTabs = document.querySelectorAll(".filter-tab");
    const typeFilters = document.querySelectorAll(".type-filter");
    
    let textQuery = "";
    let activeTab = "all";
    let activeType = "all";
    
    function applyAllFilters() {
        let filtered = projectsData.filter(proj => {
            // Text match
            const textMatch = proj.name.toLowerCase().includes(textQuery) || 
                              proj.location.toLowerCase().includes(textQuery) ||
                              proj.shortFeature.toLowerCase().includes(textQuery);
            
            // Tab match
            let tabMatch = true;
            if (activeTab === "available") {
                tabMatch = proj.status === "Available";
            } else if (activeTab === "limited") {
                tabMatch = proj.status === "Limited Units";
            }
            
            // Type match
            let typeMatch = true;
            if (activeType !== "all") {
                typeMatch = proj.type.toLowerCase() === activeType.toLowerCase();
            }
            
            return textMatch && tabMatch && typeMatch;
        });
        
        renderProjects(filtered);
        rebindProjectButtons();
    }
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            textQuery = e.target.value.toLowerCase().trim();
            applyAllFilters();
        });
    }
    
    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeTab = tab.dataset.filter;
            applyAllFilters();
        });
    });

    typeFilters.forEach(filter => {
        filter.addEventListener("click", () => {
            typeFilters.forEach(f => f.classList.remove("active"));
            filter.classList.add("active");
            activeType = filter.dataset.type;
            applyAllFilters();
        });
    });
}

// Re-bind actions when list updates
function rebindProjectButtons() {
    // Details drawer binders
    document.querySelectorAll(".btn-view-details").forEach(btn => {
        btn.addEventListener("click", () => {
            openProjectDrawer(btn.dataset.id);
        });
    });
    
    // Visit modal binders
    document.querySelectorAll(".btn-quick-visit").forEach(btn => {
        btn.addEventListener("click", () => {
            openVisitModal(btn.dataset.project);
        });
    });
}

// 8. MODALS SYSTEM
function initModals() {
    const modals = document.querySelectorAll(".modal-overlay");
    const closeBtns = document.querySelectorAll(".modal-close");
    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modals.forEach(m => m.classList.remove("active"));
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });

    // Header brochure buttons trigger
    document.querySelectorAll(".btn-trigger-brochure").forEach(btn => {
        btn.addEventListener("click", () => {
            openBrochureModal();
        });
    });
}

function openBrochureModal(projectName = "") {
    const modal = document.getElementById("brochure-modal");
    if (!modal) return;
    
    // Select option if matches
    const select = modal.querySelector("select[name='project_interest']");
    if (select && projectName) {
        select.value = projectName;
    }
    
    modal.classList.add("active");
}

function openVisitModal(projectName = "") {
    const modal = document.getElementById("visit-modal");
    if (!modal) return;
    
    const select = modal.querySelector("select[name='visit_project']");
    if (select && projectName) {
        select.value = projectName;
    }
    
    modal.classList.add("active");
}

// 9. PROJECT DETAILS DRAWER
function initDrawers() {
    const drawerOverlay = document.getElementById("drawer-overlay");
    const drawerContent = document.getElementById("drawer-content");
    const drawerClose = document.getElementById("drawer-close");
    
    if (drawerClose && drawerOverlay) {
        drawerClose.addEventListener("click", closeDrawer);
        drawerOverlay.addEventListener("click", closeDrawer);
    }
    
    rebindProjectButtons();
}

function openProjectDrawer(projectId) {
    const proj = projectsData.find(p => p.id === projectId);
    if (!proj) return;
    
    const overlay = document.getElementById("drawer-overlay");
    const content = document.getElementById("drawer-content");
    
    if (!overlay || !content) return;
    
    content.innerHTML = `
        <button class="drawer-close" id="drawer-close"><i class="fas fa-times"></i></button>
        <div class="drawer-banner">
            <img src="${proj.image}" alt="${proj.name}">
            <span class="status-badge ${proj.status.toLowerCase().includes('limited') ? 'limited' : 'available'}" style="position: absolute; bottom: 20px; right: 30px;">
                ${proj.status}
            </span>
        </div>
        <div class="drawer-body">
            <span class="saffron-text" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:1px;">
                ${proj.type} Project
            </span>
            <h2 style="font-size:2.2rem; margin-top:5px; margin-bottom:10px;">${proj.name}</h2>
            <p style="color:var(--color-saffron); font-size:0.95rem; margin-bottom:20px;">
                <i class="fas fa-map-marker-alt"></i> ${proj.location}
            </p>
            
            <p style="font-size:1rem; color:var(--color-text-muted); margin-bottom:30px; line-height:1.7;">
                ${proj.fullDesc}
            </p>
            
            <h3 class="drawer-section-title">Property Details</h3>
            <div class="specs-grid">
                <div class="spec-item">
                    <span class="spec-label">Sizes Available</span>
                    <span class="spec-value">${proj.plotSizes}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Residential Plot Rate</span>
                    <span class="spec-value">${proj.resPrice}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Commercial Plot Rate</span>
                    <span class="spec-value">${proj.commPrice}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Payment Plans Available</span>
                    <span class="spec-value">${proj.paymentPlans}</span>
                </div>
            </div>

            ${proj.roi ? `
            <h3 class="drawer-section-title">Investment Progression (ROI)</h3>
            <div style="background: rgba(212,175,55,0.05); border: 1px solid rgba(212,175,55,0.15); border-radius:8px; padding:20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;">
                <div>
                    <span style="display:block; font-size:0.75rem; color:var(--color-text-muted); text-transform:uppercase;">Launch Price</span>
                    <span style="font-size:1.3rem; font-weight:700; color:var(--color-text-muted); text-decoration: line-through;">${proj.roi.started} / sq. yd.</span>
                </div>
                <div style="font-size:1.5rem; color:var(--color-gold);"><i class="fas fa-arrow-right"></i></div>
                <div>
                    <span style="display:block; font-size:0.75rem; color:var(--color-gold-light); text-transform:uppercase;">Current Value</span>
                    <span style="font-size:1.6rem; font-weight:800; color:var(--color-gold);">${proj.roi.now} / sq. yd.</span>
                </div>
                <div style="background:rgba(16,185,129,0.15); padding:8px 12px; border-radius:4px; font-weight:700; color:#10b981; font-size:0.85rem; border:1px solid #10b981;">
                    ${proj.roi.gain}
                </div>
            </div>
            ` : ''}
            
            <h3 class="drawer-section-title">Infrastructure & Amenities</h3>
            <ul style="list-style:none; padding-left:0; margin-bottom:35px;">
                ${proj.keyFeatures.map(feat => `
                    <li style="display:flex; align-items:center; gap:12px; margin-bottom:12px; font-size:0.95rem; color:var(--color-text-muted);">
                        <i class="fas fa-check" style="color:var(--color-gold); flex-shrink:0;"></i>
                        <span>${feat}</span>
                    </li>
                `).join('')}
            </ul>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:20px;">
                <button class="btn btn-primary" onclick="triggerDrawerBrochure('${proj.name}')">Download Brochure</button>
                <button class="btn btn-secondary" onclick="triggerDrawerVisit('${proj.name}')">Book Free Visit</button>
            </div>
        </div>
    `;
    
    // Bind the inner close button
    content.querySelector("#drawer-close").addEventListener("click", closeDrawer);
    
    overlay.classList.add("active");
    setTimeout(() => content.classList.add("active"), 50);
}

function closeDrawer() {
    const overlay = document.getElementById("drawer-overlay");
    const content = document.getElementById("drawer-content");
    if (!overlay || !content) return;
    
    content.classList.remove("active");
    setTimeout(() => overlay.classList.remove("active"), 300);
}

// Global helpers called from drawer HTML click triggers
window.triggerDrawerBrochure = function(projectName) {
    closeDrawer();
    setTimeout(() => openBrochureModal(projectName), 350);
};

window.triggerDrawerVisit = function(projectName) {
    closeDrawer();
    setTimeout(() => openVisitModal(projectName), 350);
};

// 10. TESTIMONIALS SLIDER
function initTestimonials() {
    const track = document.getElementById("testimonial-track");
    const slides = document.querySelectorAll(".testimonial-slide");
    const dotsContainer = document.getElementById("testimonial-dots");
    
    if (!track || slides.length === 0) return;
    
    let currentIndex = 0;
    
    // Create dots
    dotsContainer.innerHTML = Array.from({length: slides.length}).map((_, i) => 
        `<span class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
    ).join('');
    
    const dots = document.querySelectorAll(".testimonial-dot");
    
    function slideTo(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(d => d.classList.remove("active"));
        dots[index].classList.add("active");
        currentIndex = index;
    }
    
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            slideTo(parseInt(dot.dataset.index));
        });
    });
    
    // Auto slide
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        slideTo(nextIndex);
    }, 6000);
}

// 11. FORM SUBMISSION & LEAD STORAGE ENGINE
function initLeadForms() {
    // Visit Form
    const visitForm = document.getElementById("form-site-visit");
    if (visitForm) {
        visitForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(visitForm);
            const lead = {
                type: "Site Visit Request",
                name: formData.get("visit_name"),
                phone: formData.get("visit_phone"),
                city: formData.get("visit_city"),
                budget: formData.get("visit_budget"),
                project: formData.get("visit_project"),
                visitDate: formData.get("visit_date") || "Not specified",
                timestamp: new Date().toLocaleString()
            };
            
            saveLead(lead);
            showFormSuccess(visitForm, "Visit Scheduled!", "Our booking executive will call you within 2 hours to confirm your free pick-up slot. Radhe Radhe! 🙏");
        });
    }

    // Brochure Form
    const brochureForm = document.getElementById("form-brochure");
    if (brochureForm) {
        brochureForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(brochureForm);
            const lead = {
                type: "Brochure Download",
                name: formData.get("brochure_name"),
                phone: formData.get("brochure_phone"),
                project: formData.get("project_interest"),
                timestamp: new Date().toLocaleString()
            };
            
            saveLead(lead);

            // Construct WhatsApp message URL
            let whatsappText = `Namaste Brijdhara Group! 🙏\n`;
            whatsappText += `I would like to request the PDF Brochure & Layout Map.\n\n`;
            whatsappText += `*Details:*\n`;
            whatsappText += `• *Name:* ${lead.name}\n`;
            whatsappText += `• *Phone:* ${lead.phone}\n`;
            whatsappText += `• *Project Interest:* ${lead.project}\n\n`;
            whatsappText += `Please send the brochure. Thank you!`;
            
            const encodedText = encodeURIComponent(whatsappText);
            const whatsappUrl = `https://wa.me/917055505641?text=${encodedText}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            const parent = brochureForm.parentElement;
            parent.innerHTML = `
                <div class="success-screen">
                    <div class="success-icon" style="color:#10b981;"><i class="fas fa-check-circle"></i></div>
                    <h3>Brochure Request Sent!</h3>
                    <p>We have opened WhatsApp to connect you with our sales desk to download the PDF brochure for <b>${lead.project}</b>.</p>
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-primary" style="margin-top: 15px; display:inline-flex; align-items:center; gap:8px; background:#10b981; border:none; padding:10px 20px;">
                        <i class="fab fa-whatsapp"></i> Open WhatsApp
                    </a>
                    <br>
                    <button class="btn btn-secondary" style="margin-top: 15px;" onclick="location.reload()">Back to Site</button>
                </div>
            `;
        });
    }
    
    // Quick Contact Section Form
    const footerContact = document.getElementById("footer-contact-form");
    if (footerContact) {
        footerContact.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(footerContact);
            const lead = {
                type: "Price List Request",
                name: formData.get("contact_name"),
                phone: formData.get("contact_phone"),
                project: formData.get("contact_project"),
                budget: formData.get("contact_budget"),
                timestamp: new Date().toLocaleString()
            };
            
            saveLead(lead);

            // Construct WhatsApp message URL
            let whatsappText = `Namaste Brijdhara Group! 🙏\n`;
            whatsappText += `I would like to request the Price List & Site Map.\n\n`;
            whatsappText += `*Details:*\n`;
            whatsappText += `• *Name:* ${lead.name}\n`;
            whatsappText += `• *Phone:* ${lead.phone}\n`;
            whatsappText += `• *Project:* ${lead.project}\n`;
            whatsappText += `• *Budget:* ${lead.budget}\n\n`;
            whatsappText += `Please share the details. Thank you!`;
            
            const encodedText = encodeURIComponent(whatsappText);
            const whatsappUrl = `https://wa.me/917055505641?text=${encodedText}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
            
            // Show alert since it's inline
            const container = footerContact.parentElement;
            container.innerHTML = `
                <div style="background:rgba(16,185,129,0.1); border:1px solid #10b981; padding:30px; border-radius:8px; text-align:center;">
                    <i class="fas fa-check-circle" style="color:#10b981; font-size:3rem; margin-bottom:15px;"></i>
                    <h4 style="color:#fff; margin-bottom:10px;">Inquiry Sent to WhatsApp!</h4>
                    <p style="color:var(--color-text-muted); font-size:0.9rem; margin-bottom: 15px;">Your details have been saved, and we have opened WhatsApp to connect you directly with our property adviser.</p>
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:8px; background:#10b981; border:none; padding:10px 20px;">
                        <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                </div>
            `;
        });
    }
}

function saveLead(lead) {
    let leads = JSON.parse(localStorage.getItem("brijdhara_leads") || "[]");
    leads.unshift(lead);
    localStorage.setItem("brijdhara_leads", JSON.stringify(leads));
    updateAdminDashboardTable();
}

function showFormSuccess(formElement, title, message) {
    const parent = formElement.parentElement;
    parent.innerHTML = `
        <div class="success-screen">
            <div class="success-icon"><i class="fas fa-check-circle"></i></div>
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="btn btn-primary" style="margin-top: 25px;" onclick="location.reload()">Back to Site</button>
        </div>
    `;
}

// 12. CHATBOT INTERACTIVE ENGINE (with Transcript capture)
let chatTranscript = []; // Records active chat for CRM logger

function initChatbot() {
    const chatBtn = document.getElementById("chatbot-btn");
    const chatPanel = document.getElementById("chat-panel");
    const chatClose = document.getElementById("chat-close");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const chatSend = document.getElementById("chat-send");
    
    if (!chatBtn || !chatPanel) return;
    
    // State machine for chatbot lead capture
    let chatState = {
        step: "idle", // idle, waiting_for_name, waiting_for_phone
        pendingLeadType: "" // brochure, site_visit, price_list
    };
    
    chatBtn.addEventListener("click", () => {
        chatPanel.classList.toggle("active");
        const badge = chatBtn.querySelector(".chatbot-badge");
        if (badge) badge.style.display = "none";
    });
    
    if (chatClose) {
        chatClose.addEventListener("click", () => {
            chatPanel.classList.remove("active");
        });
    }
    
    function appendMsg(sender, text, isHtml = false) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `chat-msg ${sender}`;
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        msgDiv.innerHTML = `
            <div class="chat-bubble">
                ${isHtml ? text : escapeHTML(text)}
            </div>
            <span class="chat-time">${timeStr}</span>
        `;
        
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Log to transcript
        chatTranscript.push({
            sender: sender === "bot" ? "AI Assistant" : "User Client",
            text: text,
            time: timeStr
        });
    }
    
    function escapeHTML(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    
    function showTyping() {
        const typingDiv = document.createElement("div");
        typingDiv.className = "chat-msg bot typing-indicator";
        typingDiv.innerHTML = `
            <div class="chat-bubble" style="padding: 10px 15px;">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        return typingDiv;
    }
    
    function handleBotResponse(userText) {
        const text = userText.toLowerCase().trim();
        const typingIndicator = showTyping();
        
        setTimeout(() => {
            typingIndicator.remove();
            
            // 1. STATEFUL CONVERSATION FLOWS (Lead Capture)
            if (chatState.step === "waiting_for_name") {
                chatState.userName = userText;
                chatState.step = "waiting_for_phone";
                appendMsg("bot", `Thank you, ${chatState.userName}. Please provide your WhatsApp phone number so we can instantly send the requested details.`);
                return;
            }
            
            if (chatState.step === "waiting_for_phone") {
                chatState.userPhone = userText;
                chatState.step = "idle";
                
                // Copy transcript snapshot
                const finalTranscript = [...chatTranscript];
                
                // Save lead with full transcript
                const lead = {
                    type: `Chatbot Lead (${chatState.pendingLeadType})`,
                    name: chatState.userName,
                    phone: chatState.userPhone,
                    project: "Chatbot General Inquiry",
                    transcript: finalTranscript,
                    timestamp: new Date().toLocaleString()
                };
                saveLead(lead);
                
                let successMsg = "";
                if (chatState.pendingLeadType === "brochure") {
                    successMsg = `Perfect! 📋 I have registered your details. The complete brochure PDF has been dispatched to WhatsApp number ${chatState.userPhone}. Our expert will connect soon. Radhe Radhe!`;
                } else if (chatState.pendingLeadType === "site_visit") {
                    successMsg = `Excellent! ✅ Your free site visit tour is registered under name ${chatState.userName}. Our travel manager will contact you on ${chatState.userPhone} within 2 hours to coordinate. Jai Shri Krishna! 🙏`;
                } else {
                    successMsg = `Got it! 💰 We have shared the latest price lists and plot maps to WhatsApp number ${chatState.userPhone}. Let us know if you want to inspect documents!`;
                }
                
                appendMsg("bot", successMsg);
                return;
            }
            
            // 2. CHECK FOR INITIATING CONVERSATION FLOWS
            if (text.includes("book site visit") || text.includes("site visit book") || text.includes("visit plot") || text.includes("site visit schedule")) {
                chatState.step = "waiting_for_name";
                chatState.pendingLeadType = "site_visit";
                appendMsg("bot", "I will help you book a 100% FREE site visit (including free transport!). May I know your Full Name first?");
                return;
            }
            
            if (text.includes("download brochure") || text.includes("send brochure") || text.includes("get brochure") || text.includes("brochure download")) {
                chatState.step = "waiting_for_name";
                chatState.pendingLeadType = "brochure";
                appendMsg("bot", "Certainly! I can send our project layout map and brochure PDF directly to your WhatsApp. Could you please tell me your Full Name first?");
                return;
            }
            
            if (text.includes("price list") || text.includes("price details") || text.includes("rate chart")) {
                chatState.step = "waiting_for_name";
                chatState.pendingLeadType = "price_list";
                appendMsg("bot", "I will get the complete plot pricing sheet sent to you on WhatsApp. May I know your Full Name to register the request?");
                return;
            }
            
            // 3. REGULAR KEYWORD Q&A SEARCH
            let match = null;
            for (let qa of chatbotQA) {
                const found = qa.keys.some(k => text.includes(k));
                if (found) {
                    match = qa;
                    break;
                }
            }
            
            if (match) {
                appendMsg("bot", match.answer, true);
            } else {
                // Fallback smart response
                appendMsg("bot", "Apologies, I didn't fully capture that. Brijdhara Group has premium plotting projects in Mathura & Vrindavan starting at ₹10,000/sq. yd. <br><br>Would you like to:<br>• Type '<b>site visit</b>' to schedule a tour<br>• Type '<b>brochure</b>' to receive layout files<br>• Or call our office hotline directly at <b>7055505641</b>?", true);
            }
            
        }, 1200);
    }
    
    function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        appendMsg("user", text);
        chatInput.value = "";
        
        handleBotResponse(text);
    }
    
    if (chatSend && chatInput) {
        chatSend.addEventListener("click", handleSend);
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                handleSend();
            }
        });
    }
    
    // Bind quick reply suggestions
    document.querySelectorAll(".chat-suggest-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const query = btn.dataset.query;
            appendMsg("user", query);
            handleBotResponse(query);
        });
    });
}

// 13. DEVELOPER LEADS DASHBOARD (with Transcript Viewer)
function initDeveloperDashboard() {
    const footer = document.querySelector("footer");
    if (!footer) return;
    
    const dashboardBtn = document.createElement("button");
    dashboardBtn.className = "admin-badge-btn";
    dashboardBtn.innerHTML = "<i class='fas fa-lock'></i> Developer Leads Dashboard";
    dashboardBtn.style.display = "block";
    dashboardBtn.style.margin = "20px auto 0 auto";
    footer.appendChild(dashboardBtn);
    
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.id = "admin-dashboard-modal";
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px; width:95%;">
            <div class="modal-header">
                <h3><i class="fas fa-database"></i> Leads Dashboard (Developer Panel)</h3>
                <button class="modal-close" id="admin-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body" style="background:var(--color-bg-darkest);">
                <div id="admin-leads-table-container" style="overflow-x: auto; max-height:400px; margin-bottom:20px;"></div>
                
                <!-- Sub transcript panel -->
                <div id="admin-transcript-panel" style="display:none; padding:20px; border-radius:8px; border:1px solid rgba(212,175,55,0.2); background:var(--color-bg-card); margin-bottom:20px;">
                    <h4 style="color:var(--color-gold-light); margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                        <span><i class="fas fa-comments"></i> Chat Log Conversation Transcript</span>
                        <button class="btn btn-secondary" onclick="document.getElementById('admin-transcript-panel').style.display='none'" style="padding:4px 8px; font-size:0.75rem;">Close Log</button>
                    </h4>
                    <div id="admin-transcript-body" style="max-height: 200px; overflow-y:auto; display:flex; flex-direction:column; gap:10px; font-size:0.85rem; padding:10px; background:rgba(0,0,0,0.2); border-radius:4px;"></div>
                </div>

                <div style="text-align:right;">
                    <button class="btn btn-secondary" id="admin-clear-leads">Clear All Leads</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    dashboardBtn.addEventListener("click", () => {
        updateAdminDashboardTable();
        modal.classList.add("active");
    });
    
    modal.querySelector("#admin-close").addEventListener("click", () => {
        modal.classList.remove("active");
        document.getElementById("admin-transcript-panel").style.display = "none";
    });
    
    modal.querySelector("#admin-clear-leads").addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all stored leads?")) {
            localStorage.removeItem("brijdhara_leads");
            updateAdminDashboardTable();
            document.getElementById("admin-transcript-panel").style.display = "none";
        }
    });
}

function updateAdminDashboardTable() {
    const container = document.getElementById("admin-leads-table-container");
    if (!container) return;
    
    const leads = JSON.parse(localStorage.getItem("brijdhara_leads") || "[]");
    
    if (leads.length === 0) {
        container.innerHTML = `
            <p style="text-align:center; padding:30px; color:var(--color-text-muted);">No leads captured yet. Try submitting the forms or chatting with the AI chatbot!</p>
        `;
        return;
    }
    
    container.innerHTML = `
        <table class="admin-lead-table">
            <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Phone / WhatsApp</th>
                    <th>Project</th>
                    <th>Details & Dispatch Actions</th>
                </tr>
            </thead>
            <tbody>
                ${leads.map((lead, index) => {
                    const hasTranscript = lead.transcript && lead.transcript.length > 0;
                    
                    return `
                    <tr>
                        <td>${lead.timestamp}</td>
                        <td><span style="background:rgba(212,175,55,0.15); color:var(--color-gold-light); padding:2px 6px; border-radius:4px; font-size:0.75rem;">${lead.type}</span></td>
                        <td style="font-weight:600;">${lead.name}</td>
                        <td><a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" style="color:#10b981; font-weight:600;"><i class="fab fa-whatsapp"></i> ${lead.phone}</a></td>
                        <td>${lead.project || 'General'}</td>
                        <td>
                            <div style="font-size:0.75rem; color:var(--color-text-muted); margin-bottom: 8px;">
                                ${lead.city ? `City: <b>${lead.city}</b> | ` : ''}
                                ${lead.budget ? `Budget: <b>${lead.budget}</b> | ` : ''}
                                ${lead.visitDate ? `Preferred Date: <b>${lead.visitDate}</b> | ` : ''}
                            </div>
                            <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                ${hasTranscript ? `
                                    <button class="btn btn-secondary" onclick="viewChatTranscript(${index})" style="padding:4px 8px; font-size:0.7rem; border-color:var(--color-saffron); color:var(--color-saffron-light);">
                                        <i class="far fa-comments"></i> Chat Log (${lead.transcript.length})
                                    </button>
                                ` : ''}
                                <button class="btn btn-primary" onclick="dispatchLeadToWhatsApp(${index})" style="padding:4px 8px; font-size:0.7rem; background:#10b981; color:#fff; border:none; box-shadow:none;">
                                    <i class="fab fa-whatsapp"></i> Send to Admin
                                </button>
                                <button class="btn btn-secondary" onclick="shareLeadOnWhatsApp(${index})" style="padding:4px 8px; font-size:0.7rem; border-color:#ff9933; color:#ff9933;">
                                    <i class="fas fa-share-alt"></i> Share
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
                }).join('')}
            </tbody>
        </table>
    `;
}

// Globally bound actions called from table triggers
window.viewChatTranscript = function(leadIndex) {
    const leads = JSON.parse(localStorage.getItem("brijdhara_leads") || "[]");
    const lead = leads[leadIndex];
    if (!lead || !lead.transcript) return;
    
    const panel = document.getElementById("admin-transcript-panel");
    const body = document.getElementById("admin-transcript-body");
    
    body.innerHTML = lead.transcript.map(line => `
        <div style="border-bottom:1px solid rgba(255,255,255,0.02); padding-bottom:5px;">
            <b style="color:${line.sender.includes('AI') ? 'var(--color-gold-light)' : 'var(--color-saffron-light)'};">${line.sender} [${line.time}]:</b>
            <span style="color:#e2e8f0; margin-left:5px;">${line.text}</span>
        </div>
    `).join('');
    
    panel.style.display = "block";
    panel.scrollIntoView({ behavior: 'smooth' });
};

window.dispatchLeadToWhatsApp = function(leadIndex) {
    const leads = JSON.parse(localStorage.getItem("brijdhara_leads") || "[]");
    const lead = leads[leadIndex];
    if (!lead) return;
    
    let text = `*New Lead captured on Brijdhara Portal*\n`;
    text += `--------------------------------------\n`;
    text += `*Timestamp:* ${lead.timestamp}\n`;
    text += `*Type:* ${lead.type}\n`;
    text += `*Name:* ${lead.name}\n`;
    text += `*Phone/WhatsApp:* ${lead.phone}\n`;
    text += `*Project:* ${lead.project || 'General Inquiry'}\n`;
    if (lead.city) text += `*City:* ${lead.city}\n`;
    if (lead.budget) text += `*Budget:* ${lead.budget}\n`;
    if (lead.visitDate) text += `*Preferred Date:* ${lead.visitDate}\n`;
    
    const encodedText = encodeURIComponent(text);
    const adminWhatsAppUrl = `https://wa.me/917055505641?text=${encodedText}`;
    window.open(adminWhatsAppUrl, '_blank');
};

window.shareLeadOnWhatsApp = function(leadIndex) {
    const leads = JSON.parse(localStorage.getItem("brijdhara_leads") || "[]");
    const lead = leads[leadIndex];
    if (!lead) return;
    
    let text = `*New Lead captured on Brijdhara Portal*\n`;
    text += `--------------------------------------\n`;
    text += `*Timestamp:* ${lead.timestamp}\n`;
    text += `*Type:* ${lead.type}\n`;
    text += `*Name:* ${lead.name}\n`;
    text += `*Phone/WhatsApp:* ${lead.phone}\n`;
    text += `*Project:* ${lead.project || 'General Inquiry'}\n`;
    if (lead.city) text += `*City:* ${lead.city}\n`;
    if (lead.budget) text += `*Budget:* ${lead.budget}\n`;
    if (lead.visitDate) text += `*Preferred Date:* ${lead.visitDate}\n`;
    
    const encodedText = encodeURIComponent(text);
    const shareWhatsAppUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(shareWhatsAppUrl, '_blank');
};
