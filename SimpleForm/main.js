// معالجة إرسال النموذج
document.getElementById("userForm").addEventListener("submit", function(event) {
         event.preventDefault();
                        
const name = document.getElementById("name").value.trim();
const age = document.getElementById("age").value.trim();
const hobby = document.getElementById("hobby").value.trim();

if (!name || !age || !hobby) {
    showError("من فضلك املأ جميع الحقول!");
    return;
}

const message = `Hi, ${name}.\nYour age is ${age} and your favourite hobby is ${hobby}.`;
    showOutput(message);
});
                    
function showOutput(message) {
    alert(message);
}