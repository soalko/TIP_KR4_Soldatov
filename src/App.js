import React, {useState, useEffect} from 'react';
import './App.css';

// Локальные данные с рецептами
const recipesData = [
    {
        id: 1,
        name: "Спагетти Карбонара",
        description: "Классическое итальянское блюдо с беконом, яйцами и сыром пармезан",
        cookingTime: "20 мин",
        difficulty: "Средняя",
        category: "Паста"
    },
    {
        id: 2,
        name: "Омлет с овощами",
        description: "Легкий и полезный завтрак со свежими овощами и зеленью",
        cookingTime: "15 мин",
        difficulty: "Легкая",
        category: "Завтрак"
    },
    {
        id: 3,
        name: "Куриный суп",
        description: "Ароматный суп с курицей, овощами и домашней лапшой",
        cookingTime: "40 мин",
        difficulty: "Легкая",
        category: "Супы"
    },
    {
        id: 4,
        name: "Бефстроганов",
        description: "Нежное мясо в сметанном соусе с шампиньонами и луком",
        cookingTime: "35 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 5,
        name: "Шоколадный торт",
        description: "Влажный шоколадный торт с шоколадной глазурью",
        cookingTime: "60 мин",
        difficulty: "Сложная",
        category: "Десерты"
    },
    {
        id: 6,
        name: "Цезарь с курицей",
        description: "Салат с хрустящими гренками, пармезаном и соусом цезарь",
        cookingTime: "25 мин",
        difficulty: "Легкая",
        category: "Салаты"
    },
    {
        id: 7,
        name: "Плов с бараниной",
        description: "Ароматный узбекский плов с нежной бараниной и морковью",
        cookingTime: "90 мин",
        difficulty: "Сложная",
        category: "Плов"
    },
    {
        id: 8,
        name: "Греческий салат",
        description: "Классический салат с фетой, оливками и свежими овощами",
        cookingTime: "15 мин",
        difficulty: "Легкая",
        category: "Салаты"
    },
    {
        id: 9,
        name: "Лазанья Болоньезе",
        description: "Итальянская паста с мясным соусом бешамель и сыром",
        cookingTime: "75 мин",
        difficulty: "Сложная",
        category: "Паста"
    },
    {
        id: 10,
        name: "Тыквенный суп-пюре",
        description: "Нежный крем-суп из тыквы со сливками и имбирем",
        cookingTime: "30 мин",
        difficulty: "Легкая",
        category: "Супы"
    },
    {
        id: 11,
        name: "Жареная картошка",
        description: "Хрустящая картошка с луком и зеленью",
        cookingTime: "25 мин",
        difficulty: "Легкая",
        category: "Гарниры"
    },
    {
        id: 12,
        name: "Куриные крылышки",
        description: "Хрустящие куриные крылышки в медово-соевом соусе",
        cookingTime: "45 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 13,
        name: "Блины с икрой",
        description: "Тонкие блины с красной икрой и сметаной",
        cookingTime: "30 мин",
        difficulty: "Средняя",
        category: "Завтрак"
    },
    {
        id: 14,
        name: "Гуляш говяжий",
        description: "Густой мясной гуляш с картофелем и морковью",
        cookingTime: "80 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 15,
        name: "Тирамису",
        description: "Итальянский десерт с кофе, маскарпоне и какао",
        cookingTime: "40 мин",
        difficulty: "Сложная",
        category: "Десерты"
    },
    {
        id: 16,
        name: "Фаршированные перцы",
        description: "Сладкие перцы с мясной начинкой и томатным соусом",
        cookingTime: "60 мин",
        difficulty: "Средняя",
        category: "Овощи"
    },
    {
        id: 17,
        name: "Стейк из лосося",
        description: "Стейк из лосося с лимоном и травами на гриле",
        cookingTime: "20 мин",
        difficulty: "Средняя",
        category: "Рыба"
    },
    {
        id: 18,
        name: "Рататуй",
        description: "Французское овощное рагу из баклажанов, кабачков и перцев",
        cookingTime: "50 мин",
        difficulty: "Средняя",
        category: "Овощи"
    },
    {
        id: 19,
        name: "Панна котта",
        description: "Нежный итальянский десерт с ванилью и ягодным соусом",
        cookingTime: "25 мин",
        difficulty: "Средняя",
        category: "Десерты"
    },
    {
        id: 20,
        name: "Голубцы",
        description: "Капустные листья с мясной начинкой в томатном соусе",
        cookingTime: "70 мин",
        difficulty: "Сложная",
        category: "Мясо"
    },
    {
        id: 21,
        name: "Грибной крем-суп",
        description: "Ароматный крем-суп из шампиньонов со сливками",
        cookingTime: "35 мин",
        difficulty: "Легкая",
        category: "Супы"
    },
    {
        id: 22,
        name: "Сырники",
        description: "Творожные сырники с ванилью и сметаной",
        cookingTime: "25 мин",
        difficulty: "Легкая",
        category: "Завтрак"
    },
    {
        id: 23,
        name: "Шашлык из свинины",
        description: "Маринованная свинина на углях с луком и зеленью",
        cookingTime: "120 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 24,
        name: "Паста с морепродуктами",
        description: "Спагетти с креветками, мидиями и чесночным соусом",
        cookingTime: "30 мин",
        difficulty: "Средняя",
        category: "Паста"
    },
    {
        id: 25,
        name: "Винегрет",
        description: "Овощной салат со свеклой, картофелем и солеными огурцами",
        cookingTime: "40 мин",
        difficulty: "Легкая",
        category: "Салаты"
    },
    {
        id: 26,
        name: "Куриная грудка",
        description: "Запеченная куриная грудка с травами и лимоном",
        cookingTime: "35 мин",
        difficulty: "Легкая",
        category: "Мясо"
    },
    {
        id: 27,
        name: "Борщ",
        description: "Наваристый борщ со свеклой и говядиной",
        cookingTime: "90 мин",
        difficulty: "Средняя",
        category: "Супы"
    },
    {
        id: 28,
        name: "Печень по-строгановски",
        description: "Нежная печень в сметанном соусе с луком",
        cookingTime: "25 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 29,
        name: "Чизкейк Нью-Йорк",
        description: "Классический чизкейк с песочной основой",
        cookingTime: "180 мин",
        difficulty: "Сложная",
        category: "Десерты"
    },
    {
        id: 30,
        name: "Овощи на гриле",
        description: "Смесь сезонных овощей с оливковым маслом и травами",
        cookingTime: "20 мин",
        difficulty: "Легкая",
        category: "Овощи"
    },
    {
        id: 31,
        name: "Солянка мясная",
        description: "Густой суп с различными видами мяса и солеными огурцами",
        cookingTime: "80 мин",
        difficulty: "Сложная",
        category: "Супы"
    },
    {
        id: 32,
        name: "Креветки в чесночном соусе",
        description: "Королевские креветки в пикантном чесночном соусе",
        cookingTime: "15 мин",
        difficulty: "Легкая",
        category: "Морепродукты"
    },
    {
        id: 33,
        name: "Картофель по-деревенски",
        description: "Ароматный запеченный картофель с чесноком и розмарином",
        cookingTime: "45 мин",
        difficulty: "Легкая",
        category: "Гарниры"
    },
    {
        id: 34,
        name: "Фондю сырное",
        description: "Швейцарское сырное фондю с белым вином и хлебом",
        cookingTime: "20 мин",
        difficulty: "Средняя",
        category: "Закуски"
    },
    {
        id: 35,
        name: "Утка с яблоками",
        description: "Запеченная утка с яблоками и медовой глазурью",
        cookingTime: "120 мин",
        difficulty: "Сложная",
        category: "Мясо"
    },
    {
        id: 36,
        name: "Гречневая каша",
        description: "Рассыпчатая гречневая каша с маслом и зеленью",
        cookingTime: "25 мин",
        difficulty: "Легкая",
        category: "Гарниры"
    },
    {
        id: 37,
        name: "Севиче из лосося",
        description: "Свежий лосось маринованный в лаймовом соке с авокадо",
        cookingTime: "30 мин",
        difficulty: "Средняя",
        category: "Рыба"
    },
    {
        id: 38,
        name: "Куриные наггетсы",
        description: "Хрустящие куриные наггетсы в панировке",
        cookingTime: "25 мин",
        difficulty: "Легкая",
        category: "Закуски"
    },
    {
        id: 39,
        name: "Морковный торт",
        description: "Влажный торт с морковью, орехами и сливочным кремом",
        cookingTime: "70 мин",
        difficulty: "Средняя",
        category: "Десерты"
    },
    {
        id: 40,
        name: "Ризотто с грибами",
        description: "Кремовое ризотто с шампиньонами и пармезаном",
        cookingTime: "40 мин",
        difficulty: "Сложная",
        category: "Рис"
    },
    {
        id: 41,
        name: "Окрошка",
        description: "Освежающий холодный суп с квасом, овощами и мясом",
        cookingTime: "30 мин",
        difficulty: "Легкая",
        category: "Супы"
    },
    {
        id: 42,
        name: "Фалафель",
        description: "Жареные шарики из нута с восточными специями",
        cookingTime: "50 мин",
        difficulty: "Средняя",
        category: "Вегетарианские"
    },
    {
        id: 43,
        name: "Свиные ребрышки",
        description: "Запеченные свиные ребрышки в барбекю соусе",
        cookingTime: "90 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 44,
        name: "Брускетта с томатами",
        description: "Итальянская закуска с хлебом, помидорами и базиликом",
        cookingTime: "10 мин",
        difficulty: "Легкая",
        category: "Закуски"
    },
    {
        id: 45,
        name: "Пахлава",
        description: "Слоеный восточный десерт с орехами и медом",
        cookingTime: "120 мин",
        difficulty: "Сложная",
        category: "Десерты"
    },
    {
        id: 46,
        name: "Куриный рулет",
        description: "Рулет из куриного филе с грибами и сыром",
        cookingTime: "60 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 47,
        name: "Гаспачо",
        description: "Испанский холодный томатный суп с овощами",
        cookingTime: "20 мин",
        difficulty: "Легкая",
        category: "Супы"
    },
    {
        id: 48,
        name: "Лава торт",
        description: "Шоколадный торт с жидкой начинкой и ванильным мороженым",
        cookingTime: "35 мин",
        difficulty: "Средняя",
        category: "Десерты"
    },
    {
        id: 49,
        name: "Стейк Рибай",
        description: "Сочный стейк из говядины с розмарином и чесноком",
        cookingTime: "25 мин",
        difficulty: "Средняя",
        category: "Мясо"
    },
    {
        id: 50,
        name: "Спринг-роллы",
        description: "Хрустящие роллы с овощами и курицей в рисовой бумаге",
        cookingTime: "40 мин",
        difficulty: "Сложная",
        category: "Закуски"
    }
];

