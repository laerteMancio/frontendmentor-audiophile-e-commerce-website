export const headphoneNew = "https://www.dropbox.com/scl/fi/tmgc717ox5k7so1wkk905/image-product.jpg?rlkey=iwal95iaq7tnk6v18gsz7vomp&st=exbndh9i&raw=1";
export const SpeakerNew = "https://www.dropbox.com/scl/fi/76nyytrnqxm22ks28b5qu/image-product.jpg?rlkey=fad6cduy1o4njxtqr6x8rp6vs&raw=1"
export const EarPhoneNew = "https://www.dropbox.com/scl/fi/4tfcerwxb60mf4d8l7zwc/image-product.jpg?rlkey=toi5wc8hdww7yespono39rc5g&raw=1"


// Dados categorias
export const listaHeadPhones = [
  {
    id: 1,
    imagem: "https://www.dropbox.com/scl/fi/rx6b2xzem1holxoayth23/image-product.jpg?rlkey=wg04ow28gds4n8wswrm0d830c&st=g021ssj3&raw=1",
    descricao: "XX99 Mark I Headphones",
    sobre: "As the gold standard for headphones...",
  },
  {
    id: 2,
    imagem: "https://www.dropbox.com/scl/fi/8ie977fmi31c106jfn9s2/image-product.jpg?rlkey=u73d98jishac2hpmoqdatt3v6&st=es3o14b2&raw=1",
    descricao: "XX59 Headphones",
    sobre: "Enjoy your audio almost anywhere...",
  }
];

export const listaSpeakers = [
  {
      imagem: "https://www.dropbox.com/scl/fi/x832vwrxcuwr82kxy312f/image-product.jpg?rlkey=9p21b9xa17grf6eiyer6gj0s2&raw=1",
      descricao: "ZX7 SPEAKER",
      sobre: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
  }
]

const listaInTheBox = [
  "1x Headphone Unit, 2x Replacement Earcups, 1x User Manual, 1x 3.5mm 5m Audio Cable, 1x Travel Bag"
]

// Função para dividir os itens
function processarItensInTheBox(listaInTheBox) {
  return listaInTheBox.split(',').map(item => {
      const [quantidade, ...descricao] = item.trim().split(' ');
      return {
          quantidade: quantidade,
          descricao: descricao.join(' ')  // Junta novamente a descrição que pode ter espaços
      };
  });
}

// Dados detalhes produtos

export const listaDetalhesHeadPhones = [
  {
    id: 1,
    imagemPrincipal: "https://www.dropbox.com/scl/fi/tmgc717ox5k7so1wkk905/image-product.jpg?rlkey=iwal95iaq7tnk6v18gsz7vomp&raw=1",
    descricao: "XX99 Mark II Headphones",
    sobre: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    preco: "2.999",
    features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: processarItensInTheBox(listaInTheBox[0]),
    img1:"https://www.dropbox.com/scl/fi/37lzibulviqfvna6nv0t0/image-gallery-1.jpg?rlkey=9qgo2venp2p37xf65xcwefl30&raw=1",
    img2:"https://www.dropbox.com/scl/fi/vjdxxrz1bezpl8xsw9ci4/image-gallery-2.jpg?rlkey=xlqirh600hpv3cft0ghyna2nr&raw=1",
    img3:"https://www.dropbox.com/scl/fi/35hr3j99ph07f07xhn47w/image-gallery-3.jpg?rlkey=h2uur3u8voitezedr32u47izb&raw=1"
  },
  
];

export const listaEarPhones = [];
