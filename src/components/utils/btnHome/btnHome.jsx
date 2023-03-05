/* Style */
import { Btn } from "./style";

/* Logic */
import Link from "next/link";

export default function BtnHome() {
  return (
    <Link href="/">
      <Btn>Home</Btn>
    </Link>
  );
}
