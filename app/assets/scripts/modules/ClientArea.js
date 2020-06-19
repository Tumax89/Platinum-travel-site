class ClientArea {
  constructor() {
    this.injectHtML();
  }

  injectHtML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      ` <div class="client-area">
    <div class="wrapper wrapper--medium">
      <h2 class="section-title section-title--blue">
        Хэрэглэгчийн тусгай хуудас
      </h2>
      <form action="" class="client-area__form">
        <input
          type="text"
          class="client-area__input"
          placeholder="Нууц үгээ бичнэ үү"
        />
        <button class="btn btn--orange">Нэвтрэх</button>
      </form>
      <div class="client-area__content-area"></div>
    </div>
  </div>`
    );
  }
}

export default ClientArea;
