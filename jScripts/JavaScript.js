function checkFormValidity() {
    const userName = document.getElementById("userName").value; // שליפת התוכן הנוכחי מתיבת הטקסט
    const radio1 = document.getElementById("radio1").checked; // בדיקה האם רדיו 1 (אקנתי) מסומן
    const radio2 = document.getElementById("radio2").checked; // בדיקה האם רדיו 2 (יבש) מסומן
    const radio3 = document.getElementById("radio3").checked; // בדיקה האם רדיו 3 (שמן) מסומן

    if (userName.length >= 2 && (radio1 === true || radio2 === true || radio3 === true)) { // תנאי לפתיחת הכפתור (שם תקין + סוג עור)
        document.getElementById("formBtn").disabled = false; // הסרת החסימה מכפתור השליחה והפיכתו לורוד ולחיץ
    } else {
        document.getElementById("formBtn").disabled = true; // חסימת כפתור השליחה מחדש והחזרתו למצב אפור (disabled)
    }
}

function updateSkinProductDisplay() {
    const radio1 = document.getElementById("radio1").checked; // בדיקה האם רדיו עור אקנתי מסומן
    const radio2 = document.getElementById("radio2").checked; // בדיקה האם רדיו עור יבש מסומן
    const radio3 = document.getElementById("radio3").checked; // בדיקה האם רדיו עור שמן מסומן

    document.getElementById("imgAcneOily").style.opacity = "0.5"; // החזרת תמונת הטונר לחצי שקיפות (איפוס זמני)
    document.getElementById("imgDry").style.opacity = "0.5"; // החזרת תמונת ריר החלזונות לחצי שקיפות (איפוס זמני)

    if (radio1 === true || radio3 === true) { // אם נבחר סוג עור אקנתי או שמן
        document.getElementById("imgAcneOily").style.opacity = "1"; // העברת תמונת הטונר לשקיפות מלאה (הדגשה ויזואלית)
    }
    else if (radio2 === true) { // אם נבחר סוג עור יבש
        document.getElementById("imgDry").style.opacity = "1"; // העברת תמונת ריר החלזונות לשקיפות מלאה (הדגשה ויזואלית)
    }

    checkFormValidity(); // קריאה לבדיקת תקינות הטופס כדי לנעול/לפתוח את הכפתור בהתאם למצב השם הנוכחי
}

function updateBoostersDisplay() {
    const checkRedness = document.getElementById("checkRedness").checked; // בדיקה האם צ'ק-בוקס אדמומיות מסומן
    const checkPigmentation = document.getElementById("checkPigmentation").checked; // בדיקה האם צ'ק-בוקס פיגמנטציה מסומן

    if (checkRedness === true) { // אם תיבת האדמומיות סומנה
        document.getElementById("boosterCentella").style.opacity = "1"; // העברת תיבת קנטלה לשקיפות מלאה (הדגשה)
    } else {
        document.getElementById("boosterCentella").style.opacity = "0.5"; // החזרת תיבת קנטלה לחצי שקיפות (ביטול הדגשה)
    }

    if (checkPigmentation === true) { // אם תיבת הפיגמנטציה סומנה
        document.getElementById("boosterVitaminC").style.opacity = "1"; // העברת תיבת ויטמין C לשקיפות מלאה (הדגשה)
    } else {
        document.getElementById("boosterVitaminC").style.opacity = "0.5"; // החזרת תיבת ויטמין C לחצי שקיפות (ביטול הדגשה)
    }

    checkFormValidity(); // קריאה לבדיקת תקינות הטופס כדי לנעול את הכפתור אם המשתמשת מחקה את השם
}

