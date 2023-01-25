import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const TestPage: React.FC<Props> = () => {
  return (
    <div className="">
      <Link href="/" className="text-primary">
        Home
      </Link>
    </div>
  );
};

export default TestPage;
