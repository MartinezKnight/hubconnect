// HubConnect Marketplace Data & Logic

const listings = [
    // TRANSPORT
    { id: 1, title: "Shared Ride: Ikeja to Lekki", business: "RideShare Lagos", category: "transport", mode: "shared-resource", price: 750, slots: "3/4", location: "Lagos", savings: 70, closing: "Today 2pm", href: "opportunity-detail.html" },
    { id: 2, title: "Shared Ride: VI to Yaba", business: "RideShare Lagos", category: "transport", mode: "shared-resource", price: 600, slots: "2/4", location: "Lagos", savings: 68, closing: "Today 4pm", href: "opportunity-detail.html" },
    
    // FOOD
    { id: 3, title: "Bulk Rice 50kg Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 38000, slots: "17/20", location: "Lagos", savings: 65, closing: "Tonight 11pm", href: "opportunity-bulk-buy.html" },
    { id: 4, title: "Bulk Beans 25kg Pool", business: "NorthernGrains", category: "food", mode: "active-pool", price: 14500, slots: "14/20", location: "Kano", savings: 62, closing: "2 days", href: "opportunity-bulk-buy.html" },
    { id: 5, title: "Bulk Garri 50kg Pool", business: "MamaChika Store", category: "food", mode: "active-pool", price: 22000, slots: "18/20", location: "Lagos", savings: 60, closing: "Tomorrow", href: "opportunity-bulk-buy.html" },
    
    // HOUSING
    { id: 6, title: "3BR Co-Living — Lekki Phase 1", business: "CoLive Nigeria", category: "housing", mode: "shared-resource", price: 300000, slots: "1/3", location: "Lagos", savings: 67, closing: "Open", href: "opportunity-shared-housing.html" },
    { id: 7, title: "2BR Co-Living — Wuse II", business: "CoLive Nigeria", category: "housing", mode: "shared-resource", price: 250000, slots: "0/2", location: "Abuja", savings: 50, closing: "Open", href: "opportunity-shared-housing.html" },
    
    // RECYCLING
    { id: 8, title: "PET Bottles 200kg Pool", business: "RecyclePro Nigeria", category: "recycling", mode: "active-pool", price: 220, slots: "178/200kg", location: "Lagos", savings: 83, closing: "3 days", href: "opportunity-recycling.html" },
    { id: 9, title: "Metal Scrap 500kg Pool", business: "RecyclePro Nigeria", category: "recycling", mode: "active-pool", price: 180, slots: "420/500kg", location: "Lagos", savings: 75, closing: "5 days", href: "opportunity-recycling.html" },
    
    // SERVICES
    { id: 10, title: "Shared Plumbing — Ikeja", business: "HomeHelp NG", category: "services", mode: "shared-resource", price: 2000, slots: "1/3", location: "Lagos", savings: 67, closing: "Tomorrow", href: "opportunity-service.html" },
    { id: 11, title: "Shared Electrician — VI", business: "HomeHelp NG", category: "services", mode: "shared-resource", price: 2500, slots: "2/4", location: "Lagos", savings: 60, closing: "2 days", href: "opportunity-service.html" },
    { id: 12, title: "Shared Painting — Lekki", business: "HomeHelp NG", category: "services", mode: "shared-resource", price: 5000, slots: "1/3", location: "Lagos", savings: 70, closing: "3 days", href: "opportunity-service.html" },
    
    // TRAINING
    { id: 13, title: "Software Dev Career Mortgage", business: "TechHub Academy", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Lagos", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    { id: 14, title: "Data Science Career Mortgage", business: "TechHub Academy", category: "training", mode: "instant-booking", price: 0, slots: "Open", location: "Abuja", savings: 100, closing: "Always Open", href: "opportunity-training.html" },
    
    // INVESTMENT
    { id: 15, title: "Lekki Free Zone Property Pool", business: "RealPool NG", category: "investment", mode: "investment-pool", price: 3000000, slots: "45M/60M", location: "Lagos", savings: 0, closing: "45 days", href: "opportunity-investment.html" },
    
    // DELIVERY
    { id: 16, title: "Shared Delivery: Ikeja → Lekki", business: "SwiftDelivery", category: "delivery", mode: "shared-resource", price: 750, slots: "3/4", location: "Lagos", savings: 75, closing: "Today 3pm", href: "opportunity-delivery.html" },
    { id: 17, title: "Shared Delivery: Abuja → Kaduna", business: "SwiftDelivery", category: "delivery", mode: "shared-resource", price: 1200, slots: "2/6", location: "Abuja", savings: 70, closing: "Tomorrow", href: "opportunity-delivery.html" }
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
    
    if (sort === 'savings') filtered.sort((a, b) => b.savings - a.savings);
    if (sort === 'closing') filtered.sort((a, b) => a.closing.localeCompare(b.closing));
    
    grid.innerHTML = filtered.map(item => `
        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 24px; cursor: pointer; transition: all 0.2s;" onclick="window.location.href='${item.href}'">
            <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--green); margin-bottom: 8px;">Listed by ${item.business}</div>
            <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">${item.title}</h3>
            <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                <span style="display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border-radius: 100px; background: rgba(93,190,74,0.12); color: var(--green); border: 1px solid rgba(93,190,74,0.22);">${item.category}</span>
                <span style="display: inline-block; font-size: 10px; padding: 4px 10px; border-radius: 100px; background: rgba(255,255,255,0.05); color: var(--muted);">${item.slots}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <div>
                    <div style="font-size: 11px; color: var(--muted); margin-bottom: 4px;">Your Cost</div>
                    <div style="font-family: 'Syne'; font-size: 24px; font-weight: 800; color: var(--lime);">₦${item.price.toLocaleString()}</div>
                </div>
                ${item.savings > 0 ? `<div style="text-align: right;"><div style="font-size: 11px; color: var(--muted); margin-bottom: 4px;">You Save</div><div style="font-size: 18px; font-weight: 700; color: var(--green);">${item.savings}%</div></div>` : ''}
            </div>
            <div style="font-size: 12px; color: var(--muted); padding-top: 16px; border-top: 1px solid var(--border);">
                📍 ${item.location} • ${item.closing}
            </div>
        </div>
    `).join('');
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--muted);">No listings found. Try adjusting your filters.</div>';
    }
}

function filterCategory(category, btn) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderCards();
}

function filterMode(mode, btn) {
    currentMode = mode;
    document.querySelectorAll('.mode-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
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
