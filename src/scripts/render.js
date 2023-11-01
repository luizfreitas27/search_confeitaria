const ulTag= document.querySelector(".main__lista");
const formTag = document.querySelector(".main__form");
const inputTag = document.querySelector("#form__input");

const renderizandoSobremesas = (listaDeSobremesas) => {
    listaDeSobremesas.forEach((sobremesa) => {
        const tagLi = document.createElement("li");

        const tagImg = document.createElement("img");
        tagImg.src = sobremesa.imagem;
        tagImg.alt = sobremesa.nome;

        const tagDiv = document.createElement("div");
        tagDiv.classList = "div";

        const tagP = document.createElement("p");
        tagP.innerText = sobremesa.descricao;

        const tagTitle = document.createElement("h2");
        tagTitle.innerText = sobremesa.nome;

        tagDiv.append(tagTitle, tagP);
        tagLi.append(tagImg, tagDiv);
        ulTag.append(tagLi);
    })
}

renderizandoSobremesas(listaDeSobremesas)