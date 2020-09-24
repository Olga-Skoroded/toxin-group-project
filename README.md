# Toxin

Данный проект является тестовым заданием компании [Fullstack-development](https://www.fullstack-development.com/).   
[Главная страница](https://fsd-toxin.netlify.app/).  


## 🏷️ Содержание

- [Требования](#requirements)
- [Установка](#installation)
- [Команды](#commands)
- [Cтраницы ui-kit](#ui-kit-pages)
- [Лицензия](#license)


## <a name="requirements"></a> ✒️ Требования

Прежде чем приступить к установке убедитесь что у вас имеются следующие компоненты списка:

- [Node.js](https://nodejs.org/ru/)
- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)


## <a name="installation"></a> 💾 Установка

Инcтрукции данного раздела следует выполнять в командной строке.

```bash
# Скачайте репозиторий
git clone https://github.com/Olga-Skoroded/toxin-group-project

# Перейдите в папку с репозиторием
cd toxin-group-project

# Установите зависимости
npm i
```


## <a name="commands"></a> 📗 Команды

- `npm run dev` - поднимает локальный сервер с результатом cборки проекта.

- `npm run build` - собирает SSR проект и экспортирует в папку `/.next`.

- `npm run start` - поднимает локальный сервер над папкой `/.next`.

- `npm run export` - собирает проект в статический сайт и экспортирует в папку `/out`.

- `npm run lint` - проверяет код на соответствие требованиям указанным в [eslint](./.eslintrc.js).

- `npm run lint:types` - проверяет код на соотвествие требованиям типизации [typescript](./tsconfig.json).

- `npm run lint:styles` - проверяет код на соотвествие требованиям [stylelint](./.stylelintrc.json).


## <a name="ui-kit-pages"></a> 📄 Cтраницы ui-kit

#### Элементы

- [Colors & types](https://fsd-toxin.netlify.app/guide/colors-and-types)  
- [Form elements](https://fsd-toxin.netlify.app/guide/form-elements)  

#### Компоненты

- [Cards](https://fsd-toxin.netlify.app/guide/cards)  
- [Header & footers](https://fsd-toxin.netlify.app/guide/headers-and-footers)  


## <a name="license"></a> 📃 Лицензия

Этот проект лицензирован на условиях лицензии **MIT**.  

> Вы можете ознакомиться с содержанием лицензии [здесь](./LICENSE.md).
