function checkFormValidity() {
    const userName = document.getElementById("userName").value; // שליפת השם מתיבת הטקסט
    const radio1 = document.getElementById("radio1").checked; // בדיקה האם רדיו 1 (אקנתי) מסומן
    const radio2 = document.getElementById("radio2").checked; // בדיקה האם רדיו 2 (יבש) מסומן
    const radio3 = document.getElementById("radio3").checked; // בדיקה האם רדיו 3 (שמן) מסומן

    if (userName.length >= 2 && (radio1 === true || radio2 === true || radio3 === true)) { // תנאי לפתיחת הכפתור (שם תקין + סוג עור)
        document.getElementById("formBtn").disabled = false; // הסרת החסימה מכפתור השליחה והפיכתו לורוד ולחיץ
    } else {
        document.getElementById("formBtn").disabled = true; // חסימת כפתור השליחה מחדש (disabled)
    }
}

function updateSkinProductDisplay() {
    const radio1 = document.getElementById("radio1").checked; // בדיקה האם רדיו עור אקנתי מסומן
    const radio3 = document.getElementById("radio3").checked; // בדיקה האם רדיו עור שמן מסומן

    document.getElementById("imgAcneOily").style.display = "none"; // הסתרת תמונת הטונר 
    document.getElementById("imgDry").style.display = "none"; // הסתרת תמונת ריר החלזונות

    if (radio1 === true || radio3 === true) { // אם נבחר סוג עור אקנתי או שמן
        document.getElementById("imgAcneOily").style.display = "block"; // הצגת תמונת הטונר 
    }
    else { // אם נבחר סוג עור יבש
        document.getElementById("imgDry").style.display = "block"; // הצגת תמונת ריר החלזונות 
    }

    checkFormValidity(); // קריאה לפונקציית בדיקת תקינות הטופס
}

function updateBoostersDisplay() {
    const checkRedness = document.getElementById("checkRedness").checked; // בדיקה האם אדמומיות מסומן
    const checkPigmentation = document.getElementById("checkPigmentation").checked; // בדיקה האם פיגמנטציה מסומן

    if (checkRedness === true) { // אם האדמומיות סומנה
        document.getElementById("boosterCentella").style.opacity = "1"; // העברת תיבת סנטלה לשקיפות מלאה
    } else {
        document.getElementById("boosterCentella").style.opacity = "0.5"; // החזרת תיבת סנטלה לחצי שקיפות
    }

    if (checkPigmentation === true) { // אם הפיגמנטציה סומנה
        document.getElementById("boosterVitaminC").style.opacity = "1"; // העברת תיבת ויטמין C לשקיפות מלאה
    } else {
        document.getElementById("boosterVitaminC").style.opacity = "0.5"; // החזרת תיבת ויטמין C לחצי שקיפות
    }

    checkFormValidity(); // קריאה לפונקציית בדיקת תקינות הטופס
}

function skinFormResult() {
    clean(); // קריאה לפונקציית איפוס וניקוי לפני סיכום חדש
    const userName = document.getElementById("userName").value; // שליפת מחרוזת השם מתיבת הטקסט
    const radio1 = document.getElementById("radio1").checked; // קליטת מצב הסימון של רדיו 1
    const radio3 = document.getElementById("radio3").checked; // קליטת מצב הסימון של רדיו 3
    const checkRedness = document.getElementById("checkRedness").checked; // קליטת מצב הסימון של אדמומיות
    const checkPigmentation = document.getElementById("checkPigmentation").checked; // קליטת מצב הסימון של פיגמנטציה

    if (userName.length < 2) { // אם המשתמשת מחקה תווים מהשם
        document.getElementById("userNameError").innerHTML = "הזיני שם תקין (לפחות 2 אותיות)"; // הצגת הודעת שגיאה על השם
        document.getElementById("formBtn").disabled = true; // חסימה מחדש של כפתור השליחה (disabled)
        document.getElementById("diagnosticResultSummary").style.display = "none"; // הסתרת אזור הסיכום למקרה שהוצג קודם
        return; // עצירת הפונקציה
    }

    document.getElementById("userNameError").innerHTML = ""; // איפוס הודעת שגיאה של השם

    document.getElementById("diagnosticResultSummary").style.display = "block"; // הצגת תיבת הסיכום ויזואלית
    document.getElementById("nameForResult").innerHTML = "היי " + userName + ", התאמנו לך שגרת טיפוח K-GLOW מותאמת אישית!"; // הדפסת כותרת הסיכום האישית עם השם

    if (radio1 === true || radio3 === true) { // אם סוג העור הוא אקנתי או שמן
        if (radio1 === true) { // אם סוג העור הוא ספציפית אקנתי
            document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור אקנתי עם פצעונים תקופתיים"; // כתיבת הסבר לעור אקנתי בסיכום
        } else {
            document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור שמן, מבריק עם נקבוביות פתוחות"; // כתיבת הסבר לעור שמן בסיכום
        }
        document.getElementById("skinForResult").innerHTML += ". לכן בחרנו עבורך <strong>את הטונר של Anua</strong>."; // שרשור המלצת מוצר החובה להמשך המשפט
    }
    else { // אם סוג העור שנבחר הוא עור יבש
        document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור יבש ומתקלף. לכן בחרנו עבורך את <strong>ריר החלזונות של COSRX</strong>."; // כתיבת הסבר והמלצה לעור יבש בסיכום
    }

    if (checkRedness === true) { // אם המשתמשת סימנה שהיא מעוניינת לטפל באדמומיות
        document.getElementById("rednessForResult").innerHTML = "מוצג רכיב מומלץ עבור <strong>אדמומיות</strong>."; // הדפסת שורת סיכום לרכיב ההרגעה
    } 

    if (checkPigmentation === true) { // אם המשתמשת סימנה שהיא מעוניינת לטפל בפיגמנטציה
        document.getElementById("pigmentationForResult").innerHTML = "מוצגים רכיבים מומלצים עבור <strong>פיגמנטציה</strong>."; // הדפסת שורת סיכום לרכיב ההבהרה
    } 
}

function clean(){

    document.getElementById("diagnosticResultSummary").style.display = "none"; // הסתרה של תיבת הסיכום

    document.getElementById("skinForResult").innerHTML = ""; // ריקון ספאן סוג העור
    document.getElementById("rednessForResult").innerHTML = ""; // ריקון ספאן האדמומיות
    document.getElementById("pigmentationForResult").innerHTML = ""; // ריקון ספאן הפיגמנטציה
    document.getElementById("nameForResult").innerHTML = ""; // ריקון ספאן השם
}