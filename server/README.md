# Документация к API

* [Работа с пользователями](#user)
* [Работа с категориями](#category)
* [Работа с товарами](#product)
* [Работа с заявками](#demand)

## <a name="user">Работа с пользователями</a>

### POST  /log_in

Принимает объект:
```JSON
{
    "email": "example@example.com",
    "password": "password"
}
```
и возвращает следующий объект в случае успеха:

```JSON
{
    "canAddCategory": true,
    "canAddProduct": false,
    "email": "example@example.com",
    "firstname": "firstname",
    "id": 123,
    "lastname": "lastname",
    "password": "password"
}
```
В случае ошибки возвращает:
```
"Неверные имя или пароль", 400 (Bad request)
```

### POST /post_user

Принимает объект:
```JSON
{
    "firstname": "firstname",
    "lastname": "firstname",
    "email": "example@example.com",
    "password": "password",
    "canAddCategory": false,
    "canAddProduct": true,
    "bag": []
}
```
и возвращает его же в случае успеха.
Если пользователь с такой почтой уже есть в системе, возвращается следующая ошибка:
```
"Пользователь с такой почтой уже существует", 400 (Bad request)
```
Иначе возвращает:
```
"Ошибка регистрации", 400 (Bad request)
```

### POST /get_users

Возвращает список пользователей.  
  
## <a name="category">Работа с категориями</a>


### POST /post_category

Принимает объект:
```JSON
{
    "name": "name",
    "creator_id": 123
}
```
В случае успеха возвращает:
```
"Готово", 201
```
В случае ошибки возвращает:
```
"Ошибка добавления категории", 400 (Bad request)
```

### GET /get_categories

Возвращает список категорий. 

### DELETE /del_category/id

Необходимо указать id категории, которую собираемся удалять. 
В случае успеха возвращается:
```
"Готово", 201
```
В случае ошибки вернется:
```
"Ошибка удаления категории", 400 (Bad request)
```

## <a name="product">Работа с товарами</a>

### POST /post_product

Принимает объект:
```JSON
  {
    "category_id": 1234,
    "creationDate": "25/08/2020 22:49",
    "creator_id": 123,
    "extra_info": "extra info",
    "name": "name",
    "price": 12345,
    "specs": [
      "spec1",
      "spec2",
      "..."
    ],
    "values": [
      "val 1",
      "val 2",
      "..."
    ]
  }
```
В случа успеха вернет:
```
"Готово", 201
```
В случае ошибки вернет:
```
"Ошибка добавления товара", 400
```
### GET /get_products

Возвращает список товаров

### DELETE /del_product/id

Необходимо указать id товара, который собираемся удалять. 
В случае успеха возвращается:
```
"Готово", 201
```
В случае ошибки вернется:
```
"Ошибка удаления товара", 400 (Bad request)
```

## <a name="demand">Работа с заявками</a>

### POST /post_demand

Принимает объект:
```JSON
{
  "products": [{},{}],
  "quantities": [123,1234],
  "costs": [1542, 5633],
  "info": ["Название заявки",
           "Суммарная максимальная стоимость заказа",
           "Сроки",
           "Адрес",
           "Источник финансирования",
           "Виза заместителя начальника ПФУ",
           "Контактное лицо",
           "Материально ответственное лицо"]
}
```
В случае успеха вернется:
```
"Готово", 201
```

### GET /get_demand
Возвращает .docx файл следующего вида:

![](https://github.com/inctnce/spbu-automation-app/blob/master/images/form.jpg)
