window.Sections = window.Sections || {};

window.Sections.about = (data) => `
<section id="about" class="bg-white py-20 lg:py-28">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">

    <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight mb-8">
      קצת עלי
    </h2>

    <div class="space-y-5 text-gray-600 text-lg leading-relaxed">
      <p>${data.about.text}</p>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-4">
      <div class="bg-primary-light rounded-2xl p-5 text-center">
        <p class="text-2xl font-extrabold text-primary mb-1">אמא ל-10</p>
        <p class="text-sm text-gray-500">ניסיון חיים אמיתי</p>
      </div>
      <div class="bg-primary-light rounded-2xl p-5 text-center">
        <p class="text-2xl font-extrabold text-primary mb-1">100%</p>
        <p class="text-sm text-gray-500">מחויבות לתהליך שלך</p>
      </div>
    </div>

  </div>
</section>
`;
