import Button1 from "../components/Button1";
import Button2 from "../components/Button2";

export default function Home() {
  return (
    <>
      <Button1 css="user-select: none;transform: translateX(-3px);display: inline-block;padding: 12px 20px;border: 1px solid #dcdcdc;background-color: #fff;border-radius: 40px;color: #222;font-size: 16px;line-height: 1.75;letter-spacing: 0.2px;">
        Button1
      </Button1>
      <br />
      <Button2>Button2</Button2>
    </>
  );
}
