import FooterBlack from "./FooterBlack";
import FooterGold from "./FooterGold";

export default function Footer({ color }: { color: string }) {
  return color === "almostBlack" ? <FooterBlack /> : <FooterGold />;
}
