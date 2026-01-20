const allProducts = [
    
    
    { 
        id: 1000, 
        category: "clothing", 
        name: "Premium Chiffon Hijab Emerald Green", 
        price: 1200,
        best: true,
        featured: true,
        discount: 10, // ০% ছাড়ের জন্য 
        image: "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/emerald_green.webp", 
        stars: 4,
        description: `Product Overview:
        আপনার স্টাইলকে আরও মার্জিত এবং এলিগেন্ট করতে আমাদের এই Premium Chiffon Hijab এক অসাধারণ পছন্দ। অত্যন্ত হালকা ও উন্নত মানের জর্জেট শিফন ফেব্রিক দিয়ে তৈরি এই হিজাবটি যেকোনো ফরমাল মিট-আপ বা প্রতিদিনের ব্যবহারের জন্য পারফেক্ট।
        Key Features:
        - Featherlight Fabric: অনেক সময় পরে থাকলেও কোনো অস্বস্তি হয় না।
        - Elegant Draping: খুব সহজেই সুন্দর ড্র্যাপ বা ভাজ তৈরি করা যায়।
        - Breathable Material: বাতাস চলাচলে উপযোগী, যা আপনাকে গরমেও রাখবে স্নিগ্ধ।

        Care Instructions: 
        ১. হালকা ডিটারজেন্ট দিয়ে হাতে ধুয়ে নিন। 
        ২. সরাসরি রোদে না শুকিয়ে ছায়ায় শুকাতে দিন।`,
        images: [
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/emerald_green.webp",
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/neutral_beige.webp",
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/pastel_blue.webp"
        ],
        stock: true

    },
    { 
        id: 1001, 
        category: "clothing", 
        name: "Premium Chiffon Hijab Neutral Beige", 
        price: 1200,
        best: true,
        featured: true,
        discount: 10, // ০% ছাড়ের জন্য 
        image: "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/neutral_beige.webp", 
        stars: 4,
        description: `Product Overview:
        আপনার স্টাইলকে আরও মার্জিত এবং এলিগেন্ট করতে আমাদের এই Premium Chiffon Hijab এক অসাধারণ পছন্দ। অত্যন্ত হালকা ও উন্নত মানের জর্জেট শিফন ফেব্রিক দিয়ে তৈরি এই হিজাবটি যেকোনো ফরমাল মিট-আপ বা প্রতিদিনের ব্যবহারের জন্য পারফেক্ট।
        Key Features:
        - Featherlight Fabric: অনেক সময় পরে থাকলেও কোনো অস্বস্তি হয় না।
        - Elegant Draping: খুব সহজেই সুন্দর ড্র্যাপ বা ভাজ তৈরি করা যায়।
        - Breathable Material: বাতাস চলাচলে উপযোগী, যা আপনাকে গরমেও রাখবে স্নিগ্ধ।

        Care Instructions: 
        ১. হালকা ডিটারজেন্ট দিয়ে হাতে ধুয়ে নিন। 
        ২. সরাসরি রোদে না শুকিয়ে ছায়ায় শুকাতে দিন।`,
        images: [
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/neutral_beige.webp",
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/pastel_blue.webp",
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/emerald_green.webp"
        ],
        stock: true

    },
    { 
        id: 1002, 
        category: "clothing", 
        name: "Premium Chiffon Hijab Pastel Blue", 
        price: 1200,
        best: true,
        featured: true,
        discount: 10, // ০% ছাড়ের জন্য 
        image: "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/pastel_blue.webp", 
        stars: 4,
        description: `Product Overview:
        আপনার স্টাইলকে আরও মার্জিত এবং এলিগেন্ট করতে আমাদের এই Premium Chiffon Hijab এক অসাধারণ পছন্দ। অত্যন্ত হালকা ও উন্নত মানের জর্জেট শিফন ফেব্রিক দিয়ে তৈরি এই হিজাবটি যেকোনো ফরমাল মিট-আপ বা প্রতিদিনের ব্যবহারের জন্য পারফেক্ট।
        Key Features:
        - Featherlight Fabric: অনেক সময় পরে থাকলেও কোনো অস্বস্তি হয় না।
        - Elegant Draping: খুব সহজেই সুন্দর ড্র্যাপ বা ভাজ তৈরি করা যায়।
        - Breathable Material: বাতাস চলাচলে উপযোগী, যা আপনাকে গরমেও রাখবে স্নিগ্ধ।

        Care Instructions: 
        ১. হালকা ডিটারজেন্ট দিয়ে হাতে ধুয়ে নিন। 
        ২. সরাসরি রোদে না শুকিয়ে ছায়ায় শুকাতে দিন।`,

        images: [
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/pastel_blue.webp",
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/neutral_beige.webp",
        "product/clothing/প্রিমিয়াম শিফন হিজাব (Premium Chiffon Hijab)/emerald_green.webp"
        ],
        stock: true

    },



    

    { 
        id: 2000, 
        category: "bag", 
        name: "Stylish Mini Cross-body Bag Dark Brown", 
        price: 1700,
        best: true,
        featured: true,
        discount: 20, // ০% ছাড়ের জন্য 
        image: "product/bag/Luxury Leather Handbag/dark_brown.webp", 
        stars: 4,
        description: `Product Overview:
        যারা ভারী ব্যাগ পছন্দ করেন না, তাদের জন্য আমাদের এই Mini Cross-body Bag টি একদম পারফেক্ট। ভ্রমণের সময় বা বন্ধুদের সাথে আড্ডায় আপনার ফোন, কার্ড এবং প্রয়োজনীয় ছোট জিনিসগুলো স্টাইলিশভাবে ক্যারি করার জন্য এটি তৈরি করা হয়েছে।
        - Compact Size: ছোট কিন্তু প্রয়োজনীয় সবকিছু রাখার জন্য স্মার্টলি ডিজাইন করা।
        - Adjustable Strap: আপনার সুবিধা মতো স্ট্র্যাপটি ছোট বা বড় করে নিতে পারবেন।
        - Security Zip: সব পকেটেই শক্তিশালী চেইন ব্যবহার করা হয়েছে যেন আপনার জিনিস নিরাপদ থাকে।

        Care Instructions: 
        ১. ধারালো বস্তু থেকে দূরে রাখুন।
        ২. ভিজে গেলে দ্রুত মুছে ছায়াযুক্ত স্থানে শুকিয়ে নিন।

        `,

        images: [
        "product/bag/Luxury Leather Handbag/dark_brown.webp",
        "product/bag/Luxury Leather Handbag/dark_olive.webp",
        "product/bag/Luxury Leather Handbag/dark_red.webp"
        ],
        stock: true

    },
    { 
        id: 2001, 
        category: "bag", 
        name: "Stylish Mini Cross-body Bag Dark Olive", 
        price: 1700,
        best: true,
        featured: true,
        discount: 20, // ০% ছাড়ের জন্য 
        image: "product/bag/Luxury Leather Handbag/dark_olive.webp", 
        stars: 4,
        description: `Product Overview:
        যারা ভারী ব্যাগ পছন্দ করেন না, তাদের জন্য আমাদের এই Mini Cross-body Bag টি একদম পারফেক্ট। ভ্রমণের সময় বা বন্ধুদের সাথে আড্ডায় আপনার ফোন, কার্ড এবং প্রয়োজনীয় ছোট জিনিসগুলো স্টাইলিশভাবে ক্যারি করার জন্য এটি তৈরি করা হয়েছে।
        - Compact Size: ছোট কিন্তু প্রয়োজনীয় সবকিছু রাখার জন্য স্মার্টলি ডিজাইন করা।
        - Adjustable Strap: আপনার সুবিধা মতো স্ট্র্যাপটি ছোট বা বড় করে নিতে পারবেন।
        - Security Zip: সব পকেটেই শক্তিশালী চেইন ব্যবহার করা হয়েছে যেন আপনার জিনিস নিরাপদ থাকে।

        Care Instructions: 
        ১. ধারালো বস্তু থেকে দূরে রাখুন।
        ২. ভিজে গেলে দ্রুত মুছে ছায়াযুক্ত স্থানে শুকিয়ে নিন।

        `,

        images: [
        "product/bag/Luxury Leather Handbag/dark_olive.webp",
        "product/bag/Luxury Leather Handbag/dark_red.webp",
        "product/bag/Luxury Leather Handbag/dark_brown.webp"
        ],
        stock: true

    },
    { 
        id: 2002, 
        category: "bag", 
        name: "Stylish Mini Cross-body Bag Dark Red", 
        price: 1700,
        best: true,
        featured: true,
        discount: 20, // ০% ছাড়ের জন্য 
        image: "product/bag/Luxury Leather Handbag/dark_red.webp", 
        stars: 4,
        description: `Product Overview:
        যারা ভারী ব্যাগ পছন্দ করেন না, তাদের জন্য আমাদের এই Mini Cross-body Bag টি একদম পারফেক্ট। ভ্রমণের সময় বা বন্ধুদের সাথে আড্ডায় আপনার ফোন, কার্ড এবং প্রয়োজনীয় ছোট জিনিসগুলো স্টাইলিশভাবে ক্যারি করার জন্য এটি তৈরি করা হয়েছে।
        - Compact Size: ছোট কিন্তু প্রয়োজনীয় সবকিছু রাখার জন্য স্মার্টলি ডিজাইন করা।
        - Adjustable Strap: আপনার সুবিধা মতো স্ট্র্যাপটি ছোট বা বড় করে নিতে পারবেন।
        - Security Zip: সব পকেটেই শক্তিশালী চেইন ব্যবহার করা হয়েছে যেন আপনার জিনিস নিরাপদ থাকে।

        Care Instructions: 
        ১. ধারালো বস্তু থেকে দূরে রাখুন।
        ২. ভিজে গেলে দ্রুত মুছে ছায়াযুক্ত স্থানে শুকিয়ে নিন।

        `,

        images: [
        "product/bag/Luxury Leather Handbag/dark_red.webp",
        "product/bag/Luxury Leather Handbag/dark_olive.webp",
        "product/bag/Luxury Leather Handbag/dark_brown.webp"
        ],
        stock: true

    },








    { 
        id: 3000, 
        category: "watch", 
        name: "Luxury Metal Analog Watch Silver Blue", 
        price: 999,
        best: true,
        featured: true,
        discount: 0, // ০% ছাড়ের জন্য 
        image: "product/watch/Luxury Metal Analog Watch/silver.webp", 
        stars: 4,
        description: `Product Overview:
        আপনার ব্যক্তিত্বে আভিজাত্য ফুটিয়ে তুলতে আমাদের এই Luxury Metal Analog Watch এক অনন্য সংযোজন। প্রিমিয়াম স্টেইনলেস স্টিল চেইন এবং ক্লাসিক ডায়াল ডিজাইনের এই ঘড়িটি অফিস বা যেকোনো ফরমাল ইভেন্টের জন্য সেরা পছন্দ।
        - Premium Build: উচ্চমানের স্টেইনলেস স্টিল বডি যা দীর্ঘস্থায়ী এবং জং-রোধী।
        - Water Resistant: দৈনন্দিন পানির ঝাপটা বা বৃষ্টি থেকে সম্পূর্ণ সুরক্ষিত।
        - Scratch-Resistant Glass: এর মজবুত গ্লাস ঘড়িকে স্ক্র্যাচ থেকে রক্ষা করে।

        Care Instructions: 
        ১. ঘড়ি পরিষ্কার রাখতে নরম শুকনো কাপড় দিয়ে নিয়মিত মুছে নিন।
        ২. সরাসরি দীর্ঘক্ষণ পানিতে ডুবিয়ে রাখবেন না।
        `,

        images: [
        "product/watch/Luxury Metal Analog Watch/silver.webp",
        "product/watch/Luxury Metal Analog Watch/black.webp",
        "product/watch/Luxury Metal Analog Watch/silver.webp"
        ],
        stock: true

    },
    { 
        id: 3001, 
        category: "watch", 
        name: "Luxury Metal Analog Watch Black Blue", 
        price: 999,
        best: true,
        featured: true,
        discount: 0, // ০% ছাড়ের জন্য 
        image: "product/watch/Luxury Metal Analog Watch/black.webp", 
        stars: 4,
        description: `Product Overview:
        আপনার ব্যক্তিত্বে আভিজাত্য ফুটিয়ে তুলতে আমাদের এই Luxury Metal Analog Watch এক অনন্য সংযোজন। প্রিমিয়াম স্টেইনলেস স্টিল চেইন এবং ক্লাসিক ডায়াল ডিজাইনের এই ঘড়িটি অফিস বা যেকোনো ফরমাল ইভেন্টের জন্য সেরা পছন্দ।
        - Premium Build: উচ্চমানের স্টেইনলেস স্টিল বডি যা দীর্ঘস্থায়ী এবং জং-রোধী।
        - Water Resistant: দৈনন্দিন পানির ঝাপটা বা বৃষ্টি থেকে সম্পূর্ণ সুরক্ষিত।
        - Scratch-Resistant Glass: এর মজবুত গ্লাস ঘড়িকে স্ক্র্যাচ থেকে রক্ষা করে।

        Care Instructions: 
        ১. ঘড়ি পরিষ্কার রাখতে নরম শুকনো কাপড় দিয়ে নিয়মিত মুছে নিন।
        ২. সরাসরি দীর্ঘক্ষণ পানিতে ডুবিয়ে রাখবেন না।
        `,

        images: [
        "product/watch/Luxury Metal Analog Watch/black.webp",
        "product/watch/Luxury Metal Analog Watch/silver.webp",
        "product/watch/Luxury Metal Analog Watch/green.webp"
        ],
        stock: true

    },
    { 
        id: 3002, 
        category: "watch", 
        name: "Luxury Metal Analog Watch Green Blue", 
        price: 999,
        best: true,
        featured: true,
        discount: 0, // ০% ছাড়ের জন্য 
        image: "product/watch/Luxury Metal Analog Watch/green.webp", 
        stars: 4,
        description: `Product Overview:
        আপনার ব্যক্তিত্বে আভিজাত্য ফুটিয়ে তুলতে আমাদের এই Luxury Metal Analog Watch এক অনন্য সংযোজন। প্রিমিয়াম স্টেইনলেস স্টিল চেইন এবং ক্লাসিক ডায়াল ডিজাইনের এই ঘড়িটি অফিস বা যেকোনো ফরমাল ইভেন্টের জন্য সেরা পছন্দ।
        - Premium Build: উচ্চমানের স্টেইনলেস স্টিল বডি যা দীর্ঘস্থায়ী এবং জং-রোধী।
        - Water Resistant: দৈনন্দিন পানির ঝাপটা বা বৃষ্টি থেকে সম্পূর্ণ সুরক্ষিত।
        - Scratch-Resistant Glass: এর মজবুত গ্লাস ঘড়িকে স্ক্র্যাচ থেকে রক্ষা করে।

        Care Instructions: 
        ১. ঘড়ি পরিষ্কার রাখতে নরম শুকনো কাপড় দিয়ে নিয়মিত মুছে নিন।
        ২. সরাসরি দীর্ঘক্ষণ পানিতে ডুবিয়ে রাখবেন না।
        `,

        images: [
        "product/watch/Luxury Metal Analog Watch/green.webp",
        "product/watch/Luxury Metal Analog Watch/black.webp",
        "product/watch/Luxury Metal Analog Watch/silver.webp"
        ],
        stock: true

    },






    { 
        id: 4000, 
        category: "sunglass", 
        name: "Luxury Polarized Sunglasses Black", 
        price: 899,
        best: true,
        featured: true,
        discount: 30, // 30% ছাড়ের জন্য 
        image: "product/sunglass/Luxury Polarized Sunglasses/black.webp", 
        stars: 5,
        description: `Product Overview:
        আপনার স্টাইল এবং চোখের সুরক্ষা নিশ্চিত করতে আমাদের এই Luxury Polarized Sunglasses টি একটি নিখুঁত পছন্দ। সূর্যের কড়া প্রতিফলন কমিয়ে এটি আপনাকে দেয় স্বচ্ছ ভিশন এবং একটি প্রিমিয়াম লুক, যা যেকোনো আউটডোর আউটিংয়ের জন্য সেরা।
        - UV400 Protection: সূর্যের ক্ষতিকর অতিবেগুনি রশ্মি থেকে চোখকে ১০০% রক্ষা করে।
        - Polarized Lens: গ্লেয়ার বা আলোর প্রতিফলন কমিয়ে ক্লিয়ার ভিশন দেয়।
        - Durable Frame: উচ্চমানের ম্যাটেরিয়াল দিয়ে তৈরি, যা দীর্ঘস্থায়ী ও ওজনে হালকা।

        Care Instructions: 
        ১. সবসময় মাইক্রোফাইবার কাপড় দিয়ে লেন্স পরিষ্কার করুন।
        ২. স্ক্র্যাচ এড়াতে ব্যবহারের পর বক্সে রাখুন।
        `,

        images: [
        "product/sunglass/Luxury Polarized Sunglasses/black.webp",
        "product/sunglass/Luxury Polarized Sunglasses/red.webp",
        "product/sunglass/Luxury Polarized Sunglasses/green.webp",
        "product/sunglass/Luxury Polarized Sunglasses/pink.webp"
        ],
        stock: true

    },
    { 
        id: 4001, 
        category: "sunglass", 
        name: "Luxury Polarized Sunglasses Red", 
        price: 899,
        best: true,
        featured: true,
        discount: 30, // 30% ছাড়ের জন্য 
        image: "product/sunglass/Luxury Polarized Sunglasses/red.webp", 
        stars: 5,
        description: `Product Overview:
        আপনার স্টাইল এবং চোখের সুরক্ষা নিশ্চিত করতে আমাদের এই Luxury Polarized Sunglasses টি একটি নিখুঁত পছন্দ। সূর্যের কড়া প্রতিফলন কমিয়ে এটি আপনাকে দেয় স্বচ্ছ ভিশন এবং একটি প্রিমিয়াম লুক, যা যেকোনো আউটডোর আউটিংয়ের জন্য সেরা।
        - UV400 Protection: সূর্যের ক্ষতিকর অতিবেগুনি রশ্মি থেকে চোখকে ১০০% রক্ষা করে।
        - Polarized Lens: গ্লেয়ার বা আলোর প্রতিফলন কমিয়ে ক্লিয়ার ভিশন দেয়।
        - Durable Frame: উচ্চমানের ম্যাটেরিয়াল দিয়ে তৈরি, যা দীর্ঘস্থায়ী ও ওজনে হালকা।

        Care Instructions: 
        ১. সবসময় মাইক্রোফাইবার কাপড় দিয়ে লেন্স পরিষ্কার করুন।
        ২. স্ক্র্যাচ এড়াতে ব্যবহারের পর বক্সে রাখুন।
        `,

        images: [
        "product/sunglass/Luxury Polarized Sunglasses/red.webp",
        "product/sunglass/Luxury Polarized Sunglasses/pink.webp",
        "product/sunglass/Luxury Polarized Sunglasses/black.webp",
        "product/sunglass/Luxury Polarized Sunglasses/green.webp"
        ],
        stock: true

    },
    { 
        id: 4002, 
        category: "sunglass", 
        name: "Luxury Polarized Sunglasses Pink", 
        price: 899,
        best: true,
        featured: true,
        discount: 30, // 30% ছাড়ের জন্য 
        image: "product/sunglass/Luxury Polarized Sunglasses/pink.webp", 
        stars: 5,
        description: `Product Overview:
        আপনার স্টাইল এবং চোখের সুরক্ষা নিশ্চিত করতে আমাদের এই Luxury Polarized Sunglasses টি একটি নিখুঁত পছন্দ। সূর্যের কড়া প্রতিফলন কমিয়ে এটি আপনাকে দেয় স্বচ্ছ ভিশন এবং একটি প্রিমিয়াম লুক, যা যেকোনো আউটডোর আউটিংয়ের জন্য সেরা।
        - UV400 Protection: সূর্যের ক্ষতিকর অতিবেগুনি রশ্মি থেকে চোখকে ১০০% রক্ষা করে।
        - Polarized Lens: গ্লেয়ার বা আলোর প্রতিফলন কমিয়ে ক্লিয়ার ভিশন দেয়।
        - Durable Frame: উচ্চমানের ম্যাটেরিয়াল দিয়ে তৈরি, যা দীর্ঘস্থায়ী ও ওজনে হালকা।

        Care Instructions: 
        ১. সবসময় মাইক্রোফাইবার কাপড় দিয়ে লেন্স পরিষ্কার করুন।
        ২. স্ক্র্যাচ এড়াতে ব্যবহারের পর বক্সে রাখুন।
        `,

        images: [
        "product/sunglass/Luxury Polarized Sunglasses/pink.webp",
        "product/sunglass/Luxury Polarized Sunglasses/red.webp",
        "product/sunglass/Luxury Polarized Sunglasses/black.webp",
        "product/sunglass/Luxury Polarized Sunglasses/green.webp"
        ],
        stock: true

    },
    { 
        id: 4003, 
        category: "sunglass", 
        name: "Luxury Polarized Sunglasses Green", 
        price: 899,
        best: true,
        featured: true,
        discount: 30, // 30% ছাড়ের জন্য 
        image: "product/sunglass/Luxury Polarized Sunglasses/green.webp", 
        stars: 5,
        description: `Product Overview:
        আপনার স্টাইল এবং চোখের সুরক্ষা নিশ্চিত করতে আমাদের এই Luxury Polarized Sunglasses টি একটি নিখুঁত পছন্দ। সূর্যের কড়া প্রতিফলন কমিয়ে এটি আপনাকে দেয় স্বচ্ছ ভিশন এবং একটি প্রিমিয়াম লুক, যা যেকোনো আউটডোর আউটিংয়ের জন্য সেরা।
        - UV400 Protection: সূর্যের ক্ষতিকর অতিবেগুনি রশ্মি থেকে চোখকে ১০০% রক্ষা করে।
        - Polarized Lens: গ্লেয়ার বা আলোর প্রতিফলন কমিয়ে ক্লিয়ার ভিশন দেয়।
        - Durable Frame: উচ্চমানের ম্যাটেরিয়াল দিয়ে তৈরি, যা দীর্ঘস্থায়ী ও ওজনে হালকা।

        Care Instructions: 
        ১. সবসময় মাইক্রোফাইবার কাপড় দিয়ে লেন্স পরিষ্কার করুন।
        ২. স্ক্র্যাচ এড়াতে ব্যবহারের পর বক্সে রাখুন।
        `,

        images: [
        "product/sunglass/Luxury Polarized Sunglasses/green.webp",
        "product/sunglass/Luxury Polarized Sunglasses/black.webp",
        "product/sunglass/Luxury Polarized Sunglasses/red.webp",
        "product/sunglass/Luxury Polarized Sunglasses/pink.webp"
        ],
        stock: true

    },




    { 
        id: 5000, 
        category: "perfume", 
        name: "Signature Oud Luxury Perfume", 
        price: 899,
        best: true,
        featured: true,
        discount: 30, // 30% ছাড়ের জন্য 
        image: "product/perfume/Signature Oud Luxury Perfume/main.webp", 
        stars: 5,
        description: `Product Overview:
        আপনার উপস্থিতিকে স্মরণীয় করে রাখতে আমাদের এই Signature Oud পারফিউমটি এক অনন্য সৃষ্টি। এটি এমন এক সুগন্ধি যা আভিজাত্য এবং সতেজতার এক অপূর্ব সংমিশ্রণ। দীর্ঘস্থায়ী এই ঘ্রাণ আপনাকে সারাদিন রাখবে কনফিডেন্ট এবং ফ্রেশ।

        - Long-Lasting Fragrance: একবার ব্যবহারে ৮-১২ ঘণ্টা পর্যন্ত সুগন্ধ স্থায়ী থাকে।
        - Exotic Scent Notes: টপ নোটে সতেজ সাইট্রাস, হার্ট নোটে মিস্টিক ওড এবং বেস নোটে ওয়ার্ম মাস্কের সুবাস।
        - Elegant Bottle: প্রিমিয়াম কাঁচের বোতল এবং গোল্ডেন ক্যাপ যা আপনার ড্রেসিং টেবিলের শোভা বাড়াবে।

        Care Instructions: 
        ১. পারফিউম সরাসরি রোদে বা অতিরিক্ত গরমে রাখবেন না; ঠান্ডা ও অন্ধকার জায়গায় রাখুন।
        ২. ব্যবহারের পর বোতলের ক্যাপটি ভালো করে আটকে দিন যাতে সুগন্ধ উড়ে না যায়।
        `,

        images: [
        "product/perfume/Signature Oud Luxury Perfume/main.webp",
        "product/perfume/Signature Oud Luxury Perfume/together.webp"
        ],
        stock: true

    },
    
    


    { 
        id: 6000, 
        category: "cosmetics", 
        name: "Beauty glazed color twist eyeshadow palette", 
        price: 799,
        best: true,
        featured: true,
        discount: 0, // 0% ছাড়ের জন্য 
        image: "product/cosmetics/Beauty glazed color twist eyeshadow palette/primary.webp", 
        stars: 5,
        description: `Product Overview:
        আপনার চোখের সাজকে শিল্পের পর্যায়ে নিয়ে যেতে Beauty Glazed নিয়ে এলো 'Color Twist' আইশ্যাডো প্যালেট। এই একটি প্যালেটেই আপনি পাচ্ছেন ৬৪টি ভিন্ন শেড, যা আপনার গ্ল্যামারাস, ক্যাজুয়াল বা যেকোনো সৃজনশীল আইলুক তৈরির জন্য যথেষ্ট। এর সিল্কি টেক্সচার এবং হাইলি পিগমেন্টেড কালার আপনার মেকআপকে দেবে এক অনন্য মাত্রা।

        - ৬৪টি ভাইব্রেন্ট শেড: ইয়েলো, অরেঞ্জ, পিঙ্ক, পার্পল থেকে শুরু করে ব্লু, গ্রিন ও রেড—সব কালারের মেট, শিমার এবং গ্লিটার ফিনিশ।
        - প্রিমিয়াম টেক্সচার: ভেলভেটি শেডগুলো জেলের মতো সহজে ব্লেন্ড হয় এবং পাউডারের মতো দীর্ঘস্থায়ী ফিনিশ দেয়।
        - স্পেশাল সিল্ক স্লিপ টপার: বাড়তি গ্ল্যামার যোগ করতে এতে রয়েছে ব্র্যান্ড নিউ সিল্ক স্লিপ টপার, যা হাইলাইট বা স্পার্কল ইফেক্টের জন্য দুর্দান্ত।
        - লং-লাস্টিং ও ওয়াটারপ্রুফ: দীর্ঘ সময় স্থায়ী হয়, সহজে ফ্যাকাশে হয় না এবং কোনো হেভি ফলআউট (Fallout) নেই।
        - নিরাপদ ও স্কিন ফ্রেন্ডলি: সব ধরণের স্কিন টোনের জন্য উপযোগী এবং নিরাপদ উপকরণ দিয়ে তৈরি।

        Care Instructions: 
        ১. ব্যবহারের পর প্যালেটটি ভালোভাবে বন্ধ করে রাখুন যাতে আর্দ্রতা না ঢোকে।
        ২. সরাসরি সূর্যালোক থেকে দূরে ঠান্ডা ও শুষ্ক জায়গায় সংরক্ষণ করুন।

        Technical Details:
           - Weight: 270g.
           - Shelf Life: 3 Years.
           - Finish: Matte, Sheen, Shimmer, and Glitter.
           - Package Includes: 1 x Beauty Glazed Color Twist 64 colors eyeshadow palette.
        `,

        images: [
        "product/cosmetics/Beauty glazed color twist eyeshadow palette/01.webp",
        "product/cosmetics/Beauty glazed color twist eyeshadow palette/02.webp",
        "product/cosmetics/Beauty glazed color twist eyeshadow palette/03.webp",
        "product/cosmetics/Beauty glazed color twist eyeshadow palette/04.webp"
        ],
        stock: true

    },






    { 
        id: 7000, 
        category: "jewellery", 
        name: "Hengfang Eyeliner", 
        price: 399,
        best: true,
        featured: true,
        discount: 0, // 0% ছাড়ের জন্য 
        image: "product/jewellery/Hengfang Eyeliner/main.webp", 
        stars: 4,
        description: `Product Overview:
        নিখুঁত এবং আকর্ষণীয় আই-লুক পেতে Hengfang Eyeliner হতে পারে আপনার প্রতিদিনের মেকআপের অন্যতম সঙ্গী। এর স্মুদ অ্যাপ্লিকেশন এবং ডার্ক ব্ল্যাক ফিনিশ আপনার চোখকে দেবে এক বোল্ড এবং ডিফাইনড লুক। আপনি উইংড লাইনার পছন্দ করেন বা সিম্পল চিকন লাইন—সবকিছুই এখন হবে আরও সহজ।

        - Intense Black Pigment: এর ঘন কালো রঙ এক টানেই চোখে ফুটিয়ে তোলে গভীর আভিজাত্য।
        - Waterproof & Smudge-proof: ঘাম বা পানিতে সহজে মুছে যাবে না, তাই সারাদিন থাকবে একদম নিখুঁত।
        - Fine Precision Tip: এর সূক্ষ্ম টিপ বা নিব দিয়ে খুব সহজেই নিখুঁত লাইন ড্র করা যায়।
        - Fast Drying Formula: ব্যবহারের সাথে সাথেই শুকিয়ে যায়, তাই ছড়িয়ে যাওয়ার ভয় নেই।
        - Long-Lasting Wear: দীর্ঘ সময় স্থায়ী হয়, যা আপনাকে সকাল থেকে রাত পর্যন্ত কনফিডেন্ট রাখবে।

        Care Instructions: 
        ১. ব্যবহারের পর ক্যাপটি শক্ত করে আটকে রাখুন যাতে লাইনার শুকিয়ে না যায়।
        ২. ব্যবহারের আগে হালকা ঝাকিয়ে নিতে পারেন যাতে কালার আউটপুট ভালো আসে।
        ৩. চোখের ভেতরে সরাসরি ব্যবহার করা থেকে বিরত থাকুন।

        Technical Details:
           - Type: Liquid/Pen Eyeliner.
           - Color: Deep Black.
           - Weight: 10g-15g (Approx).
           - Shelf Life: 3 Years.
           - Suitability: সব ধরণের স্কিন এবং চোখের জন্য উপযোগী।
        `,

        images: [
        "product/jewellery/Hengfang Eyeliner/1.webp",
        "product/jewellery/Hengfang Eyeliner/2.webp",
        "product/jewellery/Hengfang Eyeliner/3.webp",
        "product/jewellery/Hengfang Eyeliner/4.webp"
        ],
        stock: true

    },

    



    { 
        id: 8000, 
        category: "undergarmage", 
        name: "Premium Soft Comfort Ladies Undergarments", 
        price: 399,
        best: true,
        featured: true,
        discount: 0, // 0% ছাড়ের জন্য 
        image: "product/jewellery/Hengfang Eyeliner/main.webp", 
        stars: 4,
        description: `Product Overview:
        প্রতিদিনের স্বাচ্ছন্দ্য এবং আত্মবিশ্বাসের জন্য আন্ডারগার্মেন্টসের সঠিক মান নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ। আমাদের এই কালেকশনটি তৈরি করা হয়েছে প্রিমিয়াম কোয়ালিটি ফেব্রিক দিয়ে, যা আপনার ত্বকের সাথে মিশে থাকবে একদম প্রাকৃতিকভাবে। আধুনিক ডিজাইন এবং নিখুঁত ফিটিংয়ের সমন্বয়ে এটি আপনাকে দেবে সারাদিন আরামদায়ক অভিজ্ঞতা।
        - Ultra-Soft Breathable Fabric: হাই-কোয়ালিটি কটন বা সিল্কি ফেব্রিক ব্যবহার করা হয়েছে, যা ত্বককে বাতাস চলাচলে সাহায্য করে এবং ঘাম শোষণ করে।
        - Perfect Fit & Support: এর ইলাস্টিক এবং কাটিং এমনভাবে ডিজাইন করা হয়েছে যা শরীরের সাথে পারফেক্টলি ফিট হয়ে থাকে এবং প্রয়োজনীয় সাপোর্ট দেয়।
        - Seamless Design: পোশাকের নিচে কোনো দাগ বা লাইন বোঝা যাবে না, ফলে আপনি যেকোনো আউটফিটের সাথে এটি অনায়াসেই পরতে পারবেন।
        - Skin Friendly: অ্যালার্জি-ফ্রি এবং নরম কাপড় ব্যবহারের ফলে ত্বকে কোনো র‍্যাশ বা চুলকানি হওয়ার ভয় নেই।
        - Durable Elasticity: বারবার ধোয়ার পরেও এর আকার বা ইলাস্টিক নষ্ট হবে না।

        Care Instructions: 
        ১. কাপড়ের স্থায়িত্ব বজায় রাখতে হালকা ডিটারজেন্ট দিয়ে হাত দিয়ে ধোওয়া সবচেয়ে ভালো।
        ২. সরাসরি কড়া রোদে শুকাবেন না, ছায়াযুক্ত স্থানে শুকিয়ে নিন যাতে রঙ নষ্ট না হয়।
        ৩. ইলাস্টিক ভালো রাখতে ইস্ত্রি (Iron) করা থেকে বিরত থাকুন।

        Technical Details:
           - Material: 95% Cotton / 5% Spandex (বা আপনার প্রোডাক্ট অনুযায়ী স্প্যানডেক্স/নাইলন)।
           - Size Availability: M, L, XL, XXL (বা ৩২ থেকে ৪৪ সাইজ)।
           - Color Options: Nude, Black, White, and Pastel shades.
           - Wash Care: Hand wash recommended for long-lasting use.
        `,

        images: [
        "product/jewellery/Hengfang Eyeliner/3.webp",
        "product/jewellery/Hengfang Eyeliner/4.webp"
        ],
        stock: true

    },



];   
