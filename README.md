# Emission Chart Project

##Description

```
  This project was created with the intention of learning how to develop an app in Vue.js with TypeScript
 using Vue-Chart.js frame-work to generate charts with data from a external public API retrived with Axios and using 
 Bulma.IO as SCSS frame-work.
```

##Screen Shots


![image](https://user-images.githubusercontent.com/73316772/165095711-d973232c-c1f0-4edb-8acf-8945874ba447.png)

![print2](https://user-images.githubusercontent.com/73316772/165097670-3cbfd44d-ab17-403c-825a-06fd4731214d.png)

## Project setup
```
npm install

npm run serve

npm run build

### Lints and fixes files

npm run lint
```
### How it Works
```
  The users need to select a Country a Type of pollutant and a period of time.
  After selecting, the back-end will retrive the user input and send to url 
  API to await thoses data.
  When receiving those data, it will then be called the FormatedDate() 
  This method will format the raw data in 2 types, 
  the first is create an array of object with Average and Date ="year/month/day" 
  and the second is an array of object with Average and Data="year/month" where is sum up all days to be 1 month with all Average of the day.
  
  After formatDate() is done, then is called SendData() to send thoses data to BarChart Component. 
  Before sending it is to know if the array is bigger then 31.
  Which means that if is bigger then 31 is shown the 2 type of array,
  if not is sended the 1 type of array to BarChart Component.
    
  For all this works with TypeScript, is needed to create those type of variable, so It is needed to make Interface of all kind of data. 
  After creating those Interface it is used on App.vue variables.
  
  To retrive data from API is used an service where is an script of getting those data from the API.
  To Format a data was used Fabric to do data manipulation
  

```

### Customize configuration
```
See [Configuration Reference](https://cli.vuejs.org/config/).
```

### Stack and API

```
Vue.js
TypeScript
Vue-Chart.js (https://vue-chartjs.org)
API (https://emissions-api.org)
Bulma.IO (https://bulma.io)

```


### License

```
MIT License

Copyright (c) [2022] [Bernnardo Soares Andrade Pestana]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


