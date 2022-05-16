class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    return;
  }
  get negociacoes() {
    return [].concat(this._negociacoes);
  }
}
