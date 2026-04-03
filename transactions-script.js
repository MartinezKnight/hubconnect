// Transaction Filter Functionality

// Sample transaction data
const allTransactions = [
    {
        id: 'TXN-2024-001',
        title: 'Bulk Rice 50kg',
        business: 'MamaChika Store',
        amount: 38000,
        status: 'completed',
        date: '2024-03-20',
        category: 'food'
    },
    {
        id: 'TXN-2024-002',
        title: 'Shared Ride: Ikeja-Lekki',
        business: 'RideShare Lagos',
        amount: 750,
        status: 'completed',
        date: '2024-03-19',
        category: 'transport'
    },
    {
        id: 'TXN-2024-003',
        title: 'Housing Construction Materials',
        business: 'BuildMart Nigeria',
        amount: 125000,
        status: 'escrow',
        date: '2024-03-18',
        category: 'housing'
    },
    {
        id: 'TXN-2024-004',
        title: 'Bulk Vegetable Oil 5L',
        business: 'FreshGoods Store',
        amount: 12500,
        status: 'escrow',
        date: '2024-03-17',
        category: 'food'
    },
    {
        id: 'TXN-2024-005',
        title: 'Group Courier Service',
        business: 'FastDeliver NG',
        amount: 3200,
        status: 'refunded',
        date: '2024-03-15',
        category: 'services'
    },
    {
        id: 'TXN-2024-006',
        title: 'Bulk Phone Accessories',
        business: 'TechHub Lagos',
        amount: 8900,
        status: 'pending',
        date: '2024-03-14',
        category: 'services'
    }
];

// Filter transactions
function filterTransactions(status) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Get transaction container
    const container = document.getElementById('transactions-list');
    if (!container) return;

    // Filter transactions based on status
    let filteredTransactions = allTransactions;
    if (status !== 'all') {
        filteredTransactions = allTransactions.filter(t => t.status === status);
    }

    // Render filtered transactions
    renderTransactions(filteredTransactions, container);
}

// Render transactions to DOM
function renderTransactions(transactions, container) {
    if (transactions.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 80px 20px;">
                <div style="font-size: 48px; margin-bottom: 16px;">📭</div>
                <h3 style="font-size: 18px; margin-bottom: 8px;">No transactions found</h3>
                <p style="color: var(--muted); font-size: 14px;">No transactions match this filter.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = transactions.map(transaction => {
        const statusClass = `status-${transaction.status}`;
        const statusText = transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1);
        
        return `
            <tr style="cursor: pointer;" onclick="window.location.href='transaction-details.html?id=${transaction.id}'">
                <td>
                    <div style="font-weight: 600;">${transaction.title}</div>
                    <div style="font-size: 13px; color: var(--muted);">${transaction.business}</div>
                </td>
                <td>${transaction.id}</td>
                <td>₦${transaction.amount.toLocaleString()}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td style="color: var(--muted);">${formatDate(transaction.date)}</td>
            </tr>
        `;
    }).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('transactions-list');
    if (container) {
        renderTransactions(allTransactions, container);
    }
});

// Update stats based on filtered transactions
function updateStats(transactions) {
    const totalSpent = transactions
        .filter(t => t.status === 'completed')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalSaved = totalSpent * 0.30; // Assuming 30% average savings
    
    const completedCount = transactions.filter(t => t.status === 'completed').length;
    const escrowCount = transactions.filter(t => t.status === 'escrow').length;

    // Update DOM if elements exist
    const totalSpentEl = document.getElementById('total-spent');
    const totalSavedEl = document.getElementById('total-saved');
    const completedEl = document.getElementById('completed-count');
    const escrowEl = document.getElementById('escrow-count');

    if (totalSpentEl) totalSpentEl.textContent = `₦${totalSpent.toLocaleString()}`;
    if (totalSavedEl) totalSavedEl.textContent = `₦${Math.round(totalSaved).toLocaleString()}`;
    if (completedEl) completedEl.textContent = completedCount;
    if (escrowEl) escrowEl.textContent = escrowCount;
}

// Make functions globally available
window.filterTransactions = filterTransactions;
window.updateStats = updateStats;
