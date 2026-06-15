document.getElementById('app').insertAdjacentHTML('beforeend', `
<footer class="bg-gray-950 text-gray-400 pt-14 pb-8">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 text-right mb-10">

      <div>
        <div class="flex items-center justify-end gap-3 mb-4">
          <div class="leading-tight">
            <p class="text-xl font-extrabold text-white">ריקי</p>
            <p class="text-xs text-gray-500">אימון אישי &amp; זוגי</p>
          </div>
          <img src="photos/logo.png" alt="לוגו ריקי"
               class="w-12 h-12 rounded-2xl flex-shrink-0 object-contain" />
        </div>
        <p class="text-sm leading-relaxed text-gray-500">אימון ממוקד שהופך אתגרים לצמיחה אישית ומובילה את הבית להצלחה.</p>
      </div>

      <div>
        <h4 class="text-white font-bold mb-5 text-base">יצירת קשר</h4>
        <ul class="space-y-3 text-sm">
          <li>
            <a href="tel:+972586566957" class="flex items-center justify-end gap-3 hover:text-plum-400 transition-colors">
              <span dir="ltr">058-656-6957</span><i class="fas fa-phone text-plum-500 w-4"></i>
            </a>
          </li>
          <li>
            <a href="mailto:laufer.riki@gmail.com" class="flex items-center justify-end gap-3 hover:text-plum-400 transition-colors">
              <span>laufer.riki@gmail.com</span><i class="fas fa-envelope text-plum-500 w-4"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/972586566957" target="_blank" rel="noopener noreferrer" class="flex items-center justify-end gap-3 hover:text-plum-400 transition-colors">
              <span>WhatsApp</span><i class="fab fa-whatsapp text-plum-500 w-4"></i>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-5 text-base">מיקום</h4>
        <div class="flex items-start justify-end gap-3 text-sm text-gray-500">
          <div class="leading-relaxed">
            <p>קליניקה בפתח תקווה</p>
            <p>+ מפגשים בזום ובטלפון</p>
            <p>+ סדנאות זוגיות וקבוצתיות</p>
          </div>
          <i class="fas fa-location-dot text-plum-500 mt-0.5 flex-shrink-0"></i>
        </div>
      </div>

    </div>
    <div class="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
      &copy; 2024 ריקי – אימון אישי וזוגי. כל הזכויות שמורות.
    </div>
  </div>
</footer>

<a href="https://wa.me/972586566957" target="_blank" rel="noopener noreferrer"
   aria-label="פנייה בוואטסאפ"
   class="wa-float fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#1aab53] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
   style="width:3.5rem;height:3.5rem;">
  <i class="fab fa-whatsapp text-3xl"></i>
</a>
`);
