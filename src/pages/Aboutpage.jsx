import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/hook/useAuth";

export default function Aboutpage() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <p>Aboutpage</p>
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        Log out
      </button>
    </div>
  );
}
