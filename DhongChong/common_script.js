// ১. তোমার মাস্টার প্রোডাক্ট ডাটাবেস


// single product dekhano
function loadSingleProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = allProducts.find(p => String(p.id) === String(productId));

    if (product) {
        let discountPercent = product.discount || 0;
        let finalPrice = discountPercent > 0 ? product.price - (product.price * discountPercent / 100) : product.price;

        // --- স্টক আউট লজিক শুরু ---
        const isOutOfStock = product.stock === false;
        // --- স্টক আউট লজিক শেষ ---

        document.getElementById('MainImg').src = product.image;
        document.getElementById('pro-name').innerText = product.name;
        document.getElementById('pro-cat').innerText = product.category;

        // ইমেজে স্টক আউট ইফেক্ট (ঐচ্ছিক)
        if (isOutOfStock) {
            document.getElementById('MainImg').style.filter = "grayscale(1)";
            document.getElementById('MainImg').style.opacity = "0.7";
        }

        const descElem = document.getElementById('pro-desc');
        if (descElem) {
            descElem.innerText = product.description || "আমাদের এই প্রোডাক্টটি প্রিমিয়াম কোয়ালিটি ম্যাটেরিয়াল দিয়ে তৈরি। এটি টেকসই এবং ফ্যাশনেবল।";
        }
        
        const priceElem = document.getElementById('pro-price');
        if(discountPercent > 0) {
            priceElem.innerHTML = `৳${finalPrice.toLocaleString()} <span style="text-decoration: line-through; color: #999; font-size: 18px; margin-left: 10px;">৳${product.price.toLocaleString()}</span>`;
        } else {
            priceElem.innerText = "৳ " + product.price.toLocaleString();
        }

        // বাটন এবং ইনপুট ফিল্ড হ্যান্ডেল করা
        const addToCartBtn = document.querySelector('#prodetails button'); 
        const qtyInput = document.querySelector('#prodetails input[type="number"]');

        if (isOutOfStock) {
            if (addToCartBtn) {
                addToCartBtn.innerText = "Out of Stock";
                addToCartBtn.style.background = "#ccc";
                addToCartBtn.style.cursor = "not-allowed";
                addToCartBtn.disabled = true;
            }
            if (qtyInput) {
                qtyInput.disabled = true;
            }
        }

        const smallImgGroup = document.querySelector('.small-img-group');
        if (smallImgGroup) {
            smallImgGroup.innerHTML = ""; 
            let allGalleryImages = [product.image];
            if (product.images && product.images.length > 0) {
                allGalleryImages = [...allGalleryImages, ...product.images];
            }

            allGalleryImages.forEach(imgSrc => {
                const imgCol = document.createElement('div');
                imgCol.className = 'small-img-col';
                imgCol.innerHTML = `<img src="${imgSrc}" width="100%" class="small-img" alt="">`;
                imgCol.onclick = function() {
                    document.getElementById('MainImg').src = imgSrc;
                    document.getElementById('img-zoom-container').classList.remove('is-zoomed');
                };
                smallImgGroup.appendChild(imgCol);
            });
        }

        window.currentProduct = { ...product, finalPrice: finalPrice };
        displayRelatedProducts(product.category, product.id);
        
        enableZoom();
    }
}

function viewProduct(id) {
    // শুধু আইডি-টা নিয়ে sproduct পেজে পাঠিয়ে দেওয়া
    window.location.href = `sproduct.html?id=${id}`;
}

// *** ২. এই ফাংশনটি loadSingleProduct এর বাইরে রাখাই ভালো ***
function enableZoom() {
    const container = document.getElementById('img-zoom-container');
    const img = document.getElementById('MainImg');

    if (!container || !img) return;

    // ডেস্কটপ জুম
    container.addEventListener('mousemove', (e) => {
        // মাউস পজিশন নিখুঁতভাবে পাওয়ার জন্য boundingClientRect ব্যবহার করা ভালো
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2)";
    });

    container.addEventListener('mouseleave', () => {
        img.style.transformOrigin = "center";
        img.style.transform = "scale(1)";
    });

    // মোবাইল/ট্যাব জুম
    container.addEventListener('click', () => {
        container.classList.toggle('is-zoomed');
    });
}

