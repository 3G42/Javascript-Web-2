class DateHelper {
  constructor() {
    throw new Error("Não é possível instanciar essa classe");
  }
  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error("Data não está no formato dd-mm-aaaa");
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    );
  }
  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}
