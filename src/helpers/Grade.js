import { valorNoIntervalo } from './numbers'

export default class Grade {
  /**
   * Gera um array de booleanos de um determinado tamanho.
   *
   * @param {number} tamanho
   * @returns {boolean[]}
   */
  static geraCelulas(tamanho) {
    return Array(tamanho).fill(false)
  }

  /**
   * Cria uma nova grade de simulação do Game of Life.
   *
   * @param {number} largura
   * @param {number} altura
   */
  constructor(largura, altura) {
    this._vizinhos = {}
    this.largura = largura
    this.altura = altura

    const celulas = Grade.geraCelulas(largura * altura)

    /**
     * Array booleano unidimensional representando a grade de células
     * ativas ou inativas do jogo.
     */
    this.celulas = celulas
  }

  /**
   * Ativa a célula na posição especificada.
   *
   * @param {number} x Posição horizontal (entre 0 e largura-1)
   * @param {number} y Posição vertical (entre 0 e altura-1)
   */
  ativa(x, y) {
    const i = this.indice(x, y)
    if (i < 0) throw new RangeError('Coordenadas inválidas!')
    this.celulas[i] = true
  }

  /**
   * Atualiza o estado atual do jogo
   */
  atualiza() {
    const { largura: w, altura: h, celulas } = this

    // Cria o próximo quadro
    const proximo = Grade.geraCelulas(w * h)

    // Passa por todas as células
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        // Conta a quantidade de vizinhos ativos da célula atual
        const ativos = this.vizinhos(x, y).reduce(
          (ativ, i) => ativ + Boolean(this.celulas[i]),
          0,
        )
        const celId = this.indice(x, y, false)

        // Célula viva
        if (celulas[celId]) {
          // Caso não tenha exatamente 2 ou 3 vizinhos, morre
          if (ativos !== 2 && ativos !== 3) proximo[celId] = false
          else proximo[celId] = true
        }
        // Célula morta
        // Revive caso tenha exatamente 3 vizinhos
        else if (ativos === 3) proximo[celId] = true
      }
    }

    // Troca para o próximo quadro
    this.celulas = proximo
  }

  /**
   * Desativa a célula na posição especificada.
   *
   * @param {number} x Posição horizontal (entre 0 e largura-1)
   * @param {number} y Posição vertical (entre 0 e altura-1)
   */
  desativa(x, y) {
    const i = this.indice(x, y)
    if (i < 0) throw new RangeError('Coordenadas inválidas!')
    this.celulas[i] = false
  }

  /**
   * Índice no array a partir de coordenadas verticais e horizontais.
   *
   * @param {number} x Posição horizontal (entre 0 e largura-1)
   * @param {number} y Posição vertical (entre 0 e altura-1)
   */
  indice(x, y, verificaLimites = true) {
    // Posição calculada
    const i = y * this.largura + x

    if (!verificaLimites) return i

    return valorNoIntervalo(x, 0, this.largura - 1) &&
      valorNoIntervalo(y, 0, this.altura - 1)
      ? i
      : -1
  }

  /**
   * Método para transformar a grade em um texto em formato de impressão.
   *
   * @returns {string}
   */
  toString() {
    const { largura: w, altura: h, celulas } = this

    // Dimensões da grade
    let str = `${w}x${h}\n`

    // Todas as células
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++)
        str += celulas[this.indice(x, y, false)] ? '|@' : '|_'
      str += '|\n'
    }

    // Fim da grade
    return (str += '---')
  }

  /**
   * Descobre os vizinhos de uma célula e guarda suas posições em um mapa.
   *
   * @param {number} x Posição horizontal (entre 0 e largura-1)
   * @param {number} y Posição vertical (entre 0 e altura-1)
   * @returns {number[]}
   */
  vizinhos(x, y) {
    // Procura se os vizinhos já foram mapeados
    const id = this.indice(x, y)

    if (id < 0) throw new RangeError('Coordenadas inválidas!')

    const viz = this._vizinhos[id]

    // Caso já tenham sido, devolve os vizinhos
    if (viz) return viz

    // Caso contrário...
    // Comece com um array vazio
    const v = []

    // Analise uma área de 3x3 células
    for (let vy = y - 1; vy <= y + 1; vy++) {
      for (let vx = x - 1; vx <= x + 1; vx++) {
        // Busque o índice da célula analisada
        const i = this.indice(vx, vy)

        // Se ela for um índice válido e não for a célula atual,
        // adicione-a no array de vizinhos
        if (i >= 0 && !(vx === x && vy === y)) v.push(i)
      }
    }

    // Configura os vizinhos no mapa
    this._vizinhos[id] = v

    return v
  }
}
