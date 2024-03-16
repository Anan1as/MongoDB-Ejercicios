//--------------------------------------> Operaciones de Actualización <--------------------------------------//
//--1.Incrementar el salario de todos los usuarios en un 10%.
db.ussers.updateMany({}, { $mul: { salario: 1.1 } })
db.ussers.find();


//--2.Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.ussers.updateMany({ciudad: "New York"}, {$set: {ciudad: "Los Ángeles"}});
db.ussers.find({ciudad: "New York"});
db.ussers.find({ciudad: "Los Ángeles"});


//--3.Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".
db.ussers.updateOne({nombres: "Juan", apellidos: "Perez"}, {$set: {correo: "nuevo@riwi.com"}});
db.ussers.find({nombres: "Juan", apellidos: "Perez"});

db.ussers.insertOne(
    {
        nombres: "Juan",
        apellidos: "Perez",
        correo: "juan.perez@example.com",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 52000,
        edad: 32,
        altura: 177,
        peso: 160
    }
);


//--4.Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.
db.ussers.updateOne({correo: "ejemplo@riwi.es"}, {$set: {edad: 35}});
db.ussers.find({correo: "ejemplo@riwi.es"});

db.ussers.insertOne(
    {
        nombres: "Asriel",
        apellidos: "Dreemur",
        correo: "ejemplo@riwi.es",
        ciudad: "Barcelona",
        pais: "España",
        salario: 52000,
        edad: 12,
        altura: 224,
        peso: 196
    }
);


//--5.Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.ussers.updateMany({pais: "Mexico"}, {$set: {pais: "Canada"}});
db.ussers.find({pais: "Mexico"});
db.ussers.find({pais: "Canada"});

db.ussers.insertMany([
    {
        nombres: "Jeremy",
        apellidos: "Soto",
        correo: "jeremy.soto@gmail.com",
        ciudad: "Ciudad de México",
        pais: "Mexico",
        salario: 78924,
        edad: 20,
        altura: 172,
        peso: 150
    },
    {
        nombres: "Elfie",
        apellidos: "After Dark",
        correo: "afterDark@gmail.com",
        ciudad: "Ottawa",
        pais: "Canada",
        salario: 23489,
        edad: 30,
        altura: 178,
        peso: 176
    }
]);


//--6.Aumentar la altura de todos los usuarios en 5 centímetros.
db.ussers.updateMany({}, { $inc: { altura: 5 } });
db.ussers.find();


//--7.Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".
db.ussers.updateOne({correo: "otro@riwi.net"}, {$set: {apellidos: "González"}});
db.ussers.find({correo: "otro@riwi.net"});

db.ussers.insertOne(
    {
        nombres: "Luis",
        apellidos: "Perez",
        correo: "otro@riwi.net",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 52000,
        edad: 32,
        altura: 177,
        peso: 160
    }
);


//--8.Actualizar el peso del usuario con nombre "Maria" a 140 libras.
db.ussers.updateOne({nombres: "Maria"}, {$set: {peso: 140}});
db.ussers.find({nombres: "Maria"});


//--9.Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.ussers.updateMany({pais: "Estados Unidos"}, { $mul: { salario: 1.15 } });
db.ussers.find({pais: "Estados Unidos"});


//--10.Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.ussers.updateOne({nombres: "Pedro"}, {$set: {correo: "nuevo_correo@riwi.io"}});
db.ussers.find({nombres: "Pedro"});

db.ussers.insertOne(
    {
        nombres: "Pedro",
        apellidos: "Perez",
        correo: "pedrito-perez@gmail.com",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 52000,
        edad: 32,
        altura: 177,
        peso: 160
    }
);

//--11.Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
db.ussers.updateMany({edad: {$lt: 30}}, {$set: {edad: 30}});
db.ussers.find({edad: {$lt: 30}});


//--12.Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.ussers.updateMany({salario: {$lt: 3000}}, { $mul: { salario: 1.2 } });
db.ussers.find({salario: {$lt: 3000}});


//--13.Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.ussers.updateMany({ciudad: "Bogotá"}, {$set: {ciudad: "Medellin"}});
db.ussers.find({ciudad: "Bogotá"});
db.ussers.find({ciudad: "Medellin"});


//--14.Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.ussers.updateMany({salario: {$gt: 5000}}, {$set: {pais: "Australia"}});
db.ussers.find({salario: {$gt: 5000}});


//--15.Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.ussers.updateMany({edad: {$gt: 50}}, { $inc: { edad: -5 } });
db.ussers.find({edad: {$gt: 50}});

db.ussers.insertMany([
    {
        nombres: "Elena",
        apellidos: "Perez",
        correo: "elena@gmail.com",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 52000,
        edad: 55,
        altura: 177,
        peso: 160
    },
    {
        nombres: "Luis",
        apellidos: "Perez",
        correo: "lui@gmail.com",
        ciudad: "Cundinamarca",
        pais: "Colombia",
        salario: 52000,
        edad: 60,
        altura: 177,
        peso: 160
    }
]);


//--16.Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
db.ussers.updateMany({peso: {$gt: 200}}, {$set: {peso: 180}});
db.ussers.find({peso: {$gt: 200}});


//--17.Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.ussers.updateMany({ciudad: "London"}, { $mul: { salario: 1.25 } });
db.ussers.find({ciudad: "London"});


//--18.Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.ussers.updateMany({salario: {$gt: 4000}}, {$set: {apellidos: "Smith"}});
db.ussers.find({salario: {$gt: 4000}});


//--19.Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
db.ussers.updateMany({nombres: /^A/}, {$set: {correo: "nuevo@riwi.es"}});
db.ussers.find({nombres: /^A/});


//--20.Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
db.ussers.updateMany({altura: {$lt: 160}}, {$set: {ciudad: "París"}});
db.ussers.find({altura: {$lt: 160}});

db.ussers.insertMany([
    {
        "nombres": "Ana",
        "apellidos": "Martínez",
        "correo": "ana@example.com",
        "ciudad": "Barcelona",
        "país": "España",
        "salario": 42000,
        "edad": 32,
        "altura": 150,
        "peso": 140
    },
    {
        "nombres": "Michael",
        "apellidos": "Johnson",
        "correo": "michael@example.com",
        "ciudad": "Los Angeles",
        "país": "Estados Unidos",
        "salario": 55000,
        "edad": 40,
        "altura": 146,
        "peso": 180
    }
]);