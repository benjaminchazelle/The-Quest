# The Quest

## Install

`npm install`

`npm run dev --host`

`http://loclahost:5173`

Editer `frontend/src/components/challenge.ts`

## Les énigmes

Que vaut "<number> <"+", "-", "*"> <number>" ?

> Example : Que vaut "9 + 41" ? // "50"
>
> Stratégie : Splitter (String.split()) la question sur les guillemets avec pour extraire "9 + 41", 
>             puis resplitter sur les espaces pour récuperer "9", "+" et "41"
>             Convertir les nombres en number, puis effectuer le calcul    
>             Retourner le résultat sosu forme de string
>
> Hint : "Yes I am".split(' ') // ["Yes", "I", "am"]

Sauras tu m'écrire le mot "<string>" en <"majuscule", "minuscule"> ?

> Example : Sauras tu m'écrire le mot "VIE" en minuscule ? // "vie"
>
> Stratégie : Splitter la question sur les guillemets pour récupérer le mot "VIE"
>             En fonction de si la question contient "majuscule" ou "minuscule", transformer la chaîne (String.toLowerCase(), String.toUpperCase())
>
> "Yes I am".includes("I") // true
> "HELLO".toLowerCase() // "hello"

Sauras tu enlever les <"voyelles", "consonnes"> au mot "<string>" ?

> Example : Sauras tu enlever les voyelles au mot "hello" ? // "hll"
>
> Stratégie : Splitter la question sur les guillemets pour récupérer le mot "hello"
>             Supprimer les voyelles ou les consonnes avec String.replace()
>
> "0123456789".replace(/[23]/g, "") // "01456789"
> "0123456789".replace(/[^23]/g, "") // "23"

Es-tu capable d'écrire en lettre les chiffres de <number> ?

> Example : Es-tu capable d'écrire en lettre les chiffres de 456 ? // "quatre cinq six"
>
> Stratégie : Récuperer le nombre de question avec String.match()
>             Remplacer chaque chiffre en lettre via String.replace()
>
> "I am 12".match(/[a-z]/g, "") // "I  12"
> "I am 12".match(/[a-z]/g, "") // "am"
> "Yes I want, Yes I do".replace(/I/g, "we") // "Yes we want, Yes we do"

Combien de scientifiques ont la lettre <string> dans leur <"nom"|"prénom"> ?

> Example : Combien de scientifiques ont la lettre S dans leur nom ? // 3
>
> Stratégie : Récuperer la lettre avec String.match()
>             Filtrer le dataset avec Array.filter pour avoir, en fonction de leur nom ou de leur prénom (String.includes()), si la lettre est présente ou non (String.includes())
>
> ["alice@gmail.com", "bob@outlook.com", "derek@gmail.com", "eve@yahoo.com"].filter(mail => mail.endsWith("@gmail.com")) //  ["alice@gmail.com", "derek@gmail.com"]




### Bonus


Dans l'ordre alphabétique<"", " inverse">, qui est le premier scientifique dont le nom commence par la lettre <string> ?

Combien de scientifiques en <"chimie", "physique", "informatique", "mathématiques"> sont mort avant ou à <number> ans ?