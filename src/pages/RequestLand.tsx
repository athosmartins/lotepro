import React, { useState } from 'react';

const RequestLand = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    purchaseHorizon: '',
    vgvRange: '',
    productType: [],
    personName: '',
    whatsapp: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="request-land">
      <h1>Encomende seu Terreno</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome da Empresa:</label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
        <label>Horizonte de Tempo para Compra:</label>
        <select
          value={formData.purchaseHorizon}
          onChange={(e) => setFormData({ ...formData, purchaseHorizon: e.target.value })}
        >
          <option>Até 6 meses</option>
          <option>6 meses a 1 ano</option>
          <option>Mais de 1 ano</option>
        </select>
        <label>Faixa de VGV Pretendido:</label>
        <input
          type="text"
          value={formData.vgvRange}
          onChange={(e) => setFormData({ ...formData, vgvRange: e.target.value })}
        />
        <label>Tipo de Produto Buscado:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="Minha Casa Minha Vida"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  productType: [...formData.productType, e.target.value]
                })
              }
            />
            Minha Casa Minha Vida
          </label>
          <label>
            <input
              type="checkbox"
              value="Médio Padrão"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  productType: [...formData.productType, e.target.value]
                })
              }
            />
            Médio Padrão
          </label>
          <label>
            <input
              type="checkbox"
              value="Alto Padrão"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  productType: [...formData.productType, e.target.value]
                })
              }
            />
            Alto Padrão
          </label>
        </div>
        <label>Nome da Pessoa:</label>
        <input
          type="text"
          value={formData.personName}
          onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
        />
        <label>WhatsApp:</label>
        <input
          type="text"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RequestLand;
