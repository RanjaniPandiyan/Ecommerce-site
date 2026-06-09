import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Confirm() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/product"), 2000);
  }, [navigate]);
  return (
    <div className="d-flex justify-content-center">
      <img src="/images/confirm.gif"></img>
    </div>
  );
}
