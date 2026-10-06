import { useEffect, useState } from 'react';

function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('/api/inventory')
      .then((response) => response.json())
      .then((data) => setInventory(data))
      .catch((error) => console.error('Erro ao buscar inventário:', error));
  }, []);

  return (
    <div>
      <h1>Inventário</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Estoque mínimo</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item_code}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.min_stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;