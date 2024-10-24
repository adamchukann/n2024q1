const arrayMusicInstruments = ['фортепиано', 'скрипка', 'гитара', 'цимбалы', 'треугольник', 'барабан']
for (let x = 0; x <= arrayMusicInstruments.length - 1; x++) {
    if (arrayMusicInstruments[x] === 'гитара') {
        console.log('в данном массиве есть гитара')
    }
}

console.log(arrayMusicInstruments.sort())