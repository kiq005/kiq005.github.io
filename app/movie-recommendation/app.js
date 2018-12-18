// TODO:
// [ ] - MASI distance, from scikit source


window.onload = function(){
  // Get movie data
  fetch("movies_data.json")
    .then( data => data.json())
    .then( data => cook_movies(data))
  // Get token data

}

let g_data = null
let m_a = -1
let m_b = -1
let a_btn_list = []
let b_btn_list = []

function cook_movies(data){
  // Save data
  g_data = data
  // Create movie list
  let ul = document.createElement("UL")
  ul.className = "p-0 m-0"
  ul.style.height = "400px"
  ul.style.overflow = "auto"
  for(let movie in data){
    // Create Element
    let li = document.createElement("LI")
    let name = document.createElement("SPAN")
    let btn_a = document.createElement("BUTTON")
    let btn_b = document.createElement("BUTTON")
    // Style
    li.className = "list-group-item list-group-item-dark d-flex align-items-center"
    name.className = "flex-grow-1"
    btn_a.className = "btn btn-primary ml-1"
    btn_b.className = "btn btn-primary ml-1"
    // text
    name.innerText = data[movie]['name']
    btn_a.innerText = "A"
    btn_b.innerText = "B"
    // Data
    btn_a.dataset.movie_idx = movie
    btn_b.dataset.movie_idx = movie
    // Actions
    btn_a.onclick = () => {set_movie('A', movie);btn_a.className = "btn btn-success ml-1"}
    btn_b.onclick = () => {set_movie('B', movie);btn_b.className = "btn btn-success ml-1"}
    // list
    a_btn_list.push(btn_a)
    b_btn_list.push(btn_b)
    // Append
    li.appendChild(name)
    li.appendChild(btn_a)
    li.appendChild(btn_b)
    ul.appendChild(li)
  }
  // Update List
  document.getElementById('movie-list-sim').innerHTML = ""
  document.getElementById('movie-list-sim').appendChild(ul)
  // Movie filter
  let mf = document.getElementById('movie-search')
  let last_size = mf.value.length
  mf.onkeyup = (e) => {
    if(mf.value.size != last_size){
      last_size = mf.value.length
      filter_movie()
    }
  }
}

function filter_movie(){
  let loader = document.getElementById('movie-loader')
  let value = document.getElementById('movie-search').value.toLowerCase()
  let ul = document.getElementById('movie-list-sim').childNodes[0]
  let li = ul.getElementsByTagName('li')
  // Iterate
  loader.className = "gray_bg d-flex align-items-center justify-content-center w-100";
  for(let i = 0; i < li.length; i++){
    let el = li[i]
    if(el.childNodes[0].innerText.toLowerCase().indexOf(value) > -1){
      //el.style.display = "";
      el.className = "list-group-item list-group-item-dark d-flex align-items-center";
    }else{
      //el.style.display = "none";
      el.className = "d-none";
    }
  }
  window.setTimeout(()=>{
    loader.className = "d-none";
  }, 200)
}

function set_movie(holder, movie_idx){
  // Get movie title and description holders
  let m_holder
  if(holder == 'A'){
    m_holder = document.getElementById('movie_holder_a')
    m_a = movie_idx
    for(let btn of a_btn_list){
      btn.className = "btn btn-primary ml-1"
    }
  }else if (holder == 'B') {
    m_holder = document.getElementById('movie_holder_b')
    m_b = movie_idx
    for(let btn of b_btn_list){
      btn.className = "btn btn-primary ml-1"
    }
  }else{
    console.error("Unknow movie holder")
    return
  }
  let m_title = m_holder.childNodes[1]
  let m_desc  = m_holder.childNodes[3]
  // Update values
  m_title.innerText = g_data[movie_idx]['name']
  m_desc.innerText = g_data[movie_idx]['overview']
  // Check distance
  if(m_a > -1 && m_b > -1){
    check_distances()
  }
}

const stop_words = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]

function check_distances(){
  let a = remove_stop_words(get_tokens(g_data[m_a]['overview']))
  let b =  remove_stop_words(get_tokens(g_data[m_b]['overview']))
  // Bigrams
  // TODO: JS set implementation has some problems dealing with objects. A workaround was done just by concatenating two strings, but the right way of doing whis would be to create a custom set to the bigram comparison.
  let a_big = new Set()
  for(i = 1; i < a.length; i++){
    a_big.add( (a[i-1]+a[i]) )
  }
  let b_big = new Set()
  for(i = 1; i < b.length; i++){
    b_big.add( (b[i-1]+b[i]) )
  }
  let tet = a_big[0]
  a = new Set(a)
  b = new Set(b)
  // extra
  let aIb = intersection(a, b).size
  let aUb = union(a, b).size
  let aIb_big = intersection(a_big, b_big).size
  let aUb_big = union(a_big, b_big).size
  // Distances
  let jaccard = aIb/aUb
  let dice = 2*aIb/(a.size+b.size) // f1 = 2j/(1+j)
  let jaccard_big = aIb_big/aUb_big
  let dice_big = 2*aIb_big/(a_big.size+b_big.size)
  // Display
  let md = document.getElementById('movie_data')
  md.innerHTML = ""
  md.appendChild(info_btn('Jaccard', jaccard))
  md.appendChild(info_btn('Dice', dice))
  md.appendChild(info_btn('B. Jaccard', jaccard_big))
  md.appendChild(info_btn('B. Dice', dice_big))
}

function info_btn(btn_text, btn_value){
  let btn = document.createElement('BUTTON')
  btn.className = "btn btn-primary mr-2"
  btn.innerText = btn_text
  let spn = document.createElement('SPAN')
  spn.className = "badge badge-light ml-2"
  spn.innerText = (btn_value*100).toFixed(2) + "%"
  btn.appendChild(spn)
  return btn
}

function get_tokens(text){
  return text.match(/[-'a-zA-ZÀ-ÖØ-öø-ÿ]+/g)
}

function remove_stop_words(word_list){
  let wl = []
  for(let word of word_list){
    if( !stop_words.includes( word.toLowerCase() ) ){
      wl.push(word.toLowerCase())
    }
  }
  return wl
}

function union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}