function App() {
    const [recipes] = useState(recipesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [greeting, setGreeting] = useState('');

    // Фильтрация рецептов по поисковому запросу
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            return "Доброе утро";
        } else if (hour >= 12 && hour < 18) {
            return "Добрый день";
        } else if (hour >= 18 && hour < 23) {
            return "Добрый вечер";
        } else {
            return "Доброй ночи";
        }
    };

    useEffect(() => {
        setGreeting(getGreeting());
    }, []);

    return (
        <h1 className="app">
            <header className="app-header">
                <h1>{greeting}, чемпион)</h1>
                <h2>Каталог рецептов</h2>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Поиск рецептов"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </header>

            <main className="recipes-container">
                {filteredRecipes.length === 0 ? (
                    <div className="no-results">
                        Рецепты не найдены
                    </div>
                ) : (
                    <div className="recipes-grid">
                        {filteredRecipes.map(recipe => (
                            <div key={recipe.id} className="recipe-card">
                                <h3 className="recipe-name">{recipe.name}</h3>
                                <p className="recipe-description">{recipe.description}</p>
                                <div className="recipe-meta">
                                    <span className="cooking-time">⏱️ {recipe.cookingTime}</span>
                                    <span className={`difficulty ${recipe.difficulty.toLowerCase()}`}>
                    {recipe.difficulty}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </h1>
    );
}

export default App;