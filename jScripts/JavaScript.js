document.addEventListener("DOMContentLoaded", function () {

    // אלמנטים של הטופס
    const userNameInput = document.getElementById("userName");
    const skinTypeRadios = document.getElementsByName("skinType");
    const checkRedness = document.getElementById("checkRedness");
    const checkPigmentation = document.getElementById("checkPigmentation");
    const formBtn = document.getElementById("formBtn");

    // אלמנטים חזותיים
    const imgAcneOily = document.getElementById("imgAcneOily");
    const imgDry = document.getElementById("imgDry");
    const placeholderText = document.getElementById("placeholderText");
    const boosterCentella = document.getElementById("boosterCentella");
    const boosterVitaminC = document.getElementById("boosterVitaminC");
    const summaryOutput = document.getElementById("diagnosticResultSummary");

    // פונקציה לבדיקה אם הטופס מוכן כדי להפעיל את הכפתור
    function validateForm() {
        const isNameFilled = userNameInput.value.trim() !== "";

        let isRadioSelected = false;
        for (let i = 0; i < skinTypeRadios.length; i++) {
            if (skinTypeRadios[i].checked) {
                isRadioSelected = true;
                break;
            }
        }

        // שינוי מצב הכפתור
        if (isNameFilled && isRadioSelected) {
            formBtn.disabled = false;
        } else {
            formBtn.disabled = true;
        }
    }

    // האזנה לשינויים בטופס רק בשביל שחרור הכפתור
    userNameInput.addEventListener("input", validateForm);
    skinTypeRadios.forEach(radio => {
        radio.addEventListener("change", validateForm);
    });

    // הלחיצה הגדולה - הכל משתנה כאן ביחד!
    formBtn.addEventListener("click", function () {
        const name = userNameInput.value.trim();
        let selectedSkinValue = "";
        let selectedSkinTypeText = "";

        for (let i = 0; i < skinTypeRadios.length; i++) {
            if (skinTypeRadios[i].checked) {
                selectedSkinValue = skinTypeRadios[i].value;
                selectedSkinTypeText = skinTypeRadios[i].parentNode.textContent.trim();
                break;
            }
        }

        // 1. העלמת טקסט ברירת המחדל
        if (placeholderText) placeholderText.style.display = "none";

        // 2. החלפת תמונות
        imgAcneOily.style.display = "none";
        imgDry.style.display = "none";

        if (selectedSkinValue === "acne" || selectedSkinValue === "oily") {
            imgAcneOily.style.display = "block";
        } else if (selectedSkinValue === "dry") {
            imgDry.style.display = "block";
        }

        // 3. שינוי שקיפויות הבוסטרים בהתאם לצ'קבוקסים
        if (checkRedness.checked) {
            boosterCentella.classList.add("opacity-full");
        } else {
            boosterCentella.classList.remove("opacity-full");
        }

        if (checkPigmentation.checked) {
            boosterVitaminC.classList.add("opacity-full");
        } else {
            boosterVitaminC.classList.remove("opacity-full");
        }

        // 4. יצירת הודעת הסיכום הטקסטואלית
        let extraTreatments = [];
        if (checkRedness.checked) extraTreatments.push("טיפול באדמומיות והרגעת העור");
        if (checkPigmentation.checked) extraTreatments.push("הבהרת פיגמנטציה וכתמים");

        let extraText = "";
        if (extraTreatments.length > 0) {
            extraText = `<br><strong>תוספות ממוקדות לשגרה שלך:</strong> ${extraTreatments.join(" וכן ")}.`;
        } else {
            extraText = "<br>לא נבחרו בעיות עור משניות, השגרה שלך תתמקד בבסיס המאוזן והבריא.";
        }

        summaryOutput.innerHTML = `
            <h3> האבחון המושלם עבורך, ${name}!</h3>
            <p>
                על פי הנתונים שהזנת, סוג העור הראשי שלך הוגדר כ: <strong>${selectedSkinTypeText}</strong>.
                בנינו עבורך את בסיס השגרה הקוריאנית המתאים ביותר לצרכים אלו, והמוצרים המומלצים מוצגים כעת על המסך.
                ${extraText}
            </p>
            <p><strong>טיפ מצוות K-GLOW:</strong> הקפידי על התמדה וסבלנות, התוצאות המדהימות בדרך!</p>
        `;

        summaryOutput.style.display = "block";
        summaryOutput.scrollIntoView({ behavior: 'smooth' });
    });
});