// HubConnect Marketplace - Comprehensive Opportunity Listings
// 120+ REAL opportunities across all categories

const listings = [
    // ═══════════════════════════════════════════════════════════
    // TRANSPORT (20 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 1, title: "Shared Ride: Ikeja → Lekki Phase 1", business: "RideShare Lagos", category: "transport", mode: "shared-resource", price: 1200, slots: "3/4", location: "Lagos", savings: 70, closing: "Today 2:00 PM", href: "opportunity-transport.html" },
    { id: 2, title: "Shared Ride: VI → Yaba", business: "RideShare Lagos", category: "transport", mode: "shared-resource", price: 800, slots: "2/4", location: "Lagos", savings: 68, closing: "Today 4:30 PM", href: "opportunity-transport.html" },
    { id: 3, title: "Shared Ride: Surulere → Ikoyi", business: "RideShare Lagos", category: "transport", mode: "shared-resource", price: 950, slots: "1/4", location: "Lagos", savings: 72, closing: "Today 6:00 PM", href: "opportunity-transport.html" },
    { id: 4, title: "Shared Ride: Ojota → Ajah", business: "RideShare Lagos", category: "transport", mode: "shared-resource", price: 1500, slots: "2/4", location: "Lagos", savings: 75, closing: "Tomorrow 8:00 AM", href: "opportunity-transport.html" },
    { id: 5, title: "Airport Shuttle Pool: Murtala Mohammed", business: "Airport Connect", category: "transport", mode: "active-pool", price: 2000, slots: "5/8", location: "Lagos", savings: 65, closing: "Today 10:00 PM", href: "opportunity-transport.html" },
    { id: 6, title: "Shared Ride: Wuse → Garki", business: "Abuja Movers", category: "transport", mode: "shared-resource", price: 700, slots: "3/4", location: "Abuja", savings: 68, closing: "Today 5:00 PM", href: "opportunity-transport.html" },
    { id: 7, title: "Shared Ride: Kubwa → CBD", business: "Abuja Movers", category: "transport", mode: "shared-resource", price: 900, slots: "2/4", location: "Abuja", savings: 70, closing: "Tomorrow 7:00 AM", href: "opportunity-transport.html" },
    { id: 8, title: "Interstate Travel Pool: Lagos → Ibadan", business: "SafeRide NG", category: "transport", mode: "active-pool", price: 2500, slots: "12/15", location: "Lagos", savings: 60, closing: "Tomorrow 6:00 AM", href: "opportunity-transport.html" },
    { id: 9, title: "Interstate Travel Pool: Abuja → Kaduna", business: "SafeRide NG", category: "transport", mode: "active-pool", price: 3000, slots: "8/15", location: "Abuja", savings: 58, closing: "Tomorrow 5:00 AM", href: "opportunity-transport.html" },
    { id: 10, title: "Interstate Travel Pool: Lagos → Port Harcourt", business: "SafeRide NG", category: "transport", mode: "active-pool", price: 8000, slots: "10/15", location: "Lagos", savings: 55, closing: "2 days", href: "opportunity-transport.html" },
    { id: 11, title: "Shared Ride: Nairobi CBD → Westlands", business: "Nairobi Rides", category: "transport", mode: "shared-resource", price: 150, slots: "3/4", location: "Nairobi", savings: 70, closing: "Today 3:00 PM", href: "opportunity-transport.html" },
    { id: 12, title: "Shared Ride: Karen → CBD", business: "Nairobi Rides", category: "transport", mode: "shared-resource", price: 200, slots: "2/4", location: "Nairobi", savings: 68, closing: "Today 7:00 PM", href: "opportunity-transport.html" },
    { id: 13, title: "Shared Ride: Accra Mall → Osu", business: "Accra Connect", category: "transport", mode: "shared-resource", price: 15, slots: "3/4", location: "Accra", savings: 72, closing: "Today 5:00 PM", href: "opportunity-transport.html" },
    { id: 14, title: "Shared Ride: Tema → Accra Central", business: "Accra Connect", category: "transport", mode: "shared-resource", price: 20, slots: "1/4", location: "Accra", savings: 70, closing: "Tomorrow 8:00 AM", href: "opportunity-transport.html" },
    { id: 15, title: "Weekly Commute Pool: Lekki → VI (Mon-Fri)", business: "CommutePro", category: "transport", mode: "active-pool", price: 15000, slots: "3/4", location: "Lagos", savings: 65, closing: "3 days", href: "opportunity-transport.html" },
    { id: 16, title: "Weekly Commute Pool: Kubwa → Wuse (Mon-Fri)", business: "CommutePro", category: "transport", mode: "active-pool", price: 12000, slots: "2/4", location: "Abuja", savings: 63, closing: "5 days", href: "opportunity-transport.html" },
    { id: 17, title: "Fuel Purchase Pool: 50L Petrol", business: "FuelShare NG", category: "transport", mode: "active-pool", price: 40000, slots: "18/20", location: "Lagos", savings: 12, closing: "Tonight 11:59 PM", href: "opportunity-transport.html" },
    { id: 18, title: "Fuel Purchase Pool: 30L Diesel", business: "FuelShare NG", category: "transport", mode: "active-pool", price: 28000, slots: "14/20", location: "Abuja", savings: 10, closing: "Tomorrow", href: "opportunity-transport.html" },
    { id: 19, title: "Motorcycle Ride Pool: Surulere → Marina", business: "OkadaPool", category: "transport", mode: "shared-resource", price: 500, slots: "1/2", location: "Lagos", savings: 50, closing: "Today 12:00 PM", href: "opportunity-transport.html" },
    { id: 20, title: "Boat Transport Pool: CMS → Ikorodu", business: "WaterWays", category: "transport", mode: "active-pool", price: 800, slots: "22/30", location: "Lagos", savings: 60, closing: "Today 4:00 PM", href: "opportunity-transport.html" },

    // ═══════════════════════════════════════════════════════════
    // FOOD & GROCERIES (30 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 21, title: "Bulk Rice 50kg Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 38000, slots: "17/20", location: "Lagos", savings: 40, closing: "Tonight 11:00 PM", href: "opportunity-food.html" },
    { id: 22, title: "Bulk Rice 25kg Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 20000, slots: "15/20", location: "Lagos", savings: 38, closing: "Tomorrow", href: "opportunity-food.html" },
    { id: 23, title: "Bulk Beans 25kg Pool", business: "NorthernGrains", category: "food", mode: "active-pool", price: 14500, slots: "14/20", location: "Kano", savings: 42, closing: "2 days", href: "opportunity-food.html" },
    { id: 24, title: "Bulk Garri 50kg Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 22000, slots: "18/20", location: "Lagos", savings: 35, closing: "Tomorrow", href: "opportunity-food.html" },
    { id: 25, title: "Bulk Vegetable Oil 25L Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 32000, slots: "16/20", location: "Lagos", savings: 45, closing: "2 days", href: "opportunity-food.html" },
    { id: 26, title: "Bulk Sugar 50kg Pool", business: "SweetHarvest", category: "food", mode: "active-pool", price: 28000, slots: "12/20", location: "Ibadan", savings: 38, closing: "3 days", href: "opportunity-food.html" },
    { id: 27, title: "Bulk Salt 50kg Pool", business: "SaltWorks NG", category: "food", mode: "active-pool", price: 8000, slots: "19/20", location: "Lagos", savings: 40, closing: "Tonight", href: "opportunity-food.html" },
    { id: 28, title: "Bulk Flour 50kg Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 35000, slots: "11/20", location: "Lagos", savings: 42, closing: "4 days", href: "opportunity-food.html" },
    { id: 29, title: "Bulk Tomato Paste 24-Pack Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 12000, slots: "20/20", location: "Lagos", savings: 50, closing: "Filled - Processing", href: "opportunity-food.html" },
    { id: 30, title: "Bulk Spaghetti 20kg Pool", business: "PastaKing", category: "food", mode: "active-pool", price: 18000, slots: "13/20", location: "Lagos", savings: 35, closing: "2 days", href: "opportunity-food.html" },
    { id: 31, title: "Fresh Chicken 100kg Pool", business: "FreshFarms NG", category: "food", mode: "active-pool", price: 180000, slots: "8/10", location: "Lagos", savings: 30, closing: "Tomorrow 6:00 PM", href: "opportunity-food.html" },
    { id: 32, title: "Fresh Fish 50kg Pool", business: "OceanCatch", category: "food", mode: "active-pool", price: 85000, slots: "7/10", location: "Lagos", savings: 28, closing: "Tomorrow 4:00 PM", href: "opportunity-food.html" },
    { id: 33, title: "Frozen Turkey 50kg Pool", business: "FreshFarms NG", category: "food", mode: "active-pool", price: 120000, slots: "6/10", location: "Abuja", savings: 32, closing: "3 days", href: "opportunity-food.html" },
    { id: 34, title: "Bulk Milk Powder 10kg Pool", business: "DairyHub", category: "food", mode: "active-pool", price: 45000, slots: "14/20", location: "Lagos", savings: 38, closing: "2 days", href: "opportunity-food.html" },
    { id: 35, title: "Bulk Cheese 5kg Pool", business: "DairyHub", category: "food", mode: "active-pool", price: 28000, slots: "9/15", location: "Lagos", savings: 35, closing: "4 days", href: "opportunity-food.html" },
    { id: 36, title: "Bulk Eggs 100 Crates Pool", business: "EggSupply NG", category: "food", mode: "active-pool", price: 190000, slots: "18/20", location: "Ibadan", savings: 25, closing: "Tomorrow", href: "opportunity-food.html" },
    { id: 37, title: "Bulk Bread 50 Loaves Pool", business: "BakeryKing", category: "food", mode: "active-pool", price: 15000, slots: "16/20", location: "Lagos", savings: 30, closing: "Tonight 8:00 PM", href: "opportunity-food.html" },
    { id: 38, title: "Bulk Yam Tubers 100kg Pool", business: "FarmDirect", category: "food", mode: "active-pool", price: 35000, slots: "12/15", location: "Enugu", savings: 40, closing: "3 days", href: "opportunity-food.html" },
    { id: 39, title: "Bulk Plantain 100 Fingers Pool", business: "FarmDirect", category: "food", mode: "active-pool", price: 18000, slots: "10/15", location: "Lagos", savings: 35, closing: "2 days", href: "opportunity-food.html" },
    { id: 40, title: "Bulk Onions 50kg Pool", business: "VegetableHub", category: "food", mode: "active-pool", price: 22000, slots: "17/20", location: "Kano", savings: 45, closing: "Tomorrow", href: "opportunity-food.html" },
    { id: 41, title: "Bulk Pepper 20kg Pool", business: "VegetableHub", category: "food", mode: "active-pool", price: 32000, slots: "11/20", location: "Kaduna", savings: 48, closing: "3 days", href: "opportunity-food.html" },
    { id: 42, title: "Bulk Groundnut Oil 25L Pool", business: "OilMills NG", category: "food", mode: "active-pool", price: 38000, slots: "15/20", location: "Kano", savings: 40, closing: "2 days", href: "opportunity-food.html" },
    { id: 43, title: "Bulk Palm Oil 25L Pool", business: "PalmHarvest", category: "food", mode: "active-pool", price: 42000, slots: "13/20", location: "Enugu", savings: 42, closing: "4 days", href: "opportunity-food.html" },
    { id: 44, title: "Bulk Noodles 40-Pack Pool", business: "QuickMeals", category: "food", mode: "active-pool", price: 12000, slots: "19/20", location: "Lagos", savings: 35, closing: "Tomorrow", href: "opportunity-food.html" },
    { id: 45, title: "Bulk Bottled Water 50 Cartons Pool", business: "PureWater NG", category: "food", mode: "active-pool", price: 35000, slots: "16/20", location: "Lagos", savings: 30, closing: "2 days", href: "opportunity-food.html" },
    { id: 46, title: "Bulk Soft Drinks 100 Bottles Pool", business: "BeverageKing", category: "food", mode: "active-pool", price: 28000, slots: "14/20", location: "Lagos", savings: 32, closing: "3 days", href: "opportunity-food.html" },
    { id: 47, title: "Bulk Fruit Juice 50 Packs Pool", business: "FreshJuice NG", category: "food", mode: "active-pool", price: 22000, slots: "12/20", location: "Lagos", savings: 35, closing: "2 days", href: "opportunity-food.html" },
    { id: 48, title: "Bulk Detergent 25kg Pool", business: "CleanHome", category: "food", mode: "active-pool", price: 18000, slots: "17/20", location: "Lagos", savings: 38, closing: "Tomorrow", href: "opportunity-food.html" },
    { id: 49, title: "Bulk Soap Bars 100 Pieces Pool", business: "CleanHome", category: "food", mode: "active-pool", price: 15000, slots: "18/20", location: "Lagos", savings: 40, closing: "Tonight", href: "opportunity-food.html" },
    { id: 50, title: "Monthly Grocery Box Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 85000, slots: "7/10", location: "Lagos", savings: 45, closing: "5 days", href: "opportunity-food.html" },

    // ═══════════════════════════════════════════════════════════
    // HOUSING (15 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 51, title: "3BR Co-Living — Lekki Phase 1", business: "CoLive Nigeria", category: "housing", mode: "shared-resource", price: 300000, slots: "1/3", location: "Lagos", savings: 67, closing: "Open", href: "opportunity-housing.html" },
    { id: 52, title: "3BR Co-Living — Ikeja GRA", business: "CoLive Nigeria", category: "housing", mode: "shared-resource", price: 280000, slots: "2/3", location: "Lagos", savings: 65, closing: "Open", href: "opportunity-housing.html" },
    { id: 53, title: "2BR Co-Living — Wuse II", business: "CoLive Nigeria", category: "housing", mode: "shared-resource", price: 250000, slots: "0/2", location: "Abuja", savings: 50, closing: "Open", href: "opportunity-housing.html" },
    { id: 54, title: "2BR Co-Living — Yaba", business: "SharedSpace NG", category: "housing", mode: "shared-resource", price: 220000, slots: "1/2", location: "Lagos", savings: 50, closing: "Open", href: "opportunity-housing.html" },
    { id: 55, title: "4BR Co-Living — VI", business: "CoLive Nigeria", category: "housing", mode: "shared-resource", price: 350000, slots: "2/4", location: "Lagos", savings: 75, closing: "Open", href: "opportunity-housing.html" },
    { id: 56, title: "Student Housing Pool — Unilag", business: "CampusLiving", category: "housing", mode: "active-pool", price: 120000, slots: "3/4", location: "Lagos", savings: 60, closing: "Open", href: "opportunity-housing.html" },
    { id: 57, title: "Student Housing Pool — UI Ibadan", business: "CampusLiving", category: "housing", mode: "active-pool", price: 100000, slots: "2/4", location: "Ibadan", savings: 58, closing: "Open", href: "opportunity-housing.html" },
    { id: 58, title: "Short-term Rental Pool — Airbnb Lekki", business: "StayShare", category: "housing", mode: "shared-resource", price: 80000, slots: "1/3", location: "Lagos", savings: 67, closing: "5 days", href: "opportunity-housing.html" },
    { id: 59, title: "Short-term Rental Pool — Airbnb Asokoro", business: "StayShare", category: "housing", mode: "shared-resource", price: 90000, slots: "2/3", location: "Abuja", savings: 67, closing: "7 days", href: "opportunity-housing.html" },
    { id: 60, title: "Hostel Room Pool — Surulere", business: "HostelHub", category: "housing", mode: "active-pool", price: 60000, slots: "5/6", location: "Lagos", savings: 50, closing: "Open", href: "opportunity-housing.html" },
    { id: 61, title: "Office Space Co-Working — Yaba", business: "WorkHub NG", category: "housing", mode: "shared-resource", price: 50000, slots: "8/10", location: "Lagos", savings: 70, closing: "Open", href: "opportunity-housing.html" },
    { id: 62, title: "Office Space Co-Working — Wuse", business: "WorkHub NG", category: "housing", mode: "shared-resource", price: 55000, slots: "6/10", location: "Abuja", savings: 68, closing: "Open", href: "opportunity-housing.html" },
    { id: 63, title: "Warehouse Space Pool — Apapa", business: "StorageShare", category: "housing", mode: "active-pool", price: 150000, slots: "3/5", location: "Lagos", savings: 60, closing: "Open", href: "opportunity-housing.html" },
    { id: 64, title: "Event Venue Pool — Lekki (1 Day)", business: "VenueShare", category: "housing", mode: "shared-resource", price: 80000, slots: "2/4", location: "Lagos", savings: 75, closing: "15 days", href: "opportunity-housing.html" },
    { id: 65, title: "Land Purchase Pool — Epe (500sqm plots)", business: "LandPool NG", category: "housing", mode: "investment-pool", price: 2000000, slots: "8M/20M", location: "Lagos", savings: 0, closing: "60 days", href: "opportunity-housing.html" },

    // ═══════════════════════════════════════════════════════════
    // RECYCLING (10 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 66, title: "PET Bottles 200kg Pool", business: "RecyclePro Nigeria", category: "recycling", mode: "active-pool", price: 220, slots: "178kg/200kg", location: "Lagos", savings: 83, closing: "3 days", href: "opportunity-recycling.html" },
    { id: 67, title: "PET Bottles 100kg Pool", business: "RecyclePro Nigeria", category: "recycling", mode: "active-pool", price: 110, slots: "85kg/100kg", location: "Abuja", savings: 80, closing: "5 days", href: "opportunity-recycling.html" },
    { id: 68, title: "Metal Scrap 500kg Pool", business: "RecyclePro Nigeria", category: "recycling", mode: "active-pool", price: 180, slots: "420kg/500kg", location: "Lagos", savings: 75, closing: "5 days", href: "opportunity-recycling.html" },
    { id: 69, title: "Aluminum Cans 100kg Pool", business: "MetalRecycle NG", category: "recycling", mode: "active-pool", price: 250, slots: "78kg/100kg", location: "Lagos", savings: 85, closing: "4 days", href: "opportunity-recycling.html" },
    { id: 70, title: "Cardboard 300kg Pool", business: "PaperCycle", category: "recycling", mode: "active-pool", price: 90, slots: "245kg/300kg", location: "Lagos", savings: 70, closing: "6 days", href: "opportunity-recycling.html" },
    { id: 71, title: "Newspapers 200kg Pool", business: "PaperCycle", category: "recycling", mode: "active-pool", price: 60, slots: "156kg/200kg", location: "Ibadan", savings: 72, closing: "7 days", href: "opportunity-recycling.html" },
    { id: 72, title: "Glass Bottles 150kg Pool", business: "GlassRecycle NG", category: "recycling", mode: "active-pool", price: 45, slots: "112kg/150kg", location: "Lagos", savings: 68, closing: "5 days", href: "opportunity-recycling.html" },
    { id: 73, title: "Plastic Bags 100kg Pool", business: "RecyclePro Nigeria", category: "recycling", mode: "active-pool", price: 80, slots: "67kg/100kg", location: "Lagos", savings: 75, closing: "8 days", href: "opportunity-recycling.html" },
    { id: 74, title: "E-Waste 50kg Pool (Phones, Chargers)", business: "TechRecycle", category: "recycling", mode: "active-pool", price: 500, slots: "38kg/50kg", location: "Lagos", savings: 90, closing: "10 days", href: "opportunity-recycling.html" },
    { id: 75, title: "Used Cooking Oil 100L Pool", business: "BioFuel NG", category: "recycling", mode: "active-pool", price: 150, slots: "72L/100L", location: "Lagos", savings: 80, closing: "5 days", href: "opportunity-recycling.html" },

    // ═══════════════════════════════════════════════════════════
    // HOME SERVICES (15 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 76, title: "Shared Plumbing — Ikeja Estate", business: "HomeHelp NG", category: "services", mode: "shared-resource", price: 2000, slots: "1/3", location: "Lagos", savings: 67, closing: "Tomorrow", href: "opportunity-services.html" },
    { id: 77, title: "Shared Plumbing — Lekki Phase 1", business: "HomeHelp NG", category: "services", mode: "shared-resource", price: 2200, slots: "2/3", location: "Lagos", savings: 65, closing: "2 days", href: "opportunity-services.html" },
    { id: 78, title: "Shared Electrician — VI", business: "HomeHelp NG", category: "services", mode: "shared-resource", price: 2500, slots: "2/4", location: "Lagos", savings: 60, closing: "2 days", href: "opportunity-services.html" },
    { id: 79, title: "Shared Electrician — Yaba", business: "PowerFix NG", category: "services", mode: "shared-resource", price: 2000, slots: "1/3", location: "Lagos", savings: 67, closing: "Tomorrow", href: "opportunity-services.html" },
    { id: 80, title: "Shared Painting — Lekki (3BR)", business: "HomeHelp NG", category: "services", mode: "shared-resource", price: 5000, slots: "1/3", location: "Lagos", savings: 70, closing: "3 days", href: "opportunity-services.html" },
    { id: 81, title: "Shared Painting — Surulere (2BR)", business: "PaintPro", category: "services", mode: "shared-resource", price: 3500, slots: "2/3", location: "Lagos", savings: 67, closing: "4 days", href: "opportunity-services.html" },
    { id: 82, title: "Shared Cleaning — Estate (Weekly)", business: "CleanTeam NG", category: "services", mode: "active-pool", price: 8000, slots: "6/8", location: "Lagos", savings: 50, closing: "Open", href: "opportunity-services.html" },
    { id: 83, title: "Shared Fumigation — 3BR Apartment", business: "PestControl NG", category: "services", mode: "shared-resource", price: 4000, slots: "1/3", location: "Lagos", savings: 67, closing: "5 days", href: "opportunity-services.html" },
    { id: 84, title: "Shared AC Servicing — Lekki", business: "CoolFix NG", category: "services", mode: "shared-resource", price: 3000, slots: "3/4", location: "Lagos", savings: 60, closing: "3 days", href: "opportunity-services.html" },
    { id: 85, title: "Shared Generator Servicing", business: "PowerCare NG", category: "services", mode: "shared-resource", price: 4500, slots: "2/4", location: "Lagos", savings: 55, closing: "2 days", href: "opportunity-services.html" },
    { id: 86, title: "Shared Carpentry — Kitchen Cabinets", business: "WoodWorks NG", category: "services", mode: "shared-resource", price: 8000, slots: "1/3", location: "Lagos", savings: 70, closing: "7 days", href: "opportunity-services.html" },
    { id: 87, title: "Shared Tiling — Bathroom Renovation", business: "TileMaster", category: "services", mode: "shared-resource", price: 12000, slots: "2/3", location: "Lagos", savings: 67, closing: "10 days", href: "opportunity-services.html" },
    { id: 88, title: "Shared Roofing Repair — Leak Fix", business: "RoofCare NG", category: "services", mode: "shared-resource", price: 6000, slots: "1/4", location: "Lagos", savings: 75, closing: "5 days", href: "opportunity-services.html" },
    { id: 89, title: "Shared Landscaping — Lawn Care", business: "GreenSpaces", category: "services", mode: "active-pool", price: 5000, slots: "4/5", location: "Lagos", savings: 60, closing: "Open", href: "opportunity-services.html" },
    { id: 90, title: "Shared Security Service — Estate (Monthly)", business: "SafeGuard NG", category: "services", mode: "active-pool", price: 15000, slots: "12/15", location: "Lagos", savings: 40, closing: "Open", href: "opportunity-services.html" },

    // ═══════════════════════════════════════════════════════════
    // TRAINING (10 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 91, title: "Software Development Career Mortgage", business: "TechHub Academy", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 92, title: "Data Science Career Mortgage", business: "TechHub Academy", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Abuja", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 93, title: "UI/UX Design Career Mortgage", business: "DesignHub Africa", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 94, title: "Digital Marketing Career Mortgage", business: "Marketing Academy", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 95, title: "Cybersecurity Career Mortgage", business: "TechHub Academy", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Abuja", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 96, title: "Cloud Computing (AWS) Career Mortgage", business: "CloudAcademy NG", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 97, title: "Mobile App Development Career Mortgage", business: "TechHub Academy", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 98, title: "Business Analysis Career Mortgage", business: "BizSkills NG", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Abuja", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 99, title: "Project Management (PMP) Career Mortgage", business: "PMI Nigeria", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 100, title: "Graphic Design Career Mortgage", business: "DesignHub Africa", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },

    // ═══════════════════════════════════════════════════════════
    // INVESTMENT (10 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 101, title: "Lekki Free Zone Property Investment Pool", business: "RealPool NG", category: "investment", mode: "investment-pool", price: 3000000, slots: "45M/60M", location: "Lagos", savings: 0, closing: "45 days", href: "opportunity-investment.html" },
    { id: 102, title: "Ibeju-Lekki Land Investment Pool (1000sqm)", business: "LandInvest NG", category: "investment", mode: "investment-pool", price: 5000000, slots: "38M/50M", location: "Lagos", savings: 0, closing: "60 days", href: "opportunity-investment.html" },
    { id: 103, title: "Abuja Real Estate Development Pool", business: "CapitalProperties", category: "investment", mode: "investment-pool", price: 10000000, slots: "120M/200M", location: "Abuja", savings: 0, closing: "90 days", href: "opportunity-investment.html" },
    { id: 104, title: "Commercial Plaza Investment — VI", business: "RealPool NG", category: "investment", mode: "investment-pool", price: 8000000, slots: "75M/100M", location: "Lagos", savings: 0, closing: "75 days", href: "opportunity-investment.html" },
    { id: 105, title: "Agricultural Investment Pool — Rice Farm", business: "AgriInvest NG", category: "investment", mode: "investment-pool", price: 500000, slots: "12M/20M", location: "Kebbi", savings: 0, closing: "30 days", href: "opportunity-investment.html" },
    { id: 106, title: "Agricultural Investment Pool — Fish Farm", business: "AgriInvest NG", category: "investment", mode: "investment-pool", price: 300000, slots: "8M/15M", location: "Ogun", savings: 0, closing: "30 days", href: "opportunity-investment.html" },
    { id: 107, title: "Tech Startup Investment Pool — Fintech", business: "VentureHub Africa", category: "investment", mode: "investment-pool", price: 1000000, slots: "25M/50M", location: "Lagos", savings: 0, closing: "60 days", href: "opportunity-investment.html" },
    { id: 108, title: "Solar Energy Project Investment Pool", business: "GreenEnergy NG", category: "investment", mode: "investment-pool", price: 2000000, slots: "48M/80M", location: "Lagos", savings: 0, closing: "90 days", href: "opportunity-investment.html" },
    { id: 109, title: "Transport Fleet Investment Pool (10 Buses)", business: "FleetInvest", category: "investment", mode: "investment-pool", price: 4000000, slots: "32M/50M", location: "Lagos", savings: 0, closing: "45 days", href: "opportunity-investment.html" },
    { id: 110, title: "Hospitality Investment Pool — 20-Room Hotel", business: "HotelInvest NG", category: "investment", mode: "investment-pool", price: 15000000, slots: "180M/300M", location: "Abuja", savings: 0, closing: "120 days", href: "opportunity-investment.html" },

    // ═══════════════════════════════════════════════════════════
    // DELIVERY (10 listings)
    // ═══════════════════════════════════════════════════════════
    { id: 111, title: "Shared Delivery: Ikeja → Lekki (Same Day)", business: "SwiftDelivery", category: "delivery", mode: "shared-resource", price: 750, slots: "3/4", location: "Lagos", savings: 75, closing: "Today 3:00 PM", href: "opportunity-delivery.html" },
    { id: 112, title: "Shared Delivery: Surulere → Ikoyi", business: "SwiftDelivery", category: "delivery", mode: "shared-resource", price: 600, slots: "2/4", location: "Lagos", savings: 72, closing: "Today 5:00 PM", href: "opportunity-delivery.html" },
    { id: 113, title: "Shared Delivery: Yaba → VI", business: "QuickCourier NG", category: "delivery", mode: "shared-resource", price: 500, slots: "3/4", location: "Lagos", savings: 70, closing: "Today 6:00 PM", href: "opportunity-delivery.html" },
    { id: 114, title: "Shared Delivery: Abuja → Kaduna", business: "SwiftDelivery", category: "delivery", mode: "shared-resource", price: 1200, slots: "2/6", location: "Abuja", savings: 70, closing: "Tomorrow", href: "opportunity-delivery.html" },
    { id: 115, title: "Shared Delivery: Lagos → Ibadan", business: "InterStateLogistics", category: "delivery", mode: "shared-resource", price: 1500, slots: "4/6", location: "Lagos", savings: 68, closing: "Tomorrow 8:00 AM", href: "opportunity-delivery.html" },
    { id: 116, title: "Bulk Shipment Pool: China → Lagos (Container)", business: "GlobalShip NG", category: "delivery", mode: "active-pool", price: 450000, slots: "18cbm/40cbm", location: "Lagos", savings: 65, closing: "30 days", href: "opportunity-delivery.html" },
    { id: 117, title: "Shared Moving Service — 3BR Apartment", business: "MoversNG", category: "delivery", mode: "shared-resource", price: 15000, slots: "1/3", location: "Lagos", savings: 70, closing: "5 days", href: "opportunity-delivery.html" },
    { id: 118, title: "Shared Freight: Port → Warehouse (20ft)", business: "PortLogistics", category: "delivery", mode: "shared-resource", price: 35000, slots: "2/4", location: "Lagos", savings: 60, closing: "3 days", href: "opportunity-delivery.html" },
    { id: 119, title: "E-commerce Delivery Pool — Jumia Orders", business: "LastMile NG", category: "delivery", mode: "active-pool", price: 400, slots: "18/25", location: "Lagos", savings: 55, closing: "Tomorrow", href: "opportunity-delivery.html" },
    { id: 120, title: "Document Courier Pool — Business District", business: "DocuExpress", category: "delivery", mode: "active-pool", price: 300, slots: "12/15", location: "Lagos", savings: 60, closing: "Today 4:00 PM", href: "opportunity-delivery.html" }
];

let currentCategory = 'all';
let currentMode = 'all';
let currentLocation = localStorage.getItem('userLocation') || 'Lagos';

function renderCards() {
    const grid = document.getElementById('listings-grid');
    const search = document.getElementById('search').value.toLowerCase();
    const sort = document.getElementById('sort').value;
    
    let filtered = listings.filter(item => {
        const matchCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchMode = currentMode === 'all' || item.mode === currentMode;
        const matchLocation = item.location === currentLocation || currentLocation === 'All';
        const matchSearch = search === '' || 
            item.title.toLowerCase().includes(search) || 
            item.business.toLowerCase().includes(search);
        
        return matchCategory && matchMode && matchLocation && matchSearch;
    });
    
    // Sorting
    if (sort === 'savings') {
        filtered.sort((a, b) => b.savings - a.savings);
    } else if (sort === 'closing') {
        filtered.sort((a, b) => {
            const order = { 'Tonight': 1, 'Today': 2, 'Tomorrow': 3, 'Open': 999, 'Always Open': 1000 };
            const aVal = order[a.closing.split(' ')[0]] || 50;
            const bVal = order[b.closing.split(' ')[0]] || 50;
            return aVal - bVal;
        });
    } else if (sort === 'slots') {
        filtered.sort((a, b) => {
            const aSlots = a.slots.includes('/') ? parseInt(a.slots.split('/')[0]) : 999;
            const bSlots = b.slots.includes('/') ? parseInt(b.slots.split('/')[0]) : 999;
            return aSlots - bSlots;
        });
    }
    
    // Render cards
    grid.innerHTML = filtered.map(item => `
        <a href="${item.href}" class="listing-card animate-scale" data-category="${item.category}">
            <div class="listing-header">
                <div>
                    <div class="listing-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
                    <h3 class="listing-title">${item.title}</h3>
                    <div class="listing-business">${item.business}</div>
                </div>
                ${item.savings > 0 ? `<div class="listing-badge">Save ${item.savings}%</div>` : ''}
            </div>
            <div class="listing-details">
                <div class="listing-price">₦${item.price.toLocaleString()}${item.mode === 'active-pool' ? '/slot' : item.mode === 'investment-pool' ? ' min' : ''}</div>
                <div class="listing-slots">${item.slots}</div>
            </div>
            <div class="listing-footer">
                <div class="listing-location">📍 ${item.location}</div>
                <div class="listing-closing">⏰ ${item.closing}</div>
            </div>
        </a>
    `).join('');

    // Trigger animations for new cards
    setTimeout(() => {
        document.querySelectorAll('.listing-card').forEach(card => {
            card.classList.add('animate-in');
        });
    }, 50);
}

function filterCategory(category, btn) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn:not(.mode-filter-btn)').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
}

function filterMode(mode, btn) {
    currentMode = mode;
    document.querySelectorAll('.mode-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
}

function updateLocation() {
    currentLocation = document.getElementById('location').value;
    localStorage.setItem('userLocation', currentLocation);
    renderCards();
}

function searchListings() {
    renderCards();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('location').value = currentLocation;
    renderCards();
});
