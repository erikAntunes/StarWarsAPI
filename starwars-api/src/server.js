const { app, initializeApp } = require('./app');

const port = 3000;

initializeApp().then(() => {
    app.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
}).catch(error => {
    console.error('Failed to initialize the app', error);
    process.exit(1);
});