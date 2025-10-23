document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
        { name: "Burger Solo", price: 65, category: "Best Sellers", desc: "150g", img: "https://pizzarius.es/wp-content/uploads/2023/06/burger-solo-queso.png" },
        { name: "Clubhouse Sandwich", price: 185, category: "Best Sellers", desc: "250g", img: "https://images.slurrp.com/prod/recipe_images/taste/club-sandwich-1619508780_E8D555M6KPWOIWBZD8AA.webp" },
        { name: "Taco Salad", price: 149, category: "Best Sellers", desc: "200g", img: "https://twosleevers.com/wp-content/uploads/2023/03/Taco-Salad-Recipe-1.png" },
        { name: "Egg Drop Sandwich", price: 135, category: "Best Sellers", desc: "180g", img: "https://www.vmcdn.ca/f/files/via/images/food/eggcloud-04-farmer-sando.jpeg;w=960;h=640;bgcolor=000000" },
        { name: "Tuna Sandwich", price: 85, category: "Best Sellers", desc: "160g", img: "https://usercontent1.hubstatic.com/6787296_f520.jpg" },
        { name: "Nachos", price: 129, category: "Best Sellers", desc: "220g", img: "https://www.tostitos.com/sites/tostitos.com/files/Ultimate-Four-Cheese-Nachos-065-d.jpg" },
        { name: "Burger w/ Fries", price: 85, category: "Loaded Combos", desc: "Combo", img: "https://res.cloudinary.com/grubhub-marketing/image/upload/c_scale,w_1200/v1552667338/takeout-burger-fries_transp_shadow_k3znay.png" },
        { name: "Burger w/ Fries & Drinks", price: 100, category: "Loaded Combos", desc: "Combo", img: "https://png.pngtree.com/png-vector/20240623/ourlarge/pngtree-food-burger-fries-drink-png-image_12830273.png" },
        { name: "Tuna Sandwich w/ Drinks", price: 100, category: "Loaded Combos", desc: "Combo", img: "https://i.ytimg.com/vi/Jfk0PPvUBho/maxresdefault.jpg" },
        { name: "Pink Lemonade", price: 50, category: "Drinks", desc: "16oz", img: "https://strengthandsunshine.com/wp-content/uploads/2021/08/Pink-Lemonade-5.jpg" },
        { name: "Lemon Iced Tea", price: 45, category: "Drinks", desc: "16oz", img: "https://veganbell.com/wp-content/uploads/2020/08/Iced-Lemon-Tea-3.jpg" },
        { name: "Raspberry", price: 45, category: "Drinks", desc: "16oz", img: "https://www.eatingwell.com/thmb/E8GNAE6fpM1aGh6ntJVmzEF0-fs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Raspberry-Iced-Tea-414-6307d82d84774875aba5a4c65d504b23.jpg" },
        { name: "Coke", price: 35, category: "Drinks", desc: "12oz Can", img: "https://tse2.mm.bing.net/th/id/OIP._khS_r7f_HBXtSA1agmaaQHaHa?pid=Api&P=0&h=180" },
        { name: "Sprite", price: 35, category: "Drinks", desc: "12oz Can", img: "https://cdn11.bigcommerce.com/s-zj6x66u8ej/images/stencil/1500x1500/products/129/1199/00049000007640_A1N1__06655.1738184844.png?c=1&imbypass=on" },
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