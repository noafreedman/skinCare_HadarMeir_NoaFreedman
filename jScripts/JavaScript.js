function skinFormResult() {
    const userName = document.getElementById("userName").value; // שליפת השם מהתיבה
    const radio1 = document.getElementById("radio1").checked; // בדיקת קיום הסימון
    const radio2 = document.getElementById("radio2").checked; // בדיקת קיום הסימון
    const radio3 = document.getElementById("radio3").checked; // בדיקת קיום הסימון
    const checkRedness = document.getElementById("checkRedness").checked; // בדיקת קיום הסימון
    const checkPigmentation = document.getElementById("checkPigmentation").checked; // בדיקת קיום הסימון
    
    document.getElementById("boosterCentella").style.display = "none"; // איפוס תיבת בוסטר 1
    document.getElementById("boosterVitaminC").style.display = "none"; // איפוס תיבת בוסטר 2
    document.getElementById("diagnosticResultSummary").style.display = "none"; // מנקה את הסיכום הישן למקרה שיש שגיאה עכשיו
    document.getElementById("imgAcneOily").style.display = "none"; // הסתרת תמונה 1
    document.getElementById("imgDry").style.display = "none"; // הסתרת תמונה 2

    document.getElementById("skinForResult").innerHTML = ""; // איפוס ספאן בתוצאה
    document.getElementById("rednessForResult").innerHTML = ""; // איפוס ספאן בתוצאה
    document.getElementById("pigmentationForResult").innerHTML = ""; // איפוס ספאן בתוצאה
    document.getElementById("nameForResult").innerHTML = ""; // איפוס ספאן של השם

    if (userName.length < 2) {
        document.getElementById("userNameError").innerHTML = "הזיני שם תקין (לפחות 2 אותיות)"; // הצגת שגיאה עבור השם
    }
    else if (radio1 === false && radio2 === false && radio3 === false) { // אם לא סומן סוג עור
        document.getElementById("radioError").innerHTML = "בחרי סוג עור כדי לקבל המלצה!"; // הצגת שגיאה עבור בחירה בסוג עור
        document.getElementById("userNameError").innerHTML = ""; // איפוס שגיאה עבור השם
    }
    else {
        document.getElementById("placeholderText").innerHTML = ""; // מחיקת טקסט ברירת המחדל עם קבלת התוצאה
        document.getElementById("radioError").innerHTML = ""; // איפוס שגיאה עבור בחירה בסוג עור
        document.getElementById("userNameError").innerHTML = ""; // איפוס שגיאה עבור השם

        document.getElementById("diagnosticResultSummary").style.display = "block"; // הצגת עיצוב עבור תוצאה
        document.getElementById("nameForResult").innerHTML = "היי " + userName + ", התאמנו לך שגרת טיפוח K-GLOW מותאמת אישית!"; // הדפסת השם שהוקלד בתיבה

        if (radio1 === true || radio3 === true) { // אם סומן סוג עור 1 או 3
            document.getElementById("imgAcneOily").style.display = "block"; // הצגת מוצר בהתאם לבחירה באופציה 1 או 3
            if (radio1 === true) { // אם סומן סוג עור 1 
                document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור אקנתי עם פצעונים תקופתיים"; // הדפסת סוג העור שנבחר
            }
            else { // אם סומן סוג עור 3
                document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור שמן, מבריק עם נקבוביות פתוחות"; // הדפסת סוג העור שנבחר
            }
            document.getElementById("skinForResult").innerHTML += ". לכן בחרנו עבורך <strong>את הטונר של Anua</strong>."; // שם המוצר שנבחר עבור סוג עור 1 או 3
        }
        else { // אם סומן סוג עור 2 (עור יבש)
            document.getElementById("imgDry").style.display = "block"; // הצגת מוצר בהתאם לבחירה באופציה 2
            document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור יבש ומתקלף. לכן בחרנו עבורך את <strong>ריר החלזונות של COSRX</strong>."; // הדפסת סוג העור שנבחר
        }

        if (checkRedness === true) { // אם סומן אדמומיות
            document.getElementById("boosterCentella").style.display = "block"; // הצגת עיצוב עבור אדמומיות
            document.getElementById("rednessForResult").innerHTML = "מוצג רכיב מומלץ עבור <strong>אדמומיות</strong>."; // הדפסת רכיב מומלץ לאדמומיות
        }
        if (checkPigmentation === true) { // אם סומן פיגמנטציה
            document.getElementById("boosterVitaminC").style.display = "block"; // הצגת עיצוב עבור פיגמנטציה
            document.getElementById("pigmentationForResult").innerHTML = "מוצגים רכיבים מומלצים עבור <strong>פיגמנטציה</strong>."; // הדפסת רכיבים מומלצים לפיגמנטציה
        }
    }
}