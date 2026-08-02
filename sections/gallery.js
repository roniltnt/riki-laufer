window.Sections = window.Sections || {};

window.Sections.gallery = (data) => {
  const photos = (data.workshop_photos || []).filter(p => p && p.image);
  if (!photos.length) return '';

  return `
<section id="gallery" class="bg-white py-20 lg:py-28">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-14">
      <span class="inline-block bg-plum-100 text-plum-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">רגעים מהסדנאות</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
        תמונות <span class="text-gradient">מהסדנאות</span>
      </h2>
      <p class="text-gray-500 max-w-md mx-auto text-base">הצצה לאווירה ולרגעים המשמעותיים מהמפגשים</p>
    </div>

    <div class="relative">
      <!-- Carousel mechanics are direction-agnostic (translateX), so this widget is
           deliberately scoped to dir="ltr" regardless of the page's RTL context;
           captions inside are switched back to dir="rtl" for correct Hebrew shaping. -->
      <div dir="ltr" class="overflow-hidden rounded-3xl shadow-sm border border-plum-100">
        <div id="galleryTrack" class="flex transition-transform duration-500 ease-out">
          ${photos.map((p, i) => `
          <div class="gallery-slide w-full flex-shrink-0" data-index="${i}">
            <div class="h-72 sm:h-96 lg:h-[26rem] bg-plum-50">
              <img src="${p.image}" alt="${p.caption || 'תמונה מהסדנה'}" class="w-full h-full object-cover" loading="lazy" />
            </div>
            ${p.caption ? `<p dir="rtl" class="mt-3 text-center text-sm text-gray-500">${p.caption}</p>` : ''}
          </div>
          `).join('')}
        </div>
      </div>

      ${photos.length > 1 ? `
      <button id="galleryPrev" aria-label="התמונה הקודמת" class="gallery-arrow hidden sm:flex items-center justify-center absolute top-[35%] -translate-y-1/2 left-4 w-11 h-11 rounded-full shadow-lg transition-colors">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="galleryNext" aria-label="התמונה הבאה" class="gallery-arrow hidden sm:flex items-center justify-center absolute top-[35%] -translate-y-1/2 right-4 w-11 h-11 rounded-full shadow-lg transition-colors">
        <i class="fas fa-chevron-right"></i>
      </button>
      ` : ''}
    </div>

    ${photos.length > 1 ? `
    <div id="galleryDots" class="flex justify-center gap-2 mt-6">
      ${photos.map((_, i) => `<button aria-label="עבור לתמונה ${i + 1}" data-index="${i}" class="gallery-dot rounded-full transition-all${i === 0 ? ' active' : ''}"></button>`).join('')}
    </div>
    ` : ''}

  </div>
</section>
`;
};
