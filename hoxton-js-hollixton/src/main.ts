import './style.css'
type Item = {
  id: number;
  type: string;
  name: string;
  image: string;
  price: number;
  discountedPrice?: number;
  dateEntered: string;
  stock: number;
}

type Account = {
  firstName: string;
  lastName: string;
  id: string;
  password: string;
  bag: never[];
}

type State = {
  store: Item[]
  users: Account[]
  page: 'Home' | 'Guys' | 'Girls' | 'Sale'
  section: 'Search' | 'Account' | 'Cart' | ''
  filter: string
}
let state: State = {
  store: [
    {
      "id": 1,
      "type": "Guys",
      "name": "Crewneck T-Shirt 3-Pack",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1",
      "price": 40,
      "discountedPrice": 21.99,
      "dateEntered": "2021/08/10",
      "stock": 10
    },
    {
      "id": 2,
      "type": "Girls",
      "name": "Smocked Tiered Mini Dress",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_359-1220-1911-805_prod1",
      "price": 29,
      "dateEntered": "2021/07/10",
      "stock": 5
    },
    {
      "id": 3,
      "type": "Girls",
      "name": "Gilly Hicks Cozy Joggers",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_346-1252-0485-116_prod1",
      "price": 27,
      "dateEntered": "2021/05/06",
      "stock": 15
    },
    {
      "id": 4,
      "type": "Guys",
      "name": "Gilly Hicks Go Energize 2-in-1 Running Short",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_346-1614-0521-900_prod1",
      "price": 29,
      "dateEntered": "2021/07/10",
      "stock": 20
    },
    {
      "id": 5,
      "type": "Guys",
      "name": "Gilly Hicks Woven Boxer",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_309-1408-0413-136_prod1",
      "price": 12,
      "dateEntered": "2021/07/10",
      "stock": 2
    },
    {
      "id": 6,
      "type": "Guys",
      "name": "Gilly Hicks Smiley Socks 2-Pack",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_354-1020-0010-900_prod1",
      "price": 14,
      "dateEntered": "2021/06/11",
      "stock": 1
    },
    {
      "id": 7,
      "type": "Guys",
      "name": "Stretch Poplin Slim Fit shirt",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_325-1072-0609-214_prod1",
      "price": 29,
      "discountedPrice": 20.3,
      "dateEntered": "2020/02/10",
      "stock": 13
    },
    {
      "id": 8,
      "type": "Guys",
      "name": "Must-Have Crewneck T-Shirt 5-Pack",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1072-0132-108_prod1",
      "price": 55,
      "discountedPrice": 34.99,
      "dateEntered": "2021/08/10",
      "stock": 12
    },
    {
      "id": 9,
      "type": "Guys",
      "name": "Print Logo Graphic Tee",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_323-1957-2978-908_prod1",
      "price": 25,
      "discountedPrice": 11.99,
      "dateEntered": "2021/04/10",
      "stock": 17
    },
    {
      "id": 10,
      "type": "Girls",
      "name": "Ultra High-Rise Dad Sweatpants",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_347-1074-0669-100_prod1",
      "price": 35,
      "discountedPrice": 14.99,
      "dateEntered": "2021/08/01",
      "stock": 6
    },
    {
      "id": 11,
      "type": "Girls",
      "name": "Crop Oversized Hoodie",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_352-3541-0604-100_prod1",
      "price": 35,
      "discountedPrice": 12.99,
      "dateEntered": "2021/08/01",
      "stock": 8
    },
    {
      "id": 12,
      "type": "Girls",
      "name": "Gilly Hicks Socks 2-Pack",
      "image": "https://img.hollisterco.com/is/image/anf/KIC_354-1013-0002-100_prod1",
      "price": 14,
      "discountedPrice": 5.99,
      "dateEntered": "2021/07/10",
      "stock": 10
    }
  ],
  users: [
    {
      "firstName": "Nicolas",
      "lastName": "Marcora",
      "id": "nicolas@email.com",
      "password": "nicolas",
      "bag": []
    },
    {
      "firstName": "Paola",
      "lastName": "Moreira",
      "id": "paola@email.com",
      "password": "paola",
      "bag": []
    }
  ],
  page: 'Home',
  section: '',
  filter: ''
}

