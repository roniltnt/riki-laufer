document.getElementById('app').insertAdjacentHTML('beforeend', `
<section id="testimonials" class="bg-beige py-20 lg:py-28">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-16">
      <span class="inline-block bg-primary-light text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">מה אומרות המתאמנות</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
        המלצות אמיתיות - מילים של נשים וזוגות שעברו תהליך ושינו את חייהם:
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div class="quote-bg relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-plum-100 text-right overflow-hidden">
        <div class="flex justify-end gap-1 mb-5">
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i>
        </div>
        <p class="text-gray-700 text-base leading-loose mb-8 relative z-10">
          "אני רוצה להמליץ מכל הלב על הליווי והאימון של ריקי, התהליך עזר לי לפתח
          מודעות עצמית גבוהה יותר, ללמוד להקשיב לעצמי, ולשחרר הרבה מהביקורת העצמית
          שעצרה אותי בעבר. הצלחתי להתמקד ולהשיג את המטרות והיעדים שהצבתי לעצמי,
          ואני מלאה הכרת תודה על זה!"
        </p>
        <div class="flex items-center justify-end gap-4 relative z-10">
          <div class="text-right"><p class="font-bold text-gray-800">ר.ב.</p><p class="text-xs text-gray-400">מתאמנת</p></div>
          <div class="w-11 h-11 bg-plum-200 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-user text-plum-600 text-base"></i>
          </div>
        </div>
      </div>

      <div class="quote-bg relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-plum-100 text-right overflow-hidden">
        <div class="flex justify-end gap-1 mb-5">
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i>
        </div>
        <p class="text-gray-700 text-base leading-loose mb-8 relative z-10">
          "האימון עם ריקי משמעותי בשבילי, הולך איתי ביומיום ואני ממשיכה לפתח את
          הכלים שרכשתי בעבודה איתה. היא נעימה וקשובה וממש טבעי לעשות איתה דרך
          והתקדמות :)"
        </p>
        <div class="flex items-center justify-end gap-4 relative z-10">
          <div class="text-right"><p class="font-bold text-gray-800">ע.כ.</p><p class="text-xs text-gray-400">מתאמנת</p></div>
          <div class="w-11 h-11 bg-plum-200 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-user text-plum-600 text-base"></i>
          </div>
        </div>
      </div>

      <div class="quote-bg relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-plum-100 text-right overflow-hidden">
        <div class="flex justify-end gap-1 mb-5">
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i>
        </div>
        <p class="text-gray-700 text-base leading-loose mb-8 relative z-10">
          "הזמן טס נהנו מאוד. החכמנו מהמפגש. הייתה לך את הסבלנות, החכמה והרגישות
          לגעת אך לא לדרוך על נקודות בעייתיות. תודה רבה!"
        </p>
        <div class="flex items-center justify-end gap-4 relative z-10">
          <div class="text-right"><p class="font-bold text-gray-800">זוג</p><p class="text-xs text-gray-400">מתאמנים</p></div>
          <div class="w-11 h-11 bg-plum-200 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-user-group text-plum-600 text-base"></i>
          </div>
        </div>
      </div>

      <div class="quote-bg relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-plum-100 text-right overflow-hidden">
        <div class="flex justify-end gap-1 mb-5">
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i><i class="fas fa-star text-yellow-400 text-sm"></i>
          <i class="fas fa-star text-yellow-400 text-sm"></i>
        </div>
        <p class="text-gray-700 text-base leading-loose mb-8 relative z-10">
          "הרגשנו את המאמץ להבין לליבו של כל אחד מאיתנו, וכל זאת להישאר ניטרלית.
          תודה על האכפתיות והמסירות להעלות את הזוגיות שלנו על דרך המלך. תודה רבה!!!"
        </p>
        <div class="flex items-center justify-end gap-4 relative z-10">
          <div class="text-right"><p class="font-bold text-gray-800">זוג</p><p class="text-xs text-gray-400">מתאמנים</p></div>
          <div class="w-11 h-11 bg-plum-200 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-user-group text-plum-600 text-base"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
`);
