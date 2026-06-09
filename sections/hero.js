document.getElementById('app').insertAdjacentHTML('beforeend', `
<section class="hero-gradient relative overflow-hidden">
  <div class="absolute -top-20 -left-20 w-72 h-72 bg-plum-200 rounded-full opacity-40 blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-96 h-96 bg-plum-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      <!-- Text — right column in RTL -->
      <div class="order-2 lg:order-1 text-right">
        <span class="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm bg-primary-light" style="color:#1e6b6f;">
          ✨&nbsp; אימון אישי וזוגי מקצועי
        </span>
        <h1 class="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-800 leading-[1.15] mb-6">
          לפרוץ מחסומים,<br />
          <span class="text-gradient">למצוא איזון</span><br />
          ולהוביל את הבית<br />להצלחה.
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
          אימון ממוקד בשיחת זום, טלפון או בקליניקה בפתח תקווה.
          אימון ההופך אתגרים לצמיחה אישית בעזרת כלים וכוחות מעולמה של המתאמנת.
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-4">
          <a href="https://wa.me/972528566957" target="_blank" rel="noopener noreferrer"
             class="flex items-center justify-center gap-3 text-white px-7 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
             style="background-color:#25D366;">
            <i class="fab fa-whatsapp text-xl"></i> פנייה בוואטסאפ
          </a>
          <a href="tel:+972528566957"
             class="btn-primary flex items-center justify-center gap-3 text-white px-7 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            <i class="fas fa-phone"></i> 052-856-6957
          </a>
          <a href="mailto:laufer.riki@gmail.com"
             class="flex items-center justify-center gap-3 px-7 py-4 rounded-full text-base font-bold border-2 transition-all hover:-translate-y-0.5"
             style="border-color:#1e6b6f;color:#1e6b6f;">
            <i class="fas fa-envelope"></i> שלחי מייל
          </a>
        </div>
        <div class="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-500">
          <span class="flex items-center gap-2"><i class="fas fa-circle-check" style="color:#6a9b9e;"></i> שיחת היכרות ללא עלות</span>
          <span class="flex items-center gap-2"><i class="fas fa-circle-check" style="color:#6a9b9e;"></i> סביבה בטוחה ודיסקרטית</span>
          <span class="flex items-center gap-2"><i class="fas fa-circle-check" style="color:#6a9b9e;"></i> זום, טלפון או קליניקה</span>
        </div>
      </div>

      <!-- Photo — left column in RTL -->
      <div class="order-1 lg:order-2 flex justify-center lg:justify-start">
        <div class="relative">
          <!-- Spinning dashed ring -->
          <div class="absolute -inset-5 rounded-full border-2 border-dashed opacity-50 animate-spin"
               style="border-color:#82d4d8;animation-duration:22s;"></div>
          <img src="photos/profile.png" alt="ריקי"
               class="w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl relative z-10"
               style="width:clamp(18rem,40vw,26rem);height:clamp(18rem,40vw,26rem);object-position:center 35%;" />
        </div>
      </div>

    </div>
  </div>

  <div class="wave-bottom">
    <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-12 fill-white">
      <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/>
    </svg>
  </div>
</section>
`);
