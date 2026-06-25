// נמתין שה-DOM ייטען במלואו לפני שנפעיל את המאזינים
document.addEventListener("DOMContentLoaded", function () {

    // אלמנטים של הטופס
    const userNameInput = document.getElementById("userName");
    const skinTypeRadios = document.getElementsByName("skinType");
    const checkRedness = document.getElementById("checkRedness");
    const checkPigmentation = document.getElementById("checkPigmentation");
    const formBtn = document.getElementById("formBtn");

    // אלמנטים של התצוגה הויזואלית (תמונות ובוסטרים)
    const imgAcneOily = document.getElementById("imgAcneOily");
    const imgDry = document.getElementById("imgDry");
    const placeholderText = document.getElementById("placeholderText");
    const boosterCentella = document.getElementById("boosterCentella");
    const boosterVitaminC = document.getElementById("boosterVitaminC");

    // אלמנט פלט הודעת הסיכום
    const summaryOutput = document.getElementById("diagnosticResultSummary");

    // =======================================================
    // 1. פונקציה לבדיקת תקינות הטופס והפעלת הכפתור
    // =======================================================
    function validateForm() {
        const isNameFilled = userNameInput.value.trim() !== "";

        let isRadioSelected = false;
        for (let i = 0; i < skinTypeRadios.length; i++) {
            if (skinTypeRadios[i].checked) {
                isRadioSelected = true;
                break;
            }
        }

        // כפתור האישור יופעל רק אם שני התנאים התקיימו
        if (isNameFilled && isRadioSelected) {
            formBtn.disabled = false; // הופך לזמין
        } else {
            formBtn.disabled = true;  // נשאר חסום עם שקיפות 0.5 מה-CSS
        }
    }

    // מאזינים לשינויים בטקסט וברדיו לצורך הפעלת הכפתור
    userNameInput.addEventListener("input", validateForm);
    skinTypeRadios.forEach(radio => {
        radio.addEventListener("change", validateForm);
    });

    // =======================================================
    // 2. מאזין לשינוי ברדיו - החלפת תמונות לפי סוג עור
    // =======================================================
    skinTypeRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            // החבאת ה-placeholder הראשי
            placeholderText.style.display = "none";

            // איפוס תצוגת התמונות
            imgAcneOily.style.display = "none";
            imgDry.style.display = "none";

            // הצגת התמונה הרלוונטית לפי הבחירה
            if (this.value === "acne" || this.value === "oily") {
                imgAcneOily.style.display = "block";
            } else if (this.value === "dry") {
                imgDry.style.display = "block";
            }
        });
    });

    // =======================================================
    // 3. מאזינים לצ'קבוקסים - שינוי שקיפות (Opacity) בזמן אמת
    // =======================================================
    checkRedness.addEventListener("change", function () {
        if (this.checked) {
            boosterCentella.classList.add("opacity-full");
        } else {
            boosterCentella.classList.remove("opacity-full");
        }
    });

    checkPigmentation.addEventListener("change", function () {
        if (this.checked) {
            boosterVitaminC.classList.add("opacity-full");
        } else {
            boosterVitaminC.classList.remove("opacity-full");
        }
    });

    // =======================================================
    // 4. לחיצה על כפתור האישור - הצגת הודעת סיכום טקסטואלית
    // =======================================================
    formBtn.addEventListener("click", function () {
        const name = userNameInput.value.trim();
        let selectedSkinTypeText = "";

        // מציאת הטקסט של סוג העור שנבחר
        for (let i = 0; i < skinTypeRadios.length; i++) {
            if (skinTypeRadios[i].checked) {
                selectedSkinTypeText = skinTypeRadios[i].parentNode.textContent.trim();
                break;
            }
        }

        // בדיקת בחירות הצ'קבוקסים להודעה
        let extraTreatments = [];
        if (checkRedness.checked) extraTreatments.push("טיפול באדמומיות והרגעת העור");
        if (checkPigmentation.checked) extraTreatments.push("הבהרת פיגמנטציה וכתמים");

        let extraText = "";
        if (extraTreatments.length > 0) {
            extraText = `<br><strong>תוספות ממוקדות לשגרה שלך:</strong> ${extraTreatments.join(" וכן ")}.`;
        } else {
            extraText = "<br>לא נבחרו בעיות עור משניות, השגרה שלך תתמקד בבסיס המאוזן והבריא.";
        }

        // בניית הודעת הסיכום הסופית
        summaryOutput.innerHTML = `
            <h3> האבחון המושלם עבורך, ${name}!</h3>
            <p>
                על פי הנתונים שהזנת, סוג העור הראשי שלך הוגדר כ: <strong>${selectedSkinTypeText}</strong>.
                בנינו עבורך את בסיס השגרה הקוריאנית המתאים ביותר לצרכים אלו, והמוצרים המומלצים מוצגים כעת על המסך.
                ${extraText}
            </p>
            <p><strong>טיפ מצוות K-GLOW:</strong> הקפידי על התמדה וסבלנות, התוצאות המדהימות בדרך!</p>
        `;

        // הצגת האלמנט החזותי של הסיכום
        summaryOutput.style.display = "block";

        // גלילה חלקה למטה אל עבר התוצאה
        summaryOutput.scrollIntoView({ behavior: 'smooth' });
    });

});