document.getElementById('btn').onclick = function(){

let adet = document.querySelector('#adet').value
let fiyat = document.querySelector('#fiyat').value
let yil = document.querySelector('#yil').value
let yazdir = document.querySelector('#yazdir')

let sonucGun = ((fiyat / 20) * adet)
let sonucYil = sonucGun * (yil * 365)

yazdir.innerHTML = `Günde Sigaraya ${sonucGun} lira veriyorsun. Bu Zamana Kadar Sigaraya ${sonucYil} tl Harcadın(Güncel fiyat ve enflasyon göz önünde bulundurulmuştur.)`

}

document.getElementById('btn2').onclick = function(){

    let adet = document.querySelector('#adet2').value
    let fiyat = document.querySelector('#fiyat2').value
    let dakika = document.querySelector('#dakika').value
    let yazdir = document.querySelector('#yazdir2')
    
    let sonuc = (((fiyat / 20) * adet) / 24) * dakika

    let saat = ((fiyat / 20) * adet) * 365
    
    yazdir.innerHTML = `${dakika} Saat Sigara İçmeyerek ${sonuc} tl Kara Geçtin. Bir Yıl Sigara İçmeyerek ${saat} tl Birikim Yapabilirsin`
    
    }

