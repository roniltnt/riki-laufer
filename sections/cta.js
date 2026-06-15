document.getElementById('app').insertAdjacentHTML('beforeend', `
<section id="contact" class="cta-gradient py-20 lg:py-28 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-72 h-72 bg-white opacity-[0.04] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-[0.04] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
  <div class="absolute inset-0 opacity-5 pointer-events-none"
       style="background-image:radial-gradient(circle,#fff 1px,transparent 1px);background-size:28px 28px;"></div>

  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <span class="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
      🌟&nbsp; שיחת היכרות ללא עלות
    </span>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
      הגיע הזמן להפסיק<br />
      <span style="color:#b5e6e9;">להרגיש שחיקה</span>
    </h2>
    <p class="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style="color:#d9f2f4;">
      העומס והבלבול לא חייבים לנהל אותך. אני מזמינה אותך לשיחת היכרות קצרה וממוקדת –
      ללא עלות – כדי לבחון יחד איך תהליך האימון יכול להזניק את החיים שלך קדימה.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://wa.me/972586566957" target="_blank" rel="noopener noreferrer"
         class="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1aab53] text-white px-8 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
        <i class="fab fa-whatsapp text-xl"></i> פנייה בוואטסאפ
      </a>
      <a href="tel:+972586566957"
         class="flex items-center justify-center gap-3 bg-white text-plum-700 hover:bg-plum-50 px-8 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
        <i class="fas fa-phone"></i> חייגי עכשיו
      </a>
      <a href="mailto:laufer.riki@gmail.com"
         class="flex items-center justify-center gap-3 border-2 border-white/80 text-white hover:bg-white hover:text-plum-700 px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105">
        <i class="fas fa-envelope"></i> שלחי מייל
      </a>
    </div>
  </div>
</section>
`);
