const fs = require('fs');
const path = 'e:/QB/wedding/kasun hiruni/no-font-sinhala.txt';
let content = fs.readFileSync(path, 'utf8');

const newInvitation = `const INVITATION = {
  couple: {
    bride: "හිරුණි",
    groom: "කසුන්",
    brideFull: "හිරුණි",
    groomFull: "කසුන්",
  },
  date: {
    displayNumeric: "14 . 08 . 2026",
    displayLong: "සිකුරාදා, 14 අගෝස්තු 2026",
    countdownTarget: "August 14, 2026 10:05:00",
  },
  time: {
    ceremony: "10:05 AM",
    reception: "12:30 PM",
  },
  venue: {
    name: "Nels dimora hotel",
    city: "Kalagedihena",
    mapQuery: "Nels dimora hotel, Kalagedihena",
    googleMapsLink: "https://maps.app.goo.gl/BP2Lw5JMSKtXyxMXA?g_st=aw",
  },
  rsvpContacts: [
    "කසුන්: ",
    "හිරුණි: ",
    "පවුල: ",
  ],
} as const;`;

content = content.replace(/const INVITATION = \{[\s\S]*?\} as const;/, newInvitation);

const newParents = `<span className="text-sm md:text-base font-cinzel tracking-wider text-stone-700">මහත්මා S.සරත් චන්ද්රසිරි සහ මහත්මිය K.W.ශ්රියානි මල්ලිකා</span>
                <span className="font-playball text-2xl text-[#FD8A6B] italic my-2">සමඟ</span>
                <span className="text-sm md:text-base font-cinzel tracking-wider text-stone-700">මහත්මා K.A.D.S කුමාර කුරුවිටආරච්චි සහ මහත්මිය R.P ගීතානි සාලුකා රාජපක්ෂ</span>`;

content = content.replace(/<span className="text-sm md:text-base font-cinzel tracking-wider text-stone-700">මහත්මා Hemasiri Amarasinghe සහ මහත්මිය Gnana Hettiarachchi<\/span>[\s\S]*?<span className="font-playball text-2xl text-\\[#FD8A6B\\] italic my-2">සමඟ<\/span>[\s\S]*?<span className="text-sm md:text-base font-cinzel tracking-wider text-stone-700">මහත්මිය Himali Koralage සහ මහත්මා Chaminda Liyangasthenne \(අභාවප්‍රාප්ත\)<\/span>/, newParents);

const newSchedule = `<div className="p-8 md:p-12 space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#FD8A6B]/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#FD8A6B]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-[#C30E59]/40 font-cinzel">පෝරුව</div>
                  <div className="text-sm md:text-base text-[#C30E59] font-cinzel tracking-wide font-bold">පෙ.ව. 10:05</div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#FD8A6B]/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#FD8A6B]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-[#C30E59]/40 font-cinzel">දිවා ආහාරය</div>
                  <div className="text-sm md:text-base text-[#C30E59] font-cinzel tracking-wide font-bold">ප.ව. 12:30</div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#FD8A6B]/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#FD8A6B]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-[#C30E59]/40 font-cinzel">මනාල යුවල පිටත්වීම</div>
                  <div className="text-sm md:text-base text-[#C30E59] font-cinzel tracking-wide font-bold">ප.ව. 03:50</div>
                </div>
              </div>
            </div>`;

content = content.replace(/<div className="p-8 md:p-12 space-y-8">[\s\S]*?<!-- Countdown Section -->/, newSchedule + '\n          </div>\n        </div>\n      </section>\n\n      {/* Countdown Section -->');

fs.writeFileSync(path, content, 'utf8');