// ২. এইচটিএমএল এ প্রোডাক্ট দেখানোর মেইন ফাংশন
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // ১. তোমার সেই ইম্পর্টেন্ট স্মার্ট পাথ লজিক (ঠিক রাখা হয়েছে)
    const isCategoryPage = window.location.pathname.includes('/categories/');
    const pathPrefix = isCategoryPage ? "../" : "";

    container.innerHTML = ""; 

    // ২. ডিসকাউন্ট এবং ডিজাইন লজিক (একদম আগের মতো রাখা হয়েছে)
    products.forEach(product => {
        let discountPercent = product.discount || 0;
        let originalPrice = product.price;
        let finalPrice = originalPrice;

        if (discountPercent > 0) {
            finalPrice = originalPrice - (originalPrice * discountPercent / 100);
        }

        // তোমার কাঙ্ক্ষিত সেই ১ লাইন:
        const isOutOfStock = product.stock === false; 

        const productCard = `
            <div class="pro reveal"> 
                ${isOutOfStock ? `<div class="stock-badge">Stock Out</div>` : (discountPercent > 0 ? `<div class="discount-tag">-${discountPercent}%</div>` : "")}
                
                <div class="img-container">
                    <img src="${pathPrefix}${product.image}" alt="${product.name}" style="${isOutOfStock ? 'filter: grayscale(1); opacity: 0.6;' : ''}">
                    
                    <div class="quick-view-overlay" onclick="openQuickView(${product.id})">
                        <i class="fas fa-eye"></i> Quick View
                    </div>
                </div>

                <div class="des" onclick="window.location.href='${pathPrefix}sproduct.html?id=${product.id}'" style="cursor: pointer;">
                    <span>${product.category}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        ${'<i class="fas fa-star"></i>'.repeat(product.stars || 5)}
                    </div>
                    <h4>
                        ৳${finalPrice.toLocaleString()} 
                        ${discountPercent > 0 && !isOutOfStock ? `<span class="old-price">৳${originalPrice.toLocaleString()}</span>` : ""}
                    </h4>
                </div>

                <a href="javascript:void(0)" class="cart-anchor" 
                   onclick="${isOutOfStock ? '' : `event.stopPropagation(); addToCart(${product.id}, 1)`}" 
                   style="${isOutOfStock ? 'cursor: not-allowed;' : ''}">
                    <div class="cart-wrapper">
                        <i class="${isOutOfStock ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-bag-shopping'} cart" 
                           style="${isOutOfStock ? 'color: #ff4d4d; background: #ffe6e6;' : ''}"></i>
                        <span class="tooltiptext">${isOutOfStock ? 'Out of Stock' : 'Add to Cart'}</span>
                    </div>
                </a>
            </div>
        `;
        container.innerHTML += productCard;
    });

    // ৩. এনিমেশন ট্রিগার করার জন্য ফাংশন কল
    setTimeout(() => {
        if (typeof reveal === "function") reveal();
    }, 200);
}


// ৩. শপ পেজের জন্য সব প্রোডাক্ট লোড করা
function loadShopProducts() {
    displayProducts(allProducts, 'shop-container');
}

// ৪. ক্যাটাগরি পেজের জন্য ফিল্টার করে লোড করা
function loadCategoryProducts(categoryName) {
    // ডাটাবেস থেকে শুধু ক্যাটাগরি ফিল্টার করো
    const filtered = allProducts.filter(p => p.category === categoryName);
    // সরাসরি ফিল্টার করা ডাটা পাঠিয়ে দাও
    displayProducts(filtered, 'category-container');
}
function filterCategory(category, btn) {
    // ১. বাটনের এক্টিভ ক্লাস ম্যানেজ করা
    let buttons = document.getElementsByClassName('f-btn');
    for (let b of buttons) { 
        b.classList.remove('active'); 
    }
    btn.classList.add('active');

    // ২. প্যাগিনেশন এবং কন্টেইনার ধরা
    let pagination = document.getElementById('pagination');
    let containerId = 'shop-container'; // তোমার শপ পেজের মেইন কন্টেইনার আইডি

    if (category === 'all') {
        // ৩. 'All' হলে প্যাগিনেশন দেখাবে এবং প্রথম পেজ লোড হবে
        if (pagination) pagination.style.display = "flex";
        currentPage = 1; 
        loadShopProducts(); 
    } else {
        // ৪. নির্দিষ্ট ক্যাটাগরি হলে প্যাগিনেশন হাইড হবে
        if (pagination) pagination.style.display = "none";
        
        // ৫. মেইন 'allProducts' অ্যারে থেকে ক্যাটাগরি অনুযায়ী ডাটা ফিল্টার করা
        const filtered = allProducts.filter(item => item.category === category);
        
        // ৬. ফিল্টার করা ডাটাগুলো স্ক্রিনে দেখানো
        displayProducts(filtered, containerId); 
    }
    
    // পেজের উপরে স্ক্রল করবে
    window.scrollTo(0, 0);
}

function displayRelatedProducts(category, currentId) {
    const relatedContainer = document.getElementById('related-pro-container');
    if (!relatedContainer) return;

    // ১. একই ক্যাটাগরির প্রোডাক্ট ফিল্টার করা (সর্বোচ্চ ৪টি)
    const sameCategoryItems = allProducts
        .filter(p => p.category === category && p.id !== currentId)
        .slice(0, 4);

    // ২. অন্য ক্যাটাগরি থেকে র‍্যান্ডম ৪টি প্রোডাক্ট নেওয়া
    const otherCategoryItems = allProducts.filter(p => p.category !== category);
    const randomItems = otherCategoryItems
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    // ৩. দুই লিস্টকে একসাথে করা
    const finalDisplayList = [...sameCategoryItems, ...randomItems];

    // ৪. *** জাদুকরী সমাধান ***
    // ম্যানুয়ালি লুপ না চালিয়ে সরাসরি তোমার মেইন ফাংশনটি কল করো
    displayProducts(finalDisplayList, 'related-pro-container');
}

