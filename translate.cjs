const fs = require('fs');

let content = fs.readFileSync('src/EnglishApp.tsx', 'utf-8');

const replacements = {
    '"හිරුණි"': '"Hiruni"',
    '"කසුන්"': '"Kasun"',
    '"වර්ෂ 2026 ක් වූ අගෝස්තු මස 14 වන දින"': '"14th of August 2026"',
    '"පෙ.ව. 10.05"': '"10.05 AM"',
    '"ප.ව. 12.30"': '"12.30 PM"',
    '"ප.ව. 3.50"': '"3.50 PM"',
    '"දින"': '"Days"',
    '"පැය"': '"Hours"',
    '"මිනිත්තු"': '"Minutes"',
    '"තත්පර"': '"Seconds"',
    'සුන්දර මතක': 'Beautiful Memories',
    'අපගේ ආදර කතාවේ සුන්දරතම මොහොතක් ඔබ සමඟ බෙදා ගැනීමට අප සතුටින් බලා සිටිමු.': 'We are excited to share a beautiful moment of our love story with you.',
    'Google Script URL tl ilid ke;': 'Google Script URL missing',
    'b,a,Su id¾:l fkdùh': 'Request failed',
    'විවාහ ආරාධනයයි!': 'Wedding Invitation!',
    'විවාහ ආරාධනයයි': 'Wedding Invitation',
    '{INVITATION.couple.bride} සහ {INVITATION.couple.groom}': '{INVITATION.couple.bride} & {INVITATION.couple.groom}',
    'ආරාධනය විවෘත කරන්න': 'Open Invitation',
    'ආරම්භ කිරීමට ක්ලික් කරන්න': 'Click to start',
    'ආරාධනයට පිවිසෙන්න': 'Enter Invitation',
    'වසා දමන්න': 'Close',
    ' font-bold">සහ</span>': ' font-bold">&</span>',
    'අපගේ ජීවිතයේ අමතක නොවන සුබ මොහොත ඔබ සමඟ බෙදා ගැනීමට කැමැත්තෙමු!': 'We would love to share this unforgettable moment of our lives with you!',
    'K.A.D.S. කුමාර කුරුවිටආරච්චි මහතාගේ සහ R.P. ගීතානි සාලුකා රාජපක්ෂ මහත්මියගේ ආදරණීය දියණිය වන': 'Beloved daughter of Mr. K.A.D.S. Kumara Kuruwitaarachchi and Mrs. R.P. Geethani Saluka Rajapaksha',
    'S. සරත් චන්ද්‍රසිරි මහතාගේ සහ K.W. ශ්‍රියානි මල්ලිකා මහත්මියගේ ආදරණීය පුත් වන': 'Beloved son of Mr. S. Sarath Chandrasiri and Mrs. K.W. Shriyani Mallika',
    'සමඟ අතිනත ගන්නා සොඳුරු මොහොත, ඔබගේ ආශීර්වාදයෙන් වර්ණවත් කර ගැනීමට සෙනෙහසින් ඇරයුම් කරන්නෙමු.': 'Invite you to join them as they tie the knot and celebrate their love.',
    'ශ්‍රී සුභ මංගලම්': 'Wedding Celebration',
    'දිනය<': 'Date<',
    'වේලාව<': 'Time<',
    'පෝරුව චාරිත්‍ර:': 'Poruwa Ceremony:',
    'දිවා ආහාරය:': 'Lunch:',
    'පිටත්වීම:': 'Departure:',
    'ස්ථානය<': 'Venue<',
    'මෙම දිනය': 'Save',
    'සුරකින්න': 'The Date',
    'ආදරයෙන් පිරුණු මොහොතකට රැඳී සිටින්න': 'Join us for a moment filled with love',
    'පැමිණීම තහවුරු කිරීම': 'RSVP',
    'ඔබ පැමිණෙන්නේද?': 'Will you be attending?',
    'ඔබගේ නම<': 'Your Name<',
    'ඔබගේ නම මෙහි ලියන්න...': 'Type your name here...',
    'අපගේ විශේෂ දිනයට ඔබ පැමිණෙන්නේද?': 'Will you be joining us on our special day?',
    'ඔව්, මම ආදරයෙන් පැමිණෙන්නම්!': 'Yes, I would love to attend!',
    'කණගාටුයි, මට පැමිණිය නොහැක. නමුත් මගේ ආශීර්වාදය ඔබ සමඟයි.': "Sorry, I won't be able to make it.",
    'ඔබගේ පැමිණීම තහවුරු කිරීම සාර්ථකව යවා ඇත.': 'Your RSVP has been submitted successfully.',
    'කරුණාකර ඔබගේ නම ඇතුළත් කර නැවත උත්සාහ කරන්න.': 'Please enter your name and try again.',
    'යවමින්...': 'Sending...',
    'තහවුරු කරන්න': 'Submit',
    'ඔබගේ ප්‍රතිචාරය පුද්ගලිකව තබා ගනු ලැබේ.': 'Your response will be kept private.',
    'ස්තූතියි': 'Thank You',
    'සෙනෙහසින් ලියැවෙන අපගේ ජීවිත කතාවේ සුන්දරතම දිනය, ඔබගේ පැමිණීමෙන් තවත් අර්ථවත් වනු ඇතැයි අප විශ්වාස කරමු': 'We believe that the most beautiful day of our love story will be even more meaningful with your presence.',
    'සම්බන්ධතා': 'Contact',
    'dl-manel-bold': 'english-font-class', // replacing sinhala font class if it exists
};

for (const [key, value] of Object.entries(replacements)) {
    content = content.split(key).join(value);
}

fs.writeFileSync('src/EnglishApp.tsx', content);
console.log("Translation done");
