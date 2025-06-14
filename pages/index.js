import Link from "next/link";
import React from "react";

function Title({ children, as }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: red;
            font-family: sans-serif;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default function Homepage() {
  return (
    <div>
      <Title as="h2">Alura Case Home </Title>
      <Link href="/faq">Ir para pagina de FAQ</Link>
    </div>
  );
}
