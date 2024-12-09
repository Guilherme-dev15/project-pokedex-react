// Importações sempre no topo do arquivo
import React, { useState } from "react";
import styled from "styled-components";
import useFetchTypePokemons from "../../hooks/useFetchTypePokemons"; // Nome atualizado para refletir o hook

const Select = styled.select`
  width: 300px;
  border: solid #ededede3 1px;
  border-radius: 8px;
  padding: 1em;
`;

const SelectType = ({ selected, onTypeChange }) => {
  const { types, isLoading, error } = useFetchTypePokemons();

  if (isLoading) {
    return <p>Carregando tipos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar tipos: {error}</p>;
  }

  return (
    <Select
      value={selected}
      onChange={(e) => {
        onTypeChange(e.target.value); // Atualiza o estado no componente pai
        console.log("Selecionado:", e.target.value);
      }}
    >
      <option value="">All</option>
      {types.length > 0 ? (
        types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))
      ) : (
        <option value="">Nenhum tipo encontrado</option>
      )}
    </Select>
  );
};

export default SelectType;
