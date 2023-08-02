const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

// objeto contenedor de las alertas
const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Exito: es todo un exito.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: error 806.',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Peligro: ten cuidado adelante.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Informativo: informacion importante.',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // tiempo de limpiado
    setTimeout(() => toast.remove(), 500); // quitando alerta despues de 500ms
}

const createToast = (id) => {
    
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // creando un nuevo 'li' para las alertas
    toast.className = `toast ${id}`; // clases para las alertas
    // html para las alertas
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); //
    // 
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

// evento de click para crear alertas con los botones
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});