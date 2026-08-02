window.Sections = window.Sections || {};

const testimonialStars = (rating) =>
  Array.from({ length: 5 }, (_, i) =>
    `<i class="fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-200'} text-sm"></i>`
  ).join('');

window.Sections.testimonials = (data) => `
<section id="testimonials" class="bg-beige py-20 lg:py-28">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-16">
      <span class="inline-block bg-primary-light text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">מה אומרות המתאמנות</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
        המלצות אמיתיות - מילים של נשים וזוגות שעברו תהליך ושינו את חייהם:
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      ${data.testimonials.map(t => `
      <div class="quote-bg relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-plum-100 text-right overflow-hidden">
        <div class="flex justify-end gap-1 mb-5">
          ${testimonialStars(t.rating)}
        </div>
        <p class="text-gray-700 text-base leading-loose mb-8 relative z-10">
          "${t.quote}"
        </p>
        <div class="flex items-center justify-end gap-4 relative z-10">
          <div class="text-right"><p class="font-bold text-gray-800">${t.name}</p><p class="text-xs text-gray-400">${t.role}</p></div>
          <div class="w-11 h-11 bg-plum-200 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas ${t.is_couple ? 'fa-user-group' : 'fa-user'} text-plum-600 text-base"></i>
          </div>
        </div>
      </div>
      `).join('')}

    </div>
  </div>
</section>
`;
