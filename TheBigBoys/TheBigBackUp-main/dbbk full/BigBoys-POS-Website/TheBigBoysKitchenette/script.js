document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
        { name: "Burger Solo", price: 65, category: "Best Sellers", desc: "150g", img: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/490064165_122192569832124912_8739982597018318303_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHRj5_qjf0ossYAVYP7ltJf4RZlhhZpO3vhFmWGFmk7e_6jo_tWQEHK82SmvKS1kcnmAdgXADJvyt3pgPBI8UAw&_nc_ohc=ucAt-xS0-YcQ7kNvwEYjvIr&_nc_oc=AdnWf7tvlpZJnVkrBR9-2FpChMNWpZS0dp3N2EcBmTm8jY_LgxE8SfdEGuBrRm0J8srTjzwar265NJooDGvVDbtG&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=J5u0zfJeDhdvOi-GlJ1Osg&oh=00_Afc02LTviEnrTtxjq8TpJ7-4ZCzvZCGyGZeGE2Rg0Yqo_g&oe=68F530CD" },
        { name: "Clubhouse Sandwich", price: 185, category: "Best Sellers", desc: "250g", img: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/489543281_122192354246124912_75822493082716850_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEWLBOKFjCVssKgMXZk9xlUbN5hZrMKVgJs3mFmswpWAofb6gXqZAOXwFjddqp5qsZ6ELWtXcnGoANnAxoe8iPT&_nc_ohc=9f4aLEpKF4gQ7kNvwFXqo-d&_nc_oc=AdnZ5mc1pIgkYREPfOLEJtMm0rzNTI5an1DdD5lx-Ws8iPrd4KYG0eG13ZuD-cSaGmDE6HXgMxs0bBLM6UMFrn0x&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=TkoeQ-506Gi_RvFz2T8iaQ&oh=00_AffDZk-gPmdY3JL8hV_cBtla_0BTfF0_cJxNGq4MmeGxuw&oe=68F51CCE" },
        { name: "Taco Salad", price: 149, category: "Best Sellers", desc: "200g", img: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/472716620_122179198160124912_4669200429636388912_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQX7wGKF0_sHT2cOeRqJsm5CMK7Sv2pkfkIwrtK_amRxOrJHSLrF09sHisec865KJsUqnro5h90Dj6priUcJ07&_nc_ohc=lalysZ4zwYAQ7kNvwHabgLI&_nc_oc=AdkO3BTfc6urUcFvkmG_sP1pclsZorVcUNmUUvrLQrVUh0FZ99Qb65QmuhFdC3qPxDDmYHuR8u0yiBGNAT157jpU&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=OauxswABKs6mf8G8_ygT4Q&oh=00_Affgc6QtDkDSn0Kz0gmK_WPOt5HAiV65jY9Y9fQP2CQI9Q&oe=68F5151E" },
        { name: "Egg Drop Sandwich", price: 135, category: "Best Sellers", desc: "180g", img: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/472787414_122180212136124912_4131526344959387381_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeESSDPfukU2BF1ieWHs-aey9NNVUI21Opb001VQjbU6lkjddNZ-foZequiYkAStMJ_2noxmIQtAqeY4Azpc7C95&_nc_ohc=jWQAkfOKwmcQ7kNvwH5kRt-&_nc_oc=AdnS9m4RvgKT7eSlzcRSnwXN_pYtWvIdezTDaEb53m1Fhs7P42FgWqDPvxNlMBvnB7NTTSAol9IlRRon-19qmO5R&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=pmuCzQZSCwGqkmpHzaFOrQ&oh=00_Afe1goXf0WqputcrvRUetOqCviOrFagvs_U6Q0Hk_QTb5g&oe=68F526C1" },
        { name: "Tuna Sandwich", price: 85, category: "Best Sellers", desc: "160g", img: "https://usercontent1.hubstatic.com/6787296_f520.jpg" },
        { name: "Nachos", price: 129, category: "Best Sellers", desc: "220g", img: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/480370581_122184837452124912_7117816077822663986_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHZ7LaH26FW5DByOFu0UgxA8Frp53Y3tm_wWunndje2b2_DhR_4LJVQf5fbT-v85V4F2yzv6-QZAQkSDTNf233A&_nc_ohc=71SdLl4frPsQ7kNvwHz4xGt&_nc_oc=AdnQv-E55-PPLQj289BaiJ0Dcbgu5nQWOpdGpg2rzNT8NnB3JytgwC_FDapG_VwSVlmMzN5tfi1WCu5fAt0EMF0m&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=xx6VFx5z5gCckQnal5fWrg&oh=00_AfcNQ6CD36azg8Jx728-fQcVfe7P-3IhaOxfMnPki0bUBw&oe=68F537AD" },
        { name: "Burger w/ Fries", price: 85, category: "Loaded Combos", desc: "Combo", img: "https://scontent.fcgy2-3.fna.fbcdn.net/v/t39.30808-6/473008814_122180204630124912_816959560793868727_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCwE5ta7KZK08Gs0lXrqPZ1d3FWaCLQ_fV3cVZoItD939LkLn0w9KgRMhAs2lpPJbN_YdLIggMH5djrQjK7Z33&_nc_ohc=yeA8gvPI4B0Q7kNvwFNFzBI&_nc_oc=Adnlngru69r9zbyB-yU_7NvH676G2D02LA87UWEyW9cJe00DAJ94lijRHavBw7bNCGy9ehdmJ18kycuJYKlc0eS6&_nc_zt=23&_nc_ht=scontent.fcgy2-3.fna&_nc_gid=e2ZVdBPHvKKN0zUCuxqklg&oh=00_Afd3ThlvyPMyPNK5Qq0qzioH_plJJOANDIk0f1i3gK0EyA&oe=68F51A9B" },
        { name: "Burger w/ Fries & Drinks", price: 100, category: "Loaded Combos", desc: "Combo", img: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/472846409_122179580342124912_1792816383251304267_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2eybzmSXV5QHN7mRthccjYyDw9V8XDAtjIPD1XxcMC1klALLqqOn7OnSXnf9oTmKySA0isZqjCmK4LVLizqbH&_nc_ohc=EnFQhqclUvsQ7kNvwH2i177&_nc_oc=AdnZZJG5eYpXVNffoJaB9ztos4dwBJjAmFq6KvYRHu6shTiRFL_BQvUsJGBYkvTCXU8y0d0lt-m5mLopIVfwg2YF&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=MaqTxfWek1SsKeT7CwENLw&oh=00_AfdTPFHAtRaK89VfB0mbA2DXMhGJk7rXpSPyvCRodxzDeg&oe=68F51DA7" },
        { name: "Tuna Sandwich w/ Drinks", price: 100, category: "Loaded Combos", desc: "Combo", img: "https://i.ytimg.com/vi/Jfk0PPvUBho/maxresdefault.jpg" },
        { name: "Pink Lemonade", price: 50, category: "Drinks", desc: "16oz", img: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/473034787_122180206400124912_3309407940310443556_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHGz8ZSXs36c--9y-gMY7GAfeYdxa6l6kZ95h3FrqXqRrBtjmICAWE1RQOATDmVQNWoUpXCo7UT-r8C5d2CtJv1&_nc_ohc=d73gLv_R4O4Q7kNvwF--MAv&_nc_oc=AdnV3WT3GbZk3CiTyjD5DHmO4DSSkpjnPM-fepPl8IADHsx_4R5ExqHbmQH2OYKgat5sUeqeqiEcNhoiz63toL7e&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=LLoMJgdgdgXifg70WSnaVg&oh=00_AffFAh75FewIGMFJp7T9ddRvhz2_lT1VvGkS4H0q4lysAQ&oe=68F5340A" },
        { name: "Lemon Iced Tea", price: 45, category: "Drinks", desc: "16oz", img: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/473034787_122180206400124912_3309407940310443556_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHGz8ZSXs36c--9y-gMY7GAfeYdxa6l6kZ95h3FrqXqRrBtjmICAWE1RQOATDmVQNWoUpXCo7UT-r8C5d2CtJv1&_nc_ohc=d73gLv_R4O4Q7kNvwF--MAv&_nc_oc=AdnV3WT3GbZk3CiTyjD5DHmO4DSSkpjnPM-fepPl8IADHsx_4R5ExqHbmQH2OYKgat5sUeqeqiEcNhoiz63toL7e&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=LLoMJgdgdgXifg70WSnaVg&oh=00_AffFAh75FewIGMFJp7T9ddRvhz2_lT1VvGkS4H0q4lysAQ&oe=68F5340A" },
        { name: "Raspberry", price: 45, category: "Drinks", desc: "16oz", img: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/473034787_122180206400124912_3309407940310443556_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHGz8ZSXs36c--9y-gMY7GAfeYdxa6l6kZ95h3FrqXqRrBtjmICAWE1RQOATDmVQNWoUpXCo7UT-r8C5d2CtJv1&_nc_ohc=d73gLv_R4O4Q7kNvwF--MAv&_nc_oc=AdnV3WT3GbZk3CiTyjD5DHmO4DSSkpjnPM-fepPl8IADHsx_4R5ExqHbmQH2OYKgat5sUeqeqiEcNhoiz63toL7e&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=LLoMJgdgdgXifg70WSnaVg&oh=00_AffFAh75FewIGMFJp7T9ddRvhz2_lT1VvGkS4H0q4lysAQ&oe=68F5340A" },
        { name: "Coke", price: 35, category: "Drinks", desc: "12oz Can", img: "https://tse2.mm.bing.net/th/id/OIP._khS_r7f_HBXtSA1agmaaQHaHa?pid=Api&P=0&h=180" },
        { name: "Sprite", price: 35, category: "Drinks", desc: "12oz Can", img: "https://i5.walmartimages.com/asr/a680aeec-ced9-4873-89be-2034e6041ac3_1.10412249ed6cb70d37cd74a5150b38cb.jpeg" },
        { name: "Bottled Water", price: 25, category: "Drinks", desc: "500ml", img: "https://tse4.mm.bing.net/th/id/OIP.xCfBoXmQ-jns4zi_nW_-2wHaEw?pid=Api&P=0&h=180" }
    ];

    const menuGrid = document.getElementById('menu-grid');
    const categoriesNav = document.querySelector('.categories');
    const cartItemsList = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const completeSaleBtn = document.getElementById('complete-sale-btn');
    const cashReceivedInput = document.getElementById('cash-received');
    const changeDueEl = document.getElementById('change-due');

    // Receipt Modal Elements
    const receiptModal = document.getElementById('receipt-modal');
    const closeReceiptBtn = document.getElementById('close-receipt-btn');
    const receiptDateEl = document.getElementById('receipt-date');
    const receiptItemsEl = document.getElementById('receipt-items');
    const receiptSubtotalEl = document.getElementById('receipt-subtotal');
    const receiptTotalEl = document.getElementById('receipt-total');
    const receiptCashEl = document.getElementById('receipt-cash');
    const receiptChangeEl = document.getElementById('receipt-change');

    let cart = [];
    let currentTotal = 0;
    let currentSubtotal = 0;

    function createCategoryButtons() {
        const uniqueCategories = ['All Items', ...new Set(menuData.map(item => item.category))];
        categoriesNav.innerHTML = '';

        uniqueCategories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.dataset.category = category;
            button.textContent = category;
            if (category === 'All Items') {
                button.classList.add('active');
            }
            categoriesNav.appendChild(button);
        });

        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(button => {
            button.addEventListener('click', () => {
                categoryBtns.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderMenu(button.dataset.category);
            });
        });
    }

    function createItemElement(item) {
        const itemEl = document.createElement('div');
        itemEl.className = 'item';
        itemEl.dataset.name = item.name;
        itemEl.dataset.price = item.price;
        itemEl.dataset.img = item.img;
        itemEl.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <h4>${item.name}</h4>
                <p class="item-desc">${item.desc}</p>
                <p class="price">&#8369;${item.price.toFixed(2)}</p>
            </div>
        `;
        return itemEl;
    }

    function renderMenu(filter = 'All Items') {
        menuGrid.innerHTML = '';

        if (filter === 'All Items') {
            const allUniqueCategories = [...new Set(menuData.map(item => item.category))];

            allUniqueCategories.forEach(category => {
                const categoryHeader = document.createElement('h2');
                categoryHeader.className = 'menu-section-header';
                categoryHeader.textContent = category;
                menuGrid.appendChild(categoryHeader);

                const categoryItemsContainer = document.createElement('div');
                categoryItemsContainer.className = 'category-items-grid';

                const itemsInPushedCategory = menuData.filter(item => item.category === category);
                itemsInPushedCategory.forEach(item => categoryItemsContainer.appendChild(createItemElement(item)));

                menuGrid.appendChild(categoryItemsContainer);
            });

        } else {
            const categoryItemsContainer = document.createElement('div');
            categoryItemsContainer.className = 'category-items-grid';

            const itemsToDisplay = menuData.filter(item => item.category === filter);
            itemsToDisplay.forEach(item => categoryItemsContainer.appendChild(createItemElement(item)));

            menuGrid.appendChild(categoryItemsContainer);
        }
    }

    function addToCart(name, price, img) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, img, quantity: 1 });
        }
        updateCart();
    }

    function updateQuantity(name, change) {
        const item = cart.find(item => item.name === name);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(cartItem => cartItem.name !== name);
            }
        }
        updateCart();
    }

    function updateCart() {
        renderCartItems();
        updateTotals();
    }

    function renderCartItems() {
        cartItemsList.innerHTML = '';
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p style="text-align:center; color:#A0AEC0; margin-top: 40px; font-size: 16px;">Your order is empty.</p>';
            return;
        }
        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.dataset.name = item.name;
            const itemTotal = item.price * item.quantity;
            li.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-info-group">
                    <div class="cart-item-name-qty">
                        <h4>${item.name}</h4>
                        <span class="cart-item-quantity-text">x${item.quantity}</span>
                    </div>
                    <p class="cart-item-subtotal-price">&#8369;${itemTotal.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase">+</button>
                    </div>
                    <button class="remove-item-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </button>
                </div>
            `;
            cartItemsList.appendChild(li);
        });
    }

    function updateTotals() {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        currentSubtotal = subtotal;
        currentTotal = subtotal;

        subtotalEl.innerHTML = `&#8369;${currentSubtotal.toFixed(2)}`;
        totalEl.innerHTML = `&#8369;${currentTotal.toFixed(2)}`;
        calculateChange(); // Recalculate change whenever totals update
    }

    function calculateChange() {
        const cashReceived = parseFloat(cashReceivedInput.value) || 0;
        const change = cashReceived - currentTotal;
        
        changeDueEl.innerHTML = `&#8369;${Math.max(0, change).toFixed(2)}`;
        // Add a class for negative change if desired
        if (change < 0) {
            changeDueEl.classList.add('negative-change');
        } else {
            changeDueEl.classList.remove('negative-change');
        }
    }

    function resetOrder() {
        cart = [];
        cashReceivedInput.value = '';
        updateCart();
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        const allItemsBtn = document.querySelector('.category-btn[data-category="All Items"]');
        if (allItemsBtn) {
            allItemsBtn.classList.add('active');
        }
        renderMenu('All Items');
        changeDueEl.classList.remove('negative-change'); // Reset negative change class
    }

    function showReceipt(saleData) {
        receiptDateEl.textContent = new Date().toLocaleString();
        
        receiptItemsEl.innerHTML = '';
        saleData.cart.forEach(item => {
            const li = document.createElement('li');
            const itemTotal = (item.price * item.quantity).toFixed(2);
            li.innerHTML = `
                <span class="item-name">${item.quantity}x ${item.name}</span>
                <span class="item-price">&#8369;${itemTotal}</span>
            `;
            receiptItemsEl.appendChild(li);
        });

        receiptSubtotalEl.innerHTML = `&#8369;${saleData.subtotal.toFixed(2)}`;
        receiptTotalEl.innerHTML = `&#8369;${saleData.total.toFixed(2)}`;
        receiptCashEl.innerHTML = `&#8369;${saleData.cash.toFixed(2)}`;
        receiptChangeEl.innerHTML = `&#8369;${saleData.change.toFixed(2)}`;

        receiptModal.classList.remove('hidden');
        receiptModal.style.display = 'flex'; 
    }

    // Event Listeners
    menuGrid.addEventListener('click', e => {
        const itemEl = e.target.closest('.item');
        if (itemEl) {
            const { name, price, img } = itemEl.dataset;
            addToCart(name, parseFloat(price), img);
        }
    });

    cartItemsList.addEventListener('click', e => {
        const itemEl = e.target.closest('.cart-item');
        if (!itemEl) return;
        const name = itemEl.dataset.name;

        if (e.target.classList.contains('increase')) updateQuantity(name, 1);
        if (e.target.classList.contains('decrease')) updateQuantity(name, -1);
        
        // Check if the click was on the trash icon SVG or its path children
        const removeItemBtn = e.target.closest('.remove-item-btn');
        if (removeItemBtn) {
            cart = cart.filter(item => item.name !== name);
            updateCart();
        }
    });

    clearCartBtn.addEventListener('click', resetOrder);
    cashReceivedInput.addEventListener('input', calculateChange);

    completeSaleBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Cannot complete sale. The cart is empty.');
            return;
        }
        const cashReceived = parseFloat(cashReceivedInput.value) || 0;
        if (cashReceived < currentTotal) {
            alert('Not enough cash received to cover the total amount.');
            return;
        }
        const change = cashReceived - currentTotal;
        
        const saleData = {
            cart: [...cart],
            subtotal: currentSubtotal,
            total: currentTotal,
            cash: cashReceived,
            change: change
        };

        showReceipt(saleData);
    });

    closeReceiptBtn.addEventListener('click', () => {
        receiptModal.classList.add('hidden');
        receiptModal.style.display = 'none'; 
        resetOrder();
    });

    // Initial setup
    createCategoryButtons();
    renderMenu();
    updateCart();

    receiptModal.style.display = 'none'; // Ensure receipt is hidden on initial load
});