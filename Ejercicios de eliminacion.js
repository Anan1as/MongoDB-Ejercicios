//--------------------------------------> Operaciones de Eliminaciones <--------------------------------------//
//--1.Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.ussers.deleteMany({salario: {$lt: 2000}});
db.ussers.find({salario: {$lt: 2000}});

db.ussers.insertMany([
    {
        "nombres": "María",
        "apellidos": "González",
        "correo": "maria@example.com",
        "ciudad": "Madrid",
        "país": "España",
        "salario": 1800,
        "edad": 28,
        "altura": 160,
        "peso": 130
    },
    {
        "nombres": "John",
        "apellidos": "Doe",
        "correo": "john@example.com",
        "ciudad": "New York",
        "país": "Estados Unidos",
        "salario": 1900,
        "edad": 35,
        "altura": 175,
        "peso": 150
    },
    {
        "nombres": "Laura",
        "apellidos": "Pérez",
        "correo": "laura@example.com",
        "ciudad": "Barcelona",
        "país": "España",
        "salario": 1700,
        "edad": 26,
        "altura": 165,
        "peso": 120
    },
    {
        "nombres": "David",
        "apellidos": "Smith",
        "correo": "david@example.com",
        "ciudad": "Chicago",
        "país": "Estados Unidos",
        "salario": 1950,
        "edad": 30,
        "altura": 180,
        "peso": 160
    }
]);                                


//--2.Eliminar usuarios que tienen una edad menor que 25 años.
db.ussers.deleteMany({edad: {$lt: 25}});
db.ussers.find({edad: {$lt: 25}});


//--3.Borrar todos los usuarios que viven en "París".
db.ussers.deleteMany({ciudad: "París"});
db.ussers.find({ciudad: "París"});


//--4.Eliminar usuarios que tienen un peso superior a 180 libras.
db.ussers.deleteMany({peso: {$gt: 180}});
db.ussers.find({peso: {$gt: 180}});


//--5.Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.ussers.deleteMany({altura: {$lt: 160}});
db.ussers.find({altura: {$lt: 160}});


//--6.Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.ussers.deleteMany({nombres: "John", apellidos: "Doe"});
db.ussers.find({nombres: "John", apellidos: "Doe"});


//--7.Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.ussers.deleteMany({correo: "nuevo_correo@riwi.io"});
db.ussers.find({correo: "nuevo_correo@riwi.io"});


//--8.Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.ussers.deleteMany({correo: {$exists: false}});
db.ussers.find({correo: {$exists: false}});

db.ussers.insertOne(
    {
        "nombres": "Carlos",
        "apellidos": "Martínez",
        "ciudad": "Bogotá",
        "país": "Colombia",
        "salario": 21000,
        "edad": 32,
        "altura": 175,
        "peso": 150
    }        
);


//--9.Eliminar usuarios que viven en "Tokyo".
db.ussers.deleteMany({ciudad: "Tokyo"});
db.ussers.find({ciudad: "Tokyo"});

db.ussers.insertOne(
    {
        "nombres": "Yuki",
        "apellidos": "Tanaka",
        "correo": "yuki.tanaka@example.com",
        "ciudad": "Tokyo",
        "país": "Japón",
        "salario": 28000,
        "edad": 28,
        "altura": 168,
        "peso": 60
    }        
);


//--10.Borrar todos los usuarios que son menores de 18 años.
db.ussers.deleteMany({edad: {$lt: 18}});
db.ussers.find({edad: {$lt: 18}});


//--11.Eliminar usuarios que tienen un salario igual a 0.
db.ussers.deleteMany({salario: 0});
db.ussers.find({salario: 0});


//--12.Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.ussers.deleteMany({ciudad: "New York", salario: {$gt: 5000}});
db.ussers.find({ciudad: "New York", salario: {$gt: 5000}});

db.ussers.insertOne(
    {
        "nombres": "Emily",
        "apellidos": "Johnson",
        "correo": "emily.johnson@example.com",
        "ciudad": "New York",
        "país": "Estados Unidos",
        "salario": 5500,
        "edad": 35,
        "altura": 165,
        "peso": 55
    }
);


//--13.Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.ussers.deleteMany({correo: /spam/});
db.ussers.find({correo: /spam/});

db.ussers.insertOne(
    {
        "nombres": "David",
        "apellidos": "Spammer",
        "correo": "david.spammer@example.com",
        "ciudad": "Los Angeles",
        "país": "Estados Unidos",
        "salario": 6000,
        "edad": 28,
        "altura": 175,
        "peso": 70
    }
);        


//--14.Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.ussers.deleteMany({ciudad: "Bello", edad: {$gt: 50}});
db.ussers.find({ciudad: "Bello", edad: {$gt: 50}});

db.ussers.insertOne(
    {
        "nombres": "Ana",
        "apellidos": "González",
        "correo": "ana.gonzalez@example.com",
        "ciudad": "Bello",
        "país": "Colombia",
        "salario": 4500,
        "edad": 55,
        "altura": 160,
        "peso": 65
    }
);        


//--15.Eliminar todos los usuarios que tienen el apellido "González".
db.ussers.deleteMany({apellidos: "González"});
db.ussers.find({apellidos: "González"});


//--16.Borrar usuarios que tienen una edad superior a 70 años.
db.ussers.deleteMany({edad: {$gt: 70}});
db.ussers.find({edad: {$gt: 70}});


//--17.Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.ussers.deleteMany({pais: "Canadá", salario: {$lt: 4000}});
db.ussers.find({pais: "Canadá", salario: {$lt: 4000}});


//--18.Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.ussers.deleteMany({salario: {$gte: 1000, $lte: 2000}});
db.ussers.find({salario: {$gte: 1000, $lte: 2000}});


//--19.Eliminar usuarios que tienen una edad igual a 30 años.
db.ussers.deleteMany({edad: 30});
db.ussers.find({edad: 30});


//--20.Borrar usuarios que tienen una altura superior a 190 centímetros.
db.ussers.deleteMany({altura: {$gt: 190}});
db.ussers.find({altura: {$gt: 190}});

db.ussers.insertOne(
    {
        "nombres": "Erik",
        "apellidos": "Larson",
        "correo": "erik.larson@example.com",
        "ciudad": "Chicago",
        "país": "Estados Unidos",
        "salario": 60000,
        "edad": 40,
        "altura": 195,
        "peso": 200
    }
);        