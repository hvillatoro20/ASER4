document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("onboarding-form");
    const progressBar = document.getElementById("overall-progress");
    const progressText = document.getElementById("progress-percent");

    const assistantBtn = document.getElementById("assistant-btn");
    const assistantChat = document.getElementById("assistant-chat");
    const closeChat = document.getElementById("close-chat");
    const sendMessage = document.getElementById("send-message");
    const chatInput = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-body");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const progress = Math.floor(Math.random() * 40) + 60;
        const days = Math.floor(Math.random() * 15) + 10;
        const budget = document.getElementById("business-budget").value;

        progressBar.style.width = progress + "%";
        progressText.textContent = progress;
        document.getElementById("days-estimated").textContent = days;
        document.getElementById("total-cost").textContent = `L. ${parseInt(budget).toLocaleString("es-HN")}`;
        document.getElementById("user-info").textContent = `Proyecto estimado en ${days} días`;

        document.getElementById("dashboard-title").scrollIntoView({ behavior: "smooth" });
        document.getElementById("onboarding").classList.remove("active-section");
        document.getElementById("dashboard").style.display = "block";
    });

    assistantBtn.addEventListener("click", () => {
        assistantChat.style.display = "flex";
    });

    closeChat.addEventListener("click", () => {
        assistantChat.style.display = "none";
    });

    sendMessage.addEventListener("click", () => {
        const msg = chatInput.value.trim();
        if (!msg) return;

        const userMsg = document.createElement("div");
        userMsg.className = "chat-message";
        userMsg.innerHTML = `<div class="message-content"><p>${msg}</p></div><div class="message-time">Tú</div>`;
        chatBody.appendChild(userMsg);

        setTimeout(() => {
            const botReply = document.createElement("div");
            botReply.className = "chat-message bot-message";
            botReply.innerHTML = `<div class="message-content"><p>Gracias por tu mensaje. Pronto recibirás ayuda.</p></div><div class="message-time">Asistente</div>`;
            chatBody.appendChild(botReply);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);

        chatInput.value = "";
    });
});
