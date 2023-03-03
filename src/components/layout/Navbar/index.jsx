import { Image } from "@/components/Image.style";
import { LogoContainer } from "@/components/utils/logoContainer";
import { Title } from "@/components/utils/titleStyle";
import Link from "next/link";
import { List, Nav } from "./styled";

export default function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="PokeNext"
        />
        <Title size={2}>PokeNext</Title>
      </LogoContainer>

      <List>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </List>
    </Nav>
  );
}