// ইউজার যখনই এই পেজে ফিরে আসবে, তখন অটোমেটিক কার্ট আপডেট হবে
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const progressFill = document.getElementById('progress-fill');
    const loadPercentage = document.getElementById('load-percentage');

    // ১. লোডার লজিক
    if (preloader) {
        let width = 0;
        const loadingInterval = setInterval(() => {
            if (width >= 95) {
                clearInterval(loadingInterval);
            } else {
                width += Math.floor(Math.random() * 10) + 1;
                if (width > 95) width = 95;
                updateLoader(width);
            }
        }, 100);

        setTimeout(() => {
            clearInterval(loadingInterval);
            updateLoader(100);

            setTimeout(() => {
                preloader.classList.add('loader-fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // লোডার চলে যাওয়ার পর এনিমেশন চেক করবে
                    if (typeof reveal === "function") reveal(); 
                }, 500);
            }, 200);
        }, 300);
    }

    function updateLoader(value) {
        if (progressFill) progressFill.style.width = value + '%';
        if (loadPercentage) loadPercentage.innerHTML = value;
    }

    // ২. কার্ট এবং প্রোডাক্ট লোড ফাংশন
    updateCartCount();
    
    if (document.getElementById('featured-products-grid')) loadFeaturedProducts();
    if (document.getElementById('shop-container')) loadShopProducts();
    if (document.getElementById('MainImg')) loadSingleProduct();
    if (document.getElementById('cart-items-body')) displayCartItems();
    if (document.getElementById('best-products-grid')) loadBestProducts();
    
    if (document.getElementById('container-30')) displayOfferProducts(30, "container-30");
    if (document.getElementById('container-20')) displayOfferProducts(20, "container-20");
    if (document.getElementById('container-10')) displayOfferProducts(10, "container-10");
    if (document.getElementById('recent-view-grid')) loadRecentlyViewed();

    // ৩. জাদুকরী কুপন রিকভারি (Reload করলেও ডিসকাউন্ট থাকবে)
    const savedDiscount = localStorage.getItem('savedDiscount');
    const savedCode = localStorage.getItem('savedCouponCode');

    if (savedDiscount) {
        // গ্লোবাল ভ্যারিয়েবলটি মেমোরি থেকে আপডেট করা
        window.currentDiscountPercent = parseFloat(savedDiscount);
        
        // কুপন ইনপুট বক্স এবং মেসেজ আপডেট করা
        const couponInput = document.getElementById('coupon-input');
        const couponMessage = document.getElementById('coupon-message');
        
        if (couponInput) couponInput.value = savedCode;
        if (couponMessage) {
            couponMessage.innerText = `কুপন (${savedCode}) অ্যাপ্লাই করা আছে।`;
            couponMessage.style.color = "green";
        }
    }

    // ৪. ফাইনাল ক্যালকুলেশন এবং লিঙ্ক ফিক্স
    updateCartTotal();
    if (typeof fixNavbarLinks === "function") fixNavbarLinks();
});

// ৩. রিভিল ফাংশনটি (যা HTML এলিমেন্টকে সামনে আনবে)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom; // এলিমেন্টের নিচের অংশ
        var elementVisible = 100; 

        // যদি এলিমেন্টটি স্ক্রিনের ভেতরে থাকে
        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            reveals[i].classList.add("active");
        } 
        // যদি এলিমেন্টটি স্ক্রিনের বাইরে চলে যায় (উপরে বা নিচে)
        else {
            reveals[i].classList.remove("active");
        }
    }
}

// ৪. স্ক্রল ইভেন্ট লিসেনার
window.addEventListener("scroll", reveal);


