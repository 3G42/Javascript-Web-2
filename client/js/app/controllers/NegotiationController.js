class NegotiationController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._negociacoesView = new NegociacoesView($("#negociacoesView"));
    this._listaNegociacoes = new ListaNegociacoes();
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($("#mensagem-view"));
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = "Negociação criada com sucesso";
    this._mensagemView.update(this._mensagem);
    this._limpaForm();
    this._negociacoesView.update(this._listaNegociacoes);
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaForm() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0;
    this._inputData.focus();
  }
}
