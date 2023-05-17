import {useState} from 'react'

function Categories() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = ['for salad', 'for meat', 'for deserts', 'for drinks'];

    const onClickCategory = (category) => {
        setActiveCategory(category);
    }

    return (
        <div className='catalog-content'>
            <ul className='catalog-content filter'>
                {
                    categories.map((value, i) => (<li onClick = {() => onClickCategory(i)} className={activeCategory === i ? 'filter-activeitem' : 'filter-item'}>
                        {value}

                    </li>))
                }
            </ul>
        </div>
    



    
    )
}

export default Categories;