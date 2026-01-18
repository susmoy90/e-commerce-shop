// মোবাইল মেনু লজিক
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close && nav) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// স্লাইডার চেক (শুধু তখনই চলবে যখন স্লাইডার এলিমেন্ট থাকবে)
if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

// Mobile menu er jono

function showInfo(type) {
    const modal = document.getElementById('trust-modal');
    const body = document.getElementById('modal-body');
    
    let content = "";

    if(type === 'delivery') {
        content = `
            <h3>🚚 ডেলিভারি ইনফরমেশন</h3>
            <p>আমরা সারা বাংলাদেশে দ্রুততম সময়ে ডেলিভারি নিশ্চিত করি।<br>
            <b>ঢাকা সিটি:</b> ২৪-৪৮ ঘণ্টার মধ্যে।<br>
            <b>ঢাকার বাইরে:</b> ৩-৫ কার্যদিবস।</p>
        `;
    } else if(type === 'return') {
        content = `
            <h3>🔄 সহজ রিটার্ন পলিসি</h3>
            <p>আমাদের পণ্য নিয়ে কোনো সমস্যা থাকলে ৭ দিনের মধ্যে এক্সচেঞ্জ বা রিটার্ন করতে পারবেন।<br>
            শর্ত থাকে যে পণ্যটি অক্ষত এবং অব্যবহৃত থাকতে হবে।</p>
        `;
    }else if(type === 'support') {
            content = `
                <h3>📞 কাস্টমার সাপোর্ট</h3>
                <p>যেকোনো প্রয়োজনে আমাদের কল দিন বা মেসেজ করুন:</p>
                
                <div class="call-section">
                    <div class="call-box">
                        <i class="fas fa-phone-alt main-call-icon"></i>
                        <div class="numbers">
                            <a href="tel:+8801928194590">01928-194590</a>
                            <a href="tel:+8801778898153">01778898153</a> </div>
                    </div>
                </div>
                <div class="support-grid">
                    <a href="https://api.whatsapp.com/send?phone=8801928194590" target="_blank" class="support-box whatsapp">
                        <i class="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </a>
                    
                    <a href="https://www.messenger.com/t/525849023946041" target="_blank" class="support-box messenger">
                        <i class="fab fa-facebook-messenger"></i>
                        <span>Messenger</span>
                    </a>
                </div>
            `;
        }

    body.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('trust-modal').style.display = 'none';
}

// বক্সের বাইরে ক্লিক করলে বন্ধ হবে
window.onclick = function(event) {
    const modal = document.getElementById('trust-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function setupSocialShare(productName) {
    const productUrl = window.location.href;
    const fbShare = document.getElementById('fb-share');
    const waShare = document.getElementById('wa-share');

    if(fbShare) fbShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
    if(waShare) waShare.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(productName + " - " + productUrl)}`;
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    showToast("লিঙ্ক কপি করা হয়েছে!"); // তোমার আগের বানানো টোস্ট নোটিফিকেশন
}


function toggleChat() {
    const options = document.getElementById('chatOptions');
    const icon = document.getElementById('chatIcon');
    
    if (options.style.display === "flex") {
        options.style.display = "none";
        icon.classList.replace('fa-times', 'fa-headset');
    } else {
        options.style.display = "flex";
        icon.classList.replace('fa-headset', 'fa-times');
    }
}