function showToast(message) {
    const container = document.getElementById('toast-container');
    
    // নতুন একটি মেসেজ বক্স তৈরি
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // কন্টেইনারে যোগ করা
    container.appendChild(toast);
    
    // ৩ সেকেন্ড পর অটোমেটিক ডিলিট করে দেওয়া
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
function addToCartFromSingle() {
    if (!window.currentProduct) {
        alert("প্রোডাক্ট লোড হচ্ছে, দয়া করে অপেক্ষা করুন!");
        return;
    }

    // Ekhon sudhu quantity nibo
    const qty = parseInt(document.getElementById('pro-quantity').value) || 1;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Size check bad, ekhon sudhu ID diye check hobe
    const existingIndex = cart.findIndex(item => item.id === window.currentProduct.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            id: window.currentProduct.id,
            name: window.currentProduct.name,
            price: window.currentProduct.finalPrice, 
            image: window.currentProduct.image,
            quantity: qty
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${window.currentProduct.name} কার্টে যোগ হয়েছে! 🛒`);
}

// shop page e paginatation add kobo
let currentPage = 1;
const productsPerPage = 16;
let currentDiscountPercent = 0;



function loadShopProducts() {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = allProducts.slice(start, end);

    // প্রোডাক্ট লিস্ট দেখানো
    displayProducts(paginatedProducts, 'shop-container');
    
    // পেজিনেশন বাটন আপডেট করা
    updatePagination();
}

// quick view modal code here

function openQuickView(id) {
    // ১. প্রোডাক্ট খুঁজে বের করা
    const product = allProducts.find(p => String(p.id) === String(id));
    if (!product) return;

    // নতুন যোগ করা: স্টক চেক
    const isOutOfStock = product.stock === false;

    // ২. পাথ ঠিক করা
    const isCategoryPage = window.location.pathname.includes('/categories/');
    const pathPrefix = isCategoryPage ? "../" : "";

    // ৩. ডিসকাউন্ট থাকলে ফাইনাল প্রাইস বের করা
    let discountPercent = product.discount || 0;
    let finalPrice = discountPercent > 0 ? product.price - (product.price * discountPercent / 100) : product.price;

    // ৪. মোডাল এলিমেন্টগুলোতে ডাটা সেট করা
    document.getElementById('qv-name').innerText = product.name;
    document.getElementById('qv-price').innerText = "৳" + finalPrice.toLocaleString();
    document.getElementById('qv-image').src = pathPrefix + product.image;
    
    // ছবি সাদা-কালো করা (যদি স্টক আউট হয়)
    document.getElementById('qv-image').style.filter = isOutOfStock ? "grayscale(1)" : "none";
    document.getElementById('qv-image').style.opacity = isOutOfStock ? "0.6" : "1";

    const qvDesc = document.getElementById('qv-desc');
    if (qvDesc) {
        qvDesc.innerText = product.description || "এই প্রোডাক্ট সম্পর্কে বিস্তারিত জানতে আমাদের সাথেই থাকুন।";
    }

    // ৫. কোয়ান্টিটি বক্স হ্যান্ডেল করা
    const qtyInput = document.getElementById('qv-quantity');
    if (qtyInput) {
        qtyInput.value = 1;
        qtyInput.disabled = isOutOfStock; // স্টক না থাকলে ইনপুট বন্ধ
    }

    // ৬. অ্যাড টু কার্ট বাটন লজিক (আপডেট করা হয়েছে)
    const modalAddToCartBtn = document.getElementById('qv-add-btn');
    if (modalAddToCartBtn) {
        if (isOutOfStock) {
            modalAddToCartBtn.innerText = "Out of Stock";
            modalAddToCartBtn.style.background = "#ccc";
            modalAddToCartBtn.style.cursor = "not-allowed";
            modalAddToCartBtn.onclick = null; // ক্লিক ইভেন্ট রিমুভ করা
        } else {
            modalAddToCartBtn.innerText = "Add to Cart";
            modalAddToCartBtn.style.background = "#7134a6"; // তোমার থিম কালার
            modalAddToCartBtn.style.cursor = "pointer";
            modalAddToCartBtn.onclick = () => {
                const quantity = parseInt(document.getElementById('qv-quantity').value) || 1;
                addToCart(product.id, quantity); 
                closeQuickView();
            };
        }
    }

    // ৭. মোডাল দেখানো
    document.getElementById('quickview-modal').style.display = 'block';
}
// মোডাল বন্ধ করার ফাংশন
function closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    if (modal) modal.style.display = 'none';
}

// মোডালের বাইরে ক্লিক করলে বন্ধ হবে
window.onclick = function(event) {
    const modal = document.getElementById('quickview-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function updatePagination() {
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    const pageNumbersContainer = document.getElementById('pageNumbers');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    pageNumbersContainer.innerHTML = "";

    // আমরা একটি লুপ চালাবো ১ থেকে totalPages পর্যন্ত
    for (let i = 1; i <= totalPages; i++) {
        // শর্ত: ১ নম্বর পেজ দেখাবে, শেষ পেজ দেখাবে, 
        // এবং বর্তমান পেজ (Active) এর ঠিক আগের আর পরের নম্বরটি দেখাবে
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            
            // "..." (Dots) দেখানোর জন্য লজিক
            if (i === currentPage - 1 && i > 2) {
                pageNumbersContainer.innerHTML += `<span>...</span>`;
            }

            pageNumbersContainer.innerHTML += `
                <button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
            `;

            if (i === currentPage + 1 && i < totalPages - 1) {
                pageNumbersContainer.innerHTML += `<span>...</span>`;
            }
        }
    }

    // Previous বাটন লজিক: ১ নম্বরে থাকলে কাজ করবে না
    prevBtn.disabled = (currentPage === 1);
    prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
    prevBtn.style.cursor = prevBtn.disabled ? "not-allowed" : "pointer";

    // Next বাটন লজিক: শেষ পেজে থাকলে কাজ করবে না
    nextBtn.disabled = (currentPage === totalPages);
    nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
    nextBtn.style.cursor = nextBtn.disabled ? "not-allowed" : "pointer";
}
function changePage(page) {
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    
    // পেজ রেঞ্জের বাইরে গেলে কিছু করবে না
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    loadShopProducts();
    window.scrollTo(0, 0); // পেজ চেঞ্জ হলে উপরে স্ক্রল করবে
}
                                                                    // add to cart mane product add kora code ekhane thakbe
// ১. কার্ট আপডেট করার ফাংশন (কাউন্ট দেখানোর জন্য)
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // .length ব্যবহার করলে কার্টে কয়টি আলাদা প্রোডাক্ট আছে শুধু সেটিই গুনবে
    let uniqueItemCount = cart.length; 

    // ডেক্সটপ এবং মোবাইল দুই জায়গাতেই আপডেট হবে
    const cartCountElement = document.getElementById('cart-count');
    const mobileCartCountElement = document.getElementById('mobile-cart-count');

    if (cartCountElement) {
        cartCountElement.innerText = uniqueItemCount;
    }
    if (mobileCartCountElement) {
        mobileCartCountElement.innerText = uniqueItemCount;
    }
}

// ২. মেইন Add to Cart লজিক
function addToCart(productId, quantity = 1) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    // কার্টে যোগ করার সময় ডিসকাউন্ট করা দাম বের করা
    let discountPercent = product.discount || 0;
    let finalPrice = product.price;
    if (discountPercent > 0) {
        finalPrice = product.price - (product.price * discountPercent / 100);
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += parseInt(quantity);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: finalPrice, // এখানে ডিসকাউন্ট করা দাম সেভ হবে
            image: product.image,
            quantity: parseInt(quantity)
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} সফলভাবে কার্টে যোগ হয়েছে! 🛒`);
}
                                                                        //cart page product add code here 

// ১. কার্ট পেজের সব প্রোডাক্ট টেবিল আকারে দেখানো
function displayCartItems() {
    const cartBody = document.getElementById('cart-items-body');
    if (!cartBody) return; 

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartBody.innerHTML = ""; 

    if (cart.length === 0) {
        cartBody.innerHTML = "<tr><td colspan='6'>আপনার কার্টটি বর্তমানে খালি।</td></tr>";
        updateCartTotal(); // এখানে আগে ভুল নাম ছিল, এখন ঠিক করা হয়েছে
        return;
    }

    cart.forEach((item, index) => {
        const itemSubtotal = item.price * item.quantity;
        cartBody.innerHTML += `
            <tr>
                <td><a href="javascript:void(0)" onclick="removeFromCart(${index})"><i class="far fa-times-circle"></i></a></td>
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>৳${item.price}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                <td>৳${itemSubtotal}</td>
            </tr>
        `;
    });

    updateCartTotal(); // এখানেও নাম ঠিক করা হয়েছে
}

// ২. কার্ট থেকে প্রোডাক্ট ডিলিট করা
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart));
    
    displayCartItems(); 
    updateCartCount();  
    // updateCartTotal() আলাদা করে দেওয়ার দরকার নেই কারণ displayCartItems() এর ভেতরেই এটি আছে
}

