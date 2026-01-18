const allProducts = [
    { 
        id: 1000, 
        category: "sunglass", 
        name: "sunprof glass", 
        price: 950, 
        discount: 30, // ৩০% ছাড়ের জন্য
        image: "img/", 
        stars: 5 
    },
    { 
        id: 1001, 
        category: "sunglass", 
        name: "sunprof glass", 
        price: 950, 
        discount: 30, // ৩০% ছাড়ের জন্য
        image: "img/products/j1.jpg", 
        stars: 5 
    },





    { 
        id: 2000,
        category: "perfume", 
        name: "ROYAL perfume", 
        price: 450, 
        discount: 30, // ৩০% ছাড়ের জন্য
        image: "img/categories/perfume/ROYAL_perfume/2000.png", 
        stock: false,
        stars: 4 
    },
{ 
        id: 2001,
        category: "perfume", 
        name: "Home Fragrance OIL", 
        price: 450, 
        featured: true,
        discount: 30,
        image: "img/categories/perfume/Home_Fragrance_OIL/2001.jpeg",
        images: [
            "img/categories/perfume/Home_Fragrance_OIL/1.jpeg", 
            "img/categories/perfume/Home_Fragrance_OIL/2.jpeg", 
            "img/categories/perfume/Home_Fragrance_OIL/3.jpeg"
        ],
        // এখানে ব্যাকটিক ( ` ) ব্যবহার করা হয়েছে
        description: `Product Overview:
        আপনার ঘরকে শান্ত এবং সতেজ রাখতে আমাদের এই Premium Home Fragrance Oil এক অনন্য সমাধান। মাত্র কয়েক ফোঁটা তেলের সুবাসে আপনার ড্রয়িং রুম, বেডরুম বা অফিস হয়ে উঠবে আরও স্নিগ্ধ ও আরামদায়ক।

        Key Features:
        - Long-lasting Aroma: দীর্ঘক্ষণ সুঘ্রাণ ধরে রাখে।
        - Multi-purpose Use: ডিফিউজার ও বার্নারের জন্য উপযুক্ত।
        - Stress Relief: ক্লান্তি দূর করে মনকে প্রশান্ত করে।

        How to Use:
        ১. ডিফিউজারে পানি নিন।
        ২. ৩-৫ ফোঁটা অয়েল যোগ করুন।`,
        stars: 4 
    },




    { 
        id: 3000, 
        category: "jewellery", 
        name: "Luxury Watch", 
        price: 3500, 
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/w1.jpg", 
        stars: 5 
    },   
    { 
        id: 3001, 
        category: "jewellery", 
        name: "Luxury Watch", 
        price: 3500,
        featured: true, 
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/w1.jpg", 
        stars: 5 
    },




    { 
        id: 4000, 
        category: "cosmetics", 
        name: "Blue De Chanel", 
        price: 5000, 
        featured: true,
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/p1.jpg", 
        stars: 5 
    },
    { 
        id: 4001, 
        category: "cosmetics", 
        name: "Blue De Chanel", 
        price: 5000, 
        best: true,
        discount: 0, // ০% ছাড়ের জন্য
        image: "img/products/p1.jpg", 
        stars: 5 
    },




    { 
        id: 5000, 
        category: "clothing", 
        name: "Party Dress", 
        price: 1800,
        best: true,
        discount: 0, // ০% ছাড়ের জন্য 
        image: "img/products/wc1.jpg", 
        stars: 4 
    },
    { 
        id: 5001, 
        category: "clothing", 
        name: "Party Dress", 
        price: 1800,
        featured: true,
        discount: 10, // 2০% ছাড়ের জন্য 
        image: "img/products/wc1.jpg", 
        stars: 4 
    },



    { 
        id: 6000, 
        category: "bag", 
        name: "Leather Bag", 
        price: 1200, 
        featured: true,
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/b1.jpg", 
        stars: 4 
    },
    { 
        id: 6001, 
        category: "bag", 
        name: "Leather Bag", 
        price: 1200, 
        featured: true,
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/b1.jpg", 
        stars: 4 
    },



    { 
        id: 7000, 
        category: "watch", 
        name: "Michael Kors", 
        price: 800,
        featured: true, 
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/b1.jpg", 
        stars: 4 
    },
    { 
        id: 7001, 
        category: "watch", 
        name: "Michael Kors", 
        price: 800, 
        featured: true,
        best: true,
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/b1.jpg", 
        stars: 4 
    }, 
    { 
        id: 7002, 
        category: "watch", 
        name: "Rolex Submariner", 
        price: 1200, 
        discount: 20, // 2০% ছাড়ের জন্য
        image: "img/products/w3.jpg", 
        stars: 5 
    },
    { 
        id: 7003, 
        category: "watch", 
        name: "Casio G-Shock Black", 
        price: 150, 
        discount: 10, // 2০% ছাড়ের জন্য
        image: "img/products/w4.jpg", 
        stars: 5 
    },
    

];   
