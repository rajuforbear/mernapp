import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DashBord() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <section className="heading">
        <h1>Welcom {user && user.name}</h1>
        <p>Goals DashBord</p>
      </section>
    </>
  );
}

export default DashBord;
