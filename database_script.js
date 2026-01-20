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
    
    



    

];   
