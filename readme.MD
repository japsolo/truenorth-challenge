# Truenorth Challenge

Hi, I'm Javier Herrera and this is my solution for the challenge. Next, You'll find the instructions to run the app.

### Requirements
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository in your machine using the command:

```
git clone https://github.com/japsolo/truenorth-challenge.git
```

2. Install the main dependencie using the command:

```
npm install
```

3. Install all the app dependencies using the command:

```
npm run create
```

4. Run the app using the command:

```
npm run dev
```

Also you can use `yarn` instead of `npm` to install the dependencies.

5. Open the browser and go to http://localhost:3000.

By default you will see only 3 task. But you can re-generate the tasks by passing a query string like this:

```
http://localhost:3000/?reGenerate=true&amount={quantity}
```

> **Note:** If you don't pass the **reGenerate** property with the **true** value, the app will not re-generate the tasks list. Also notice that the **amount** property needs as value a number greater than 0. Passin only `reGenerate=true` will generate the default amount of tasks (3).

---

**Proudly made by:** [Javier Herrera](https://javier-herrera.com)

