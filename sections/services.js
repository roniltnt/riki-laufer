document.getElementById('app').insertAdjacentHTML('beforeend', `
<section id="services" class="bg-beige py-20 lg:py-28">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-16">
      <span class="inline-block bg-plum-100 text-plum-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">תחומי ההתמחות</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
        איך אוכל <span class="text-gradient">לעזור לך?</span>
      </h2>
      <p class="text-gray-500 max-w-md mx-auto text-base">מגוון תחומי אימון המותאמים לצרכים הייחודיים שלך</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <div class="lift bg-white rounded-3xl p-8 shadow-sm border border-plum-100 text-center">
        <div class="w-14 h-14 bg-plum-100 rounded-2xl flex items-center justify-center mb-6 mx-auto"><i class="fas fa-heart text-plum-600 text-2xl"></i></div>
        <h3 class="text-xl font-bold text-gray-800 mb-3">אימון אישי: גילוי חוזקות וקבלת כלים להכרת הכוחות שבך.</h3>
        <p class="text-gray-500 text-base leading-relaxed">פיתוח חוסן, קבלת החלטות וניהול עומסים.</p>
      </div>

      <div class="lift bg-white rounded-3xl p-8 shadow-sm border border-plum-100 text-center">
        <div class="w-14 h-14 bg-plum-100 rounded-2xl flex items-center justify-center mb-6 mx-auto"><i class="fas fa-handshake text-plum-600 text-2xl"></i></div>
        <h3 class="text-xl font-bold text-gray-800 mb-3">ייעוץ זוגי</h3>
        <p class="text-gray-500 text-base leading-relaxed">שיפור תקשורת, פתרון קונפליקטים וחידוש האינטימיות.</p>
      </div>

      <div class="lift bg-white rounded-3xl p-8 shadow-sm border border-plum-100 text-center">
        <div class="w-14 h-14 bg-plum-100 rounded-2xl flex items-center justify-center mb-6 mx-auto"><i class="fas fa-child text-plum-600 text-2xl"></i></div>
        <h3 class="text-xl font-bold text-gray-800 mb-3">הורות וסמכות</h3>
        <p class="text-gray-500 text-base leading-relaxed">כלים פרקטיים להתמודדות עם אתגרי גידול הילדים מתוך חיבור ורוגע.</p>
      </div>

      <div class="lift bg-white rounded-3xl p-8 shadow-sm border border-plum-100 text-center">
        <div class="w-14 h-14 bg-plum-100 rounded-2xl flex items-center justify-center mb-6 mx-auto"><i class="fas fa-ring text-plum-600 text-2xl"></i></div>
        <h3 class="text-xl font-bold text-gray-800 mb-3">הדרכת כלות</h3>
        <p class="text-gray-500 text-base leading-relaxed">הכנה אמונית ורוחנית ליצירת יסודות חזקים לבית החדש.</p>
      </div>

      <div class="lift bg-white rounded-3xl p-8 shadow-sm border border-plum-100 text-center sm:col-span-2 lg:col-span-1">
        <div class="w-14 h-14 bg-plum-100 rounded-2xl flex items-center justify-center mb-6 mx-auto"><i class="fas fa-comments text-plum-600 text-2xl"></i></div>
        <h3 class="text-xl font-bold text-gray-800 mb-3">ייעוץ לחיי אישות</h3>
        <p class="text-gray-500 text-base leading-relaxed">איבחון ומתן ייעוץ וכלים להתמודדות עם בעיות בתחום האישות.</p>
      </div>

      <div class="card-cta-bg rounded-3xl p-8 text-center flex flex-col justify-between shadow-lg sm:col-span-2 lg:col-span-1" style="background-color:#1e6b6f;">
        <div>
          <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto"><i class="fas fa-star text-white text-2xl"></i></div>
          <h3 class="text-xl font-bold text-white mb-3">רוצה לדעת איך אני יכולה לעזור לך?</h3>
          <p class="text-base leading-relaxed mb-6" style="color:#b5e6e9;">שיחת היכרות קצרה וחינמית – ללא מחויבות.</p>
        </div>
        <a href="https://wa.me/972586566957" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center justify-center gap-2 bg-white text-plum-700 hover:bg-plum-50 px-6 py-3 rounded-full font-bold text-sm transition-all self-center">
          <i class="fab fa-whatsapp"></i> דברי איתי
        </a>
      </div>

    </div>
  </div>
</section>
`);