// ৩. প্রোডাক্টের পরিমাণ (Quantity) পরিবর্তন করা
function updateQuantity(index, newQty) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (newQty < 1) newQty = 1;
    cart[index].quantity = parseInt(newQty);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    displayCartItems(); 
    updateCartCount();
}

function applyCoupon() {
    const couponInput = document.getElementById('coupon-input').value.trim().toUpperCase();
    const message = document.getElementById('coupon-message');

    // (Base64) 
    const secureCoupons = {
        'U0FWRTMw': 30, // 
        'U0FWRTIw': 20, // 
        'U0FWRTEw': 10  // 
    };

    // ইউজারের ইনপুটকে Base64 এ কনভার্ট করা হচ্ছে
    const encodedInput = btoa(couponInput);

    if (secureCoupons[encodedInput]) {
        currentDiscountPercent = secureCoupons[encodedInput]; 
        
        // মেমোরিতে সেভ রাখা (আপনার ১৫ জানুয়ারির রিকোয়েস্ট অনুযায়ী)
        localStorage.setItem('savedDiscount', currentDiscountPercent);
        localStorage.setItem('savedCouponCode', couponInput);
        
        message.innerText = `অভিনন্দন! আপনি ${currentDiscountPercent}% ডিসকাউন্ট পেয়েছেন।`;
        message.style.color = "green";
    } else {
        currentDiscountPercent = 0; 
        
        // ভুল কোড দিলে মেমোরি ক্লিয়ার করা
        localStorage.removeItem('savedDiscount');
        localStorage.removeItem('savedCouponCode');
        
        message.innerText = "দুঃখিত, কুপন কোডটি সঠিক নয়!";
        message.style.color = "red";
    }
    
    // কার্টের টোটাল আপডেট করা
    updateCartTotal();
}


/* --- Cart Calculation Function --- */
function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;

    // ১. কার্টের সব আইটেমের দাম যোগ করা
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    // ২. কুপন ডিসকাউন্ট হিসাব
    let discountAmount = (subtotal * (typeof currentDiscountPercent !== 'undefined' ? currentDiscountPercent : 0)) / 100;
    let subtotalAfterDiscount = subtotal - discountAmount;

    // ৩. শিপিং চার্জ
    let shippingSelect = document.getElementById("shipping-location");
    let shippingCharge = shippingSelect ? parseFloat(shippingSelect.value) || 0 : 0;
    
    if (subtotal === 0) {
        shippingCharge = 0;
        discountAmount = 0;
    }

    // ৪. টেবিলের নিচের টোটাল আপডেট (যেটা এখন হচ্ছে না)
    const tableTotal = document.getElementById("table-total");
    if (tableTotal) {
        tableTotal.innerText = "৳ " + subtotal.toLocaleString();
    }

    // ৫. চেকআউট সেকশনের সাবটোটাল আপডেট
    const finalSubtotal = document.getElementById("final-subtotal");
    if (finalSubtotal) {
        finalSubtotal.innerText = "৳ " + subtotal.toLocaleString();
    }
    
    // ৬. ডিসকাউন্ট প্রাইস আপডেট
    const discountPrice = document.getElementById("discount-price");
    if (discountPrice) {
        discountPrice.innerText = "- ৳ " + discountAmount.toLocaleString();
    }
    
    // ৭. গ্র্যান্ড টোটাল আপডেট (সব মিলিয়ে)
    const finalTotalElem = document.getElementById("final-total");
    if (finalTotalElem) {
        if (subtotal === 0) {
            finalTotalElem.innerText = "৳ 0";
        } else if (shippingSelect && shippingSelect.value === "0") {
            finalTotalElem.innerHTML = "<span style='color: red; font-size: 13px;'>সিলেক্ট করুন</span>";
        } else {
            let grandTotal = subtotalAfterDiscount + shippingCharge;
            finalTotalElem.innerText = "৳ " + grandTotal.toLocaleString();
        }
    }

    // মেমোর জন্য ডাটা সেভ
    localStorage.setItem('lastDiscountAmount', discountAmount);
}

