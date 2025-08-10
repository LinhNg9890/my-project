
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type Props = {
  code: string;
};

export default function CodeBlock({ code }: Props) {
  return (
    <SyntaxHighlighter language="javascript">
      {code}
    </SyntaxHighlighter>
  );
}
