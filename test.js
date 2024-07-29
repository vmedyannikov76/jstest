function mvStartCode() {

    function testFun() {
        // console.log('сработало наведение')
        if (!document.querySelector('[data-product-inv="0"]')) return
        const falsButton = document.querySelector('#rec778329355 a')//фальшивая ссылка в скрытой кнопке
        const productName = document.querySelector('[data-product-inv="0"] .t-store__prod-popup__title-wrapper .js-store-prod-name')//наименование продукта
        const variants = document.querySelectorAll('[data-product-inv="0"] input')//все инпуты
        const price = document.querySelector('[data-product-inv="0"] [data-product-price-def-str]')//стоимость
        const fotoProduct = document.querySelector('[data-product-inv="0"] [data-slide-bullet-for="1"] .t-bgimg')//первое фото из всех
        // const fotoProductMobile = document.querySelectorAll('[data-product-inv="0"] [data-original]')[1]//первое фото из всех (мобильная версия)
        let variant;
        for (let i = 0; i < variants.length; i++) {
            if (variants[i].checked) {
                variant = `${variants[i].name}: ${variants[i].value} `
                console.log(variant)
                break
            }
            
        }
        falsButton.href = `#order:${productName.textContent} __ ${variant}(предзаказ)=${price.dataset.productPriceDefStr}:::image=${fotoProduct.dataset.original }`
    }




    function butFun() {
        const falsButton = document.querySelector('#rec778329355 a')//фальшивая ссылка
        falsButton.click()
    }

    function createPredZakaz() {
        const button = document.querySelector('[data-product-inv="0"] .t-store__prod-popup__btn-wrapper')//кнопки предзаказ
        button.addEventListener('mouseover', testFun)
        button.addEventListener('click', butFun)
        button.addEventListener('click', () => {
            // console.log('клик мобилка')
            testFun()
        })
    }

    // #rec778329355
    let status = true;
    let startCode = setInterval(() => {
        if (!document.querySelector('[data-product-inv="0"] [href="#order"]')) {
            // console.log('ищем кнопку')
            status = true
            return
        }

        if (status === false) return;
        // console.log('нашли')

        createPredZakaz()
        status = false
        // clearInterval(startCode)
    }, 800)

}

document.addEventListener('DOMContentLoaded', () => {
    console.log('сработка')
    mvStartCode();
})



function addNalog() {//альтернатива дополнительной кнопке
    const product = {
      name: "Налог 6%",
      amount: 5000,
      price: 5000,
      img: "https://pluspng.com/img-png/taxes-icon-256.png",
      options:  getProductPredzakaz()
    };

    tcart__addProduct(product);
    // tcart.products.push(product);
    // tcart__saveLocalObj()
    // tcart__reDrawProducts()
    tcart__updateTotalProductsinCartObj();
    tcart__reDrawCartIcon();
    tcart__reDrawTotal();
    tcart__saveLocalObj();
    tcart__reDrawProducts()
  }


  function getProductPredzakaz(){
    const variants = document.querySelectorAll('[data-product-inv="0"] input')//все инпуты
    const select = document.querySelectorAll('.t-container .js-product-controls-wrapper select')[1]
    const data = [
        { option: "Предзаказ", variant: "Срок изготовления 14 дней", price: 0 },
    ]
        for (let i = 0; i < variants.length; i++) {
            let svod = {}
            if (variants[i].checked) {
                variant = `${variants[i].name}: ${variants[i].value} `
                svod.option = variants[i].name;
                svod.variant = variants[i].value;
                svod.price = 0;
                data.unshift(svod)
                break
            }            
        }
    const selected = document.querySelector(`[value="${select.value}"]`)
    const selOpt = {}
    selOpt.option = selected.parentElement.parentElement.parentElement.querySelector('.js-product-option-name').textContent

    selOpt.variant = selected.value;
    selOpt.price = parseFloat(selected.dataset.productVariantPrice)|| 0;
    data.unshift(selOpt)

    console.log(data);
return data

  }
//   getProductPredzakaz()
  addNalog()