// চেকআউট বাটনের স্ট্যাটাস চেক করার ফাংশন

function checkCheckoutRequirements() {
    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();
    const email = document.getElementById("cust-email").value.trim(); // এটি যোগ করো
    const shipping = document.getElementById("shipping-location").value;
    const checkoutBtn = document.querySelector("#subtotal button");
    
    const phonePattern = /^01[3-9]\d{8}$/;

    // লজিক আগের মতোই থাকবে (ইমেইল অপশনাল তাই এখানে চেক করার দরকার নেই)
    if (name !== "" && phonePattern.test(phone) && address !== "" && shipping !== "0") {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = "1";
        checkoutBtn.style.cursor = "pointer";
        checkoutBtn.innerText = "Proceed to Checkout";
    } else {
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = "0.5";
        checkoutBtn.style.cursor = "not-allowed";
        checkoutBtn.innerText = "Please fill requirements";
    }
}

// ইনপুট ফিল্ডগুলোতে ইভেন্ট লিসেনার যোগ করা
document.addEventListener("DOMContentLoaded", () => {
    // ১. সব পেজের জন্য কার্ট কাউন্ট আপডেট
    updateCartCount();

    // ২. চেকআউট পেজের জন্য ইনপুট ফিল্ড মনিটর করা (যদি এলিমেন্টগুলো থাকে)
    const inputs = ["cust-name", "cust-phone", "cust-address", "shipping-location"];
    
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if(element) {
            // ইউজার যখনই টাইপ করবে বা সিলেক্ট করবে, তখনই চেক হবে
            element.addEventListener("input", checkCheckoutRequirements);
            element.addEventListener("change", checkCheckoutRequirements);
        }
    });

    // ৩. যদি চেকআউট পেজে থাকে তবে লোড হওয়ার সময় একবার বাটন চেক করা
    if (typeof checkCheckoutRequirements === "function") {
        checkCheckoutRequirements();
    }
});


// ১. বাটনটিকে খুঁজে দেখা
const checkoutBtn = document.querySelector("#subtotal button");

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function() {
        let nameField = document.getElementById("cust-name");
        let phoneField = document.getElementById("cust-phone");
        let addressField = document.getElementById("cust-address");

        if (!nameField || !phoneField || !addressField) return;

        let name = nameField.value.trim();
        let phone = phoneField.value.trim();
        let address = addressField.value.trim();
        let email = document.getElementById("cust-email") ? document.getElementById("cust-email").value.trim() : "";
        let shipping = document.getElementById("shipping-location").value;

        if (!name || !phone || !address) {
            alert("দয়া করে সব তথ্য পূরণ করুন");
            return;
        }

        // গিফট বক্স খেলার সুযোগ আবার ওপেন করে দেওয়া
        localStorage.removeItem("hasPlayed");

        const now = new Date();
        const currentMonthYear = now.getFullYear().toString().slice(-2) + 
                                 (now.getMonth() + 1).toString().padStart(2, '0');

        let lastMonthYear = localStorage.getItem('lastOrderMonthYear');
        let lastOrderNum = localStorage.getItem('orderCounter') || 1000;

        // মাস পরিবর্তন হলে কাউন্টার রিসেট করা
        if (lastMonthYear !== currentMonthYear) {
            lastOrderNum = 1000; 
        }
        
        let nextOrderNum = parseInt(lastOrderNum) + 1;
        
        // নতুন অর্ডারের তথ্য সেভ করা
        localStorage.setItem('orderCounter', nextOrderNum); 
        localStorage.setItem('lastOrderMonthYear', currentMonthYear);
        
        const invoiceID = `INV-${currentMonthYear}-${nextOrderNum}`;

        // ১. মেমো পেজের জন্য প্রয়োজনীয় সব তথ্য সেভ করা
        localStorage.setItem('lastInvoiceID', invoiceID);
        localStorage.setItem('lastOrderCustomer', JSON.stringify({ 
            name: name, 
            phone: phone, 
            address: address, 
            email: email 
        }));
        localStorage.setItem('lastShippingCharge', shipping);

        // ২. ডিসকাউন্ট এর টাকার পরিমাণ সেভ করা (৳ চিহ্ন বাদ দিয়ে শুধু নাম্বার)
        let discountElem = document.getElementById('discount-amount') || document.getElementById('cart-discount');
        let finalDiscount = "0";
        if (discountElem) {
            finalDiscount = discountElem.innerText.replace(/[^\d.-]/g, ''); // শুধু নাম্বার রাখার জন্য
        }
        localStorage.setItem('lastDiscountAmount', finalDiscount);

        // ৩. সরাসরি মেমো পেজে পাঠিয়ে দিন (কার্ট এখন মুছবেন না, মেমো পেজ মুছবে)
        window.location.href = "memo.html"; 
    });
}


