document.getElementById('app').insertAdjacentHTML('beforeend', `
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between py-3">

      <!-- Logo — right side (first child in RTL flex = right) -->
      <div class="flex items-center gap-3">
        <img src="photos/logo.png" alt="לוגו ריקי"
             class="w-11 h-11 rounded-xl flex-shrink-0 object-contain" />
        <div class="leading-tight text-right">
          <div class="text-lg font-extrabold" style="color:#1e6b6f;">ריקי לאופר</div>
          <div class="text-xs text-gray-400 font-medium">אימון אישי &amp; זוגי</div>
        </div>
      </div>

      <!-- Nav + hamburger — left side (last child in RTL flex = left) -->
      <div class="flex items-center gap-3">
        <nav class="hidden md:flex items-center gap-3" aria-label="יצירת קשר">
          <a href="https://wa.me/972528566957" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow"
             style="background-color:#25D366;">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="tel:+972528566957"
             class="btn-primary inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow">
            <i class="fas fa-phone text-sm"></i> חייגי עכשיו
          </a>
          <a href="mailto:laufer.riki@gmail.com"
             class="inline-flex items-center gap-2 border-2 px-5 py-2 rounded-full text-sm font-semibold transition-all"
             style="border-color:#1e6b6f;color:#1e6b6f;">
            <i class="fas fa-envelope text-sm"></i> מייל
          </a>
        </nav>
        <button id="menuToggle" aria-label="פתח תפריט" aria-expanded="false"
                class="md:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors">
          <i class="fas fa-bars text-xl" id="menuIcon"></i>
        </button>
      </div>

    </div>

    <!-- Mobile dropdown -->
    <div id="mobileNav" class="hidden md:hidden pb-5 pt-2 border-t border-gray-100 space-y-3">
      <a href="https://wa.me/972528566957" target="_blank" rel="noopener noreferrer"
         class="flex items-center justify-center gap-2 text-white px-4 py-3 rounded-2xl text-sm font-semibold"
         style="background-color:#25D366;">
        <i class="fab fa-whatsapp text-lg"></i> WhatsApp
      </a>
      <a href="tel:+972528566957"
         class="btn-primary flex items-center justify-center gap-2 text-white px-4 py-3 rounded-2xl text-sm font-semibold">
        <i class="fas fa-phone"></i> חייגי עכשיו
      </a>
      <a href="mailto:laufer.riki@gmail.com"
         class="flex items-center justify-center gap-2 border-2 px-4 py-3 rounded-2xl text-sm font-semibold"
         style="border-color:#1e6b6f;color:#1e6b6f;">
        <i class="fas fa-envelope"></i> שלחי מייל
      </a>
    </div>
  </div>
</header>
`);
