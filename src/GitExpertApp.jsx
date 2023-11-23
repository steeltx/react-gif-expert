import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GitExpertApp = () => {

	const [categories, setCategories] = useState(['Dragon Ball']);

	const onAddCategory = (newCategory) => {

		// si ya existe la categoria anteriormente, no agregar
		if(categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	}

	return (
		<>
			<h1>GitExpertApp</h1>

			<AddCategory 
				onNewCategory = {value => onAddCategory(value)}
			/>
			
			<ol>
				{categories.map(category => {
					return <li key={category}>{category}</li>
				})}
			</ol>
		
		</>
	)
}