function skinFormResult() {
    const userName = document.getElementById("userName").value; // שליפת מחרוזת השם מתיבת הטקסט
    const radio1 = document.getElementById("radio1").checked; // קליטת מצב הסימון של רדיו 1
    const radio2 = document.getElementById("radio2").checked; // קליטת מצב הסימון של רדיו 2
    const radio3 = document.getElementById("radio3").checked; // קליטת מצב הסימון של רדיו 3
    const checkRedness = document.getElementById("checkRedness").checked; // קליטת מצב הסימון של צ'ק-בוקס אדמומיות
    const checkPigmentation = document.getElementById("checkPigmentation").checked; // קליטת מצב הסימון של צ'ק-בוקס פיגמנטציה

    if (userName.length < 2) { // הגנה בוליאנית: אם המשתמשת מחקה את השם והספיקה ללחוץ על כפתור התוצאה
        document.getElementById("formBtn").disabled = true; // חסימה מיידית של כפתור השליחה חזרה למצב אפור
        document.getElementById("diagnosticResultSummary").style.display = "none"; // הסתרת אזור הסיכום למקרה שהיה פתוח קודם
        return; // עצירת הפונקציה ומניעת הדפסת תוצאות האבחון על המסך
    }

    document.getElementById("radioError").innerHTML = ""; // איפוס הודעת שגיאה ישנה של הרדיו
    document.getElementById("userNameError").innerHTML = ""; // איפוס הודעת שגיאה ישנה של השם

    document.getElementById("diagnosticResultSummary").style.display = "block"; // פריסת אזור סיכום האבחון על גבי המסך
    document.getElementById("nameForResult").innerHTML = "היי " + userName + ", התאמנו לך שגרת טיפוח K-GLOW מותאמת אישית!"; // הדפסת כותרת הסיכום האישית עם השם

    if (radio1 === true || radio3 === true) { // אם סוג העור הוא אקנתי או שמן
        if (radio1 === true) { // אם סוג העור הוא ספציפית אקנתי
            document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור אקנתי עם פצעונים תקופתיים"; // כתיבת הסבר לעור אקנתי בסיכום
        } else {
            document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור שמן, מבריק עם נקבוביות פתוחות"; // כתיבת הסבר לעור שמן בסיכום
        }
        document.getElementById("skinForResult").innerHTML += ". לכן בחרנו עבורך <strong>את הטונר של Anua</strong>."; // שרשור המלצת מוצר החובה להמשך המשפט
    }
    else if (radio2 === true) { // אם סוג העור שנבחר הוא עור יבש
        document.getElementById("skinForResult").innerHTML = "בחרת בסוג עור יבש ומתקלף. לכן בחרנו עבורך את <strong>ריר החלזונות של COSRX</strong>."; // כתיבת הסבר והמלצה לעור יבש בסיכום
    }

    if (checkRedness === true) { // אם המשתמשת סימנה שהיא מעוניינת לטפל באדמומיות
        document.getElementById("rednessForResult").innerHTML = "מוצג רכיב מומלץ עבור <strong>אדמומיות</strong>."; // הדפסת שורת סיכום לרכיב ההרגעה
    } else {
        document.getElementById("rednessForResult").innerHTML = ""; // ריקון שורת האדמומיות במידה ולא נבחרה
    }

    if (checkPigmentation === true) { // אם המשתמשת סימנה שהיא מעוניינת לטפל בפיגמנטציה
        document.getElementById("pigmentationForResult").innerHTML = "מוצגים רכיבים מומלצים עבור <strong>פיגמנטציה</strong>."; // הדפסת שורת סיכום לרכיב ההבהרה
    } else {
        document.getElementById("pigmentationForResult").innerHTML = ""; // ריקון שורת הפיגמנטציה במידה ולא נבחרה
    }
}

function clean(){
    document.getElementById("boosterCentella").style.opacity = "0.5"; // החזרת תיבת קנטלה למצב התחלתי של חצי שקיפות
    document.getElementById("boosterVitaminC").style.opacity = "0.5"; // החזרת תיבת ויטמין C למצב התחלתי של חצי שקיפות
    document.getElementById("imgAcneOily").style.opacity = "0.5"; // החזרת תמונת הטונר למצב התחלתי של חצי שקיפות
    document.getElementById("imgDry").style.opacity = "0.5"; // החזרת תמונת ריר החלזונות למצב התחלתי של חצי שקיפות

    document.getElementById("diagnosticResultSummary").style.display = "none"; // הסתרה מוחלטת של אזור סיכום האבחון מהמסך

    document.getElementById("skinForResult").innerHTML = ""; // מחיקה וריקון של תוכן הטקסט בתוך ספאן סוג העור
    document.getElementById("rednessForResult").innerHTML = ""; // מחיקה וריקון של תוכן הטקסט בתוך ספאן האדמומיות
    document.getElementById("pigmentationForResult").innerHTML = ""; // מחיקה וריקון של תוכן הטקסט בתוך ספאן הפיגמנטציה
    document.getElementById("nameForResult").innerHTML = ""; // מחיקה וריקון של תוכן הטקסט בתוך ספאן כותרת השם

    document.getElementById("formBtn").disabled = true; // חסימה מחדש של כפתור השליחה לאפור ולא לחיץ (disabled) במצב ההתחלתי
}