function sendToSheet(orderData) {
    const url = 'https://script.google.com/macros/s/AKfycbzmZ3_Auz45t44i2aiX6wPeVYVKSeeGT6GW9jFjcyBQkzHF6Z6WyDbTR6kGWdYTbjHlHA/exec'; // তোমার গুগল স্ক্রিপ্ট থেকে পাওয়া URL টি এখানে বসাও
    
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    })
    .then(() => console.log("Order data sent to Google Sheets!"))
    .catch(error => console.error('Error!', error.message));
}

// এই অংশটি তোমার ওয়েবসাইট কোডের ভেতরে থাকবে
const orderData = {
    invoiceID: "INV-" + Math.floor(1000 + Math.random() * 9000), // অটো জেনারেটেড আইডি
    name: document.getElementById('customer-name').value, 
    phone: document.getElementById('customer-phone').value,
    address: document.getElementById('customer-address').value,
    shipping: 60, // বা ১২০ (তোমার লজিক অনুযায়ী)
    subtotal: cartTotal, // তোমার কার্টের মোট টাকার ভ্যারিয়েবল
    discount: 0, 
    total: cartTotal + 60, // শিপিং সহ মোট টাকা
    itemsString: cart.map(item => item.name).join(", "), 
    cartItems: cart // এটিই মেমোতে আলাদা রো তৈরি করবে
};

// এরপর তোমার সেই sendToSheet ফাংশনটি কল করো
sendToSheet(orderData);

// মেনু লিঙ্কগুলো অটোমেটিক ঠিক করার ফাংশন
function fixNavbarLinks() {
    // ১. চেক করবে ইউজার কি 'categories' ফোল্ডারের কোন ফাইলে আছে কি না
    const path = window.location.pathname;
    const isInsideCategory = path.includes('/categories/');

    if (!isInsideCategory) return; // ফোল্ডারের ভেতর না থাকলে কোড এখানেই থেমে যাবে

    console.log("Fixing links for category page...");

    // ২. সব লিঙ্ক (Navbar, Logo, Mobile Nav) একসাথে ধরা
    const allLinks = document.querySelectorAll('#navbar li a, .logo-container a, #mobile a');

    allLinks.forEach(link => {
        let href = link.getAttribute('href');

        // যদি লিঙ্ক থাকে এবং সেটি ইতিমধ্যে ../ বা http দিয়ে শুরু না হয়
        if (href && !href.startsWith('http') && !href.startsWith('../') && !href.startsWith('#')) {
            link.setAttribute('href', '../' + href);
        }
    });

    // ৩. লোগো ইমেজের পাথ ঠিক করা (যদি আলাদাভাবে থাকে)
    const logoImg = document.querySelector('.logo, .logo-container img');
    if (logoImg) {
        let imgSrc = logoImg.getAttribute('src');
        if (imgSrc && !imgSrc.startsWith('../')) {
            logoImg.setAttribute('src', '../' + imgSrc);
        }
    }
}

// ৪. পেজ লোড হওয়ার সাথে সাথে রান করার জন্য
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixNavbarLinks);
} else {
    fixNavbarLinks(); // যদি ইতিমধ্যে লোড হয়ে থাকে
}

function loadFeaturedProducts() {
    const grid = document.getElementById('featured-products-grid');
    if (grid) {
        // ডাটাবেস থেকে শুধু featured: true প্রোডাক্টগুলো নাও
        const featuredList = allProducts.filter(p => p.featured === true);
        // যদি ডাটাবেসে কোনোটি featured না থাকে, তবে প্রথম ৮টি দেখাবে ব্যাকআপ হিসেবে
        const listToShow = featuredList.length > 0 ? featuredList : allProducts.slice(0, 8);
        displayProducts(listToShow, 'featured-products-grid');
    }
}

function loadBestProducts() {
    const grid = document.getElementById('best-products-grid');
    if (grid) {
        // Data theke 'best: true' product gulo filter kora
        const bestList = allProducts.filter(p => p.best === true);
        
        // Jodi kono best product na thake, tobe back-up hisebe kono 4-8 ta product dekhabe
        const listToShow = bestList.length > 0 ? bestList : allProducts.slice(4, 12);
        
        displayProducts(listToShow, 'best-products-grid');
    }
}



