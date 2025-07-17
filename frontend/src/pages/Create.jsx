import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', form);
    alert('Usuário cadastrado!');
    setForm({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Usuário</h2>
      <input placeholder="Nome" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Create;