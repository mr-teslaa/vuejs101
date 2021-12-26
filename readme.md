# Journey of learning VUE.JS version 3.0

## I created different branches for different lesson

_Tutorial 1: https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1_

## Lesson 1 -TheCodeNinja

### Goals of this lesson

    * Mouse Events
        => we are using shorthand ```@``` instead of using ```v-on:```. In example, ```@mouseleave="handleEvent"``` is short form of ```v-on:mouseleave="handleEvent"```

    * Attribute Binding
        => Attribute binding is when we add dynamic values in our html attributes. It could be ```href``` or ```classname``` or ```value``` and so on.

        => For binding any data in html, you need to use ```v-bind:(whatever attribute we need to bind)```. In example: ```v-bind:href="url"``` (where **user** is a data which defined in our js file)

        => ```:``` is the short form of attribute binding instead of ```v-bind:```. i.e. ```:href="url"``` is the short form of ```v-bind:href="url"```

    * Dynamic Classes
        => Dynamic classes means give html certien classes in certain condition.

        => the syntex is ```:class={ classname: condition }```. i.e ```:class={ fav: isFav}``` here classname ```fav``` will only apply if ```ifFav``` condition is true. if you want to access that in a object then you may do this ```:class={ fav: book.isFav }``` where **book** is the object and refers to every individual book
