## Типы данных в Java Script:

### Примитивы
</hr>

- Number(

 как целочисленные значения, так и числа с плавающей точкой.

 числа плюсовые и минусовые в пределах от -2 в 53-1 степени до 2 в 53 степени
 
 специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.
 
  )
  
 - BigInt(

добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.

Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:

const bigInt = 1234567890123456789012345678901234567890n;

- STRING (строковые значения )должна быть заключена в кавычки.
Cуществует 3 типа кавычек:одинарные(' ') двойные(" ") , обратные` `- для обозначения шаблонной строки.

Одинарные кавычки  идентичны двойным в JavaScript

Шаблонная строка с обратными кавычками(`   `) имеет специальные свойства:

может содержать подстановки, обозначаемые знаком доллара и фигурными скобками (${выражение}). Выражения в подстановках и текст между ними передаются в функцию. По умолчанию функция просто объединяет все части в строку.

- BOOLEAN  может принимать только два значения: true (истина) и false (ложь).

- NULL специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

- UNDEFINED означает, что «значение не было присвоено».

Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:

```js


let b;

alert(b);

//выведет  'undefined'



```

-SYMBOL используется для создания уникальных идентификаторов объектов

### Обьекти 
-OBJECT используются для хранения коллекций данных или более сложных объектов

### Примеры данных разных типов:

```js

const number = 123;
const string = 'Some string';
const boolean = true;
let nothingYet = null;
let nothing;
const array = [];
const object = {};
const func = () => {};

```

## Разница между операторами 

##                '== 'и '==='

Оператор сравнения == означает не строгое сравнение в котором происходит автоматическое приведение типов

 Например, оно не отличает 0 от false:
 
 ```js

alert(0 == false); // true
Та же проблема с пустой строкой:

alert("" == false); // true

```

Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу. В итоге, и пустая строка, и false становятся нулём.

Оператор строгого равенства`===' проверяет равенство без приведения типов.

Другими словами, если a и b имеют разные типы данных , то проверка a === b немедленно возвращает false без попытки их преобразования.

```js

alert(0 === false); // false, так как сравниваются разные типы

console.log(2 === '2');

//false а в случае использования '==' было бы 'true'


```

## Операторы в JavaScript

### Все операторы в JavaScript можно
### разделить на три основные группы:

-БАЗОВЫЕ ОПЕРАТОРЫ(сложения(+) ,вычитания(-), деления(/), умножения(*), остаток от деления(%), возведение в степень(**).Операторы * и / имеют приоритет над + и - т е эти операции выполняются первыми если отсутствуют скобки 

Бывают унарными и бинарными в зависимости от количества операндов, к которым применяется оператор

ОПЕРАТОР ПРИСВОЕНИЯ (=) В JavaScript один знак (=) означает присвоение значения 

ИНКРЕМЕНТ И ДЕКРЕМЕНТ  ++ -- Увеличивает или уменьшает на единицу  при каждой итерации Приоритет выше чем у других операторов
 
 ```js
 
 for(i = 0 ; i < 10 ; i++){
 
 console.log(i*2);
 }
 // i++ увеличивает i на единицу при каждой итерации
 
```

ОПЕРАТОР ЗАПЯТАЯ (,) выполняются сразу несколько выражений но возвращается результат только последнего выражения


-ОПЕРАТОРЫ СРАВНЕНИЯ

 -Больше/меньше:` a > b`,` a < b`. Все операнды будут автоматически приведены к числовому типу


-Больше/меньше или равно: `a >= b`, `a <= b`.


-Равно: `a == b` и `a === b`. Обратите внимание, для    сравнения используется двойной или тройной знак равенства `==` или `===`. Один знак равенства `a = b` означал бы присваивание.


-Не равно. В математике обозначается символом `≠`, но в   JavaScript записывается как `a != b` или `a !== b`.

</hr>

-ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
В JavaScript есть три логических оператора:

1. `||` (ИЛИ) - находит первое истинное значение

```js

console.log( 0 || 5);
//Результат- 5: 0 приведен к false, 5 - true

```

2. `&&` (И) - находит первое ложное значение.

</hr>

Условный оператор if состоит из: ключевого слова if; условия (выражения в круглых скобках), которое должно равняться true или false (или быть приведено к одному из этих значений); инструкции, которую нужно выполнить, если условие является true или приведено к нему.

</hr>
`!` (НЕ) - приводит аргумент к логическому типу `true/false` и затем возвращает противоположное значение.

```js
   
    alert( !true ); // false
    alert( !0 ); // true
   
    alert( !!"non-empty string" ); // true
    alert( !!null ); // false
    
   ```
</hr>

## Тернарный оператор 

Это единственный оператор с тремя аргументами, что отражено в названии. Первый аргумент — это условие. Если оно истинно (равно true), оператор вернёт второй аргумент — выражение1. В ином случае он вернёт третий аргумент — выражение2.

let переменная = условие ? значение1 : значение2;

```js 

// Пример с использование условного оператора if

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

// Тот же пример с использованием тернарного оператора

let age = 17;

console.log( age >= 18 ? true: false );

```