function create_header() {
  let appEl = document.querySelector('#app')
  if (!appEl) return
  appEl.textContent = ''

  let headerEl = document.createElement('header')

  let leftpartEl = document.createElement('div')
  leftpartEl.className = 'leftpart'

  let h2El = document.createElement('h2')
  h2El.className = 'logo'
  h2El.textContent = 'Hollixton'


  let Girlspage = document.createElement('a')
  Girlspage.className = 'list_item'
  Girlspage.textContent = 'Girls'
  Girlspage.addEventListener('click', function () {
    state.page = 'Girls'
    render()
  })

  let Guyspage = document.createElement('a')
  Guyspage.className = 'list_item'
  Guyspage.textContent = 'Boys'
  Guyspage.addEventListener('click', function () {
    state.page = 'Guys'
    render()
  })

  let Salespage = document.createElement('a')
  Salespage.className = 'list_item'
  Salespage.textContent = 'Sales'
  Salespage.addEventListener('click', function () {
    state.page = 'Sale'
    render()
  })

  let rightpartEl = document.createElement('div')
  rightpartEl.className = 'rightpart'

  let Searchpart = document.createElement('a')
  Searchpart.className = 'list_item'

  let search_icon = document.createElement('img')
  search_icon.src = 'https://img.icons8.com/glyph-neue/2x/search.png'
  search_icon.alt = 'search'
  search_icon.addEventListener('click', function () {
    state.section = 'Search'
    render()
  })

  let Accountpart = document.createElement('a')
  Accountpart.className = 'list_item'

  let sign_in_icon = document.createElement('img')
  sign_in_icon.src = 'https://img.icons8.com/pastel-glyph/2x/person-male--v2.png'
  sign_in_icon.alt = 'Account'
  sign_in_icon.addEventListener('click', function () {
    state.section = 'Account'
    render
  })

  let Shoppingbag = document.createElement('a')
  Shoppingbag.className = 'list_item'

  let shopping_icon = document.createElement('img')
  shopping_icon.src = 'https://img.icons8.com/ios/2x/shopping-bag.png'
  shopping_icon.alt = 'Shopping'
  shopping_icon.addEventListener('click', function () {
    state.section = 'Cart'
    render()
  })

  Shoppingbag.append(shopping_icon)
  Accountpart.append(sign_in_icon)
  Searchpart.append(search_icon)
  rightpartEl.append(Shoppingbag, Accountpart, Searchpart)
  leftpartEl.append(h2El, Girlspage, Guyspage, Salespage)
  headerEl.append(leftpartEl, rightpartEl)
  appEl.append(headerEl)

}
create_header()

function create_name() {
  let appEl = document.querySelector('#app')

  let nameEl = document.createElement('div')
  nameEl.className = 'home_page'

  let homepage = document.createElement('h1')
  homepage.textContent = 'Home'
  homepage.addEventListener('click', function () {
    state.page = 'Home'
    render()
  })

  nameEl.append(homepage)
  appEl?.append(nameEl)

}

create_name()

function render_item() {
  let appEl = document.querySelector('#app')

  for (let item of state.store) {
    let mainEl = document.createElement('div')

    let divEl = document.createElement('div')
    divEl.className = 'items_in_store'


    let imgEl = document.createElement('img')
    imgEl.src = item.image
    imgEl.alt = 'item'

    let h3El = document.createElement('h3')
    h3El.textContent = item.name

    let h4El = document.createElement('h4')
    h4El.textContent = `£${item.price.toFixed(2)}`
    //`${item.price},${item.discountedPrice}` 

    divEl.append(imgEl, h3El, h4El)
    mainEl.append(divEl)
    appEl?.append(mainEl)
  }
}

function create_footer() {
  let appEl = document.querySelector('#app')

  let headerEl = document.createElement('header')
  headerEl.className = 'footer_header'

  let h2El = document.createElement('h2')
  h2El.textContent = 'Money is made to spend ;)'

  headerEl.append(h2El)
  appEl?.append(headerEl)
}




function render() {
  let appEl = document.querySelector('#app')
  if (!appEl) return
  render_item()
  create_footer()
}
render()


