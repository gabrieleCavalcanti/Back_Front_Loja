const btnGet = document.querySelector("#get");
const btnPost = document.querySelector("#post");
const btnPut = document.querySelector("#put");
const btnDelete = document.querySelector("#delete");
const btnPostCat = document.querySelector("#postCategoria");
const btnCategoria = document.querySelector("#categoria");
const modal = document.querySelector("#modalCategoria");
const fecharModal = document.querySelector("#fecharModal");

const url = "http://localhost:8000/produtos";
const urlCategoriasAll = "http://localhost:8000/categorias";
const urlCategorias = "http://localhost:8000/categorias/alfabetica";


async function createCategorias() {
    try {
        const nome = document.querySelector("#nomeInsertCategoria").value;
        const res = await fetch(urlCategoriasAll, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome
            }),
        });

        const data = await res.json();
        console.log(data);
        modal.style.display = "none";
        location.reload();
        alert(data.message)
    } catch (error) {
        console.log(error)
    }
}

function renderProducts(produtos) {
    const lista = document.querySelector("#lista");

    lista.innerHTML = ""; // limpa antes

    produtos.forEach(produto => {
        const item = document.createElement("div");

        item.innerHTML = `
            <p><strong>ID:</strong> ${produto.id}</p>
            <p><strong>Nome:</strong> ${produto.nome_produto}</p>
            <p><strong>Valor:</strong> R$ ${produto.valor}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <hr>
        `;

        lista.appendChild(item);
    });
}

async function fetchProducts() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        console.log("DATA:", data);

        renderProducts(data.produtos);
    } catch (error) {
        console.log(error);
    }
}

function preencherSelect(categorias) {
    const selectInsert = document.querySelector("#categoriaInsert");
    const selectUpdate = document.querySelector("#categoriaUpdate");

    // limpa antes
    selectInsert.innerHTML = "";
    selectUpdate.innerHTML = "";

    categorias.forEach(cat => {
        const op1 = document.createElement("option");
        op1.value = cat.id;
        op1.textContent = cat.nome;

        const op2 = document.createElement("option");
        op2.value = cat.id;
        op2.textContent = cat.nome;

        selectInsert.appendChild(op1);
        selectUpdate.appendChild(op2);
    });
}

async function carregarCategorias() {
    try {
        const res = await fetch(urlCategorias);
        const data = await res.json();

        preencherSelect(data.categorias);

    } catch (error) {
        console.log(error);
    }
}

async function createProducts() {
    try {
        const nome = document.querySelector("#nomeInsert").value;
        const valor = Number(document.querySelector("#valorInsert").value);
        const idCategoria = Number(document.querySelector("#categoriaInsert").value);

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome,
                valor,
                idCategoria,
            }),
        });

        const data = await res.json();
        console.log(data);
        location.reload();
        // alert(`Produto Criado com Sucesso!!`)
        alert(data.message)
    } catch (error) {
        console.log(error)
    }
}

async function updateProducts() {
    const id = Number(document.querySelector("#idProdutoUpdate").value);
    const nome = document.querySelector("#nomeUpdate").value;
    const valor = Number(document.querySelector("#valorUpdate").value);
    const idCategoria = Number(document.querySelector("#categoriaUpdate").value);
    try {
        const res = await fetch(`${url}?id=${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome,
                valor,
                idCategoria,
            }),
        });

        const data = await res.json();
        console.log(data, id, nome, valor, idCategoria);
        location.reload();
        alert(data.message)
    } catch (error) {
        console.log(error)
    }
}

async function deleteProducts() {
    const id = Number(document.querySelector("#idProdutoDelete").value);
    try {
        const res = await fetch(`${url}?id=${id}`, {
            method: "DELETE",
        });

        const data = await res.json();
        console.log(data);
        location.reload();
        alert(data.message)
    } catch (error) {
        console.log(error);
    }
};



btnGet.addEventListener("click", (event) => {
    event.preventDefault();
    fetchProducts();
});

btnPost.addEventListener("click", (event) => {
    event.preventDefault();
    createProducts();
});

btnPut.addEventListener("click", (event) => {
    event.preventDefault();
    updateProducts();
});

btnDelete.addEventListener("click", (event) => {
    event.preventDefault();
    deleteProducts();
});

btnPostCat.addEventListener("click", (event) => {
    event.preventDefault();
    createCategorias();
});

btnCategoria.addEventListener("click", () => {
    modal.style.display = "block";
});

fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

carregarCategorias();