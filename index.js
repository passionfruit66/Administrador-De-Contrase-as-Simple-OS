const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menú de opciones
console.log("\n--- Administrador de Contraseñas ---");
console.log("1. Guardar nueva contraseña");
console.log("2. Eliminar una contraseña");
console.log("3. Salir");

rl.question("Selecciona una opción (1-3): ", (opcion) => {
    if (opcion === "1") {
        // Guardar nueva contraseña
        rl.question("Escribe el nombre del archivo (ejemplo: discord): ", (nombreArchivo) => {
            rl.question("Ingresa tu correo electrónico: ", (correo) => {
                rl.question("Ingresa tu nombre de usuario: ", (usuario) => {
                    rl.question("Ahora escribe tu contraseña: ", (contraseña) => {
                        let contenido = `Correo: ${correo}\nUsuario: ${usuario}\nContraseña: ${contraseña}`;

                        fs.writeFile(`${nombreArchivo}.txt`, contenido, (err) => {
                            if (err) console.log("❌ Error al guardar.");
                            else console.log(`✅ Contraseña guardada en ${nombreArchivo}.txt`);
                            rl.close();
                        });
                    });
                });
            });
        });

    } else if (opcion === "2") {
        // Eliminar una contraseña
        rl.question("Escribe el nombre del archivo a eliminar: ", (nombreArchivo) => {
            fs.unlink(`${nombreArchivo}.txt`, (err) => {
                if (err) console.log("❌ Archivo no encontrado.");
                else console.log(`🗑️ Archivo ${nombreArchivo}.txt eliminado.`);
                rl.close();
            });
        });

    } else {
        console.log("👋 Saliendo...");
        rl.close();
    }
});
