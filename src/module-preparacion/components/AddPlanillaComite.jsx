import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddModal } from "../layout/AddModal";

export const AddPlanillaComite = ({
  isOpen = false,
  abrirCerrarModal = () => {},
}) => {
  const navigate = useNavigate();

  const enviar = () => {
    navigate("/preparacion/comite/boleta");
  };
  return (
    <>
      <AddModal
        titulo="REGISTRO PLANILLA"
        isOpen={isOpen}
        abrirCerrarModal={abrirCerrarModal}
        enviar={enviar}
      ></AddModal>
    </>
  );
};
