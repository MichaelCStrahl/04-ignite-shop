import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit,
          exercitationem molestiae voluptatem, dignissimos laboriosam alias
          fugit, dolor molestias praesentium fuga? Nesciunt, alias suscipit
          quaerat excepturi aliquid molestias nostrum autem!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