// তোমার সেই আগের displayProduct লজিককে অফার অনুযায়ী কল করা
function displayOfferProducts(discountValue, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; 

    const filtered = allProducts.filter(item => item.discount === discountValue);

    if(filtered.length > 0) {
        container.innerHTML = filtered.map(product => {
            const discountedPrice = product.price - (product.price * product.discount / 100);
            
            return `
            <div class="pro">
                <div class="img-container">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="quick-view-overlay" onclick="event.stopPropagation(); openQuickView(${product.id})">
                        <i class="fas fa-eye"></i> Quick View
                    </div>
                </div>
                <div class="des" onclick="window.location.href='sproduct.html?id=${product.id}'" style="cursor: pointer;">
                    <span>${product.category}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        ${'<i class="fas fa-star"></i>'.repeat(product.stars || 5)}
                    </div>
                    <h4>৳${discountedPrice.toLocaleString()} <del style="font-size: 13px; color: red;">৳${product.price.toLocaleString()}</del></h4>
                </div>
                <a href="javascript:void(0)" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fa-solid fa-bag-shopping cart"></i>
                </a>
            </div>`;
        }).join("");
    } else {
        container.innerHTML = `<p style="text-align:center; width:100%; padding: 20px;">বর্তমানে এই অফারে (${discountValue}%) কোনো পণ্য নেই।</p>`;
    }
}
function loadRecentlyViewed() {
    const recentIds = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const container = document.getElementById('recent-view-grid');
    const section = document.getElementById('recent-view-section');
    const emptyMsg = document.getElementById('recent-empty-msg');

    if (recentIds.length > 0 && container) {
        if (emptyMsg) emptyMsg.style.display = 'none';
        container.innerHTML = ""; 

        const recentProducts = recentIds.map(id => 
            allProducts.find(p => p.id == id)
        ).filter(p => p !== undefined);

        displayProducts(recentProducts, 'recent-view-grid'); 
    } else {
        if (emptyMsg) emptyMsg.style.display = 'block';
    }
}
function saveToRecentlyViewed(productId) {
    if (!productId) return;
    
    // আগের সেভ করা আইডিগুলো নিয়ে আসা
    let recent = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    
    // আইডিটি যদি অলরেডি লিস্টে থাকে তবে সেটা রিমুভ করা (যাতে ডুপ্লিকেট না হয়)
    recent = recent.filter(id => id != productId);
    
    // নতুন দেখা প্রোডাক্টের আইডি শুরুতে যোগ করা
    recent.unshift(productId);
    
    // আমরা শুধু শেষ ৪টি বা ৮টি প্রোডাক্ট রাখবো
    if (recent.length > 4) {
        recent.pop();
    }
    
    // আবার লোকাল স্টোরেজে সেভ করা
    localStorage.setItem('recentlyViewed', JSON.stringify(recent));
}





function revealGift(element) {
    // ১. আগে খেলেছে কি না চেক করা
    if (localStorage.getItem("hasPlayed") === "true") {
        alert("আপনি আজ খেলে ফেলেছেন! আবার সুযোগ পেতে একটি অর্ডার কনফার্ম করুন।");
        return;
    }

    // ২. সুযোগ লক করে দেওয়া
    localStorage.setItem("hasPlayed", "true");
    element.classList.add("open"); // ঢাকনা উড়িয়ে দেওয়া

    // ৩. লটারি লজিক (৭০% চান্স হারার)
    let chance = Math.floor(Math.random() * 100);
    let won;

    if (chance < 70) {
        won = { code: "NONE", type: 'loss' };
    } else {
        const codes = ["SAVE30", "SAVE20", "SAVE10"];
        won = { code: codes[Math.floor(Math.random() * 3)], type: 'win' };
    }

    // ৪. এনিমেশনের জন্য একটু সময় নিয়ে রেজাল্ট দেখানো
    setTimeout(() => {
        const content = element.querySelector(".gift-content");
        const resultDisplay = document.getElementById("result-display");
        
        if (won.type === 'win') {
            element.classList.add("win");
            content.innerHTML = `<span style="font-size:18px; font-weight:bold;">${won.code}</span>`;
            document.getElementById("result-status").innerText = "অভিনন্দন! আপনি জিতেছেন 🎉";
            document.getElementById("won-code").innerText = won.code;
            document.getElementById("code-p").style.display = "block";
        } else {
            element.classList.add("loss");
            content.innerHTML = `<i class="fas fa-times"></i>`;
            document.getElementById("result-status").innerText = "দুঃখিত! এবার ভাগ্য সহায় হয়নি 💔";
            document.getElementById("code-p").style.display = "none";
        }
        
        resultDisplay.style.display = "block";
        disableRemainingBoxes();
    }, 600);
}

// জেতা কোড সরাসরি ইনপুট বক্সে পাঠানো
function copyAndApply() {
    const code = document.getElementById("won-code").innerText;
    const couponInput = document.getElementById('coupon-input'); // তোমার আসল ইনপুট ফিল্ড আইডি
    
    if (couponInput && code !== "") {
        couponInput.value = code;
        alert("কুপন কোডটি বসানো হয়েছে! এখন Apply বাটনে ক্লিক করে ডিসকাউন্ট বুঝে নিন।");
    }
}

// অন্য বক্সগুলো লক করে দেওয়া
function disableRemainingBoxes() {
    const boxes = document.querySelectorAll('.gift-box');
    boxes.forEach(box => {
        box.style.pointerEvents = 'none';
        if (!box.classList.contains('open')) {
            box.style.opacity = '0.5';
        }
    });
}