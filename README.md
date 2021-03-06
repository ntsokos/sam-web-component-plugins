# sam-web-component-plugins

Exploring how to extend an Angular application by introducing a client plugin side architecture using web components. 

It is based on the well-known tour of heroes tutorial, which can be found on [Angular's official documentation](https://angular.io/tutorial)

This is prototype, assembled for a [Scotland's Angular Meetup talk](https://www.meetup.com/Scotlands-Angular-Meetup), it is not production-ready code and should not be used as such.

[![Watch the video](https://img.youtube.com/vi/CjbX5r5gvvo/hqdefault.jpg)](https://youtu.be/CjbX5r5gvvo)


## Step 0
Get Tour of Heroes tutoarial source code

## Step 1 
Add Angular Elements dependency
Fire up console and run `ng add @angular/elements`

## Step 2 
Hardcoded hero universe web component
- Introduce hero universe indicator component
- Add Custom Element schema ( schemas: [CUSTOM_ELEMENTS_SCHEMA] )
- hardcode into heroes component

## Step 3
client side plugin infrustructure
- Declare plugins through pluginHeroes global variable
- Dynamically load plugins through a heroes host component
- Remove Custom Elements schema
