export interface Product {
  descricao: string;
  id: number;
  imagens: Image[];
  nome: string;
  tamanhos: Tamanho[];
}

interface Tamanho {
  id: number;
  nome: string;
}

interface Image {
  imagem: string;
}
