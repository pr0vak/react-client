import { useEffect, useState } from 'react';
import './App.css';

// {
//   "name": "Компактный лейка",
//   "category": "Дом и сад",
//   "price": 45160,
//   "description": "Компактный лейка в современном дизайне",
//   "is_featured": false,
//   "id": 1,
//   "user_id": 1,
//   "created_at": "2026-09-13T06:58:27.858057"
// },

type Product = {
	id: number,
	name: string,
	price: number,
};

function App() {

	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("http://localhost:9000/api/v1/products")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Всё плохо: ${response.status}`);
				}

				return response.json() as Promise<Product[]>;
			})
			.then((data) => setProducts(data))
			.catch((err) => {
				setError(err.message);
			});
	});

	if (error) {
		return (<h1>Ошибка: {error}</h1>);
	}

  return (
    <div>
			<h1>Товары</h1>

			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.id} - {product.name}
					</li>
				))}
			</ul>
    </div>
  )
}

export default App
