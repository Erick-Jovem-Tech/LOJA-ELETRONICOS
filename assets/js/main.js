document.getElementById("loginForm").addEventListener("submit", (event) => {event.preventDefault();
    window.location.href = "../../index.html";

})
function abrirModal(id,name,cidade,imagem) {
    const modal = document.createElement("div");
    modal.classlist.add("modal)");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="fecharModal()">&times;</span>
            <h2>${name}</h2>
            <p>${cidade}</p>
            img src="${Image}" alt="${nome}" style="widht: 100; height: 100%; object-fit:cover;">
        </div>
    `;

    -document.body.appendChild(modal);

    const imagemlocal = document.getElementById(id);
    imagemlocal.style.filter = 'blur(5px)';
}

function fecharModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.remove());

    const imagens = document.querySelectorAll('img');
    imagens.forEach(imagem => imagem.style.filter = 'none');
}