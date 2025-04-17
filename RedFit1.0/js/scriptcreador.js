// 1. Leer del portapapeles
// Para leer del portapapeles, puedes usar el método readText() del objeto navigator.clipboard. Este método devuelve una promesa que resuelve con el texto del portapapeles.

navigator.clipboard.readText()
  .then(text => {
    console.log('Texto del portapapeles:', text)
  })
  .catch(err => {
    console.error('Error al leer del portapapeles:', err)
  })
//Copy
//También puedes usar async/await para leer del portapapeles:

try {
  const text = await navigator.clipboard.readText()
  console.log('Texto del portapapeles:', text)
} catch (err) {
  console.error('Error al leer del portapapeles:', err)
}
//Copy
//Pero imagina que tienes algo diferente en el portapapeles, como una imagen. En ese caso, el método readText() fallará. Para evitar esto, puedes usar el método read() del objeto navigator.clipboard que devuelve una promesa que resuelve con un objeto ClipboardItem que contiene los datos del portapapeles.

navigator.clipboard.read()
  .then(data => {
    // iteramos sobre los datos del portapapeles
    for (const item of data) {
      // si el tipo de datos es texto plano
      if (item.type === 'text/plain') {
        item.getAsString(text => {
          console.log('Texto del portapapeles:', text)
        })
      }
      // si es una imagen, entonces la mostramos
      else if (item.type === 'image/png') {
        const blob = await item.getType('image/png')
        const img = new Image()
        img.src = URL.createObjectURL(blob)
        document.body.appendChild(img)
      }
    }
  })
  .catch(err => {
    console.error('Error al leer del portapapeles:', err)
  })
//Copy
//2. Escribir al portapapeles
//Para escribir al portapapeles texto, puedes usar el método writeText() del objeto navigator.clipboard. Este método devuelve una promesa que resuelve cuando el texto se ha copiado al portapapeles.

navigator.clipboard.writeText('Hola mundo')
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
//Copy
//También puedes usar async/await para escribir al portapapeles:

try {
  await navigator.clipboard.writeText('Hola mundo')
  console.log('Texto copiado al portapapeles')
} catch (err) {
  console.error('Error al copiar al portapapeles:', err)
}
//Copy
//Pero imagina que quieres copiar una imagen al portapapeles. En ese caso, puedes usar el método write() del objeto navigator.clipboard que devuelve una promesa que resuelve cuando los datos se han copiado al portapapeles.

const img = document.querySelector('img')
const blob = await fetch(img.src).then(r => r.blob())
const item = new ClipboardItem({ 'image/png': blob })

navigator.clipboard.write([item])
  .then(() => {
    console.log('Imagen copiada al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
//Copy
//Como ves, en el ejemplo usamos la clase ClipboardItem para crear un objeto que contiene los datos que queremos copiar al portapapeles. Este objeto se pasa al método write() del objeto navigator.clipboard.

//Ten en cuenta que no puedes guardar cualquier cosa en el portapapeles. Por ejemplo, no puedes guardar un objeto File o Blob directamente. En su lugar, debes crear un objeto ClipboardItem que contenga los datos que quieres copiar al portapapeles.




