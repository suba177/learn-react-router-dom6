import { Link, useMatch } from "react-router-dom";

export default function MyLink({ children, to, ...props }) {
  const match = useMatch(to);
  console.log({ match });
  return (
    <Link
      to={to}
      style={{
        color: match ? "active-link" : "black",
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
// Нигде не используется
